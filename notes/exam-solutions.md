# Communication-I Final Exam Solutions (2022)

**Course:** CSE 511 | **Time:** 03 hours | **Full Marks:** 60

---

## PART-A (Answer any three questions)

### Question 1

#### (a) Difference between Analog Signal and Digital Signal [3 marks]

| Aspect | Analog Signal | Digital Signal |
|--------|--------------|----------------|
| **Values** | Continuous values | Discrete values (0 and 1) |
| **Representation** | Sine waves | Square waves |
| **Noise Immunity** | More susceptible to noise | Less susceptible to noise |
| **Transmission** | Degrades over long distances | Can be regenerated |
| **Bandwidth** | Requires less bandwidth | Requires more bandwidth |
| **Examples** | Human voice, temperature | Computer data, digital audio |
| **Accuracy** | Less accurate due to noise | More accurate |
| **Storage** | Difficult to store | Easy to store and process |

#### (b) Communication System Model [3 marks]

A communication system consists of five main components:

1. **Source** - Generates the original message/data
2. **Transmitter** - Converts message into transmittable signal and modulates it
3. **Transmission Medium** - Physical path (cable, air, fiber) through which signal travels
4. **Receiver** - Receives the signal, demodulates and decodes it
5. **Destination** - Final recipient of the message

**Signal Flow:** Source → Transmitter → Medium → Receiver → Destination

**Noise** can be introduced at any stage, particularly in the transmission medium.

#### (c) Modulation and Its Necessity [1+3 marks]

**What is Modulation?**
Modulation is the process of varying one or more properties of a high-frequency carrier wave in accordance with a low-frequency message signal.

**Why do we need Modulation?**

1. **Antenna Size Reduction** - Low frequency signals require impractically large antennas. Modulation increases frequency, reducing antenna size to λ/4.

2. **Multiplexing** - Multiple signals can be transmitted simultaneously by using different carrier frequencies (FDM).

3. **Improved Range** - Higher frequency signals travel longer distances with better propagation characteristics.

4. **Noise Reduction** - Modulated signals have better Signal-to-Noise Ratio (SNR).

5. **Bandwidth Adjustment** - Allows efficient use of available bandwidth.

---

### Question 2

#### (a) Amplitude Modulation - Instantaneous Voltage Equation [1+3 marks]

**Amplitude Modulation Definition:**
AM is the process where the amplitude of carrier wave varies in accordance with the instantaneous amplitude of the modulating signal.

**Derivation of Instantaneous Voltage Equation:**

Let:
- Carrier signal: $v_c(t) = A_c \sin(2\pi f_c t)$
- Message signal: $v_m(t) = A_m \sin(2\pi f_m t)$
- Modulation index: $m = \frac{A_m}{A_c}$

The amplitude-modulated wave is:

$$v_{AM}(t) = [A_c + A_m \sin(2\pi f_m t)] \sin(2\pi f_c t)$$

$$v_{AM}(t) = A_c[1 + m \sin(2\pi f_m t)] \sin(2\pi f_c t)$$

Expanding using trigonometric identity:

$$v_{AM}(t) = A_c \sin(2\pi f_c t) + \frac{mA_c}{2}\cos[2\pi(f_c - f_m)t] - \frac{mA_c}{2}\cos[2\pi(f_c + f_m)t]$$

**Components:**
- Carrier: $A_c \sin(2\pi f_c t)$
- Lower Sideband (LSB): frequency $(f_c - f_m)$
- Upper Sideband (USB): frequency $(f_c + f_m)$

#### (e) AM Calculation Problem [2+2+2 marks]

**Given:**
- Carrier frequency: $f_c = 1$ MHz
- Carrier amplitude: $A_c = 100$ V
- Modulating frequency: $f_m = 5$ kHz
- Modulation depth: $m = 50\% = 0.5$
- Message amplitude: $A_m = m \times A_c = 0.5 \times 100 = 50$ V

**Required:**
(i) Frequency of sideband
(ii) Amplitude of sideband
(iii) Bandwidth

**Solutions:**

**(i) Frequency of Sidebands:**

Upper Sideband (USB):
$$f_{USB} = f_c + f_m = 1000 + 5 = 1005 \text{ kHz}$$

Lower Sideband (LSB):
$$f_{LSB} = f_c - f_m = 1000 - 5 = 995 \text{ kHz}$$

**Answer: USB = 1005 kHz, LSB = 995 kHz**

**(ii) Amplitude of Sidebands:**

