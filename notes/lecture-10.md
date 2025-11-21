# Lecture 10: Error Detection and Correction

## Overview
Detect and correct errors that occur during data transmission to ensure reliable communication.

---

## Types of Errors

### 1. Single-Bit Error
- **Only one bit** changes
- Isolated error
- Less common in burst noise environments

### 2. Burst Error
- **Multiple consecutive bits** corrupted
- More common in practice
- Caused by impulse noise

---

## Redundancy

**Principle:** Add extra bits to detect/correct errors

**Trade-off:** 
- More redundancy = Better detection/correction
- But increases overhead

---

## Block Codes

### Concept
- Divide message into **k-bit blocks** (datawords)
- Add **r redundant bits**
- Create **n-bit blocks** (codewords)
- **n = k + r**

### Example: 4B/5B Block Coding
- k = 4 (data bits)
- r = 1 (redundant bit)
- n = 5 (codeword bits)

| Dataword | Codeword | Dataword | Codeword |
|----------|----------|----------|----------|
| 0000 | 11110 | 1000 | 10010 |
| 0001 | 01001 | 1001 | 10011 |
| 0010 | 10100 | 1010 | 10110 |
| 0011 | 10101 | 1011 | 10111 |
| 0100 | 01010 | 1100 | 11010 |
| 0101 | 01011 | 1101 | 11011 |
| 0110 | 01110 | 1110 | 11100 |
| 0111 | 01111 | 1111 | 11101 |

---

## Hamming Distance

### Definition
Number of **bit positions** where two codewords differ

### Calculation
1. XOR the two words
2. Count number of 1s in result

### Examples
- d(01, 00) = 1
- d(11, 00) = 2
- d(010, 100) = 3
- d(0011, 1000) = 4

---

### Minimum Hamming Distance (d_min)

**Definition:** Smallest Hamming distance between all possible codeword pairs

**For Error Detection:**
**d_min = s + 1**
- s = number of errors to detect

**For Error Correction:**
**d_min = 2t + 1**
- t = number of errors to correct

### Example 10.3
- Minimum Hamming distance = 2
- Can detect: **1 error**
- Can correct: **0 errors**

---

## Error Detection Methods

### 1. Parity Check

#### Simple Parity
- Add **1 bit** to make total 1s even (or odd)
- **Even Parity:** Total 1s = even number
- **Odd Parity:** Total 1s = odd number

#### Process
**Encoding:**
```
Dataword: 1011 (three 1s)
Even parity: 1011 → 10111 (four 1s)
Odd parity: 1011 → 10110 (three 1s)
```

**Decoding:**
- Count 1s in received codeword
- If parity wrong → Error detected
- If parity correct → Accept (or undetected error)

#### Limitations
- Detects **odd** number of errors only
- Cannot detect **even** number of errors
- No error correction capability

### Example 10.7
Dataword 1011 → Codeword 10111 (even parity)

**Cases:**
1. No error: 10111 → Syndrome = 0 ✓
2. One error: 10011 → Syndrome = 1 (detected)
3. One error: 10110 → Syndrome = 1 (detected)
4. Two errors: 00110 → Syndrome = 0 (undetected!)
5. Three errors: 01011 → Syndrome = 1 (detected)

---

### 2. CRC (Cyclic Redundancy Check)

#### Characteristics
- **Most powerful** error detection
- Based on **polynomial arithmetic**
- Widely used in networks and storage

---

#### Polynomial Representation

**Binary → Polynomial:**
```
10011 → x⁴ + x + 1
101 → x² + 1
11001 → x⁴ + x³ + 1
```

**Position = Power, Bit value = Coefficient**

---

#### CRC Process

**At Sender:**
1. Represent data as polynomial D(x)
2. Choose generator polynomial G(x) of degree r
3. Multiply D(x) by x^r (shift left r bits)
4. Divide by G(x), get remainder R(x)
5. Subtract R(x) from x^r × D(x)
6. Result is codeword T(x)

**At Receiver:**
1. Divide received T(x) by G(x)
2. If remainder = 0 → No error
3. If remainder ≠ 0 → Error detected

---

#### Polynomial Operations

**Addition/Subtraction:**
- Same as XOR
- No carries or borrows
- Example: (x² + 1) + (x² + x) = x + 1

**Multiplication:**
- Add exponents
- Example: x³ × x² = x⁵

**Division:**
- Similar to binary long division
- Use XOR for subtraction

---

#### CRC Example

**Generator:** G(x) = x³ + x + 1 (1011)

**Data:** D(x) = x⁷ + x⁵ + x⁴ + x² + x (10110110)

**Process:**
1. Shift data left by 3: 10110110**000**
2. Divide by 1011
3. Remainder = CRC bits
4. Append to data

---

#### Standard CRC Polynomials

