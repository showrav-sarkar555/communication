# Lecture 08: Switching

## Overview
Switching creates temporary connections between devices in a network through interlinked switches.

---

## Switching Network Components

**Switch:** Device creating temporary connections  
**Link:** Physical path between switches  
**Node:** End device or switch

---

## Switching Layers

| Layer | Switching Type |
|-------|----------------|
| Physical | Circuit Switching |
| Data Link | Virtual Circuit (Packet) |
| Network | Virtual Circuit or Datagram |
| Application | Message Switching |

---

## 1. Circuit Switching

### Characteristics
- **Dedicated path** established
- Physical layer switching
- Resources **reserved** before communication
- Uses **FDM or TDM** for channel division

---

### Three Phases

#### A. Setup Phase
1. Source sends **setup request**
2. Each switch reserves resources
3. Destination sends **acknowledgment**
4. Path established end-to-end

#### B. Data Transfer Phase
- Dedicated circuit active
- **Continuous data flow** (not packetized)
- **No addressing** needed during transfer
- Resources exclusively allocated

#### C. Teardown Phase
- One party sends disconnect signal
- Each switch releases resources
- Circuit broken down

---

### Delay Components

**Total Delay = Setup time + 3T + 3τ + Teardown time**

Where:
- T = Transmission time
- τ (tau) = Propagation delay
- 3 represents number of links

---

### Resources Reserved
- Bandwidth (in FDM)
- Time slots (in TDM)
- Switch buffers
- Switch processing time
- I/O ports

---

### Advantages
- Dedicated path (guaranteed performance)
- No delay during data transfer
- Suitable for real-time communication

### Disadvantages
- Resources wasted if idle
- Setup time required
- Inefficient for bursty data
- Fixed data rate

**Applications:** Traditional telephone networks

---

## 2. Datagram Switching

### Characteristics
- **Connectionless** network
- Network layer switching
- **No setup/teardown** phases
- Each packet routed **independently**
- Packets may take **different paths**

---

### Routing Table
- Based on **destination address**
- Dynamic (updated periodically)
- Each switch (router) has own table
- Finds **next hop** for destination

---

### Packet Structure
- **Destination address** in header
- Address remains **same** throughout journey
- Contains full address (not just next hop)

---

### Process
1. Packet arrives at router
2. Router checks destination address
3. Consults routing table
4. Forwards to appropriate output port
5. May wait if other packets processing

---

### Delay Components

**Total Delay = 3T + 3τ + w₁ + w₂**

Where:
- T = Transmission time
- τ = Propagation delay
- w = Waiting time at switches

**Note:** No setup/teardown delay

---

### Advantages
- No setup time
- More efficient resource use
- Flexible routing
- Adapts to failures

### Disadvantages
- Variable delay
- Packets may arrive out of order
- No guaranteed bandwidth
- Processing at each hop

**Applications:** Internet (IP protocol)

---

## 3. Virtual-Circuit Switching

### Characteristics
- **Hybrid** approach (circuit + datagram)
- Data link or network layer
- Has **three phases** (like circuit)
- Data is **packetized** (like datagram)
- All packets follow **same path**

---

### Addressing

#### Global Address
- Unique identifier
- Source and destination addresses
- Used in setup phase only

#### VCI (Virtual-Circuit Identifier)
- **Small number** (local scope)
- **Switch-specific** (changes at each switch)
- Used during data transfer
- Efficient (smaller than global address)

---

### Three Phases

#### A. Setup Phase

**Step 1: Setup Request**
- Source sends request with destination address
- Each switch creates **routing table entry**
- Assigns **input VCI** and **output VCI**
- Resources may be allocated

**Step 2: Acknowledgment**
- Destination sends ACK back
- Completes switch table entries
- Path established

#### B. Data Transfer Phase
- Packets carry **VCI** (not full address)
- Switch uses VCI to look up route
- **VCI changes** at each switch
- Follow established path

#### C. Teardown Phase
- Special frame sent to end connection
- Each switch releases resources
- Table entries removed

---

### Switch Table Entries

| Input Port | Input VCI | Output Port | Output VCI |
|------------|-----------|-------------|------------|
| 2 | 14 | 3 | 22 |

**Process:**
1. Frame arrives on input port with input VCI
2. Switch looks up entry
3. Forwards to output port with new output VCI

---

### VCI Value Changes (Example)

**Why VCI Changes:**
- Avoids conflicts
- Local scope only
- Efficient table management

**Path A→B:**
```
Source (A): Global address
  ↓ VCI=14
Switch 1: In=14, Out=22
  ↓ VCI=22
Switch 2: In=22, Out=35
  ↓ VCI=35
Destination (B): Global address
```

---

### Delay Components

**Total Delay = 3T + 3τ + Setup + Teardown**

**Note:** Less waiting than datagram (path reserved)

---

### Resource Allocation

**Two Options:**
1. **During Setup** (like circuit switching)
   - Guaranteed resources
   - Predictable performance

2. **On Demand** (like datagram)
   - Flexible allocation
   - Better efficiency

---

### Advantages
- Packets follow same path (ordered delivery)
- Less overhead than datagram (small VCI)
- Can reserve resources
- Faster switching (VCI lookup)

### Disadvantages
- Setup time required
- Less flexible than datagram
- Resources may be wasted
- Vulnerable to switch failure

**Applications:**
- **ATM** (Asynchronous Transfer Mode)
- **Frame Relay**
- **MPLS** (Multiprotocol Label Switching)

---

## Comparison Summary

| Feature | Circuit | Datagram | Virtual-Circuit |
|---------|---------|----------|-----------------|
| **Setup Phase** | Yes | No | Yes |
| **Dedicated Path** | Yes | No | Yes |
| **Addressing** | Initial only | Every packet | VCI |
| **Packet Order** | N/A | May vary | Preserved |
| **Resource Allocation** | Reserved | On demand | Either |
| **Delay** | Setup + data | Variable | Setup + data |
| **Efficiency** | Low (idle) | High | Medium |
| **Routing Complexity** | Low | High | Medium |
| **Layer** | Physical | Network | Data Link/Network |

---

## Exam Focus Points

✓ **Understand** three phases of circuit/virtual-circuit  
✓ **Differentiate** circuit, datagram, virtual-circuit  
✓ **Explain** VCI concept and why it changes  
✓ **Calculate** delays for each switching type  
✓ **Know** resource reservation differences  
✓ **Draw** switching network diagrams  
✓ **Identify** applications of each type  
✓ **Understand** routing table structures  

---

## Key Differences

**Circuit vs Virtual-Circuit:**
- Circuit: Physical path, continuous signal
- VC: Logical path, packetized data

**Datagram vs Virtual-Circuit:**
- Datagram: Independent packet routing
- VC: Fixed path for all packets

**When to Use:**
- **Circuit:** Real-time, constant traffic (voice calls)
- **Datagram:** Bursty, adaptive routing (Internet)
- **Virtual-Circuit:** Ordered delivery, controlled QoS (ATM)

---

## Delay Comparison

**Circuit:** Highest setup, lowest transfer  
**Datagram:** No setup, variable transfer  
**Virtual-Circuit:** Medium setup, medium transfer
