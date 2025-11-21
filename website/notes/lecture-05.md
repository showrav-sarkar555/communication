# Lecture 05: Analog Transmission & Modulation

## Overview
Converting digital data to analog signals for transmission over bandpass channels.

---

## Key Concepts

### Carrier Signal
- **High-frequency** base signal
- Carries information signal
- Receiver tuned to carrier frequency
- **Modulation:** Changing carrier characteristics (amplitude, frequency, or phase)

---

## Bit Rate vs Baud Rate

**Data Rate (Bit Rate):** N (bps)  
**Signal Rate (Baud Rate):** S (baud)

**Formula:** S = N × (1/r) where r = log₂L

### Example 5.2
- Bit rate = 8000 bps
- Baud rate = 1000 baud
- Find r and L

**Solution:**
- S = N/r → 1000 = 8000/r → **r = 8**
- r = log₂L → 8 = log₂L → **L = 256 levels**

---

## Digital-to-Analog Modulation

### 1. ASK (Amplitude Shift Keying)

#### Characteristics
- **Varies:** Amplitude of carrier
- **Binary ASK (OOK):** On-Off Keying
  - Bit 1 → Carrier present
  - Bit 0 → No carrier (or low amplitude)

#### Bandwidth Formula
**B = (1 + d) × S**
- fc = carrier frequency
- 0 < d < 1 (depends on modulation/filtering)

#### Example 5.3
- Available bandwidth: 100 kHz (200-300 kHz)
- d = 1
- Carrier: fc = 250 kHz (middle)
- Bit rate: B = (1+d) × S = 100 kHz → S = 50 kbaud
- With r = 1: **Bit rate = 50 kbps**

**Disadvantages:**
- Susceptible to noise (noise affects amplitude)
- Not very efficient

---

### 2. FSK (Frequency Shift Keying)

#### Binary FSK (BFSK)
- **Uses:** Two carrier frequencies f₁ and f₂
- **Bit 0:** Frequency f₁
- **Bit 1:** Frequency f₂

#### Bandwidth Formula
**Multilevel FSK:** B = L × S
- L = number of different frequencies

#### Example 5.6
- Send 3 bits at a time
- Bit rate = 3 Mbps
- Carrier = 10 MHz

**Solution:**
- L = 2³ = **8 levels**
- Baud rate: S = 3M/3 = **1 Mbaud**
- Bandwidth: B = 8 × 1M = **8 MHz**

**Advantages:**
- Less susceptible to noise than ASK
- Widely used (modems, radio)

**Disadvantages:**
- Requires larger bandwidth than ASK
- Needs two carrier frequencies

---

### 3. PSK (Phase Shift Keying)

#### Binary PSK (BPSK)
- **Varies:** Phase of carrier
- **Bit 0:** Phase 0°
- **Bit 1:** Phase 180°

#### Characteristics
- **Most robust** against noise
- Phase changes don't affect amplitude
- Doesn't need two carriers like FSK

**Disadvantage:** Needs sophisticated hardware

---

### 4. QPSK (Quadrature PSK)

#### Features
- **4 phases:** 0°, 90°, 180°, 270°
- **2 bits per signal element** (r = 2)
- Two separate BPSK modulations:
  - In-phase component
  - Quadrature (out-of-phase) component

#### Bandwidth Formula
**B = S × (1 + d)**

With d = 0: **B = S**

#### Example 5.7
- Transmit at 12 Mbps using QPSK
- d = 0

**Solution:**
- r = 2 (QPSK carries 2 bits)
- S = N/r = 12M/2 = **6 Mbaud**
- B = S = **6 MHz**

**Advantage:** Half the bandwidth of BPSK for same bit rate

---

## Constellation Diagrams

**Purpose:** Define amplitude and phase of signal elements

### Components
- **I-axis:** In-phase component (horizontal)
- **Q-axis:** Quadrature component (vertical)
- **Points:** Represent signal elements

### Example 5.8

**OOK (On-Off Keying):**
- 2 points on I-axis

**BPSK:**
- 2 points: 0° and 180°

**QPSK:**
- 4 points: 45°, 135°, 225°, 315°
- Evenly spaced

**Importance:** Greater distance between points = better noise immunity

---

## QAM (Quadrature Amplitude Modulation)

### Characteristics
- **Combines** ASK and PSK
- Varies **both amplitude and phase**
- Higher data rates possible

### Common QAM Schemes
- **QAM-16:** 16 combinations (4 bits per symbol)
- **QAM-64:** 64 combinations (6 bits per symbol)
- **QAM-256:** 256 combinations (8 bits per symbol)

**Used in:** Cable modems, Wi-Fi, digital TV

---

## Analog-to-Analog Modulation

### Why Modulate Analog?
- Only bandpass channel available
- Frequency allocation (radio/TV)
- Multiplexing multiple signals

---

### 1. AM (Amplitude Modulation)

#### Characteristics
- Carrier amplitude varies with message signal
- **Bandwidth:** B = 2 × B_message

#### AM Band Allocation
- **AM Radio:** 530-1700 kHz
- Each station: 10 kHz bandwidth
- Carrier frequencies separated by 10 kHz

**Advantages:**
- Simple implementation
- Low cost receivers

**Disadvantages:**
- Susceptible to noise
- Power inefficient

---

### 2. FM (Frequency Modulation)

#### Characteristics
- Carrier frequency varies with message signal
- Amplitude remains constant
- **Bandwidth:** B = 2 × (Δf + B_message)
  - Δf = frequency deviation

#### FM Band Allocation
- **FM Radio:** 88-108 MHz
- Each station: 200 kHz bandwidth
- Better quality than AM

**Advantages:**
- Noise resistant
- Better quality
- Captures weaker signals

**Disadvantages:**
- Larger bandwidth
- More complex circuitry

---

### 3. PM (Phase Modulation)

#### Characteristics
- Carrier phase varies with message signal
- Similar to FM (considered FM variation)
- Less common than AM/FM

**Used in:** Some digital communication systems

---

## Comparison Summary

| Modulation | Varies | Noise Immunity | Bandwidth | Complexity |
|------------|--------|----------------|-----------|------------|
| ASK | Amplitude | Poor | Low | Low |
| FSK | Frequency | Good | Medium | Medium |
| PSK | Phase | Excellent | Low | High |
| QAM | Amp + Phase | Very Good | Medium | High |
| AM | Amplitude | Poor | 2×Bm | Low |
| FM | Frequency | Excellent | High | Medium |

---

## Exam Focus Points

✓ **Understand** difference between ASK, FSK, PSK  
✓ **Calculate** bandwidth for each modulation type  
✓ **Use** formulas: S = N/r, B = (1+d)×S, B = L×S  
✓ **Draw** constellation diagrams  
✓ **Explain** QPSK advantage over BPSK  
✓ **Know** QAM combines ASK and PSK  
✓ **Compare** AM vs FM characteristics  
✓ **Apply** to real-world examples (radio, TV)  

---

## Formula Quick Reference

| Type | Formula |
|------|---------|
| Baud Rate | S = N × (1/r) where r = log₂L |
| ASK Bandwidth | B = (1 + d) × S |
| FSK Bandwidth | B = L × S (multilevel) |
| PSK/QPSK Bandwidth | B = S × (1 + d) |
| AM Bandwidth | B = 2 × B_message |
| FM Bandwidth | B = 2 × (Δf + B_message) |
