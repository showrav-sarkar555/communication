# Lecture 02: Network Models

## Overview
Network models provide a structured approach to understanding complex communication systems through protocol layering.

---

## Key Concepts

### Protocol Layering
- **Protocol:** Rules for communication between sender, receiver, and intermediate devices
- **Why Layers?**
  - Modularity
  - Easier maintenance and updates
  - Changes in one layer don't affect others
  - Separates services from implementation

---

## TCP/IP Protocol Suite (5 Layers)

### Layer 5: Application Layer
**Purpose:** Provide services to users

**Protocols:**
- **HTTP** - Web browsing
- **FTP** - File transfer
- **SMTP** - Email
- **DNS** - Domain name resolution
- **Telnet, SSH** - Remote access

**Characteristics:**
- Only layer that interacts with user
- Software-based
- Creates data for transmission

---

### Layer 4: Transport Layer
**Purpose:** Process-to-process delivery

**Services:**
1. **Port Addressing** - Identifies specific process (0-65535)
2. **Segmentation & Reassembly** - Divides message into segments
3. **Connection Control** - Connectionless (UDP) or Connection-oriented (TCP)
4. **Flow Control** - End-to-end regulation
5. **Error Control** - End-to-end reliability

**Protocols:**
- **TCP** - Reliable, connection-oriented
- **UDP** - Fast, connectionless
- **SCTP** - Stream Control Transmission Protocol

**Data Unit:** Segment / User Datagram

---

### Layer 3: Network Layer
**Purpose:** Source-to-destination packet delivery

**Services:**
1. **Logical Addressing** - IP addresses (IPv4/IPv6)
2. **Routing** - Path determination across networks

**Protocols:**
- **IP** (IPv4, IPv6) - Internet Protocol
- **ICMP** - Error reporting
- **IGMP** - Multicast group management
- **ARP** - Address resolution
- **RARP** - Reverse address resolution

**Data Unit:** Datagram / Packet

**Key Point:** Routers operate at this layer

---

### Layer 2: Data Link Layer
**Purpose:** Node-to-node (hop-to-hop) frame delivery

**Services:**
1. **Framing** - Encapsulate packets
2. **Physical Addressing** - MAC addresses (48-bit)
3. **Flow Control** - Hop-to-hop regulation
4. **Error Control** - Hop-to-hop detection/correction
5. **Access Control** - Who controls the link

**Protocols:**
- **Ethernet** - Wired LAN
- **Wi-Fi** - Wireless LAN
- **PPP** - Point-to-Point Protocol

**Data Unit:** Frame

---

### Layer 1: Physical Layer
**Purpose:** Transmit individual bits

**Services:**
1. **Physical Characteristics** - Interface specifications
2. **Bit Representation** - Voltage levels, light intensity
3. **Data Rate** - Transmission speed (bps)
4. **Synchronization** - Clock coordination

**Standards:**
- RS-232, DSL, 10Base-T

**Data Unit:** Bits

---

## OSI Model (7 Layers)

**Additional Layers:**

### Layer 6: Presentation Layer
**Services:**
- **Data Translation** - Format conversion
- **Encryption/Decryption** - Security
- **Compression** - Reduce data size

### Layer 5: Session Layer
**Services:**
- **Dialog Management** - Simplex, half-duplex, full-duplex control
- **Session Recovery** - Synchronization points

**Why OSI Failed:**
- Too costly
- Some layers never fully defined
- Poor performance compared to TCP/IP
- TCP/IP already established

---

## Addressing in TCP/IP

### Three Types of Addresses

#### 1. Physical Address (MAC Address)
- **Layer:** Data Link
- **Format:** 48 bits (6 bytes)
- **Example:** A3:34:45:11:92:F1
- **Scope:** Local link (changes at each hop)
- **Assignment:** Burned into NIC by manufacturer

#### 2. Logical Address (IP Address)
- **Layer:** Network
- **Format:** 
  - IPv4: 32 bits (4 octets) - e.g., 192.168.1.1
  - IPv6: 128 bits (8 groups) - e.g., 2001:0db8::1
- **Scope:** Global (end-to-end)
- **Assignment:** Network administrator or DHCP

#### 3. Port Address
- **Layer:** Transport
- **Format:** 16 bits (0-65535)
- **Types:**
  - Well-known: 0-1023 (HTTP=80, HTTPS=443, FTP=21)
  - Registered: 1024-49151
  - Dynamic: 49152-65535
- **Scope:** Process identification

---

## Importance of Layering

### Advantages:
1. **Reference Model** - Guidelines for protocol development
2. **Modularity** - Independent layer changes
3. **Transparency** - Upper layers unaware of lower layer changes
4. **Service Separation** - Services vs implementation

### Principles:
1. **Bidirectional Communication** - Both directions supported
2. **Identical Objects** - Same layer objects at both sites

---

## Data Flow Through Layers

**Sender Side (Encapsulation):**
```
Application Data
    ↓ Add Transport Header
Segment (H4 + Data)
    ↓ Add Network Header
Packet (H3 + H4 + Data)
    ↓ Add Data Link Header & Trailer
Frame (H2 + H3 + H4 + Data + T2)
    ↓ Convert to Bits
Physical Transmission
```

**Receiver Side (Decapsulation):**
```
Physical Reception
    ↓ Extract Frame
Remove H2 & T2
    ↓ Extract Packet
Remove H3
    ↓ Extract Segment
Remove H4
    ↓ Deliver
Application Data
```

---

## Router vs End System

**End Systems (Hosts):**
- Use all 5 layers
- Generate and consume data

**Routers:**
- Use only 3 layers (Physical, Data Link, Network)
- Forward packets, don't generate application data

---

## Exam Focus Points

✓ **Memorize layers** in order (both TCP/IP and OSI)  
✓ **Know protocols** at each layer  
✓ **Understand addressing** - scope and format of each type  
✓ **Differentiate services** - what each layer provides  
✓ **Encapsulation/Decapsulation** - header addition/removal  
✓ **OSI vs TCP/IP** - advantages/disadvantages  
✓ **Data unit names** - segment, packet, frame, bits  

---

## Quick Reference Table

| Layer | TCP/IP Name | OSI Name | Protocols | Data Unit | Device |
|-------|-------------|----------|-----------|-----------|--------|
| 5 | Application | App/Pres/Sess | HTTP, FTP | Message | - |
| 4 | Transport | Transport | TCP, UDP | Segment | - |
| 3 | Network | Network | IP, ICMP | Packet | Router |
| 2 | Data Link | Data Link | Ethernet | Frame | Switch |
| 1 | Physical | Physical | RS-232 | Bits | Hub |