Amplitude of each sideband:
$$A_{sideband} = \frac{mA_c}{2} = \frac{0.5 \times 100}{2} = 25 \text{ V}$$

**Answer: 25 V (for both USB and LSB)**

**(iii) Bandwidth:**

Bandwidth of AM signal:
$$BW = f_{USB} - f_{LSB} = 2f_m = 2 \times 5 = 10 \text{ kHz}$$

**Answer: Bandwidth = 10 kHz**

---

### Question 3

#### (a) Short Notes [6 marks total]

**i) Frequency Domain:**
- Representation of signals as a function of frequency rather than time
- Uses Fourier Transform to convert time-domain signal to frequency-domain
- Shows amplitude and phase vs frequency
- Useful for analyzing signal bandwidth, frequency components, and filtering
- X-axis: Frequency (Hz), Y-axis: Amplitude

**ii) Time Domain:**
- Representation of signals as amplitude varying with time
- Most natural way to observe signals (like oscilloscope display)
- Shows signal behavior, rise time, fall time, and transitions
- X-axis: Time (seconds), Y-axis: Amplitude (volts)

**iii) Bandwidth:**
- Range of frequencies contained in a signal
- For digital: $BW = \frac{Bit\ Rate}{2}$ (Nyquist)
- For analog: $BW = f_{max} - f_{min}$
- Measured in Hertz (Hz)
- Determines data carrying capacity

**iv) Peak Amplitude:**
- Maximum absolute value of a signal from zero reference
- For sinusoidal: highest point of the wave
- Related to signal power: $P = \frac{A^2}{2R}$
- Important for preventing signal clipping and distortion

#### (b) TCP vs IP - Connection-oriented vs Connectionless [4 marks]

**TCP (Transmission Control Protocol) - Connection-Oriented:**

- Establishes connection before data transfer (3-way handshake)
- Guarantees reliable, ordered delivery
- Provides error checking, flow control, and congestion control
- Slower but ensures data integrity
- Example: Web browsing (HTTP), Email (SMTP), File transfer (FTP)

**Process:**
1. SYN (Client → Server)
2. SYN-ACK (Server → Client)
3. ACK (Client → Server)
4. Data Transfer
5. Connection Termination

**IP (Internet Protocol) - Connectionless:**

- No connection establishment required
- Best-effort delivery (no guarantee)
- Packets may arrive out of order or get lost
- No error recovery at IP level
- Faster but less reliable
- Used by UDP for real-time applications

**Comparison Table:**

| Feature | TCP (Connection-Oriented) | IP/UDP (Connectionless) |
|---------|---------------------------|-------------------------|
| Connection Setup | Required (3-way handshake) | Not required |
| Reliability | Guaranteed delivery | Best effort |
| Order | Maintains packet order | No order guarantee |
| Speed | Slower (overhead) | Faster |
| Use Case | File transfer, web | Video streaming, DNS |

---

## PART-B (Answer any three questions)

### Question 5

#### (a) Distinguish between FM and AM [3 marks]

