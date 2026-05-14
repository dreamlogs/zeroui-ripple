## System Architecture
The ZeroUI Ripple Engine operates on a three-tier data pipeline:

1. **Hardware (C++):** Two ESP32 nodes capture WiFi Channel State Information (CSI) at 2.4GHz. 
2. **Processing (Python):** A local script filters raw subcarrier amplitude to calculate human proximity/position.
3. **Visualization (JSX):** An After Effects script pulls real-time JSON coordinates to drive a procedural mesh.

## Interaction Map
- **Resolution:** 1080x566
- **Input:** CSI Amplitude Variance
- **Output:** Procedural "Ripple" Origin
