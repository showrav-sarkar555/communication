# Lecture 01: Introduction to Data Communication

## Overview
Data communication is the efficient way to share resources and exchange information between devices using transmission media.

---

## Key Topics

### 1. Data Flow Directions

#### **Simplex** (One Direction Only)
- Unidirectional communication
- **Examples:** 
  - Server → Monitor (display only)
  - Keyboard → Server (input only)
- No feedback possible

#### **Half-Duplex** (Both Directions, One at a Time)
- Bidirectional but not simultaneous
- **Example:** Walkie-talkies
- One device transmits while other receives

#### **Full-Duplex** (Both Directions Simultaneously)
- True bidirectional communication
- **Example:** Telephone conversation
- Channel capacity divided between two directions

---

### 2. Network Components

**Essential Elements:**
1. **Message** - Data being transmitted
2. **Sender** - Source device
3. **Receiver** - Destination device
4. **Medium** - Physical path (copper, fiber, wireless)
5. **Protocol** - Rules governing communication

---

### 3. Network Topologies

#### **Mesh Topology**
- **Links Required:** n(n-1)/2 for n devices
- **Pros:**
  - Dedicated links (high privacy)
  - Robust (multiple paths)
  - Easy fault identification
- **Cons:**
  - Expensive cabling
  - Many I/O ports required
  - Difficult installation and reconfiguration

#### **Star Topology**
- Central hub/switch
- **Pros:**
  - One I/O port per device
  - Less cabling than mesh
  - Easy installation
  - Robustness
  - Easy fault isolation
- **Cons:**
  - Single point of failure (hub)
  - Still requires significant cabling

#### **Bus Topology**
- Single backbone cable
- **Pros:**
  - Minimal cabling
  - Easy installation
- **Cons:**
  - Difficult to modify
  - Fault isolation challenging
  - Cable break stops all transmission

#### **Ring Topology**
- Circular connection
- **Pros:**
  - Easy installation
  - Easy fault identification
- **Cons:**
  - Delay in large networks
  - Break stops entire network

---

### 4. Network Categories

#### **LAN (Local Area Network)**
- Scope: Single office, building, or campus
- Limited geographical area
- High data rates
- Low cost

#### **MAN (Metropolitan Area Network)**
- Scope: Entire city
- Covers 5-50 km typically
- Connects multiple LANs

#### **WAN (Wide Area Network)**
- Scope: Country, continent, or worldwide
- Long-distance communication
- Lower data rates
- Higher cost

---

### 5. Switching Methods

#### **Circuit Switching**
- Dedicated physical path
- Used in telephone networks
- Connection established before data transfer

#### **Packet Switching**
- Data divided into packets
- Each packet contains source/destination address
- Routers forward packets independently
- More efficient resource utilization

---

### 6. The Internet

- Largest internetwork globally
- "Network of networks"
- Uses TCP/IP protocol suite
- Originated from ARPANET (1969)
- Initial nodes: UCLA, Stanford, UC Santa Barbara, U. of Utah

---

## Important Characteristics

### **Delivery**
Correct destination delivery of data

### **Accuracy**
Data must arrive without corruption

### **Timeliness**
Data delivered within acceptable time frame

### **Jitter**
Variation in packet arrival time (critical for real-time applications)

---

## Data Representation

- **Numbers:** 8/16/32-bit integers, floating-point
- **Text:** ASCII, Unicode
- **Images:** JPG, GIF, PNG (bit patterns)
- **Audio:** Sampled continuous signals
- **Video:** Sequence of bitmap images

---

## Network Performance Criteria

1. **Performance**
   - Throughput (actual data rate)
   - Delay (latency)

2. **Reliability**
   - Frequency of failure
   - Recovery time
   - Network robustness

3. **Security**
   - Protection against unauthorized access
   - Data confidentiality
   - Integrity

---

## Exam Focus Points

✓ Understand differences between simplex, half-duplex, full-duplex  
✓ Calculate number of links in mesh topology: **n(n-1)/2**  
✓ Compare advantages/disadvantages of each topology  
✓ Differentiate LAN, MAN, WAN by scope  
✓ Know circuit vs packet switching fundamentals  
✓ Identify network components in diagrams
