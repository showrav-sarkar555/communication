# Lecture 09: Data Link Layer

## Overview
The data link layer provides node-to-node (hop-to-hop) communication and services to the network layer.

---

## Nodes and Links

**Node:** Host or router  
**Link:** Network connecting nodes (LAN/WAN)

**Communication:** Hop-to-hop (not end-to-end)

---

## Data Link Layer Services

### 1. Framing
- Encapsulate network layer packet
- Add header and trailer
- Create **frame** for physical layer
- Decapsulate at receiver

### 2. Physical Addressing
- Add sender and receiver **MAC addresses**
- Link-layer addresses (48-bit for Ethernet)
- Changes at each hop

### 3. Flow Control (Hop-to-Hop)
- Prevent receiver buffer overflow
- **Feedback** to sender
- Options: Stop, slow down, or drop frames

### 4. Error Control (Hop-to-Hop)
- Detect errors in frames
- **Retransmit** or discard corrupted frames
- Use error detection codes

### 5. Congestion Control
- Manage network traffic
- Prevent link overload

### 6. Access Control
- Determine who uses shared medium
- Important for broadcast links

---

## Link Types

### Point-to-Point Link
- Dedicated connection
- Two devices only
- Examples: PPP, HDLC

### Broadcast Link
- Shared medium
- Multiple device pairs
- Needs **access control**
- Examples: Ethernet, Wi-Fi

---

## Data Link Sub-layers

### 1. DLC (Data Link Control)
- Framing
- Flow control
- Error control

### 2. MAC (Media Access Control)
- Access control for shared medium
- Physical addressing

---

## Link-Layer Addressing

### Why Needed?
- IP addresses define **end points**
- Cannot determine **path** through network
- Each hop needs **link addresses**

**MAC Address:**
- 48 bits (6 bytes)
- Format: XX:XX:XX:XX:XX:XX (hexadecimal)
- Example: A3:34:45:11:92:F1

---

## Three Types of Addresses

### 1. Unicast Address
- **One-to-one** communication
- Single destination
- **Format:** Second hex digit is **odd**
- Example: A3:34:45:11:92:F1

### 2. Multicast Address
- **One-to-many** communication
- Group of destinations
- **Format:** Second hex digit is **even**
- Example: A2:34:45:11:92:F1

### 3. Broadcast Address
- **One-to-all** communication
- All devices in link
- **Format:** FF:FF:FF:FF:FF:FF

---

## ARP (Address Resolution Protocol)

### Purpose
Map **IP address → MAC address**

### Why ARP?
- Have destination IP address (from network layer)
- Need destination MAC address (for data link layer)
- ARP provides the mapping

---

### ARP Process

**1. ARP Request (Broadcast)**
```
Who has IP address 192.168.1.5?
Tell MAC address A1:A2:A3:A4:A5:A6
```
- Sent to broadcast address (FF:FF:FF:FF:FF:FF)
- All devices receive and check

**2. ARP Reply (Unicast)**
```
I have 192.168.1.5
My MAC is B1:B2:B3:B4:B5:B6
```
- Only matching device replies
- Sent to requester's MAC address

**3. ARP Cache**
- Store IP↔MAC mappings
- Avoid repeated requests
- Entries expire after timeout

---

### ARP Packet Format

| Field | Size | Description |
|-------|------|-------------|
| Hardware Type | 2 bytes | Ethernet = 1 |
| Protocol Type | 2 bytes | IPv4 = 0x0800 |
| Hardware Length | 1 byte | MAC = 6 |
| Protocol Length | 1 byte | IPv4 = 4 |
| Operation | 2 bytes | Request=1, Reply=2 |
| Sender MAC | 6 bytes | Source MAC |
| Sender IP | 4 bytes | Source IP |
| Target MAC | 6 bytes | Destination MAC |
| Target IP | 4 bytes | Destination IP |

---

## Example Communication Flow

