export function rankOptions(options, criteria) {
  if (!Array.isArray(options) || !options.length || !Array.isArray(criteria) || !criteria.length || options.some(o=>!o||typeof o.id!=='string') || new Set(options.map(o=>o.id)).size!==options.length || criteria.some(c=>!c||!Number.isInteger(c.weight)||c.weight<0||c.weight>5||!c.ratings||typeof c.ratings!=='object')) return {ready:false,reason:'Use unique options and numeric whole-number weights from 0 to 5.',rows:[]};
  const active = criteria.filter(c => c.weight > 0);
  const eligible = options.filter(o => !o.blocked);
  const unknown = eligible.some(o => active.some(c => !Number.isInteger(c.ratings[o.id]) || c.ratings[o.id] < 1 || c.ratings[o.id] > 5));
  const totalWeight = active.reduce((s, c) => s + c.weight, 0);
  if (!eligible.length || !totalWeight || unknown) return {ready:false,reason:!eligible.length?'No option meets the must-haves.':!totalWeight?'Give at least one criterion a positive weight.':'Rate every eligible option on each weighted criterion before comparing.',rows:[]};
  const rows = eligible.map(o => ({id:o.id,label:o.label || 'Unnamed option',score:active.reduce((s,c)=>s+c.weight*c.ratings[o.id],0)/totalWeight})).sort((a,b)=>b.score-a.score || a.id.localeCompare(b.id));
  const winners = rows.filter(r=>Math.abs(r.score-rows[0].score)<1e-8).map(r=>r.id);
  return {ready:true,rows,winners,totalWeight};
}
export function sensitivity(options, criteria) {
  const base=rankOptions(options,criteria);
  if(!base.ready) return {checks:0,changes:[]};
  const changes=[];let checks=0;
  for(let i=0;i<criteria.length;i++) for(const delta of [-1,1]) {
    const weight=criteria[i].weight+delta;
    if(weight<0||weight>5)continue;
    const changed=criteria.map((c,j)=>({...c,weight:i===j?weight:c.weight}));
    const next=rankOptions(options,changed);if(!next.ready)continue;checks++;
    if([...next.winners].sort().join()!==[...base.winners].sort().join())changes.push({criterion:criteria[i].label,weight,winners:next.rows.filter(r=>next.winners.includes(r.id)).map(r=>r.label)});
  }
  return {checks,changes};
}
