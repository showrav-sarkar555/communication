# Lecture 04: Digital Transmission (Line Coding)

## Overview
Line coding is the process of converting digital data into digital signals for transmission.

---

## Signal Element vs Data Element

### Data Element
- Smallest unit of information
- **The bit** (0 or 1)
- What we want to send

### Signal Element
- Shortest unit (timewise) of a digital signal
- **The carrier** of data elements
- How we send it

**Relationship:** r = data elements per signal element

---

## Data Rate vs Signal Rate

### Data Rate (Bit Rate)
- **Symbol:** N
- **Units:** bps (bits per second)
- Number of bits transmitted per second

### Signal Rate (Baud Rate)
- **Symbol:** S
- **Units:** baud
- Number of signal elements per second
- Also called **modulation rate** or **pulse rate**

**Formula:** S = c × N × (1/r)
- c = case factor (0 to 1)
- Average case: c = 1/2

**Goal:** ↑ Data Rate, ↓ Signal Rate

### Example 4.1
- r = 1 (one data element per signal element)
- Bit rate = 100 kbps
- c = 1/2 (average)
- Baud rate = (1/2) × 100k × 1 = **50 kbaud**

---

## Bandwidth

**Digital Signal:** Infinite theoretical bandwidth

**Effective Bandwidth:** Finite and proportional to signal rate

**Formulas:**
- Minimum: B_min = c × N × (1/r)
- Maximum Data Rate: N_max = (1/c) × B × r

### Example 4.2: Nyquist Formula Check
- Nyquist: N_max = 2 × B × log₂L
- L levels → log₂L bits per level
- If c = 1/2 and 1 level = 1 signal element
- Both formulas agree! ✓

---

## Line Coding Characteristics

### 1. Baseline Wandering
- **Problem:** Long strings of 0s or 1s cause drift
- **Effect:** Receiver can't decode correctly
- **Solution:** Good line coding prevents this

### 2. DC Components
- **Problem:** Constant voltage creates low frequencies near zero
- **Effect:** 
  - Can't pass through transformers/capacitors
  - Wastes energy
  - Causes baseline wandering
- **Solution:** Eliminate DC component

### 3. Self-Synchronization
- **Need:** Receiver clock must match sender clock
- **Solution:** Include timing information in signal
- **How:** Transitions alert receiver to pulse timing

### 4. Error Detection
- **Feature:** Some schemes detect transmission errors
- **Example:** Violations of encoding rules

### 5. Immunity to Noise
- **Goal:** Make signal resistant to interference
- **Method:** Encoding techniques that distinguish noise

### 6. Complexity
- **Trade-off:** More features = more complex circuitry

---

## Line Coding Schemes

### Classification
1. **Unipolar** - One voltage level
2. **Polar** - Two voltage levels (+, -)
3. **Bipolar** - Three voltage levels (+, 0, -)

---

## 1. Unipolar

**Characteristics:**
- Only one polarity (usually positive)
- Rarely used today
- High DC component
- Baseline wandering

**Example:** 
- Bit 1 → Positive voltage
- Bit 0 → Zero voltage

---

## 2. Polar Schemes

### A. NRZ (Non-Return to Zero)

#### NRZ-L (NRZ-Level)
- **Encoding:** Signal level depends on bit value
  - Bit 0 → Positive voltage
  - Bit 1 → Negative voltage (or vice versa)
- **Problems:**
  - Baseline wandering with long 0s or 1s
  - Synchronization issues
  - Polarity reversal causes errors

**Baud Rate:** S_ave = N (worst case)

#### NRZ-I (NRZ-Invert)
- **Encoding:** Invert signal if bit = 1, no change if bit = 0
- **Advantages:**
  - Solves polarity problem
  - Better synchronization for 1s
- **Problems:**
  - Still has issues with long strings of 0s

**Baud Rate:** S_ave = N/2 (average)

---

### B. RZ (Return to Zero)

**Characteristics:**
- Uses three levels: +, 0, -
- Signal returns to zero at middle of bit interval
- **Bit 1:** Positive then zero
- **Bit 0:** Negative then zero

**Advantages:**
- Better synchronization
- No DC component

**Disadvantages:**
- Requires more bandwidth
- S_ave = N (higher baud rate)

---

### C. Manchester Encoding

**Used in:** Ethernet (10 Mbps)

