# Lecture 07: Transmission Media

## Overview
Transmission media provide the physical conduit for carrying information from source to destination.

---

## Classification

### Guided Media (Wired)
- Physical conductor
- Signals contained within medium
- Types: Twisted-pair, Coaxial, Fiber-optic

### Unguided Media (Wireless)
- No physical conductor
- Signals propagate through air/space
- Types: Radio, Microwave, Infrared

---

## Guided Media

### 1. Twisted-Pair Cable

#### Types

**A. UTP (Unshielded Twisted-Pair)**
- Most common
- No metal shield
- 4 pairs of wires
- **Connector:** RJ-45

**Categories:**
- **Cat 3:** 16 MHz, 10 Mbps (telephone)
- **Cat 5:** 100 MHz, 100 Mbps (Fast Ethernet)
- **Cat 5e:** 100 MHz, 1 Gbps (Enhanced)
- **Cat 6:** 250 MHz, 1 Gbps
- **Cat 7:** 600 MHz, 10 Gbps

**B. STP (Shielded Twisted-Pair)**
- Metal foil/braid shield
- Better noise immunity
- More expensive
- **IBM** standard

#### Advantages
- Inexpensive
- Easy installation
- Flexible

#### Disadvantages
- Limited distance (100m for Ethernet)
- Limited bandwidth
- Susceptible to interference

---

### 2. Coaxial Cable

#### Structure
- Inner conductor (copper)
- Insulation layer
- Metal shield (braid)
- Outer plastic cover

#### Categories
- **RG-59:** Cable TV (75Ω)
- **RG-11:** Thick Ethernet (50Ω)
- **RG-58:** Thin Ethernet (50Ω)

**RG = Radio Government**

#### Connectors
- **BNC:** Bayonet Neil-Concelman
- **BNC-T:** Branch connections
- **BNC Terminator:** Prevent reflections

#### Advantages
- Better bandwidth than twisted-pair
- Better noise immunity
- Longer distances

#### Disadvantages
- More expensive than UTP
- Less flexible
- Installation difficulty

---

### 3. Fiber-Optic Cable

#### Principle
- Transmits **light** signals
- Based on **total internal reflection**
- **Core:** Glass/plastic (light travels)
- **Cladding:** Lower density (reflects light)

---

#### Propagation Modes

**A. Multimode**

**Step-Index:**
- Constant core density
- Multiple light paths
- Signal distortion
- Shorter distances

**Graded-Index:**
- Varying core density
- Less distortion
- Better performance
- Medium distances

**B. Single-Mode**
- Very narrow core
- One light path
- Minimal distortion
- **Long distances** (50+ km)
- Higher quality

---

#### Fiber Connectors
- **SC (Subscriber Channel):** Push-pull, cable TV
- **ST (Straight-Tip):** Bayonet, networking
- **MT-RJ:** Small form-factor, RJ-45 size

---

#### Advantages
- **Highest bandwidth** (THz)
- **Low attenuation** (50 km without repeater)
- **EMI immune** (no electromagnetic interference)
- **Secure** (difficult to tap)
- **Lightweight**
- **Corrosion resistant**

#### Disadvantages
- **Expensive** (cable and interfaces)
- **Installation complexity** (requires expertise)
- **Unidirectional** (need 2 fibers for bidirectional)
- **Fragile** (glass breaks easily)

---

## Unguided Media (Wireless)

### Electromagnetic Spectrum
- **Radio:** 3 kHz - 1 GHz
- **Microwave:** 1 - 300 GHz
- **Infrared:** 300 GHz - 400 THz

---

### 1. Radio Waves

#### Characteristics
- Frequencies: 3 kHz - 1 GHz
- **Omnidirectional** (all directions)
- Can travel long distances
- **Sky mode propagation**

#### Applications
- AM/FM radio broadcasting
- TV broadcasting
- Paging systems
- **Multicast** communication

#### Advantages
- Long range
- Penetrates walls
- No line-of-sight needed

#### Disadvantages
- Lower bandwidth
- Interference prone
- Requires licensing

---

### 2. Microwaves

#### Characteristics
- Frequencies: 1 - 300 GHz
- **Unidirectional** (focused beam)
- **Line-of-sight** propagation
- Cannot penetrate walls well

#### Types
- **Terrestrial:** Tower-to-tower
- **Satellite:** Earth-to-satellite

#### Applications
- Cellular phones
- Satellite networks
- Wireless LANs (Wi-Fi)
- **Unicast** communication

#### Advantages
- High bandwidth
- Long distances (satellite)
- No cabling

#### Disadvantages
- Requires line-of-sight
- Weather affected
- Expensive equipment
- Licensing required

---

### 3. Infrared

#### Characteristics
- Frequencies: 300 GHz - 400 THz
- **Cannot penetrate walls**
- **Line-of-sight** only
- **Short range** (few meters)

#### Applications
- Remote controls
- IrDA ports (keyboard, mouse)
- **Short-range** device communication

#### IrDA Standards
- Original: 75 kbps, 8m distance
- Recent: 4 Mbps

#### Advantages
- No interference with radio
- Secure (contained)
- Unlicensed
- Low cost

#### Disadvantages
- Very short range
- Line-of-sight required
- Blocked by obstacles
- Bright light interference

---

## Propagation Methods

### 1. Ground Propagation
- Signal travels along Earth's surface
- **Very low frequencies**
- Long distances

### 2. Sky Propagation
- Signal reflects off ionosphere
- **Radio waves**
- Long distances

### 3. Line-of-Sight
- Direct path required
- **Microwaves, infrared**
- Limited by horizon

---

## Comparison Summary

| Medium | Type | Bandwidth | Distance | Cost | Noise |
|--------|------|-----------|----------|------|-------|
| UTP | Guided | Low | 100m | Low | High |
| STP | Guided | Medium | 100m | Medium | Medium |
| Coaxial | Guided | Medium | 500m | Medium | Low |
| Fiber | Guided | Very High | 50km | High | Very Low |
| Radio | Unguided | Low | Long | Medium | High |
| Microwave | Unguided | High | Long | High | Medium |
| Infrared | Unguided | Medium | Short | Low | Low |

---

## Exam Focus Points

✓ **Understand** guided vs unguided differences  
✓ **Know** UTP categories and speeds  
✓ **Compare** multimode vs single-mode fiber  
✓ **List** advantages/disadvantages of each medium  
✓ **Identify** applications for each type  
✓ **Explain** fiber-optic principle (total internal reflection)  
✓ **Differentiate** omnidirectional vs unidirectional  
✓ **Know** connector types: RJ-45, BNC, SC, ST  

---

## Quick Reference

**When to Use:**
- **UTP:** LANs, short distances, cost-sensitive
- **Coaxial:** Cable TV, better shielding needed
- **Fiber:** Long distance, high bandwidth, secure
- **Radio:** Broadcasting, mobile users
- **Microwave:** Line-of-sight, high capacity
- **Infrared:** Device-to-device, very short range
