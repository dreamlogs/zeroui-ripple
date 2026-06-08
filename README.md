# Zero UI Ripple

The ZeroUI Ripple Engine operates on a three-tier data pipeline designed to bridge low-level physical telemetry with structural interaction design. 

## System Architecture

1. **Hardware (C++):** The core `MotionTracker` engine provides the initial telemetry processing tier, converting raw buffer inputs into actionable variance metrics.
2. **Processing (Python):** Localized backend filtering of subcarrier amplitude metrics for proximity mapping.
3. **Visualization (JSX):** After Effects rendering of spatial JSON coordinates to drive procedural mesh animation.

## Project Structure
- `/engine`: C++ core logic for signal processing and telemetry.
- `/scripts`: Bridge and rendering logic (bridge.js, generateMesh.jsx).
