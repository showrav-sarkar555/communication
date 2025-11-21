# Lecture 06: Bandwidth Utilization (Multiplexing)

## Overview
Multiplexing combines multiple signals into one composite signal for transmission over a common link.

---

## Multiplexing Basics

**MUX (Multiplexer):** Many-to-one (combines signals)  
**DEMUX (Demultiplexer):** One-to-many (separates signals)

**Link:** Physical path  
**Channel:** Portion of link carrying one transmission

---

## Types of Multiplexing

### 1. FDM (Frequency Division Multiplexing)

#### Characteristics
- **Analog** multiplexing technique
- All users share link **simultaneously**
- Each assigned different **frequency band**
- Medium bandwidth > sum of channel bandwidths

#### Guard Bands
- Strips of unused bandwidth between channels
- Prevents signal overlap/interference
- Reduces usable bandwidth

#### Example 6.1
Combine 3 voice channels (4 kHz each) into 12 kHz link (20-32 kHz):
- Channel 1: 20-24 kHz
- Channel 2: 24-28 kHz
- Channel 3: 28-32 kHz

#### Example 6.2
5 channels × 100 kHz + 4 guard bands × 10 kHz:
- **Total = 500 + 40 = 540 kHz**

#### Applications
- AM/FM radio
- Cable TV
- First-generation cellular

---

### 2. WDM (Wavelength Division Multiplexing)

#### Characteristics
- Special case of FDM for **optical fibers**
- Uses **prisms** to combine/separate light
- Very high frequencies (THz range)

#### Applications
- SONET networks
- Fiber-optic communications
- Long-haul telecommunications

---

### 3. TDM (Time Division Multiplexing)

#### Characteristics
- **Digital** multiplexing
- Time shared instead of frequency
- Each connection gets time slots

---

#### A. Synchronous TDM

**Features:**
- **Fixed** time slot allocation
- Each input has slot even if no data (empty slots)
- Simple but inefficient

**Frame:**
- One complete cycle of time slots
- Frame duration = input unit duration

#### Example 6.5
- 3 inputs, each 1 kbps
- 1 bit multiplexed at a time

**Solution:**
- Input slot duration = 1 ms
- Output slot duration = 1/3 ms
- **Frame duration = 1 ms**

**Data Rate Management:**

1. **Multilevel Multiplexing**
   - Use when data rates are multiples
   - Create hierarchy of multiplexers

2. **Multiple-Slot Allocation**
   - Give faster sources multiple slots per frame
   - Proportional to data rate

3. **Pulse Stuffing (Bit Padding)**
   - Add dummy bits to slower sources
   - Make all sources match highest rate

---

#### B. Statistical TDM

**Features:**
- **Dynamic** slot allocation
- Slots < Number of inputs
- Only active inputs get slots
- Requires addressing

**Advantages:**
- Better bandwidth efficiency
- No wasted slots

**Disadvantages:**
- More complex
- Addressing overhead
- Need buffer for temporary congestion

**Slot Size:**
- Must balance data vs address overhead
- Larger slots = less overhead percentage

**Bandwidth:**
- Capacity < sum of input capacities
- Based on statistical sharing

---

## Spread Spectrum

### Purpose
- **Privacy:** Prevent eavesdropping
- **Anti-jamming:** Resist interference
- **Security:** Military, commercial use

### Principle
- Spread signal over **wider** bandwidth
- **BSS >> B** (spread bandwidth >> original bandwidth)

### Requirements
1. **Redundancy:** Allocated BW > needed BW
2. **Independence:** Spreading after signal creation

---

### 1. FHSS (Frequency-Hopping Spread Spectrum)

#### Process
- Use M different carrier frequencies
- **Hop** between frequencies in pseudorandom sequence
- Frequency changes at hopping periods

#### Characteristics
- **Bandwidth:** BFHSS >> B
- Intruder can't intercept (doesn't know sequence)
- Jammer affects only current frequency

#### Applications
- **Bluetooth** (79 channels, 1600 hops/sec)
- Military communications
- Some wireless LANs

---

### 2. DSSS (Direct-Sequence Spread Spectrum)

#### Process
- Each data bit replaced by **chip sequence**
- XOR data with PN (pseudonoise) code
- Spreads signal in time domain

#### Characteristics
- **Chip rate >> bit rate**
- Receiver uses same PN code to recover data
- Bandwidth determined by chip rate

#### Applications
- **Wi-Fi (802.11b)** - 11 Mbps
- **GPS** (Global Positioning System)
- **CDMA** cellular

---

## Exam Focus Points

✓ **Differentiate** FDM, TDM, and spread spectrum  
✓ **Calculate** bandwidth with guard bands (Example 6.2)  
✓ **Understand** frame duration in TDM  
✓ **Compare** synchronous vs statistical TDM  
✓ **Know** applications of each multiplexing type  
✓ **Explain** data rate management techniques  
✓ **Describe** FHSS and DSSS differences  
✓ **Identify** when to use each technique  

---

## Comparison Table

| Feature | FDM | Synchronous TDM | Statistical TDM |
|---------|-----|-----------------|-----------------|
| Type | Analog | Digital | Digital |
| Division | Frequency | Time | Time |
| Slots | Always full | May be empty | Only when needed |
| Efficiency | Medium | Low | High |
| Addressing | No | No | Yes |
| Complexity | Low | Low | High |
| Bandwidth | Sum + guards | Highest input | < Sum of inputs |

---

## Formulas

**FDM Total Bandwidth:**
```
B_total = Σ(B_channel) + Σ(Guard bands)
```

**TDM Frame Duration:**
```
Frame duration = Input unit duration
```

**TDM Output Slot:**
```
Output slot = Input slot / Number of inputs
```

**Statistical TDM:**
```
Capacity < Σ(Input capacities)
```