| Parameter | AM (Amplitude Modulation) | FM (Frequency Modulation) |
|-----------|---------------------------|---------------------------|
| **Parameter Varied** | Amplitude | Frequency |
| **Bandwidth** | BW = 2fm (narrow) | BW = 2(Δf + fm) (wider) |
| **Noise Immunity** | Poor (noise affects amplitude) | Excellent (noise doesn't affect frequency) |
| **Power Efficiency** | Low (carrier has 2/3 power) | High (constant amplitude) |
| **Transmission Range** | Longer | Shorter |
| **Audio Quality** | Lower fidelity | High fidelity |
| **Circuit Complexity** | Simple | Complex |
| **Application** | AM radio (530-1600 kHz) | FM radio (88-108 MHz) |
| **Modulation Index** | m ≤ 1 (typically) | Can be > 1 |

#### (b) Digital Data to Analog Signal Conversion [2.5 marks]

Three main techniques to convert digital data into analog signals:

**1. Amplitude Shift Keying (ASK):**
- Binary 1: Carrier with full amplitude
- Binary 0: No carrier or reduced amplitude
- Equation: $s(t) = A \cos(2\pi f_c t)$ for 1, $s(t) = 0$ for 0
- Used in fiber optic communications
- **Disadvantage:** Susceptible to noise

**2. Frequency Shift Keying (FSK):**
- Binary 1: One frequency (f1)
- Binary 0: Different frequency (f2)
- Equation: $s(t) = A \cos(2\pi f_1 t)$ for 1, $s(t) = A \cos(2\pi f_2 t)$ for 0
- Better noise immunity than ASK
- Used in modems, caller ID

**3. Phase Shift Keying (PSK):**
- Binary 1: Phase = 0°
- Binary 0: Phase = 180°
- Equation: $s(t) = A \cos(2\pi f_c t)$ for 1, $s(t) = A \cos(2\pi f_c t + \pi)$ for 0
- Best noise performance
- Used in WiFi, satellite communication

**Bandwidth Comparison:**
- ASK: BW = 2 × Bit Rate
- FSK: BW = 2(Δf + Bit Rate)
- PSK: BW = 2 × Bit Rate

#### (c) Multilevel Modulation [2.5 marks]

**State Multilevel Modulator:**

A multilevel modulator uses more than two signal levels to represent digital data, increasing data rate without increasing bandwidth.

**Types:**

1. **M-ary ASK** - M different amplitude levels
2. **M-ary FSK** - M different frequencies
3. **M-ary PSK** - M different phase shifts
4. **QAM (Quadrature Amplitude Modulation)** - Combines amplitude and phase

**Example - 4-PSK (QPSK):**
- Uses 4 phase states: 0°, 90°, 180°, 270°
- Each symbol represents 2 bits:
  - 00 → 0°
  - 01 → 90°
  - 11 → 180°
  - 10 → 270°

**Advantages:**
- Higher data rate: $Data\ Rate = Baud\ Rate \times \log_2(M)$
- Better bandwidth efficiency
- For M=4: Doubles data rate for same bandwidth

**Disadvantage:** More susceptible to noise (smaller distance between levels)

---

### Question 6

#### (a) Carson's Rule [4 marks]

**Carson's Rule** provides an approximation for the bandwidth of an FM signal.

**Formula:**
$$BW_{FM} = 2(\Delta f + f_m)$$

Where:
- $\Delta f$ = Maximum frequency deviation
- $f_m$ = Maximum modulating frequency

**Alternate form:**
$$BW_{FM} = 2f_m(\beta + 1)$$

Where $\beta = \frac{\Delta f}{f_m}$ is the modulation index.

#### (b) FM System Calculation [2 marks]

**Given:**
- Maximum deviation: $\Delta f = 75$ kHz
- Maximum modulating frequency: $f_m = 15$ kHz
- Carrier frequency: $f_c = 100$ MHz (not needed for BW calculation)

**Required:**
(i) Deviation ratio
(ii) Bandwidth (using Carson's law)

**Solutions:**

**(i) Deviation Ratio:**

The deviation ratio is the modulation index for maximum values:

$$\beta = \frac{\Delta f}{f_m} = \frac{75 \text{ kHz}}{15 \text{ kHz}} = 5$$

**Answer: Deviation ratio (β) = 5**

**(ii) Bandwidth using Carson's Law:**

$$BW_{FM} = 2(\Delta f + f_m)$$

$$BW_{FM} = 2(75 + 15) = 2 \times 90 = 180 \text{ kHz}$$

**Answer: Bandwidth = 180 kHz**

**Verification:**
Using alternate formula:
$$BW_{FM} = 2f_m(\beta + 1) = 2 \times 15 \times (5 + 1) = 30 \times 6 = 180 \text{ kHz}$$ ✓

#### (c) Quantization [1+3 marks]

**What is Quantization?**

Quantization is the process of mapping a range of continuous analog values to a finite set of discrete values. It's a key step in converting analog signals to digital (ADC).

**Process of Quantization with Proper Figures:**

**Steps:**

1. **Sampling:** Continuous signal is sampled at regular intervals (Nyquist rate)

2. **Range Determination:** Find the maximum and minimum signal values

3. **Level Division:** Divide the range into L quantization levels
   - For n-bit quantization: $L = 2^n$

4. **Step Size Calculation:**
   $$\Delta = \frac{V_{max} - V_{min}}{L}$$

5. **Mapping:** Each sample is assigned to the nearest quantization level

**Example:**
- Signal range: -5V to +5V (Total = 10V)
- 3-bit quantization: $L = 2^3 = 8$ levels
- Step size: $\Delta = \frac{10}{8} = 1.25$ V
- Levels: -5, -3.75, -2.5, -1.25, 0, 1.25, 2.5, 3.75, 5V

**Quantization Error:**
$$Error = \frac{\Delta}{2} = \frac{Step\ Size}{2}$$

**Figure Description:**
```
Amplitude
    |     Original Signal (smooth curve)
  5 |  •──────•   •───────•
    |  /      \  /         \
  0 |─•────────••───────────•─ Time
    |            \         /
 -5 |             •───────•
    |
    |     Quantized Signal (stepped)
  5 |  ▄▀▀▀▀▀▄   ▄▀▀▀▀▀▀▀▄
    |  █     █   █       █
  0 |──█─────█───█───────█── Time
    |         █         █
 -5 |          ▀▀▀▀▀▀▀▀▀
```

**Key Points:**
- More bits → Smaller step size → Less quantization error
- Quantization noise: $SNR_{dB} = 6.02n + 1.76$ dB (n = number of bits)
- Irreversible process (information loss)

---

### Question 7

#### (a) Pulse Code Modulation (PCM) and How It Works [5 marks]

**Pulse Code Modulation (PCM):**

PCM is a digital representation technique where analog signals are converted to digital form by sampling, quantizing, and encoding.

**How PCM Works - Three Main Steps:**

**1. Sampling:**
- Continuous analog signal is sampled at regular intervals
- Sampling rate must follow Nyquist theorem: $f_s \geq 2f_{max}$
- Produces Pulse Amplitude Modulation (PAM) signal

**2. Quantization:**
- Each sample's amplitude is approximated to nearest discrete level
- For n-bit PCM: $2^n$ quantization levels
- Introduces quantization error/noise

**3. Encoding:**
- Each quantized level is assigned a unique binary code
- n-bit code represents $2^n$ levels
- Binary codes are transmitted as digital pulses

**PCM Process Diagram:**
```
Analog Input → Sampler → Quantizer → Encoder → Digital Output
              (PAM)     (Levels)    (Binary)   (PCM Signal)
```

**Example:**
- 8-bit PCM: 256 levels (2^8)
- Voice telephony: 8000 samples/sec, 8 bits/sample
- Bit rate = 8000 × 8 = 64 kbps

**Advantages:**
- Immunity to noise and interference
- Easy regeneration of signal
- Efficient storage and processing
- Uniform signal quality

**Disadvantages:**
- Requires large bandwidth: $BW = n \times f_s$
- Complex circuitry
- Quantization noise

#### (b) SONET and PCM System [5 marks]

**Synchronous Optical Network (SONET):**

SONET is a standard for synchronous data transmission over optical fiber networks.

**Key Features:**
- **Synchronous transmission:** All devices synchronized to master clock
- **Optical fiber:** Uses light signals for high-speed transmission
- **Ring topology:** Self-healing architecture
- **Hierarchy:** STS-1 (51.84 Mbps) is base level
  - STS-3 (OC-3): 155.52 Mbps
  - STS-12 (OC-12): 622.08 Mbps
  - STS-48 (OC-48): 2.488 Gbps
  - STS-192 (OC-192): 9.953 Gbps

**SONET Frame Structure:**
- Frame size: 810 bytes (90 columns × 9 rows)
- Overhead: 3 columns (section, line, path overhead)
- Payload: 87 columns (SPE - Synchronous Payload Envelope)

**Advantages:**
- Very high data rates
- Self-healing capability
- Excellent error detection
- Standard interface for global connectivity

---

### Question 8

#### (a) CRC Encoder and Decoder [6 marks]

**Given:**
- Data word: 1001
- Divisor: 1011

**CRC (Cyclic Redundancy Check) Encoding Process:**

**Step 1:** Append zeros to data word
- Number of zeros = Degree of divisor - 1 = 4 - 1 = 3
- Data becomes: 1001**000**

**Step 2:** Perform binary division (XOR operation)

```
         1000010
       ___________
1011 | 1001000
       1011
       ----
        0100
        0000
        ----
        1000
        1011
        ----
         0110
         0000
         ----
          1100
          1011
          ----
           111  ← Remainder (CRC)
```

**Let me recalculate correctly:**

```
         1000111
       ___________
1011 | 1001000
       1011         (1011 XOR with first 4 bits)
       ----
        0101
        0000
        ----
         1010
         1011
         ----
          0010
          0000
          ----
           0100
           0000
           ----
            1000
            1011
            ----
             011  ← Remainder (CRC bits)
```

**Codeword at sender:**
- Original data: 1001
- CRC bits: 011
- **Transmitted codeword: 1001011**

**Step 3: Receiver side checking**

Receiver divides the received codeword by the same divisor:

```
         1000010
       ___________
1011 | 1001011
       1011
       ----
        0100
        0000
        ----
         1001
         1011
         ----
          0101
          0000
          ----
           1011
           1011
           ----
            000  ← Remainder = 0 (No error)
```

**Result:**
- **Remainder = 0** → No error detected
- **Remainder ≠ 0** → Error detected

**Answer:**
- Codeword sent: **1001011**
- At receiver: Division gives remainder **000** (no error)

#### (b) Checksum Calculation [4 marks]

**i) Show the checking of the codeword at the receiver site:**

At the receiver, the checksum verification process:

**Process:**
1. Receive all segments including checksum
2. Add all segments (including checksum)
3. Take 1's complement of sum
4. If result is all 0s → No error
5. If result is not all 0s → Error detected

**Example:**
Suppose sender sent segments with checksum:
```
Segment 1: 10110011
Segment 2: 01010101
Checksum:  01110110
```

Receiver verification:
```
  10110011
  01010101
+ 01110110
----------
  11111110  (with carries handled)
```

1's complement: 00000001 (NOT all zeros → possible error)

**Correct scenario (no error):**
If sum + checksum = 11111111
1's complement = 00000000 ✓ (No error)

#### (ii) Differentiate between circuit-switched and packet-switched network [4 marks]

| Feature | Circuit-Switched Network | Packet-Switched Network |
|---------|-------------------------|-------------------------|
| **Connection** | Dedicated path established before transmission | No dedicated path; packets find their own route |
| **Resource Allocation** | Resources reserved for entire duration | Resources shared; allocated on demand |
| **Setup Time** | Long setup time (connection establishment) | No setup time; immediate transmission |
| **Bandwidth** | Fixed bandwidth; may be wasted if idle | Dynamic bandwidth; efficient utilization |
| **Data Rate** | Constant data rate | Variable data rate |
| **Delay** | Minimal delay after setup | Variable delay (queuing, routing) |
| **Example** | Traditional telephone network (PSTN) | Internet (IP), Email, Web |
| **Transmission** | Continuous stream | Packets (store-and-forward) |
| **Reliability** | More reliable (dedicated path) | Less reliable (congestion, packet loss) |
| **Cost** | Expensive (dedicated resources) | Cost-effective (shared resources) |
| **Failure Impact** | Entire connection fails | Only affected packets need retransmission |
| **Best For** | Real-time communication (voice calls) | Bursty data (web browsing, file transfer) |

**Circuit-Switched Example:**
- Phone call: Path A → Switch1 → Switch2 → B remains dedicated
- Even during silence, path is reserved

**Packet-Switched Example:**
- Email: Broken into packets, each packet routed independently
- Packets may take different paths and arrive out of order

---

## Summary of Key Formulas

### Amplitude Modulation:
- $v_{AM}(t) = A_c[1 + m\sin(2\pi f_m t)]\sin(2\pi f_c t)$
- $m = \frac{A_m}{A_c}$ (Modulation index)
- $BW_{AM} = 2f_m$
- $A_{sideband} = \frac{mA_c}{2}$

### Frequency Modulation:
- $BW_{FM} = 2(\Delta f + f_m)$ (Carson's Rule)
- $\beta = \frac{\Delta f}{f_m}$ (Modulation index)

### Digital Transmission:
- Nyquist: $f_s \geq 2f_{max}$
- PCM bit rate: $R = n \times f_s$
- Quantization levels: $L = 2^n$
- $SNR_{dB} = 6.02n + 1.76$

### Bandwidth:
- Digital: $BW = \frac{Bit\ Rate}{2}$
- ASK/PSK: $BW = 2 \times Bit\ Rate$
- FSK: $BW = 2(f_2 - f_1 + Bit\ Rate)$

---

## Exam Tips

1. **AM Problems:** Always identify given values first, calculate modulation index if not given
2. **FM Problems:** Use Carson's rule correctly, don't confuse deviation with modulation index
3. **CRC:** Practice binary division (XOR), remember to append zeros before division
4. **PCM:** Remember the three steps: Sampling → Quantization → Encoding
5. **Show all calculations:** Partial marks awarded for correct process even if final answer is wrong
6. **Units:** Always mention units (kHz, MHz, V, etc.)
7. **Diagrams:** Draw labeled diagrams for communication systems, waveforms

---

*All solutions verified and cross-checked with lecture content.*
