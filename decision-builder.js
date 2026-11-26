const encoder=new TextEncoder();
const clean=value=>String(value??'').replace(/\r\n?/g,'\n').trim();
const size=value=>encoder.encode(value).length;
const lines=value=>clean(value).split('\n').map(clean).filter(Boolean);
const validUrl=value=>{try{const u=new URL(value);return ['https:','http:'].includes(u.protocol)&&!u.username&&!u.password;}catch{return false;}};

export function makeBrief(input){
  const plan=clean(input.plan),assumptions=clean(input.assumptions),sourceText=clean(input.sourceText),sourceTitle=clean(input.sourceTitle),sourceUrl=clean(input.sourceUrl);
  return {version:1,kind:'decision',template:'challenge',question:plan+(assumptions?`\n\nAssumptions to challenge:\n${assumptions}`:''),options:[],constraints:lines(input.mustHaves).map((text,i)=>({id:`C${i+1}`,text})),successCriteria:lines(input.criteria).map((text,i)=>({id:`K${i+1}`,text})),references:sourceText?[{id:'S1',title:sourceTitle||'User-supplied source notes',text:sourceText,...(sourceUrl?{url:sourceUrl}:{})}]:[]};
}
export function inspectBrief(input){
  const brief=makeBrief(input),errors=[];
  if(!clean(input.plan))errors.push('Add the plan and question before exporting.');
  if(size(brief.question)>6000)errors.push('The plan and assumptions exceed 6,000 UTF-8 bytes.');
  if(brief.constraints.length>8)errors.push('Use at most 8 must-haves, one per line.');
  if(brief.constraints.some(x=>size(x.text)>400))errors.push('A must-have exceeds 400 UTF-8 bytes.');
  if(brief.successCriteria.length>8)errors.push('Use at most 8 success criteria, one per line.');
  if(brief.successCriteria.some(x=>size(x.text)>400))errors.push('A success criterion exceeds 400 UTF-8 bytes.');
  if(clean(input.sourceTitle).length>100)errors.push('The source title exceeds 100 characters.');
  if((clean(input.sourceTitle)||clean(input.sourceUrl))&&!clean(input.sourceText))errors.push('Add the source excerpt, or clear its title and link.');
  if(size(clean(input.sourceText))>1000)errors.push('The source excerpt exceeds 1,000 UTF-8 bytes.');
  if(clean(input.sourceUrl)&&(!validUrl(clean(input.sourceUrl))||size(clean(input.sourceUrl))>1024))errors.push('Use an HTTP(S) source link without credentials, up to 1,024 UTF-8 bytes.');
  const total=size(JSON.stringify(brief));if(total>6000)errors.push('The complete brief exceeds 6,000 bytes. Shorten it before exporting; no text has been removed.');
  for(const value of Object.values(input))if(typeof value==='string'&&typeof value.isWellFormed==='function'&&!value.isWellFormed()){errors.push('A field contains malformed text. Remove that character before exporting.');break;}
  const fields=[{label:'Plan and question',filled:!!clean(input.plan),required:true},{label:'Assumptions to challenge',filled:!!clean(input.assumptions)},{label:'Must-haves and constraints',filled:brief.constraints.length>0},{label:'Success criteria',filled:brief.successCriteria.length>0},{label:'Supplied source notes',filled:brief.references.length>0}];
  return {brief,errors,total,fields,filled:fields.filter(f=>f.filled).length,valid:errors.length===0};
}
export function readableBrief(input){const inspected=inspectBrief(input);return ['# DEESC review brief',`Exported ${new Date().toISOString()}`,'Prepared in the browser. No AI review, source verification, or quality assessment has been performed.','## Plan and question',clean(input.plan)||'Not supplied','## Assumptions to challenge',clean(input.assumptions)||'Not supplied','## Must-haves and constraints',...((inspected.brief.constraints.length?inspected.brief.constraints.map(x=>`- ${x.text}`):['Not supplied'])),'## Success criteria',...((inspected.brief.successCriteria.length?inspected.brief.successCriteria.map(x=>`- ${x.text}`):['Not supplied'])),'## Supplied source notes',...(inspected.brief.references.length?inspected.brief.references.flatMap(r=>[`### ${r.title}`,r.text,...(r.url?[r.url]:[])]):['Not supplied']),'## Format check',`${inspected.filled} of 5 sections filled. ${inspected.total} of 6,000 allowed UTF-8 bytes in the importable brief. Filled fields do not establish the quality of the plan.`,...inspected.errors.map(e=>`- ${e}`)].join('\n\n');}

