# Secure Number Recycling System (SNRS)
### Sovereign National Cyber-Safety & India DPDP Act 2023 Compliance Platform

[![Status](https://img.shields.io/badge/System-Active_100%25-00FF88?style=flat-square)](#)
[![DPDP](https://img.shields.io/badge/DPDP_Act_2023-Section_8(7)_Compliant-00F0FF?style=flat-square)](#)
[![TRAI](https://img.shields.io/badge/TRAI-90--Day_Cooldown_Protocol-8B5CF6?style=flat-square)](#)
[![Security](https://img.shields.io/badge/Zero_PII-Hardware_Security_Module-F59E0B?style=flat-square)](#)

---

## 1. Executive Summary & Problem Space

In India, **over 80 million mobile phone numbers** are recycled and reassigned annually under Telecom Regulatory Authority of India (TRAI) 90-day inactivity churn guidelines. 

### The Critical Vulnerability:
When a citizen surrenders or abandons a phone number, third-party data fiduciaries (WhatsApp, Google, Paytm, PhonePe, Netbanking portals, e-Commerce accounts, DigiLocker) receive **no automated de-linking signal**. When the telecom operator reassigns the SIM to a new stranger or opportunistic attacker:
1. The new SIM owner requests an SMS verification OTP on WhatsApp or Banking apps.
2. The SMS OTP arrives legitimately on the newly acquired SIM.
3. The new owner gains **unauthorized account takeover**—accessing previous chat histories, confidential banking transaction alerts, UPI VPAs, and stored identity credentials.

---

## 2. The SNRS Solution

The **Secure Number Recycling System (SNRS)** is a sovereign national cyber-defense architecture that enforces **automated, zero-residual mobile identity unlinking** across all connected banking, fintech, messaging, and digital governance databases before a recycled number can be re-issued.

### Key Architectural Pillars:
- **Sub-150ms Parallel Broadcast:** Asynchronous webhook fanout engine over sovereign mTLS 1.3 tunnels.
- **Strict Zero-PII Retention:** Mobile numbers are hashed and masked (`+91 ******4821`) across all logs, telemetry, and payload exchanges, adhering strictly to the **Digital Personal Data Protection (DPDP) Act 2023 (Section 8.7)**.
- **Cryptographic Proof of Erasure:** Every target application database returns a signed SHA-256 confirmation hash; a Merkle Root proof is minted in a tamper-evident compliance audit trail.
- **Consensus-Gated Reassignment:** The carrier inventory pool is cryptographically locked and **cannot release a SIM for reassignment** until 100% of linked services return verified de-link confirmations.

---

## 3. Core Modules in This Platform

1. **Hero & Threat Visualizer:**
   - Interactive *Before SNRS vs. After SNRS* switch highlighting the identity theft loophole vs. zero-residual automated de-linking.
2. **Real-Time 5-Step Architecture Pipeline:**
   - **Step 1:** Telecom operator detects SIM inactivity (TRAI 90-day churn policy).
   - **Step 2:** Carrier triggers mTLS 1.3 + Ed25519 signed deactivation payload to SNRS Sovereign Hub.
   - **Step 3:** SNRS broadcasts concurrent asynchronous API unlinking requests to third-party platforms.
   - **Step 4:** Target databases wipe credentials, decouple numbers, and return signed SHA-256 hashes.
   - **Step 5:** Number certified as "Clean/Sanitized" and unlocked in carrier inventory.
   - Includes **Interactive Payload Inspector** (Request/Response JSON & Security Controls) and **Auto-Play Walkthrough Mode**.
3. **Interactive Simulation Sandbox (Live Demo Console):**
   - Live interactive state machine testing with dormant phone number input and auto-masking.
   - Target ecosystem endpoint selector (WhatsApp, GPay/UPI, HDFC/SBI CBS, Amazon, DigiLocker, Telegram, Paytm, Swiggy).
   - Real-time **Cyber Telemetry Terminal** with color-coded levels (`[INFO]`, `[CRYPTO]`, `[DPDP]`, `[SUCCESS]`) and latency tracking.
   - Chaos/Retry simulation toggle for testing resilience against network timeouts.
   - **Official Clean SIM Release Certificate** with printable view and JSON export.
   - **Attack Reassignment Sandbox** demonstrating 100% defense against SMS OTP hijacking attempts on sanitized SIMs.
4. **Compliance & Analytics Dashboard:**
   - Live real-time statistics counters: Total Numbers Sanitized, Prevented OTP Breaches, Average Latency (<150ms), DPDP Compliance Index (100%).
   - Interactive Sector Breach Distribution Chart (Banking, Messaging, Fintech, eCommerce).
   - DPDP Act 2023 Legal Framework Matrix (Section 8(7), Section 6(1), TRAI Churn, CERT-In).
   - National Telecom Carrier SLA Performance Table (Jio, Airtel, Vi, BSNL).

---

## 4. Technology Stack & Aesthetic

- **Framework:** React 19 + TypeScript (Strict Type Safety + `verbatimModuleSyntax`)
- **Build Tool:** Vite 8 (Ultra-fast HMR and 500ms production builds)
- **Styling:** Tailwind CSS v4 with custom Cyber Antigravity Palette:
  - Deep Slate Background (`#0B0F19`)
  - Electric Cyan (`#00F0FF`)
  - Neon Emerald (`#00FF88`)
  - Subtle Violet (`#8B5CF6`)
- **Visual Language:**
  - 3D Parallax Tilt Cards with dynamic specular glare
  - Zero-gravity Particle & Connective Node Canvas
  - Multi-layered Glassmorphism (`backdrop-filter: blur(16px)`)
- **Audio Synthesizer:** Zero-dependency Web Audio API Cyber Sound Synthesizer with toggleable ambient SFX.

---

## 5. Development & Build Instructions

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run production build (Type check + Vite bundle)
npm run build

# Run linter
npm run lint
```