- **CRC-8:** x⁸ + x² + x + 1
- **CRC-12:** x¹² + x¹¹ + x³ + x² + x + 1
- **CRC-16:** x¹⁶ + x¹⁵ + x² + 1
- **CRC-32:** (used in Ethernet, ZIP)

---

#### Advantages of CRC
- Extremely good error detection
- Detects all single-bit errors
- Detects all double-bit errors
- Detects all odd number of errors
- Detects burst errors ≤ r bits
- Easy hardware implementation
- Low overhead

---

### 3. Checksum

#### Characteristics
- Used in **TCP, UDP, IP**
- Simple addition-based
- Variable message length

---

#### Process

**At Sender:**
1. Divide message into m-bit units
2. Add all units using 1's complement addition
3. Take 1's complement of sum
4. Result is **checksum**

**At Receiver:**
1. Add all units + checksum
2. Take 1's complement
3. If result = 0 → No error
4. If result ≠ 0 → Error detected

---

#### Example
Data: Five 4-bit numbers: 7, 11, 12, 0, 6

**Binary:**
```
  0111  (7)
  1011  (11)
  1100  (12)
  0000  (0)
+ 0110  (6)
------
 10100  (sum with carry)
 +   1  (add wraparound carry)
------
  0101  (final sum)
```

**Checksum = 1's complement = 1010**

**Verification:**
```
0111 + 1011 + 1100 + 0000 + 0110 + 1010 = 0000 ✓
```

---

#### Limitations
- **Weaker than CRC**
- May not detect:
  - Compensating errors (one inc, one dec)
  - Multiple errors that cancel out
- Being replaced by CRC in modern protocols

---

## Error Correction

### Forward Error Correction (FEC)

**Used when retransmission not feasible:**
- Real-time applications (voice, video)
- Long propagation delay (satellite)
- One-way transmission (broadcast)

---

### Using Hamming Distance

**To correct t errors:**
- Need d_min = 2t + 1

**Example:**
- To correct 1 error: d_min = 3
- To correct 2 errors: d_min = 5

---

### Using XOR

**Principle:** Can recover any one lost chunk

**Process:**
1. Divide packet into N chunks
2. XOR all chunks → Redundant chunk R
3. Send N + 1 chunks
4. If one lost, XOR remaining chunks

**Example:**
```
P1 = 011
P2 = 100
P3 = 010
R = P1 ⊕ P2 ⊕ P3 = 101

If P2 lost:
P2 = P1 ⊕ P3 ⊕ R = 011 ⊕ 010 ⊕ 101 = 100 ✓
```

---

### Hamming Code

**Adds redundant bits at positions 2^k:**
- Position 1, 2, 4, 8, 16, ...

**Each parity bit covers specific positions:**
- Bit 1: positions with bit 0 set in binary
- Bit 2: positions with bit 1 set in binary  
- Bit 4: positions with bit 2 set in binary
- etc.

**Can detect and correct single-bit errors**

---

### Chunk Interleaving

**Problem:** Burst errors corrupt consecutive bits

**Solution:**
1. Arrange data in rows
2. Transmit column-by-column
3. Burst error affects different rows
4. Becomes multiple single-bit errors (easier to correct)

---

## Comparison Summary

| Method | Overhead | Detection | Correction | Used In |
|--------|----------|-----------|------------|---------|
| Parity | Low | Weak | No | Simple systems |
| CRC | Medium | Excellent | No | Ethernet, WiFi |
| Checksum | Low | Good | No | TCP, UDP, IP |
| Hamming | High | Good | Yes | Memory (ECC) |
| XOR | Medium | Good | Limited | RAID, FEC |

---

## Exam Focus Points

✓ **Calculate** Hamming distance between codewords  
✓ **Determine** d_min for error detection/correction  
✓ **Apply** parity check (even and odd)  
✓ **Understand** CRC polynomial division  
✓ **Perform** checksum calculation  
✓ **Know** when to use each method  
✓ **Explain** difference between detection and correction  
✓ **Use** formulas: d_min = s+1 (detect), d_min = 2t+1 (correct)  

---

## Quick Formulas

| Concept | Formula |
|---------|---------|
| Codeword size | n = k + r |
| Detect s errors | d_min ≥ s + 1 |
| Correct t errors | d_min ≥ 2t + 1 |
| Hamming distance | d(x,y) = count(x ⊕ y) |
| XOR property | A ⊕ B ⊕ B = A |

---

## Real-World Applications

- **CRC:** Ethernet frames, ZIP files, PNG images
- **Parity:** Serial communications, RAM (old)
- **Checksum:** TCP/UDP packets, IP headers
- **Hamming:** ECC memory, QR codes
- **FEC:** Satellite TV, mobile networks, CDs/DVDs
