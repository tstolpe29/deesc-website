window.DEESC_PROJECTS = [
  {
    "id": "low-power-haptic-reminder",
    "number": "02",
    "category": "Personal Devices",
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
    "overview": "A nonprofit wellness client needed a small, simple way to give regular tactile reminders. The roughly 1 × 2 inch device combines the electronics, battery, vibration motor, controls and enclosure in one rechargeable package.",
    "engineering": [
      "Reminder timing: an STM32 microcontroller keeps time and briefly drives the vibration motor every ten minutes.",
      "Low-power firmware: the controller sleeps between reminders to reduce energy use while the device is idle.",
      "Charging: USB-C charging and a single-cell battery make it convenient to recharge.",
      "Mechanical integration: the board and 3D-printed enclosure were developed together around the battery, motor, charging port and controls."
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
    "title": "4S, 5-inch, Quadcopter Prototype",
    "subtitle": "Custom flight control, power distribution and motor drives, developed together with a dedicated bench-test platform.",
    "hero": "assy img 1.jpeg",
    "tags": [
      "STM32H743",
      "4S multirotor",
      "Custom motor drives",
      "Bench integration"
    ],
    "status": "Custom hardware built · integration and motor-control development",
    "overview": "The 4S, 5-inch quadcopter prototype uses custom electronics: an STM32H743 flight controller, a power-distribution board, motor-drive hardware, and navigation and radio interfaces. Motors, propellers and the video system are off-the-shelf components. The companion HITL board provides a computer-connected interface for integration testing on the bench.",
    "engineering": [
      "Flight sensing: the FMU Lite combines an STM32H743VIT6 with a BMI088 inertial sensor, MS5611 barometer and MMC5983MA magnetometer.",
      "Power monitoring: the PDB measures battery voltage and high-side current, regulates 12 V and 5 V rails, and exposes a UART telemetry link.",
      "Motor development: the supplied single-motor ESC revision combines an STM32G071, three-phase gate driver, MOSFET bridge and current feedback.",
      "System integration: DShot, UART and I²C signal paths can be brought through HITL for controlled bench testing."
    ],
    "focus": "Development spans schematic capture, PCB layout, assembly, bring-up and system integration. The engineering challenge is the interaction between boards: power quality, signal ownership, measurement scaling and connector-level compatibility.",
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
    "documentNote": "The flight-control, power-distribution, motor-drive and encoder schematics are kept private. The companion HITL page includes its test-board schematic sheets.",
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
        "FMU Lite",
        "Sensing + motor commands"
      ],
      [
        "Power distribution",
        "Battery bus + regulated rails"
      ],
      [
        "Motor drive + encoder",
        "Switching + rotor feedback"
      ],
      [
        "HITL test bench",
        "Selected signals + measurements"
      ]
    ],
    "outcome": "Custom assemblies and bench fixtures are built. Firmware, motor-control behavior and broader system integration remain in development; flight validation is a later stage.",
    "systemCaption": "Functional roles in the platform. Power and data follow separate paths; these blocks are not a series power connection.",
    "hardwareTitle": "Board functions and interfaces",
    "hardwareIntro": "Separating flight sensing, power conversion and motor switching makes the interfaces explicit and allows individual assemblies to be brought up and revised.",
    "hardware": [
      {
        "index": "01",
        "title": "FMU Lite",
        "role": "Flight control & sensing",
        "image": "assets/projects/modular-drone-platform/07.jpeg",
        "alt": "Assembled FMU Lite flight-control board",
        "body": "The STM32H743VIT6 connects to motion, pressure and magnetic-field sensors over SPI. Dedicated 3.3 V rails serve the MCU and other electronics, while FRAM provides nonvolatile storage.",
        "details": [
          "BMI088 accelerometer / gyroscope, MS5611 barometer, MMC5983MA magnetometer",
          "Four DShot outputs plus UART links for power telemetry, navigation and radio",
          "External SPI and I²C connections for integration"
        ]
      },
      {
        "index": "02",
        "title": "Power-distribution board",
        "role": "Energy & battery telemetry",
        "image": "assets/projects/modular-drone-platform/11.jpeg",
        "alt": "Assembled custom power-distribution board",
        "body": "The PDB distributes the battery bus and generates 12 V and 5 V rails. An INA240 current-sense amplifier and battery-voltage divider feed an STM32G071, which provides the measurement and UART interface.",
        "details": [
          "High-side shunt measures battery-bus current",
          "Voltage divider scales battery voltage for the ADC",
          "UART and GPIO connect the power board to the wider control system"
        ]
      },
      {
        "index": "03",
        "title": "Motor-drive hardware",
        "role": "Three-phase switching & feedback",
        "image": "assets/projects/modular-drone-platform/14.jpeg",
        "alt": "Earlier motor-drive board during single-motor bring-up",
        "body": "The project includes earlier 4-in-1 assemblies and a later single-motor revision. The reviewed single-motor design uses an STM32G071 and DRV8300 to control six MOSFETs arranged as three half bridges.",
        "details": [
          "DShot command input, telemetry and a separate encoder connection",
          "Three shunt-sense channels with INA181 amplifiers",
          "A buffered midpoint reference supports bidirectional current measurement"
        ],
        "caption": "Photo: earlier 4-in-1 assembly during single-motor bring-up."
      },
      {
        "index": "04",
        "title": "Rotor-position encoder",
        "role": "Rotor-position feedback",
        "body": "A separate MT6701 magnetic encoder board exposes a rotor-position signal to the motor controller. Its connector carries 3.3 V, ground and the encoder output; additional pads provide access during development.",
        "details": [
          "A magnet and sensor form a contactless position interface",
          "Alignment and the magnet-to-sensor gap are part of mechanical integration",
          "The single-motor ESC provides a matching rotor-encoder connection"
        ]
      }
    ],
    "paths": [
      {
        "label": "Power path",
        "nodes": [
          "4S battery",
          "PDB",
          "Battery bus + 12 V / 5 V",
          "Motor drive + flight electronics"
        ]
      },
      {
        "label": "Command path",
        "nodes": [
          "FMU or HITL",
          "Selected DShot source",
          "ESC controller",
          "Three-phase bridge → motor"
        ]
      },
      {
        "label": "Measurement path",
        "nodes": [
          "Battery / motor",
          "PDB & ESC sensing",
          "UART / telemetry",
          "HITL → computer"
        ]
      }
    ],
    "pathsNote": "The external MT6701 encoder feeds the ESC. The FMU also carries its own inertial, pressure and magnetic sensors; those are separate from the external navigation paths routed through HITL.",
    "validationTitle": "Board bring-up and integration testing",
    "validationIntro": "Development moves from individual boards to the connected motor bench. The test setup makes it possible to compare commanded behavior with electrical measurements and physical response.",
    "validation": [
      {
        "label": "POWER",
        "title": "Check the measurements",
        "body": "Compare PDB voltage and current telemetry with a DMM, one measurement at a time. This checks the sensing, scaling and reporting path together.",
        "scope": "Battery measurement and telemetry"
      },
      {
        "label": "PROPULSION",
        "title": "Exercise one motor path",
        "body": "Use the motor fixture to work through command input, phase-current acquisition and rotor-position feedback before combining more channels.",
        "scope": "Motor-control development"
      },
      {
        "label": "INTEGRATION",
        "title": "System integration",
        "body": "Use HITL to select command sources and observe the connected hardware from the computer. Retain measurements and test settings for comparison between runs.",
        "scope": "System integration on the bench"
      }
    ],
    "documentCta": {
      "href": "project.html?id=hitl-test-platform#design-documents",
      "label": "View the HITL design"
    }
  },
  {
    "id": "finch-voice-assistant",
    "number": "01",
    "category": "Personal Devices",
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
        "caption": "Four-motor ESC test stand",
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
        "caption": "Stacked motor-control hardware",
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
    "subtitle": "A custom interface between the computer and drone electronics: choose the signal source, run a controlled test, and capture the response.",
    "status": "Working bench hardware · test and emulation firmware in development",
    "heroImage": "photo-hitl-cad.webp",
    "tags": [
      "Test engineering",
      "STM32H743",
      "Ethernet",
      "Custom PCB"
    ],
    "overview": "HITL means Human in the Loop in this project. The platform gives the operator access to the drone’s electrical interfaces during development of the flight, power and motor hardware. It combines a dedicated STM32H743, Ethernet, signal multiplexers and storage on one six-layer board.",
    "focus": "The key idea is controlled signal ownership. Selected paths can carry the aircraft’s original signal or a signal generated by HITL firmware. That makes individual interfaces easier to exercise, observe and troubleshoot during integration.",
    "engineering": [
      "Six-layer, 90 × 65 mm hardware with STM32H743ZIT6 control, W5500 Ethernet and connector access around the board perimeter.",
      "Selectable paths for four DShot channels, PDB UART/GPIO, radio UART, GPS UART and the external magnetometer I²C connection.",
      "Python console sends TCP commands and receives UDP telemetry; the W5500 connects the Ethernet link to the MCU over SPI.",
      "MicroSD and SPI FRAM provide storage hardware; CAN, SPI, I²C, UART and spare GPIO extend the bench interfaces."
    ],
    "facts": [
      [
        "PCB",
        "6 layers · 90 × 65 mm"
      ],
      [
        "Controller",
        "STM32H743ZIT6"
      ],
      [
        "PC connection",
        "W5500 Ethernet / SPI"
      ]
    ],
    "diagram": [
      [
        "Set the test",
        "Operator + Python console"
      ],
      [
        "Send commands",
        "TCP over Ethernet"
      ],
      [
        "Exercise hardware",
        "MCU + selected signal paths"
      ],
      [
        "Review the response",
        "UDP telemetry + run records"
      ]
    ],
    "outcome": "The board has been brought up, Ethernet has been exercised independently, and the platform is used in the motor-test workflow. Signal-emulation profiles and wider integration are evolving. Powered pass-through requires a valid multiplexer supply; hardware watchdog and power-loss behavior are future revision work.",
    "gallery": [
      {
        "src": "photo-hitl-cad.webp",
        "caption": "HITL 3D assembly render showing the controller and connector arrangement."
      },
      {
        "src": "photo-hitl-bench.webp",
        "caption": "HITL board powered and connected during bench testing."
      },
      {
        "src": "photo-hitl-bringup.webp",
        "caption": "Board bring-up with Ethernet and a debug connection."
      },
      {
        "src": "photo-hitl-layout.webp",
        "caption": "HITL six-layer routing and the dimensioned 90 × 65 mm outline."
      },
      {
        "src": "photo-drone-bench.webp",
        "caption": "The surrounding motor-control test setup."
      },
      {
        "src": "photo-thrust-rig.webp",
        "caption": "Load-cell fixture and measurement electronics."
      },
      {
        "src": "photo-hitl-wireshark-tcp.png",
        "caption": "Wireshark: verified 1 MiB TCP echo"
      },
      {
        "src": "photo-hitl-wireshark-udp.png",
        "caption": "Wireshark: 1,448-byte UDP payload check"
      }
    ],
    "documents": [
      {
        "href": "assets/docs/HITL-schematic-sheets.pdf",
        "label": "HITL schematic sheets · 6 pages"
      }
    ],
    "systemCaption": "The PC network link and the routed board-level signals do different jobs: Ethernet carries commands and telemetry, while the multiplexers select electrical signal paths.",
    "hardwareTitle": "Controller, power and interfaces",
    "hardwareIntro": "The board brings control, communication and storage together, with direct access to the interfaces under test.",
    "hardware": [
      {
        "index": "01",
        "title": "Controller & power",
        "role": "Local execution",
        "body": "An STM32H743ZIT6 handles test commands, peripheral timing and acquisition. The power circuit accepts a 5 V input and uses an AP64502 synchronous buck to generate 3.3 V. USB-C and SWD support bring-up and development.",
        "details": [
          "External high-speed and low-speed clocks",
          "Distributed MCU decoupling and reset / boot access",
          "Separate connector for the 5 V supply"
        ]
      },
      {
        "index": "02",
        "title": "Ethernet & field interfaces",
        "role": "Computer to hardware",
        "body": "A W5500 handles the Ethernet interface and communicates with the STM32 over SPI. A TCAN332 CAN transceiver and dedicated UART, I²C and SPI connectors give the bench several ways to reach external hardware.",
        "details": [
          "RJ45 interface with link / activity indication",
          "SPI connection between W5500 and STM32",
          "CAN termination uses two 60 Ω resistors and a midpoint capacitor"
        ]
      },
      {
        "index": "03",
        "title": "Storage & physical layout",
        "role": "Local storage",
        "body": "A microSD socket and FM25V05 SPI FRAM provide local storage hardware. The six-layer stack uses signal, ground, signal, power, ground and signal layers within the 90 × 65 mm outline.",
        "details": [
          "Connectors arranged around the PCB perimeter",
          "Accessible programming and spare-GPIO headers",
          "Dedicated paths for PDB and ESC communication"
        ]
      }
    ],
    "routeExplorer": true,
    "software": {
      "title": "TCP commands and UDP telemetry",
      "intro": "The Python console is the operator interface. The board handles test execution and peripheral timing, with Ethernet carrying commands and measurements.",
      "paths": [
        {
          "label": "CONTROL · TCP",
          "nodes": [
            "GUI change",
            "Python checks",
            "TCP command",
            "HITL action"
          ]
        },
        {
          "label": "TELEMETRY · UDP",
          "nodes": [
            "Board measurement",
            "UDP packet",
            "Validate + decode",
            "Display / record"
          ]
        }
      ],
      "details": [
        [
          "TCP commands",
          "A reliable, ordered path for requests and responses."
        ],
        [
          "UDP telemetry",
          "Live measurement packets without TCP’s automatic retransmission queue."
        ],
        [
          "Packet checks",
          "Check the sender, packet length and format before interpreting measurements."
        ],
        [
          "Recorded results",
          "Compare test settings and measurements across repeatable bench runs."
        ]
      ],
      "ownership": "The bench workflow integrates custom test hardware with a Python console and tuning tools developed with AI assistance. Instrument comparisons, captured traffic and repeatable bench trials check software behavior."
    },
    "validationTitle": "Independent measurement checks",
    "validationIntro": "Independent instruments, packet captures and measured hardware responses provide checks of the GUI readings and test behavior.",
    "validation": [
      {
        "label": "INSTRUMENT COMPARISON",
        "title": "PDB voltage & current",
        "body": "Compare PDB telemetry with a DMM connected to the bench, checking voltage and current separately. Agreement tests the sensor, conversion, communication and displayed value together.",
        "scope": "Connected PDB measurement path"
      },
      {
        "label": "NETWORK CAPTURE",
        "title": "Standalone Ethernet",
        "body": "Nine completed standalone CPU/SPI profiles passed application checks. Wireshark and capture audits verified payload delivery and exposed repeated TCP connection setup in a subset of cases.",
        "scope": "Standalone diagnostic firmware; see measured network results above"
      },
      {
        "label": "END-TO-END CHECK",
        "title": "Command versus response",
        "body": "Change a console parameter and compare the intended command with the transmitted value and the observed hardware response. Keep the test conditions with the recorded result.",
        "scope": "Console-to-hardware behavior"
      }
    ],
    "documentNote": "Working engineering draft covering power, the controller, signal routing, memory and external interfaces. These are the six circuit sheets from the supplied HITL design.",
    "heroFit": "contain",
    "heroAlt": "HITL test platform 3D PCB render with the STM32 controller, Ethernet, microSD and interface connectors",
    "stories": [
      {
        "id": "bench-story",
        "number": "01",
        "eyebrow": "BOARD BRING-UP",
        "title": "HITL board and signal interfaces",
        "image": "photo-hitl-bringup.webp",
        "alt": "Assembled HITL board with Ethernet and bring-up wiring",
        "caption": "HITL / board bring-up",
        "body": "HITL means Human in the Loop in this project. The custom board provides access to the drone’s electrical interfaces for signal-source selection, controlled testing and response monitoring.",
        "points": [
          "STM32H743 controller, Ethernet and signal selectors on a six-layer PCB",
          "DShot motor commands, PDB telemetry, GPS, radio and external magnetometer interfaces",
          "Independent instruments and saved measurements to check what the console reports"
        ],
        "link": "#signal-routing",
        "linkLabel": "View signal routing"
      },
      {
        "id": "motor-tuning",
        "number": "02",
        "eyebrow": "AI-ASSISTED MOTOR TUNING",
        "title": "Open-loop motor tuning",
        "image": "photo-drone-bench.webp",
        "alt": "Custom motor-drive electronics and the motor thrust-test fixture",
        "caption": "Motor bench / open-loop development",
        "body": "The Python console connects an AI planner to bounded motor trials. It can sweep commanded speed at a fixed duty, read current and synchronism, and propose a duty-to-RPM lookup table. The same bench supports manual tuning and DMM comparisons.",
        "points": [
          "Manual control through the Python GUI for real-time motor tuning",
          "AI chooses trials; Python checks requests and records the results",
          "HITL carries commands and telemetry; the ESC generates the motor waveforms",
          "The operator can stop the run; current, stale-data and energy checks bound the jobs"
        ],
        "note": "In true open-loop mode, the ESC advances the commanded electrical angle without continuously correcting it from rotor position. Measurements guide the next trial and detect faults; the AI is not the real-time commutation controller.",
        "result": "Recorded session: 89 jobs over 18.9 minutes, tuning 3–20% duty. The final up/down lookup-table check passed. Three current trips and some speed-ripple readings above target remain in the record.",
        "link": "hitl-motor-tuning-results.json",
        "linkLabel": "View the tuning-session summary"
      },
      {
        "id": "network-results",
        "number": "03",
        "eyebrow": "WIRESHARK / MEASURED RESULTS",
        "title": "Ethernet test results",
        "image": "photo-hitl-wireshark-tcp.png",
        "alt": "Wireshark capture of the successful 1 MiB TCP echo at 480 MHz CPU and 32 MHz SPI",
        "caption": "TCP echo / original Wireshark capture",
        "fit": "contain",
        "body": "A standalone Ethernet test exercised ARP, ICMP, TCP and UDP across nine CPU/SPI profiles. The board was tested by itself with diagnostic firmware, without a PDB or ESC connected.",
        "points": [
          "64–480 MHz CPU clock; SPI profiles from 1–32 MHz",
          "1 MiB TCP echo reassembled and matched in both directions",
          "UDP payload sweep from 0–1,448 application bytes, plus a deliberate bad-CRC test"
        ],
        "link": "hitl-network-excerpt.pcapng",
        "linkLabel": "Download the Wireshark excerpt"
      }
    ],
    "networkResults": {
      "stats": [
        [
          "9 / 9",
          "completed profiles passed application checks"
        ],
        [
          "2,193 / 2,193",
          "TCP cases passed in the five-minute soak"
        ],
        [
          "40,545 / 40,545",
          "UDP echoes passed in the same soak"
        ]
      ],
      "rows": [
        {
          "cpu_mhz": 64,
          "spi_mhz": 8,
          "tcp_passed": 126,
          "tcp_total": 126,
          "udp_passed": 882,
          "udp_total": 882,
          "stream_payload_bytes": 1048576,
          "stream_kib_per_s": 194.75205961239854
        },
        {
          "cpu_mhz": 200,
          "spi_mhz": 8,
          "tcp_passed": 130,
          "tcp_total": 130,
          "udp_passed": 1346,
          "udp_total": 1346,
          "stream_payload_bytes": 1048576,
          "stream_kib_per_s": 374.04422386219454
        },
        {
          "cpu_mhz": 300,
          "spi_mhz": 8,
          "tcp_passed": 145,
          "tcp_total": 145,
          "udp_passed": 1285,
          "udp_total": 1285,
          "stream_payload_bytes": 1048576,
          "stream_kib_per_s": 408.0707467151672
        },
        {
          "cpu_mhz": 400,
          "spi_mhz": 8,
          "tcp_passed": 140,
          "tcp_total": 140,
          "udp_passed": 1319,
          "udp_total": 1319,
          "stream_payload_bytes": 1048576,
          "stream_kib_per_s": 419.83729582796786
        },
        {
          "cpu_mhz": 480,
          "spi_mhz": 8,
          "tcp_passed": 144,
          "tcp_total": 144,
          "udp_passed": 1308,
          "udp_total": 1308,
          "stream_payload_bytes": 1048576,
          "stream_kib_per_s": 425.8478676790763
        },
        {
          "cpu_mhz": 64,
          "spi_mhz": 1,
          "tcp_passed": 120,
          "tcp_total": 120,
          "udp_passed": 453,
          "udp_total": 453,
          "stream_payload_bytes": 1048576,
          "stream_kib_per_s": 56.176532074881386
        },
        {
          "cpu_mhz": 480,
          "spi_mhz": 1,
          "tcp_passed": 120,
          "tcp_total": 120,
          "udp_passed": 504,
          "udp_total": 504,
          "stream_payload_bytes": 1048576,
          "stream_kib_per_s": 58.24985069778368
        },
        {
          "cpu_mhz": 480,
          "spi_mhz": 16,
          "tcp_passed": 164,
          "tcp_total": 164,
          "udp_passed": 1585,
          "udp_total": 1585,
          "stream_payload_bytes": 1048576,
          "stream_kib_per_s": 702.4788172448729
        },
        {
          "cpu_mhz": 480,
          "spi_mhz": 32,
          "tcp_passed": 2308,
          "tcp_total": 2308,
          "udp_passed": 42199,
          "udp_total": 42199,
          "stream_payload_bytes": 1048576,
          "stream_kib_per_s": 709.5579675599816
        }
      ],
      "finding": "The selected 1 MiB TCP echo completed in 1.443 s at 480 MHz CPU / 32 MHz SPI: 709.6 KiB/s of verified payload, counted once. This includes host checking, logging and connection timing; it is not Ethernet line rate. The W5500 reported a 100 Mbps link.",
      "caveat": "A real limitation: 600 of 3,397 normal TCP cases began with a TCP reset (RST) from the board before a repeated SYN completed the connection. Median time from the first SYN to a successful handshake in those cases was 509.9 ms. Application checks passed after retry, but the transient socket-status cause remains unresolved.",
      "image": "photo-hitl-wireshark-udp.png",
      "imageCaption": "UDP request and reply with 1,448 application bytes. The audit checked sequence, length, payload hashes and application CRC.",
      "excerptNote": "The download contains the selected TCP stream, UDP payload and CRC exchanges, and board-related ARP/ICMP traffic across the diagnostic session. It includes traffic outside the final matrix. Packet numbers are renumbered; screenshots retain the original capture numbers."
    }
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
