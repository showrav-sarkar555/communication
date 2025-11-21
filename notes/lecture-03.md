# Lecture 03: Physical Layer & Signals

## Overview
The physical layer transforms data into electromagnetic signals for transmission through various media.

---

## Analog vs Digital

### Data Types
- **Analog Data:** Continuous values (voice, temperature)
- **Digital Data:** Discrete values (computer memory, 0s and 1s)

### Signal Types
- **Analog Signal:** Infinite values in a range (sine wave)
- **Digital Signal:** Limited defined values (typically 0 and 1)

---

## Periodic vs Non-Periodic Signals

### Periodic Signals
- Complete pattern repeats at regular intervals
- **Period (T):** Time for one complete cycle (seconds)
- **Cycle:** One complete pattern
- Used in **analog transmission**

### Non-Periodic (Aperiodic) Signals
- No repeating pattern
- Common in **digital transmission**

**In Data Communications:**
- Periodic **Analog** signals (carrier waves)
- Non-periodic **Digital** signals (data)

---

## Sine Wave Characteristics

### 1. Peak Amplitude
- **Definition:** Maximum signal strength
- **Units:** Volts (V)
- **Significance:** Proportional to energy carried
- **Symbol:** A

### 2. Frequency
- **Definition:** Number of cycles per second
- **Units:** Hertz (Hz)
  - kHz = 10³ Hz
  - MHz = 10⁶ Hz
  - GHz = 10⁹ Hz
- **Formula:** f = 1/T
- **Relationship:** High frequency = rapid change

### 3. Phase
- **Definition:** Position of waveform relative to time 0
- **Units:** Degrees (°) or Radians
- **Examples:**
  - 0° - Starts at zero, increasing
  - 90° - Starts at peak, decreasing
  - 180° - Starts at zero, decreasing

### 4. Wavelength (λ)
- **Definition:** Distance signal travels in one period
- **Formula:** λ = propagation speed × period = c/f
  - c = 3 × 10⁸ m/s (speed of light in vacuum)

---

## Time Domain vs Frequency Domain

### Time Domain
- **Plot:** Amplitude vs Time
- Shows signal variation over time
- Good for simple signals

### Frequency Domain
- **Plot:** Amplitude vs Frequency
- Shows frequency components
- **More compact** for composite signals
- Each sine wave → single spike

**Fourier Analysis:**
- Any composite signal = sum of simple sine waves
- Different frequencies, amplitudes, and phases

---

## Bandwidth

**Definition:** Range of frequencies contained in signal

**Formula:** Bandwidth = f_highest - f_lowest

**Types:**
- **Analog Bandwidth:** Measured in Hz
- **Digital Bandwidth:** Measured in bps (bits per second)

### Example 3.12
- Bandwidth = 200 kHz
- Middle frequency = 140 kHz
- Lowest = 140 - 100 = **40 kHz**
- Highest = 140 + 100 = **240 kHz**

---

## Digital Signals

### Properties
- **Bit Rate:** Number of bits per second (bps)
- **Bit Interval:** Duration of 1 bit (seconds)

### Signal Levels
**If signal has L levels:**
- Each level needs **log₂L bits**

**Example 3.16:**
- 8 levels → log₂8 = **3 bits per level**

### Example 3.18: Bit Rate Calculation
Download 100 pages/second:
- 100 pages × 24 lines × 80 characters × 8 bits
- = **1,536,000 bps = 1.536 Mbps**

---

## Baseband Transmission

**Definition:** Send digital signal without converting to analog

**Requirements:**
- **Low-pass channel** (bandwidth starts from zero)
- Dedicated medium
- Wide bandwidth for good quality

**Bandwidth-Bit Rate Relationship:**

**Minimum Bandwidth:**
- B_min = bit rate / 2

**Better Quality:**
- Use first 3 harmonics: B = 3 × (bit rate / 2)
- Use first 5 harmonics: B = 5 × (bit rate / 2)

### Example 3.22
Send 1 Mbps:
- Minimum: B = 1M / 2 = **500 kHz**
- Better: B = 3 × 500 kHz = **1.5 MHz**
- Best: B = 5 × 500 kHz = **2.5 MHz**

### Example 3.23
Channel bandwidth = 100 kHz:
- Max bit rate = 2 × 100 kHz = **200 kbps**

---

## Broadband Transmission (Modulation)

**Definition:** Convert digital signal to analog before transmission

**Used When:**
- Bandpass channel available
- Bandwidth doesn't start from zero

**Process:** Digital signal modulates a carrier signal

---

## Transmission Impairments

### 1. Attenuation
- **Cause:** Loss of energy over distance
- **Effect:** Signal weakens
- **Measure:** Decibel (dB)

**Formula:** dB = 10 log₁₀(P₂/P₁)
- Positive dB → Gain (amplification)
- Negative dB → Loss (attenuation)

### 2. Distortion
- **Cause:** Different frequency components travel at different speeds
- **Effect:** Signal shape changes
- **Impact:** Timing errors

### 3. Noise

**Types:**

#### Thermal Noise
- Random electron motion in conductors
- Always present
- Can't be eliminated

#### Crosstalk
- Signal from one line interferes with another
- Common in twisted-pair cables

#### Impulse Noise
- Sudden spikes (lightning, switching)
- Brief but high amplitude

### Signal-to-Noise Ratio (SNR)
**Formula:** SNR_dB = 10 log₁₀(Signal Power / Noise Power)

**Higher SNR = Better Quality**

---

## Shannon's Capacity & Nyquist Formula

### Nyquist Bit Rate (Noiseless Channel)
**Formula:** Bit Rate = 2 × Bandwidth × log₂L
- L = number of signal levels

### Shannon Capacity (Noisy Channel)
**Formula:** Capacity = Bandwidth × log₂(1 + SNR)

**Key Point:** Shannon capacity is theoretical maximum

---

## Example 3.28: Attenuation

Signal power decreases from P₁ to P₂:
- Calculate: 10 log₁₀(P₂/P₁)
- If P₂ < P₁, result is negative (loss)

---

## Exam Focus Points

✓ **Distinguish** analog/digital data vs signals  
✓ **Calculate** frequency from period: f = 1/T  
✓ **Understand** phase relationships (0°, 90°, 180°)  
✓ **Apply** bandwidth formulas  
✓ **Calculate** bit rates and baud rates  
✓ **Use** Nyquist and Shannon formulas  
✓ **Identify** types of impairments  
✓ **Calculate** dB values for attenuation  
✓ **Know** baseband vs broadband differences  

---

## Quick Formulas Reference

| Concept | Formula |
|---------|---------|
| Frequency | f = 1/T |
| Period | T = 1/f |
| Wavelength | λ = c/f |
| Bandwidth | BW = f_max - f_min |
| Nyquist | Bit Rate = 2 × B × log₂L |
| Shannon | C = B × log₂(1 + SNR) |
| dB | dB = 10 log₁₀(P₂/P₁) |
| SNR | SNR_dB = 10 log₁₀(S/N) |
| Baseband BW | B_min = N/2 |