### Scenario
**Alice (NA, LA) → Router R1 (N1, L1) → Router R2 (N2, L2) → Bob (NB, LB)**

N = Network (IP) address  
L = Link (MAC) address

---

### At Alice's Site

**Frame 1: Alice → R1**
```
Source MAC: LA
Destination MAC: L1
Source IP: NA
Destination IP: NB
```

**Steps:**
1. Alice has data for Bob (IP = NB)
2. Checks routing: Next hop is R1 (IP = N1)
3. Uses ARP to find R1's MAC (L1)
4. Creates frame with MAC(LA→L1), IP(NA→NB)

---

### At Router R1

**Receives Frame 1:**
- Strips Data Link header/trailer
- Examines IP packet (NA → NB)
- Checks routing table: Forward to R2 (N2)

**Creates Frame 2: R1 → R2**
```
Source MAC: L2 (R1's interface to R2)
Destination MAC: L3 (R2's interface)
Source IP: NA (unchanged)
Destination IP: NB (unchanged)
```

**Key Point:** 
- **MAC addresses change** at each hop
- **IP addresses remain same** end-to-end

---

### At Router R2

**Receives Frame 2:**
- Strips Data Link header
- Examines IP packet (NA → NB)
- Checks routing: Deliver to Bob

**Creates Frame 3: R2 → Bob**
```
Source MAC: L4 (R2's interface to Bob)
Destination MAC: LB
Source IP: NA
Destination IP: NB
```

---

### At Bob's Site

**Receives Frame 3:**
- Checks destination MAC = LB ✓
- Strips Data Link header
- Delivers IP packet (NA → NB) to network layer
- Network layer delivers to Bob

---

## Important Questions Answered

### Q1: Why do routers need IP addresses?
**A:** Routers need IP addresses for:
- Routing table entries
- Next-hop identification
- Network management
- Diagnostic tools (ping, traceroute)

### Q2: Why multiple IP addresses per router?
**A:** Each interface connects to different network:
- Different IP subnets
- Separate routing domains
- Interface identification

### Q3: How are IP addresses determined?
**A:** 
- **Source IP:** Sender's own address
- **Destination IP:** From application/user input
- Both remain constant end-to-end

### Q4: How are MAC addresses determined?
**A:**
- **Source MAC:** Sending interface's address
- **Destination MAC:** Next hop (from ARP)
- Change at every hop

---

## Frame Flow Summary

**Encapsulation at Source:**
```
Data
  ↓ Add IP header (NA → NB)
IP Packet
  ↓ Add MAC header (LA → L1)
Frame
```

**At Each Router:**
```
Receive Frame
  ↓ Strip MAC header/trailer
IP Packet (check destination)
  ↓ Add new MAC header (for next hop)
New Frame
```

**Decapsulation at Destination:**
```
Frame
  ↓ Strip MAC header/trailer
IP Packet
  ↓ Strip IP header
Data (deliver to application)
```

---

## Exam Focus Points

✓ **Understand** hop-to-hop vs end-to-end  
✓ **Know** six DLC services (framing, addressing, flow, error, congestion, access)  
✓ **Differentiate** unicast, multicast, broadcast addresses  
✓ **Explain** ARP process (request and reply)  
✓ **Trace** packet flow through routers  
✓ **Identify** which addresses change at each hop  
✓ **Draw** frame structure with MAC and IP headers  
✓ **Know** why both IP and MAC addresses needed  

---

## Quick Reference

**MAC Address Format:**
- Unicast: Second digit odd (A3:...)
- Multicast: Second digit even (A2:...)
- Broadcast: All F's (FF:FF:FF:FF:FF:FF)

**ARP:**
- Request: Broadcast
- Reply: Unicast
- Cache: Temporary storage

**Address Scope:**
- **MAC:** Local link (changes each hop)
- **IP:** Global (constant end-to-end)

**DLC Sublayers:**
- **DLC:** Framing, flow, error control
- **MAC:** Access control, physical addressing