if(typeof document!=='undefined'){
  const $=id=>document.getElementById(id),fields={plan:'builder-plan',assumptions:'builder-assumptions',mustHaves:'builder-must-haves',criteria:'builder-success',sourceTitle:'builder-source-title',sourceText:'builder-source-text',sourceUrl:'builder-source-url'};
  const node=(tag,text,cls)=>{const e=document.createElement(tag);if(text!==undefined)e.textContent=text;if(cls)e.className=cls;return e;};
  const read=()=>Object.fromEntries(Object.entries(fields).map(([key,id])=>[key,$(id).value]));let dirty=false;
  const notify=text=>{$('builder-message').textContent=text;};
  function refresh(){const result=inspectBrief(read());$('builder-field-count').textContent=`${result.filled} of 5 sections filled`;$('builder-bytes').textContent=`${result.total.toLocaleString()} / 6,000 bytes`;$('builder-budget').value=Math.min(result.total,6000);$('builder-budget').classList.toggle('over-budget',result.total>6000);const list=document.createDocumentFragment();for(const field of result.fields){const li=node('li',undefined,field.filled?'filled':'empty');li.append(node('span',field.label),node('strong',field.filled?'Added':field.required?'Required':'Not added'));list.append(li);}$('builder-checklist').replaceChildren(list);$('builder-format-status').textContent=result.valid?'Brief format is valid for import.':clean(read().plan)?'Check the field limits below.':'Start with the plan and question.';$('builder-format-status').classList.toggle('invalid',!result.valid&&!!clean(read().plan));$('builder-errors').hidden=!result.errors.length||!clean(read().plan);$('builder-errors').replaceChildren(...result.errors.map(e=>node('li',e)));$('builder-export-md').disabled=!result.valid;$('builder-export-json').disabled=!result.valid;return result;}
  function fill(input){for(const [key,id] of Object.entries(fields))$(id).value=input[key]||'';refresh();}
  function download(name,text,type){const url=URL.createObjectURL(new Blob([text],{type:`${type};charset=utf-8`})),a=node('a');a.href=url;a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),2000);}
  for(const id of Object.values(fields))$(id).addEventListener('input',()=>{dirty=true;$('builder-origin').textContent='Your edited brief · export to keep it';notify('');refresh();});
  $('builder-form').addEventListener('submit',e=>e.preventDefault());
  $('builder-export-json').addEventListener('click',()=>{const r=refresh();if(!r.valid)return notify(r.errors[0]);download('deesc-decision-brief.json',JSON.stringify({format:'deesc-decision-brief',version:1,brief:r.brief},null,2),'application/json');notify('Brief downloaded. Import is available in the owner-only AI workspace beta; no AI call was made.');});
  $('builder-export-md').addEventListener('click',()=>{const r=refresh();if(!r.valid)return notify(r.errors[0]);download('deesc-review-brief.md',readableBrief(read()),'text/markdown');notify('Readable brief downloaded. Share it with a reviewer or keep it with the project.');});
  $('builder-clear').addEventListener('click',()=>{if(dirty&&!confirm('Clear this brief? Export first if you want to keep it.'))return;fill({});dirty=false;$('builder-origin').textContent='Your brief · export to keep it';notify('Blank brief ready.');$('builder-plan').focus();});
  $('builder-example').addEventListener('click',()=>{if(dirty&&!confirm('Replace this brief with fictional example inputs? Export first to keep your work.'))return;fill({plan:'A small workshop needs prototype printing within two weeks. The current plan is to repair the existing printer instead of buying a replacement. What should be checked before committing to the repair?',assumptions:'The failed part is the only cause of unreliable printing.\nThe replacement part will arrive within one week.\nThe repair will last long enough to complete the next prototype build.',mustHaves:'Working capacity within 14 days\nUpfront spending at most $1,500',criteria:'Consistent prints across a full working day\nRepair and verification fit within the available technician time'});dirty=false;$('builder-origin').textContent='Fictional example inputs · no AI-generated review';notify('Example loaded. The blank source field is intentional: no real supplier evidence has been provided.');});
  function activate(which,focus=false){const builder=which==='builder';$('brief-builder').hidden=!builder;$('canvas').hidden=builder;for(const [id,selected] of [['brief-builder-tab',builder],['decision-matrix-tab',!builder]]){$(id).setAttribute('aria-selected',String(selected));$(id).tabIndex=selected?0:-1;if(focus&&selected)$(id).focus();}}
  for(const [id,which] of [['brief-builder-tab','builder'],['decision-matrix-tab','matrix']]){$(id).addEventListener('click',()=>activate(which));$(id).addEventListener('keydown',e=>{if(['ArrowLeft','ArrowRight','Home','End'].includes(e.key)){e.preventDefault();activate(e.key==='Home'?'builder':e.key==='End'?'matrix':which==='builder'?'matrix':'builder',true);}});}
  for(const a of document.querySelectorAll('a[href="#brief-builder"],a[href="#canvas"]'))a.addEventListener('click',()=>activate(a.getAttribute('href')==='#canvas'?'matrix':'builder'));
  if(location.hash==='#canvas')activate('matrix');else activate('builder');refresh();
}
