window.DEESC_PROJECTS = [
  {
    "id": "low-power-haptic-reminder",
    "number": "01",
    "category": "Client Work",
    "title": "Low-Power Haptic Reminder",
    "subtitle": "A compact rechargeable device designed for periodic tactile reminders with week-plus battery-life targets.",
    "hero": "IMG_2054.jpeg",
    "tags": [
      "STM32",
      "Low Power",
      "LiPo / USB-C",
      "PCB + Enclosure"
    ],
    "status": "Delivered client prototype",
    "overview": "A nonprofit wellness client needed a very small device that could provide a short vibration reminder every ten minutes without becoming another device that needed daily charging. The result is a roughly 1 x 2 inch rechargeable embedded system that combines the PCB, battery, vibration motor, controls and enclosure into one purpose-built package.",
    "engineering": [
      "An STM32G071GBU6 manages the timing and motor pulse while spending most of its life in low-power sleep to minimize standby current.",
      "USB-C feeds an MCP73831 single-cell charge controller; a low-quiescent 2.8 V regulator powers the logic rail.",
      "An AO3400A low-side MOSFET switches the vibration motor, while the MCU can monitor battery level through a resistor-divider ADC input.",
      "The board and 3D-printed enclosure were co-designed around the charging port, switch placement, motor, battery and mounting constraints. The battery wires are soldered directly to the board and the cell is adhesively secured rather than using the optional header footprint."
    ],
    "focus": "The important engineering problem was not simply making a motor buzz. It was balancing haptic strength, package size, battery capacity and quiescent current so the device could stay useful for long periods between charges.",
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
    "heroImage": "assets/projects/low-power-haptic-reminder/01.jpeg",
    "documents": [],
    "prev": "modular-bldc-senior-project",
    "next": "edge-detection-camera"
  },
  {
    "id": "edge-detection-camera",
    "number": "02",
    "category": "Client Work",
    "title": "ESP32 + FPGA Edge-Detection Camera",
    "subtitle": "A standalone image-processing prototype that splits camera control and UI from FPGA-accelerated filtering.",
    "hero": "IMG_2059.jpeg",
    "tags": [
      "ESP32-S3",
      "FPGA",
      "Image Processing",
      "Custom PCB"
    ],
    "status": "Delivered client prototype",
    "overview": "This client requested a self-contained edge-detection camera but intentionally kept the end application confidential. Size was not a primary constraint, so the prototype focused on a clear hardware architecture, accessible interfaces and proving the processing pipeline in a bench-friendly enclosure.",
    "engineering": [
      "The ESP32-S3 handles camera/display control and image preprocessing before transferring frame data to a Lattice iCE5LP4K FPGA over SPI.",
      "The FPGA stores incoming pixels in on-chip memory and applies Haar-style low-pass / high-pass filtering, then returns processed data to the ESP32 for display.",
      "The hardware supports normal or thermal-image input, including an MLX90641 thermal array interface, plus SD-card storage used to load the FPGA configuration at startup.",
      "The custom board provides the required 5 V, 3.3 V and 1.2 V rails, external PSRAM, debug access and multiple display/interface options so the prototype could be exercised without redesigning the core PCB."
    ],
    "focus": "The project is a hardware/software partitioning exercise: the ESP32 owns the flexible system-level logic while deterministic pixel operations are offloaded to dedicated FPGA fabric.",
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
    "next": "low-current-continuity-checker"
  },
  {
    "id": "low-current-continuity-checker",
    "number": "03",
    "category": "Client Work",
    "title": "Microamp Continuity Checker",
    "subtitle": "A low-cost continuity tester designed around an extremely small test current and easy through-hole assembly.",
    "hero": "IMG_2060.jpeg",
    "tags": [
      "Analog Design",
      "Current Mirror",
      "555 Timer",
      "DFM"
    ],
    "status": "Client design for ~200 units",
    "overview": "A university professor wanted an inexpensive closed-circuit checker that could be reproduced in a roughly 200-unit teaching batch. The key requirement was to inject as little current as practical into the circuit under test while still producing an unmistakable audible indication for a low-impedance path. The client also requested through-hole construction for straightforward hand assembly.",
    "engineering": [
      "A 3 V coin cell biases an NPN current-mirror sensing stage through a 1 MΩ resistor, keeping the continuity-test current in the microamp range.",
      "When the external circuit closes, the mirrored sense signal is conditioned and amplified before enabling the annunciator path.",
      "A 555-based oscillator generates the piezo tone; transistor gating allows the buzzer return path only when the continuity condition is valid.",
      "Large banana jacks accommodate common lab leads, while the PCB intentionally favors simple, serviceable through-hole parts over minimum size."
    ],
    "focus": "The design turns a tiny electrical test signal into a strong human-readable output without forcing substantial current through the circuit being checked.",
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
    "next": "dual-gym-timer"
  },
  {
    "id": "dual-gym-timer",
    "number": "04",
    "category": "Client Work",
    "title": "Dual Garage-Gym Rest Timer",
    "subtitle": "Two independent two-minute timers built directly into a squat rack for repeatable rest intervals.",
    "hero": "gym timer installed.jpeg",
    "tags": [
      "ATTiny84",
      "Battery Charging",
      "Firmware",
      "3D CAD"
    ],
    "status": "Installed client hardware",
    "overview": "A gym client wanted a dead-simple way for two people to track rest periods while training together in a garage gym. The device contains two independent two-minute timers and mounts directly into an unused hole in the squat rack, keeping the controls visible without adding another loose accessory to the workout area.",
    "engineering": [
      "An ATTiny84A monitors two independent start buttons and runs the timing/state logic for both users.",
      "Green and blue status channels provide each timer's primary indication, with programmed blink/beep patterns at 30-second intervals and a longer audible cue at the two-minute mark.",
      "USB-C charging, a TP4056 charger and DW01A + 8205A battery-protection stage support a rechargeable single-cell battery.",
      "A transistor-driven piezo provides the buzzer output, and a custom 3D-printed enclosure locates the PCB, controls and indicators while mechanically integrating with the rack."
    ],
    "focus": "This project is a good example of product integration: the electronics are simple by design, but the usefulness comes from firmware behavior, mechanical fit and an interface that works naturally in the client's environment.",
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
    "next": "dmm-buffer"
  },
  {
    "id": "dmm-buffer",
    "number": "05",
    "category": "Client Work",
    "title": "Dual DMM Input Buffer",
    "subtitle": "A two-channel teaching board that demonstrates and corrects voltage-measurement loading error.",
    "hero": "dmm buffer irl.jpeg",
    "tags": [
      "Analog",
      "OPA2134",
      "Instrumentation",
      "Education"
    ],
    "status": "University teaching hardware",
    "overview": "A former professor requested a small board to help students see a measurement problem that is easy to miss: a digital multimeter is not an infinite-impedance observer. On high-resistance nodes, the meter itself becomes part of the circuit and can change the voltage being measured.",
    "engineering": [
      "Two OPA2134 channels are configured as unity-gain voltage followers. Each channel presents a high-impedance input to the circuit under test and a low-impedance output to the DMM.",
      "The buffer isolates the source node from the meter's input resistance, allowing the meter to read the node without materially changing the original divider ratio.",
      "For example, a 2 V source across a 1 MΩ / 1 MΩ divider ideally produces 1 V. A 10 MΩ DMM loads the lower resistor and pulls the observed result to about 0.952 V; the buffer makes that loading effect negligible.",
      "The compact two-channel PCB exposes separate source, power and meter connections so the same concept can be demonstrated side-by-side in a lab."
    ],
    "focus": "The board is intentionally simple because the circuit itself is the lesson: measurement equipment has electrical consequences, and buffering can separate the instrument from the node being observed.",
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
    "next": "modular-drone-platform"
  },
  {
    "id": "modular-drone-platform",
    "number": "06",
    "category": "Portfolio / R&D",
    "title": "Ground-Up Modular Drone Electronics Platform",
    "subtitle": "An ongoing 4S multirotor platform built around custom flight, power, RF, GNSS and ESC electronics.",
    "hero": "assy img 1.jpeg",
    "tags": [
      "STM32H7",
      "4-in-1 ESC",
      "RF",
      "Power Distribution"
    ],
    "status": "Ongoing R&D project",
    "overview": "This is an ongoing effort to build a 3-to-7-inch 4S multirotor from the electronics up. Outside of the motors, propellers and live-video subsystem, the major electrical assemblies are custom: flight control, power distribution, GNSS, RF and the 4-in-1 ESC architecture are all being developed as a coordinated system.",
    "engineering": [
      "The STM32H743-based flight-control board integrates multiple IMUs and barometers, a magnetometer, FRAM, SD storage, CAN, DSHOT outputs and dedicated interfaces for the RF, GNSS and system-level peripherals.",
      "The power-distribution board measures overall current and battery voltage, communicates system information to the flight controller and can independently switch a 12 V rail used to disable downstream motor-drive hardware.",
      "The compact GNSS board combines a u-blox M10 receiver with an IST8310 magnetometer; the RF board is based around the Semtech LR2021 for 915 MHz / 2.4 GHz experimentation.",
      "The 4-in-1 ESC uses a breakaway parent/daughter architecture so the high-current MOSFET power stage can be iterated independently from the MCU / gate-driver control hardware. Early PETG frames were used for fit checks before moving to carbon-fiber structure."
    ],
    "focus": "The project is less about assembling a drone from modules and more about system architecture: power, sensing, control, communications, packaging and serviceability are being designed together.",
    "gallery": [
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
    "heroImage": "assets/projects/modular-drone-platform/02.jpeg",
    "documents": [],
    "prev": "dmm-buffer",
    "next": "finch-voice-assistant",
    "documentNote": "Detailed schematics for the flight controller, power-distribution, GNSS, RF and 4-in-1 ESC electronics can be provided to qualified reviewers or prospective collaborators upon signing an NDA."
  },
  {
    "id": "finch-voice-assistant",
    "number": "07",
    "category": "Portfolio / R&D",
    "title": "Finch V1 / V2 Voice Assistant Hardware",
    "subtitle": "Custom ESP32-S3 hardware for a desktop voice assistant, evolving toward a distributed home sensor platform.",
    "hero": "finchv1 AI assistant assy AND finch v2 PCB.jpeg",
    "tags": [
      "ESP32-S3",
      "Audio",
      "Python",
      "Display + Camera"
    ],
    "status": "V1 functional / V2 in development",
    "overview": "Inspired by the movie Finch, the first revision became a homemade desktop voice assistant built around a custom ESP32-S3 audio board and a Python server. V2 expands the concept into a more capable endpoint with local storage, a larger display option, camera support and exposed expansion I/O.",
    "engineering": [
      "Finch V1 streams microphone audio to a Python service, which coordinates speech-to-text, an OpenAI API response, text-to-speech and the return audio stream to the embedded device.",
      "The custom board uses an I2S digital microphone, a MAX98357A-class speaker amplifier and a small OLED for connection and request-status feedback.",
      "Finch V2 adds an SD-card interface to remove the short-message limitation of the original RAM-based audio flow, plus an ILI9341 3.5-inch display option and SPI camera interface.",
      "The longer-term concept is a group of Wi-Fi endpoints that share one server for voice interaction, camera-based home monitoring, alerts and future GPIO-based add-ons."
    ],
    "focus": "The evolution from V1 to V2 shows an embedded product moving from a proof of concept toward a reusable hardware platform with better storage, UI and sensor expansion.",
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
    "heroImage": "assets/projects/finch-voice-assistant/02.jpeg",
    "documents": [
      {
        "label": "FINCHV2_ESP32 [SH1].pdf",
        "href": "assets/docs/finch-voice-assistant--FINCHV2_ESP32-SH1-.pdf"
      }
    ],
    "prev": "modular-drone-platform",
    "next": "stm32f401-dev-board"
  },
  {
    "id": "stm32f401-dev-board",
    "number": "08",
    "category": "Portfolio / R&D",
    "title": "STM32F401 Multilayer Development Board",
    "subtitle": "A personal milestone board that moved from simple two-layer PCBs into STM32 and multilayer layout.",
    "hero": "IMG_2081.jpeg",
    "tags": [
      "STM32F401",
      "Multilayer PCB",
      "USB-C",
      "SWD"
    ],
    "status": "Learning / portfolio build",
    "overview": "This board was the first major step beyond simple two-layer microcontroller projects. It was designed as a reusable STM32F401 development and breakout board, exposing the MCU I/O while adding the clocks, power, debug and protection circuitry needed to treat the microcontroller as a complete embedded platform rather than a module.",
    "engineering": [
      "USB-C provides the input power path with USB ESD protection, followed by 5 V distribution and an AMS1117 3.3 V regulator.",
      "The STM32F401RCT6 is supported by both a 25 MHz high-speed crystal and a 32.768 kHz low-speed crystal, local decoupling, BOOT0 control and an SWD programming header.",
      "GPIO is broken out around the board edge so the hardware can be reused as a general embedded-development platform.",
      "The project was also the first hands-on exposure to programming STM32 hardware outside the Arduino / ESP32 ecosystems and the first PCB design with more than two copper layers."
    ],
    "focus": "It is intentionally kept in the portfolio because it documents the transition from hobby-style controller boards into more disciplined MCU hardware design.",
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
    "next": "attiny-programmer"
  },
  {
    "id": "attiny-programmer",
    "number": "09",
    "category": "Portfolio / R&D",
    "title": "Quick ATTiny SMD Programmer",
    "subtitle": "A small fixture that turns an Arduino into an ISP programmer for surface-mount ATTiny84 / ATTiny85 devices.",
    "hero": "at tiny programmer irl.jpeg",
    "tags": [
      "ATTiny",
      "Arduino ISP",
      "SPI",
      "Programming Fixture"
    ],
    "status": "Functional utility board",
    "overview": "This programming fixture was built when surface-mount ATTiny devices were still the go-to choice for very small embedded projects. Instead of wiring an ISP setup on a breadboard each time, the board provides a repeatable way to program ATTiny84 and ATTiny85 packages directly from an Arduino-based programmer.",
    "engineering": [
      "The Arduino runs the ArduinoISP firmware and acts as the in-system programmer rather than the final application controller.",
      "Digital pins D10-D13 provide target reset plus the SPI programming signals used to shift programming commands and flash data into the ATTiny while it is held in reset.",
      "Local decoupling and a large capacitor on the Arduino reset line improve programming reliability by preventing unwanted programmer-board auto-reset behavior.",
      "The first revision uses solder pads for the target devices. A production-minded second revision would replace those pads with SOIC sockets so targets can be inserted and removed without repeated solder rework."
    ],
    "focus": "The board solved a real bench-workflow problem and also highlighted a DFM lesson: a fixture that works electrically is not necessarily optimized for repeated use.",
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
    "next": "rc-car-controller"
  },
  {
    "id": "rc-car-controller",
    "number": "10",
    "category": "Portfolio / R&D",
    "title": "ATTiny84 RC-Car Motor Controller",
    "subtitle": "An early custom controller for a four-motor skid-steer RC car using an ATTiny84 and dual H-bridge.",
    "hero": "rc car pcb irl.jpeg",
    "tags": [
      "ATTiny84",
      "DRV8833",
      "Brushed DC",
      "Early PCB"
    ],
    "status": "Functional early prototype",
    "overview": "This was the second custom PCB in the portfolio and an ambitious jump into motor control. The board was built for a four-wheel-drive RC car, with the left and right motor pairs controlled independently so direction and steering could be produced without a mechanical steering linkage.",
    "engineering": [
      "An ATTiny84 generates the control logic for a DRV8833 dual H-bridge, with each bridge channel driving one side of the vehicle.",
      "Four motor connectors fan the two H-bridge outputs out to the left and right motor pairs, while a header accepts a COTS RF receiver module used with the matching handheld transmitter.",
      "The electrical design did perform its intended control function, but the mechanical wheel-to-motor interface became the dominant failure point in the complete vehicle.",
      "Looking back, the two-layer layout and lack of a proper ground plane are clear early-design limitations. The project remains useful because it shows exactly what later PCB revisions improved: return paths, layout discipline, mechanics and design-for-assembly."
    ],
    "focus": "Rather than hiding the rough edges, this project is presented as an engineering retrospective - a working early design that makes the progression to later hardware obvious.",
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
    "next": "rf-development-board"
  },
  {
    "id": "rf-development-board",
    "number": "11",
    "category": "Portfolio / R&D",
    "title": "STM32WL Sub-GHz RF Development Board",
    "subtitle": "A documentation-heavy RF learning platform with custom front-end matching, dual MCUs and onboard sensors.",
    "hero": "RF brd IRL.jpeg",
    "tags": [
      "STM32WL55",
      "868 MHz RF",
      "Sensors",
      "Power Protection"
    ],
    "status": "Portfolio RF platform",
    "overview": "This board marked the point where the schematic and layout process became much more deliberate. The goal was to step outside familiar digital/embedded work and build a proper RF-oriented development platform while practicing datasheet-driven design, power partitioning, interface planning and professional schematic documentation.",
    "engineering": [
      "The primary STM32WL55CCU6 combines an MCU and sub-GHz radio. Its RF path includes selectable PA supply configuration, an RF switch and discrete matching networks centered around an 868 MHz antenna interface.",
      "A 32 MHz TCXO supports the RF clock domain and a 32.768 kHz crystal supports low-power timing. Dedicated decoupling and supply filtering separate sensitive RF rails.",
      "The board adds an MPU6050 IMU, MMC5983MA 3-axis magnetometer and W25Q16 flash memory for sensor/interface development over I2C and SPI.",
      "Battery input protection, buck-boost regulation, SWD/UART access and a secondary STM32F401RCT6 with exposed I/O turn the board into a broad embedded/RF experimentation platform rather than a single-purpose radio node."
    ],
    "focus": "The project is as much about engineering process as hardware: reading reference designs, organizing schematic sheets, treating RF and power as separate design problems and making interfaces explicit before layout.",
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
    "next": "modular-bldc-senior-project"
  },
  {
    "id": "modular-bldc-senior-project",
    "number": "12",
    "category": "Portfolio / R&D",
    "title": "Modular Stackable BLDC Motor-Control Platform",
    "subtitle": "A senior-design team project exploring a reusable ESC architecture with stackable motor channels, telemetry and protection.",
    "hero": "Final motor test stand.png",
    "tags": [
      "STM32G4",
      "BLDC",
      "CAN Bus",
      "Modular Hardware"
    ],
    "status": "Senior design team prototype",
    "overview": "The senior design project addressed a common limitation of electronic speed controllers: most are built for a fixed motor count and a narrow application. The team proposed a stackable architecture where identical motor-control modules could be added or removed while sharing a standardized power, control and communications backbone.",
    "engineering": [
      "The logic board centers on an STM32G474, selected for advanced motor-control timers, ADC resources and CAN connectivity. Separate driver/power boards handle the three BLDC half-bridges, gate-drive functions and motor-phase current paths.",
      "Current sensing, board-temperature sensing and driver fault reporting provide the feedback needed for telemetry and fault handling, while CAN links the motor modules to the higher-level diagnostic/control electronics.",
      "A companion RF/diagnostic subsystem and ESP32-S3 remote were developed to send commands and display per-motor telemetry such as current, RPM, temperature and fault state.",
      "The mechanical test platform was designed around four BLDC motors, a 4S/6S battery, multiple stacked PCBs and a protected enclosure so the electrical architecture could be exercised as a complete bench system."
    ],
    "focus": "The strongest part of this project is the system-level decomposition: high-current switching, real-time control, diagnostics, communications, power protection and mechanical stacking were treated as separate modules with defined interfaces.",
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
        "label": "FINCHV2_ESP32 [SH1].pdf",
        "href": "assets/docs/modular-bldc-senior-project--FINCHV2_ESP32-SH1-.pdf"
      },
      {
        "label": "MCU_EE400D.pdf",
        "href": "assets/docs/modular-bldc-senior-project--MCU_EE400D.pdf"
      }
    ],
    "prev": "rf-development-board",
    "next": "low-power-haptic-reminder"
  }
];
