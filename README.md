# Zero UI Ripple

The ZeroUI Ripple Engine operates on a three-tier data pipeline designed to bridge low-level physical telemetry with structural interaction design. This module functions as a standalone system engineered to feed cleanly into the master [Smart Bench](https://github.com/dreamlogs/smart_bench) ecosystem.

## System Architecture

The data pipeline is divided into three distinct abstraction layers:

1. **Hardware (C++):** Two ESP32 nodes capture raw WiFi Channel State Information (CSI) at 2.4GHz to monitor local physical disruptions.
2. **Processing (Python):** A localized backend script processes and filters raw subcarrier amplitude metrics to calculate real-time human proximity and position vectors.
3. **Visualization (JSX):** An After Effects rendering script pulls continuous JSON spatial coordinates to drive a procedurally animated mesh.

## Interaction Parameters

* **Resolution:** 1080x566
* **Input Stream:** WiFi CSI Amplitude Variance
* **Output Vector:** Procedural "Ripple" Spatial Origin