**Encoding:**
- **Bit 0:** High-to-low transition at middle
- **Bit 1:** Low-to-high transition at middle

**Characteristics:**
- Always has transition at bit middle (sync)
- No baseline wandering
- No DC component

**Disadvantages:**
- Bandwidth = 2 × NRZ bandwidth
- B_min = N (requires twice the bandwidth)

**Baud Rate:** S_ave = 2N

---

### D. Differential Manchester

**Used in:** Token Ring networks

**Encoding:**
- Transition at middle = synchronization (always)
- **Bit 0:** Transition at beginning
- **Bit 1:** No transition at beginning

**Advantages:**
- Better noise immunity than Manchester
- No polarity issues

**Disadvantages:**
- Same high bandwidth as Manchester
- B_min = N

**Baud Rate:** S_ave = 2N

---

## 3. Bipolar Schemes

### AMI (Alternate Mark Inversion)

**Encoding:**
- **Bit 0:** Always zero voltage
- **Bit 1:** Alternating positive and negative

**Advantages:**
- No DC component
- No baseline wandering
- Simple error detection (two consecutive same-polarity pulses)

**Disadvantages:**
- No self-synchronization (long strings of 0s)
- No built-in timing

**Baud Rate:** S_ave = N/2

### Pseudoternary
- Reverse of AMI
- Bit 0 alternates, bit 1 is zero

---

## 4. Multilevel Schemes (mBnL)

**Notation:** m bits → n signal elements with L levels

**Formula:** 
- Data symbols: 2^m
- Signal elements: L^n
- Need: 2^m ≤ L^n

### 2B1Q (Two Binary, One Quaternary)

**Encoding:** 2 bits → 1 signal with 4 levels

| Bits | Voltage |
|------|---------|
| 00   | -3      |
| 01   | -1      |
| 10   | +3      |
| 11   | +1      |

**Advantages:**
- Reduces baud rate by half
- S = N/2
- Better bandwidth efficiency

**Used in:** ISDN (Integrated Services Digital Network)

---

### 8B6T (Eight Binary, Six Ternary)

**Encoding:** 8 bits → 6 signal elements with 3 levels

**Check:** 2^8 = 256 symbols, 3^6 = 729 signals ✓
- Extra signals used for error detection

---

### 4B/5B Block Coding

**Used before:** NRZ-I encoding

**Process:**
1. Group data into 4-bit blocks
2. Encode as 5-bit codes
3. Send using NRZ-I

**Purpose:**
- Ensures maximum 3 consecutive 0s
- Provides synchronization
- 20% overhead

---

## Transmission Modes

### Asynchronous Transmission
- **Timing:** Character by character
- **Frame:** Start bit + data + stop bit(s)
- **Used in:** Serial ports, older modems
- **Advantage:** Simple
- **Disadvantage:** Overhead per character

### Synchronous Transmission
- **Timing:** Block of bits
- **Frame:** Preamble + data block
- **Used in:** High-speed networks
- **Advantage:** Efficient
- **Disadvantage:** Needs precise synchronization

---

## Scrambling

**Purpose:** Replace sequences that would cause problems

**Techniques:**
- **B8ZS** (Bipolar with 8-Zero Substitution)
- **HDB3** (High-Density Bipolar-3)

---

## Exam Focus Points

✓ **Understand** data element vs signal element  
✓ **Calculate** baud rate from bit rate: S = c × N × (1/r)  
✓ **Know** characteristics of each scheme  
✓ **Draw** timing diagrams for NRZ-L, NRZ-I, Manchester, AMI  
✓ **Compare** bandwidth requirements  
✓ **Identify** DC component issues  
✓ **Explain** baseline wandering  
✓ **Apply** multilevel coding formulas  
✓ **Recognize** when to use each scheme  

---

## Comparison Table

| Scheme | Levels | DC | Sync | Bandwidth | Used In |
|--------|--------|-----|------|-----------|---------|
| NRZ-L | 2 | Yes | Poor | B/2 | - |
| NRZ-I | 2 | Yes | Better | B/2 | USB |
| Manchester | 2 | No | Excellent | B | Ethernet |
| Diff. Manchester | 2 | No | Excellent | B | Token Ring |
| AMI | 3 | No | Poor | B/2 | T1 lines |
| 2B1Q | 4 | Variable | Good | B/2 | ISDN |

**Note:** B = bit rate
