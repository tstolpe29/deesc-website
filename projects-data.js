window.DEESC_PROJECTS = [
  {
    "id": "low-power-haptic-reminder",
    "number": "02",
    "category": "Built for People",
    "title": "Haptic Reminder",
    "subtitle": "A pocket-sized rechargeable device that gives a gentle vibration reminder every ten minutes.",
    "hero": "IMG_2054.jpeg",
    "tags": [
      "STM32",
      "Low Power",
      "LiPo / USB-C",
      "PCB + Enclosure"
    ],
    "status": "Delivered client prototype",
    "overview": "A nonprofit wellness client needed a small, simple way to give regular tactile reminders. I built a roughly 1 × 2 inch device that combines the electronics, battery, vibration motor, controls and enclosure in one rechargeable package.",
    "engineering": [
      "A quiet reminder — an STM32 microcontroller keeps time and briefly drives the vibration motor every ten minutes.",
      "Power-conscious firmware — the controller sleeps between reminders to reduce energy use while the device is idle.",
      "Rechargeable hardware — USB-C charging and a single-cell battery make it convenient to recharge.",
      "Designed as one object — the board and 3D-printed enclosure were developed together around the battery, motor, charging port and controls."
    ],
    "focus": "The important tradeoff was between a noticeable vibration, a small enclosure and low standby power. The device was designed toward a week-plus battery-life target, rather than daily charging.",
    "gallery": [
      {
        "src": "assets/projects/low-power-haptic-reminder/01.jpeg",
        "caption": "Finished haptic reminder prototype - front controls",
        "original": "IMG_2054.jpeg"
      },
      {
        "src": "assets/projects/low-power-haptic-reminder/02.jpeg",
        "caption": "Finished haptic reminder prototype - USB-C charging side",
        "original": "IMG_2055.jpeg"
      },
      {
        "src": "assets/projects/low-power-haptic-reminder/03.png",
        "caption": "USB-C charging, power, MCU, battery sensing and motor-driver schematic",
        "original": "Screenshot 2026-08-07 201355.png"
      },
      {
        "src": "assets/projects/low-power-haptic-reminder/04.png",
        "caption": "PCB routing and copper layout",
        "original": "Screenshot 2026-08-07 201715.png"
      },
      {
        "src": "assets/projects/low-power-haptic-reminder/05.png",
        "caption": "3D PCB assembly rendering",
        "original": "Screenshot 2026-08-07 201729.png"
      },
      {
        "src": "assets/projects/low-power-haptic-reminder/06.png",
        "caption": "Compact enclosure CAD rendering",
        "original": "Screenshot 2026-08-07 202019.png"
      }
    ],
    "heroImage": "photo-haptic.webp",
    "documents": [],
    "prev": "modular-bldc-senior-project",
    "next": "edge-detection-camera",
    "group": "people",
    "facts": [
      [
        "Footprint",
        "About 1 × 2 inches"
      ],
      [
        "Reminder",
        "Every 10 minutes"
      ],
      [
        "Charging",
        "USB-C"
      ]
    ],
    "outcome": "A complete client prototype was delivered. Week-plus battery life was a design target, not a published endurance-test result."
  },
  {
    "id": "edge-detection-camera",
    "number": "02",
    "category": "Other Projects",
    "title": "Edge-Detection Camera",
    "subtitle": "A camera that highlights outlines in an image and shows the result on its own screen.",
    "hero": "IMG_2059.jpeg",
    "tags": [
      "Custom PCB + enclosure",
      "ESP32 + FPGA"
    ],
    "status": "Delivered client prototype",
    "overview": "An ESP32 manages the camera and display while an FPGA handles the image filtering. The prototype combines both on a custom PCB in a standalone enclosure.",
    "engineering": [],
    "focus": "",
    "gallery": [
      {
        "src": "assets/projects/edge-detection-camera/01.jpeg",
        "caption": "Standalone edge-detection camera prototype",
        "original": "IMG_2057.jpeg"
      },
      {
        "src": "assets/projects/edge-detection-camera/02.jpeg",
        "caption": "Prototype displaying the source image",
        "original": "IMG_2058.jpeg"
      },
      {
        "src": "assets/projects/edge-detection-camera/03.jpeg",
        "caption": "Hardware edge-detection result displayed on-device",
        "original": "IMG_2059.jpeg"
      },
      {
        "src": "assets/projects/edge-detection-camera/05.png",
        "caption": "High-density ESP32/FPGA PCB layout",
        "original": "Screenshot 2026-08-07 202420.png"
      },
      {
        "src": "assets/projects/edge-detection-camera/06.png",
        "caption": "3D PCB assembly rendering",
        "original": "Screenshot 2026-08-07 202437.png"
      },
      {
        "src": "assets/projects/edge-detection-camera/07.png",
        "caption": "Additional edge-detection output test",
        "original": "Screenshot 2026-08-07 203054.png"
      }
    ],
    "heroImage": "assets/projects/edge-detection-camera/hero-cover.png",
    "documents": [
      {
        "label": "Edge_Detection_Schematic.pdf",
        "href": "assets/docs/edge-detection-camera--Edge_Detection_Schematic.pdf"
      }
    ],
    "prev": "low-power-haptic-reminder",
    "next": "low-current-continuity-checker",
    "group": "other",
    "outcome": ""
  },
  {
    "id": "low-current-continuity-checker",
    "number": "03",
    "category": "Other Projects",
    "title": "Low-Current Continuity Tester",
    "subtitle": "A small tester that beeps when a circuit is connected, using very little test current.",
    "hero": "IMG_2060.jpeg",
    "tags": [
      "Analog sensing",
      "Teaching hardware"
    ],
    "status": "Client design for ~200 units",
    "overview": "Designed for a university teaching batch, it uses common through-hole parts that are easy to assemble by hand.",
    "engineering": [],
    "focus": "",
    "gallery": [
      {
        "src": "assets/projects/low-current-continuity-checker/01.jpeg",
        "caption": "Finished continuity checker - banana-jack test interface",
        "original": "IMG_2060.jpeg"
      },
      {
        "src": "assets/projects/low-current-continuity-checker/02.jpeg",
        "caption": "Finished continuity checker - power and status side",
        "original": "IMG_2062.jpeg"
      },
      {
        "src": "assets/projects/low-current-continuity-checker/03.png",
        "caption": "3D PCB assembly rendering optimized for through-hole assembly",
        "original": "Screenshot 2026-08-07 203431.png"
      },
      {
        "src": "assets/projects/low-current-continuity-checker/04.png",
        "caption": "Two-layer PCB routing and copper layout",
        "original": "Screenshot 2026-08-07 203510.png"
      },
      {
        "src": "assets/projects/low-current-continuity-checker/05.png",
        "caption": "Microamp-scale NPN current-mirror sensing stage",
        "original": "Screenshot 2026-08-07 204642.png"
      },
      {
        "src": "assets/projects/low-current-continuity-checker/06.png",
        "caption": "555 oscillator and transistor-gated piezo output stage",
        "original": "Screenshot 2026-08-07 204710.png"
      }
    ],
    "heroImage": "assets/projects/low-current-continuity-checker/01.jpeg",
    "documents": [],
    "prev": "edge-detection-camera",
    "next": "dual-gym-timer",
    "group": "other",
    "outcome": ""
  },
  {
    "id": "dual-gym-timer",
    "number": "04",
    "category": "Other Projects",
    "title": "Two-Person Gym Timer",
    "subtitle": "Two independent rest timers, built into a squat rack.",
    "hero": "gym timer installed.jpeg",
    "tags": [
      "Embedded timing",
      "Custom enclosure"
    ],
    "status": "Installed client hardware",
    "overview": "Each person gets a start button and a two-minute countdown with light and sound cues. A rechargeable battery and custom enclosure keep it out of the way.",
    "engineering": [],
    "focus": "",
    "gallery": [
      {
        "src": "assets/projects/dual-gym-timer/01.jpeg",
        "caption": "Assembled timer PCB before enclosure installation",
        "original": "Gym timer bare board.jpeg"
      },
      {
        "src": "assets/projects/dual-gym-timer/02.png",
        "caption": "Custom squat-rack enclosure CAD",
        "original": "gym timer housing CAD.png"
      },
      {
        "src": "assets/projects/dual-gym-timer/03.jpeg",
        "caption": "Installed dual timer in the client's garage gym",
        "original": "gym timer installed.jpeg"
      },
      {
        "src": "assets/projects/dual-gym-timer/04.png",
        "caption": "3D PCB assembly rendering",
        "original": "gym_timer pcb.png"
      },
      {
        "src": "assets/projects/dual-gym-timer/05.png",
        "caption": "Rechargeable dual-timer schematic with ATTiny84 control",
        "original": "gym_timer_sch.png"
      },
      {
        "src": "assets/projects/dual-gym-timer/06.png",
        "caption": "PCB routing and copper layout",
        "original": "gymtimer_layers.png"
      }
    ],
    "heroImage": "assets/projects/dual-gym-timer/03.jpeg",
    "documents": [],
    "prev": "low-current-continuity-checker",
    "next": "dmm-buffer",
    "group": "other",
    "outcome": ""
  },
  {
    "id": "dmm-buffer",
    "number": "05",
    "category": "Other Projects",
    "title": "Multimeter Input Buffer",
    "subtitle": "A small board that helps a meter measure a circuit without changing the reading.",
    "hero": "dmm buffer irl.jpeg",
    "tags": [
      "Analog electronics",
      "Measurement"
    ],
    "status": "University teaching hardware",
    "overview": "Two buffer channels separate the meter from the circuit being measured. It was built as teaching hardware to demonstrate how instruments can affect sensitive circuits.",
    "engineering": [],
    "focus": "",
    "gallery": [
      {
        "src": "assets/projects/dmm-buffer/01.jpeg",
        "caption": "Finished two-channel DMM buffer PCB",
        "original": "dmm buffer irl.jpeg"
      },
      {
        "src": "assets/projects/dmm-buffer/02.png",
        "caption": "Compact two-channel board routing",
        "original": "dmm buffer layers.png"
      },
      {
        "src": "assets/projects/dmm-buffer/03.png",
        "caption": "3D PCB assembly rendering",
        "original": "dmm buffer pcb altium.png"
      },
      {
        "src": "assets/projects/dmm-buffer/04.png",
        "caption": "Dual OPA2134 unity-gain buffer schematic",
        "original": "dmm buffer sch.png"
      }
    ],
    "heroImage": "assets/projects/dmm-buffer/01.jpeg",
    "documents": [],
    "prev": "dual-gym-timer",
    "next": "modular-drone-platform",
    "group": "other",
    "outcome": ""
  },
  {
    "id": "modular-drone-platform",
    "number": "01",
    "category": "Selected Work",
    "title": "Modular Drone Platform",
    "subtitle": "A custom drone electronics system, from flight control and power distribution to motor drives and communications.",
    "hero": "assy img 1.jpeg",
    "tags": [
      "STM32H7",
      "4-in-1 ESC",
      "RF",
      "Power Distribution"
    ],
    "status": "Active development · bench testing",
    "overview": "I’m developing a modular 4S multirotor platform around my own electronics. The flight controller, power-distribution board, navigation board, radio hardware and motor-control architecture are designed to work together. Motors, propellers and the video system are off-the-shelf components.",
    "engineering": [
      "Flight control — an STM32H743 board brings together motion and pressure sensors, storage, CAN and interfaces to the rest of the aircraft.",
      "Power and propulsion — custom power distribution monitors battery voltage and current. Modular ESC hardware separates motor-control logic from the high-current switching stage.",
      "Navigation and radio — dedicated GNSS, magnetometer and RF boards support the wider system architecture.",
      "Integration and testing — frame iterations, board bring-up and a motor thrust fixture support development before flight validation."
    ],
    "focus": "The central challenge is making separate boards behave as one system: clean power, reliable interfaces, useful sensor data and packaging that can be assembled, tested and revised.",
    "gallery": [
      {
        "src": "photo-drone-hitl.webp",
        "caption": "Assembled drone electronics and the companion HITL board. Studio background treatment."
      },
      {
        "src": "photo-drone-bench.webp",
        "caption": "Custom flight electronics connected to the motor test fixture."
      },
      {
        "src": "photo-thrust-rig.webp",
        "caption": "Thrust fixture, load-cell interface and measurement wiring."
      },
      {
        "src": "assets/projects/modular-drone-platform/01.jpeg",
        "caption": "PETG fit-check frame beside the carbon-fiber frame",
        "original": "3d printed and CF frames.jpeg"
      },
      {
        "src": "assets/projects/modular-drone-platform/02.jpeg",
        "caption": "System-level drone assembly CAD",
        "original": "assy img 1.jpeg"
      },
      {
        "src": "assets/projects/modular-drone-platform/03.jpeg",
        "caption": "Electronics integration inside the airframe",
        "original": "assy img 2.jpeg"
      },
      {
        "src": "assets/projects/modular-drone-platform/04.png",
        "caption": "Protected auxiliary-output concept diagram",
        "original": "detonator.png"
      },
      {
        "src": "assets/projects/modular-drone-platform/05.png",
        "caption": "4-in-1 ESC parent/daughter concept - assembly view",
        "original": "ESC and daughter and parent.png"
      },
      {
        "src": "assets/projects/modular-drone-platform/06.png",
        "caption": "4-in-1 ESC parent/daughter PCB routing",
        "original": "ESC daughter and parent.png"
      },
      {
        "src": "assets/projects/modular-drone-platform/07.jpeg",
        "caption": "Assembled STM32H743 flight-control board",
        "original": "FMU irl.jpeg"
      },
      {
        "src": "assets/projects/modular-drone-platform/08.png",
        "caption": "Flight-control board 3D rendering",
        "original": "FMU.png"
      },
      {
        "src": "assets/projects/modular-drone-platform/09.png",
        "caption": "Flight-control board multilayer routing",
        "original": "FMU_layers.png"
      },
      {
        "src": "assets/projects/modular-drone-platform/10.jpg",
        "caption": "Compact GNSS + magnetometer board",
        "original": "GPS PCB.jpg"
      },
      {
        "src": "assets/projects/modular-drone-platform/11.jpeg",
        "caption": "Assembled power-distribution board",
        "original": "PDB irl.jpeg"
      },
      {
        "src": "assets/projects/modular-drone-platform/12.png",
        "caption": "Power-distribution board 3D rendering",
        "original": "PDB.png"
      },
      {
        "src": "assets/projects/modular-drone-platform/13.png",
        "caption": "Power-distribution board multilayer routing",
        "original": "PDB_layers.png"
      },
      {
        "src": "assets/projects/modular-drone-platform/14.jpeg",
        "caption": "Earlier 4-in-1 ESC revision during single-motor bring-up",
        "original": "Prior revision ESC 4in1 with hardware for 1 motor installed.jpeg"
      },
      {
        "src": "assets/projects/modular-drone-platform/15.jpeg",
        "caption": "Compact dual-band RF board prototype",
        "original": "RF PCB.jpeg"
      }
    ],
    "heroImage": "photo-drone-hitl.webp",
    "documents": [],
    "prev": "dmm-buffer",
    "next": "finch-voice-assistant",
    "documentNote": "Detailed schematics for the flight controller, power-distribution, GNSS, RF and 4-in-1 ESC electronics can be provided to qualified reviewers or prospective collaborators upon signing an NDA.",
    "group": "selected",
    "facts": [
      [
        "Platform",
        "4S multirotor"
      ],
      [
        "Core MCU",
        "STM32H743"
      ],
      [
        "Work",
        "PCB design + integration"
      ]
    ],
    "diagram": [
      [
        "Flight controller",
        "Sensing + control"
      ],
      [
        "Power distribution",
        "Battery + measurement"
      ],
      [
        "Motor drives",
        "Logic + power stages"
      ],
      [
        "Navigation / RF",
        "Position + communications"
      ]
    ],
    "outcome": "Custom assemblies and bench-test hardware are built. Electronics, firmware and motor-control testing are ongoing; flight performance is not yet claimed."
  },
  {
    "id": "finch-voice-assistant",
    "number": "01",
    "category": "Built for People",
    "title": "Finch Voice Assistant",
    "subtitle": "A homemade, Alexa-style voice assistant with custom electronics: speak to it, get an answer, and hear the reply.",
    "hero": "finchv1 AI assistant assy AND finch v2 PCB.jpeg",
    "tags": [
      "ESP32-S3",
      "Audio",
      "Python",
      "Display + Camera"
    ],
    "status": "V1 working · V2 in development",
    "overview": "Finch brings voice interaction into a small desktop device. A custom ESP32-S3 board captures speech and plays responses through a speaker. A Python service handles speech recognition, the AI response and speech synthesis, so the device can stay compact.",
    "engineering": [
      "Talk and listen — a digital microphone captures the request, while a speaker amplifier plays the response returned by the server.",
      "Useful feedback — a small display shows connection and request status so the user can see what the device is doing.",
      "A complete prototype — custom PCB design, embedded audio, Wi-Fi communication and a fitted enclosure work together.",
      "Next revision — V2 adds SD-card storage, a larger display option and camera connectivity. These are development features, not completed V1 capabilities."
    ],
    "focus": "The design brings the microphone, speaker, display, firmware and enclosure into one usable object. The next revision focuses on longer messages and a more capable interface.",
    "gallery": [
      {
        "src": "assets/projects/finch-voice-assistant/01.jpeg",
        "caption": "Finch V1 ESP32-S3 audio board",
        "original": "finch v1 irl.jpeg"
      },
      {
        "src": "assets/projects/finch-voice-assistant/02.jpeg",
        "caption": "Finch V1 speaker assembly beside Finch V2 hardware",
        "original": "finchv1 AI assistant assy AND finch v2 PCB.jpeg"
      },
      {
        "src": "assets/projects/finch-voice-assistant/03.png",
        "caption": "Finch V1 3D PCB rendering",
        "original": "finchv1 pcb.png"
      },
      {
        "src": "assets/projects/finch-voice-assistant/04.png",
        "caption": "Finch V1 PCB routing",
        "original": "finchv1_layers.png"
      },
      {
        "src": "assets/projects/finch-voice-assistant/05.png",
        "caption": "Finch V2 PCB routing",
        "original": "finchv2_layers.png"
      },
      {
        "src": "assets/projects/finch-voice-assistant/06.png",
        "caption": "Finch V2 3D PCB rendering",
        "original": "funch v2 pcb.png"
      }
    ],
    "heroImage": "photo-finch.webp",
    "documents": [
      {
        "label": "FINCHV2_ESP32 [SH1].pdf",
        "href": "assets/docs/finch-voice-assistant--FINCHV2_ESP32-SH1-.pdf"
      }
    ],
    "prev": "modular-drone-platform",
    "next": "stm32f401-dev-board",
    "group": "people",
    "facts": [
      [
        "Interface",
        "Voice + display"
      ],
      [
        "Controller",
        "ESP32-S3"
      ],
      [
        "Status",
        "Working first revision"
      ]
    ],
    "outcome": "V1 demonstrates the full voice-request and spoken-response flow. V2 is under development."
  },
  {
    "id": "stm32f401-dev-board",
    "number": "08",
    "category": "Other Projects",
    "title": "STM32 Development Board",
    "subtitle": "A custom microcontroller board for trying out sensors, firmware and new circuits.",
    "hero": "IMG_2081.jpeg",
    "tags": [
      "Multilayer PCB",
      "STM32"
    ],
    "status": "Learning / portfolio build",
    "overview": "The board brings power, clocks, programming connections and accessible I/O together around an STM32F401. It was an early multilayer PCB project.",
    "engineering": [],
    "focus": "",
    "gallery": [
      {
        "src": "assets/projects/stm32f401-dev-board/01.png",
        "caption": "Multilayer STM32F401 breakout-board routing",
        "original": "dev board layers.png"
      },
      {
        "src": "assets/projects/stm32f401-dev-board/02.png",
        "caption": "STM32F401 development board 3D rendering",
        "original": "dev board pcb.png"
      },
      {
        "src": "assets/projects/stm32f401-dev-board/03.jpeg",
        "caption": "Assembled STM32F401 development board",
        "original": "IMG_2081.jpeg"
      },
      {
        "src": "assets/projects/stm32f401-dev-board/04.png",
        "caption": "USB-C power, clocks, SWD and full GPIO breakout schematic",
        "original": "stm32f401 sch.png"
      }
    ],
    "heroImage": "assets/projects/stm32f401-dev-board/03.jpeg",
    "documents": [],
    "prev": "finch-voice-assistant",
    "next": "attiny-programmer",
    "group": "other",
    "outcome": ""
  },
  {
    "id": "attiny-programmer",
    "number": "09",
    "category": "Other Projects",
    "title": "ATtiny Programming Fixture",
    "subtitle": "A dedicated board for loading firmware onto small ATtiny chips.",
    "hero": "at tiny programmer irl.jpeg",
    "tags": [
      "Programming fixture",
      "Bench tool"
    ],
    "status": "Functional utility board",
    "overview": "It replaces repeated breadboard wiring with a reusable connection between an Arduino programmer and the target microcontroller.",
    "engineering": [],
    "focus": "",
    "gallery": [
      {
        "src": "assets/projects/attiny-programmer/01.jpeg",
        "caption": "ATTiny programming fixture with Arduino Nano installed",
        "original": "at tiny programmer irl.jpeg"
      },
      {
        "src": "assets/projects/attiny-programmer/02.png",
        "caption": "3D PCB rendering with ATTiny programming pads",
        "original": "attiny_prog pcb altium.png"
      },
      {
        "src": "assets/projects/attiny-programmer/03.png",
        "caption": "Arduino-as-ISP connections for ATTiny84 and ATTiny85",
        "original": "attiny_prog sch.png"
      },
      {
        "src": "assets/projects/attiny-programmer/04.png",
        "caption": "Programmer PCB routing",
        "original": "attiny_prog_layers.png"
      }
    ],
    "heroImage": "assets/projects/attiny-programmer/01.jpeg",
    "documents": [],
    "prev": "stm32f401-dev-board",
    "next": "rc-car-controller",
    "group": "other",
    "outcome": ""
  },
  {
    "id": "rc-car-controller",
    "number": "10",
    "category": "Other Projects",
    "title": "RC Car Motor Controller",
    "subtitle": "A custom board that controls the left and right motors of a small RC car.",
    "hero": "rc car pcb irl.jpeg",
    "tags": [
      "Motor control",
      "Embedded firmware"
    ],
    "status": "Functional early prototype",
    "overview": "An ATtiny and dual motor driver provide speed and direction control. This early prototype combined motor electronics with a radio receiver.",
    "engineering": [],
    "focus": "",
    "gallery": [
      {
        "src": "assets/projects/rc-car-controller/01.png",
        "caption": "Early two-layer RC-car controller routing",
        "original": "rc car layers.png"
      },
      {
        "src": "assets/projects/rc-car-controller/02.png",
        "caption": "RC-car controller 3D PCB rendering",
        "original": "rc car pcb altium.png"
      },
      {
        "src": "assets/projects/rc-car-controller/03.jpeg",
        "caption": "Assembled ATTiny84 + dual H-bridge controller",
        "original": "rc car pcb irl.jpeg"
      },
      {
        "src": "assets/projects/rc-car-controller/04.png",
        "caption": "ATTiny84, DRV8833 and four brushed-motor interface schematic",
        "original": "rc car sch.png"
      }
    ],
    "heroImage": "assets/projects/rc-car-controller/03.jpeg",
    "documents": [],
    "prev": "attiny-programmer",
    "next": "rf-development-board",
    "group": "other",
    "outcome": ""
  },
  {
    "id": "rf-development-board",
    "number": "11",
    "category": "Other Projects",
    "title": "Sub-GHz Radio Board",
    "subtitle": "A custom development board for experimenting with wireless links and sensors.",
    "hero": "RF brd IRL.jpeg",
    "tags": [
      "RF design",
      "Sensor interfaces"
    ],
    "status": "Portfolio RF platform",
    "overview": "An STM32WL radio, sensor interfaces and battery-power circuitry create a platform for RF and embedded development.",
    "engineering": [],
    "focus": "",
    "gallery": [
      {
        "src": "assets/projects/rf-development-board/01.jpeg",
        "caption": "Assembled RF development board during bench testing",
        "original": "RF brd IRL.jpeg"
      }
    ],
    "heroImage": "assets/projects/rf-development-board/01.jpeg",
    "documents": [
      {
        "label": "rf dev board sch.pdf",
        "href": "assets/docs/rf-development-board--rf-dev-board-sch.pdf"
      }
    ],
    "prev": "rc-car-controller",
    "next": "modular-bldc-senior-project",
    "group": "other",
    "outcome": ""
  },
  {
    "id": "modular-bldc-senior-project",
    "number": "12",
    "category": "Other Projects",
    "title": "Stackable Motor Controllers",
    "subtitle": "A team-designed system of motor-control modules that can be stacked as the motor count grows.",
    "hero": "Final motor test stand.png",
    "tags": [
      "Senior design team",
      "Motor electronics"
    ],
    "status": "Senior design team prototype",
    "overview": "The senior-design prototype separates motor-control logic, high-current electronics and communications into connected boards. The bench assembly brings the modules together for testing.",
    "engineering": [],
    "focus": "",
    "gallery": [
      {
        "src": "assets/projects/modular-bldc-senior-project/01.png",
        "caption": "Three-phase BLDC driver / power-stage board",
        "original": "DRV board to drive BLDC.png"
      },
      {
        "src": "assets/projects/modular-bldc-senior-project/02.png",
        "caption": "BLDC driver board routing",
        "original": "drv_layers.png"
      },
      {
        "src": "assets/projects/modular-bldc-senior-project/03.png",
        "caption": "Four-motor modular ESC test stand",
        "original": "Final motor test stand.png"
      },
      {
        "src": "assets/projects/modular-bldc-senior-project/04.png",
        "caption": "MCU/control board routing",
        "original": "mcu board layers.png"
      },
      {
        "src": "assets/projects/modular-bldc-senior-project/05.png",
        "caption": "STM32G474 logic/control board",
        "original": "MCU board to drive drv.png"
      },
      {
        "src": "assets/projects/modular-bldc-senior-project/06.jpeg",
        "caption": "Stacked modular control hardware",
        "original": "PCB stack.jpeg"
      },
      {
        "src": "assets/projects/modular-bldc-senior-project/07.png",
        "caption": "Battery input and high-current protection board",
        "original": "power protection board.png"
      },
      {
        "src": "assets/projects/modular-bldc-senior-project/08.png",
        "caption": "Early remote-control proof of concept on perfboard",
        "original": "Remote control perf board.png"
      },
      {
        "src": "assets/projects/modular-bldc-senior-project/09.jpeg",
        "caption": "Enclosed handheld telemetry/controller prototype",
        "original": "remote.jpeg"
      },
      {
        "src": "assets/projects/modular-bldc-senior-project/10.png",
        "caption": "RF receiver and sensor-interface PCB",
        "original": "RF Receiver.png"
      },
      {
        "src": "assets/projects/modular-bldc-senior-project/11.png",
        "caption": "RF remote PCB design",
        "original": "RF tx.png"
      },
      {
        "src": "assets/projects/modular-bldc-senior-project/12.png",
        "caption": "System powered during bench testing",
        "original": "Screenshot 2026-08-07 205602.png"
      },
      {
        "src": "assets/projects/modular-bldc-senior-project/13.png",
        "caption": "Internal wiring and power distribution inside the test stand",
        "original": "wiring under test stand.png"
      }
    ],
    "heroImage": "assets/projects/modular-bldc-senior-project/03.png",
    "documents": [
      {
        "label": "DRV_EE400D.pdf",
        "href": "assets/docs/modular-bldc-senior-project--DRV_EE400D.pdf"
      },
      {
        "label": "EE400D_CDR Deesc.pdf",
        "href": "assets/docs/modular-bldc-senior-project--EE400D_CDR-Deesc.pdf"
      },
      {
        "label": "MCU_EE400D.pdf",
        "href": "assets/docs/modular-bldc-senior-project--MCU_EE400D.pdf"
      }
    ],
    "prev": "rf-development-board",
    "next": "low-power-haptic-reminder",
    "group": "other",
    "outcome": ""
  },
  {
    "id": "hitl-test-platform",
    "number": "02",
    "category": "Selected Work",
    "group": "selected",
    "title": "HITL Test Platform",
    "subtitle": "A custom control and measurement board that puts drone electronics on a repeatable, computer-connected test bench.",
    "status": "Working bench platform · ongoing development",
    "heroImage": "photo-hitl-bench.webp",
    "tags": [
      "Test engineering",
      "STM32H743",
      "Ethernet",
      "Custom PCB"
    ],
    "overview": "HITL means Human in the Loop here. I designed the board to make drone development easier to observe and control from a computer: select signal paths, send test commands and collect measurements while keeping the operator involved.",
    "focus": "It connects the hardware being developed to the tools needed to understand it. Instead of checking each board in isolation, the bench brings control, measurement and recorded results into the same workflow.",
    "engineering": [
      "Custom test hardware — a six-layer, 90 × 65 mm PCB brings an STM32H743, W5500 Ethernet, signal switching and accessible peripheral connections together.",
      "Computer-connected control — an Ethernet console selects signal routes and sends commands for bench development, including DShot motor-control signals.",
      "Measurement and logging — the test workflow supports rotor-angle/RPM observation, power-board voltage and current acquisition, and CSV exports for comparing runs.",
      "A physical test system — the board works alongside custom ESC and power hardware, a motor fixture and thrust-measurement electronics."
    ],
    "facts": [
      [
        "PCB",
        "6 layers"
      ],
      [
        "Board size",
        "90 × 65 mm"
      ],
      [
        "Connection",
        "Ethernet"
      ]
    ],
    "diagram": [
      [
        "Desktop console",
        "Commands + observations"
      ],
      [
        "HITL board",
        "Signal routing + acquisition"
      ],
      [
        "Hardware under test",
        "Flight / power / motor"
      ],
      [
        "Test records",
        "Measurements + CSV"
      ]
    ],
    "outcome": "The board has been brought up and used in the motor-test workflow. Signal-emulation profiles and broader integration continue to evolve; measurement scaling and test conditions matter when comparing results.",
    "gallery": [
      {
        "src": "photo-hitl-bench.webp",
        "caption": "HITL board powered and connected during bench testing."
      },
      {
        "src": "photo-hitl-bringup.webp",
        "caption": "Board bring-up with Ethernet and a debug connection."
      },
      {
        "src": "photo-hitl-cad.webp",
        "caption": "HITL component placement and connector arrangement in Altium."
      },
      {
        "src": "photo-hitl-layout.webp",
        "caption": "Six-layer board layout with the 90 × 65 mm outline."
      },
      {
        "src": "photo-drone-bench.webp",
        "caption": "The surrounding motor-control test setup."
      },
      {
        "src": "photo-thrust-rig.webp",
        "caption": "Load-cell fixture and measurement electronics."
      }
    ],
    "documents": []
  },
  {
    "id": "esp32-fpga-development-board",
    "title": "ESP32 + FPGA Development Board",
    "category": "Other Projects",
    "group": "other",
    "number": "10",
    "subtitle": "A hands-on board for experimenting with a microcontroller and programmable digital logic together.",
    "overview": "The ESP32-S3 and FPGA share a custom board with accessible connectors and SD-card storage. A separate switch-and-LED panel provides a simple physical interface for experiments.",
    "status": "Development hardware",
    "heroImage": "photo-fpga-board.webp",
    "tags": [
      "ESP32-S3",
      "FPGA"
    ],
    "engineering": [],
    "focus": "",
    "gallery": [
      {
        "src": "photo-fpga-board.webp",
        "caption": "Custom ESP32 + FPGA board with a switch-and-LED test panel."
      }
    ],
    "documents": []
  }
];
