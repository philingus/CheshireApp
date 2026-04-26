# 😸 Cheshire
### *The voice that’s still there.*

Cheshire is an AI-powered assistive communication prototype that turns tiny, intentional movements into spoken phrases in a patient’s own voice. 

Built for **KeanUHackThis 2026** under the theme **Dream in AI**.

---

## 🚀 What It Does

A user performs a small movement, such as a wrist tilt, finger tap, or a tiny circular motion. Cheshire captures that motion, classifies it using an LSTM model, and translates it into speech.

### Gesture Mapping Example

| Gesture | Output |
| :--- | :--- |
| **Small wrist circle** | “I’m hungry.” |
| **Two finger taps** | “I love you, Mom.” |
| **Wrist tilt left** | “Yes.” |
| **Wrist tilt right** | “No.” |
| **Small forward motion** | “I need help.” |

---

## 🧠 Why It Matters

Many people lose speech before they lose thought. Patients with ALS, aphasia, locked-in syndrome, or stroke complications often know exactly what they want to say, but their bodies cannot express it. 

Cheshire asks: 
> *“What if the smallest movement someone has left could become their voice?”*

---

## 🛠 How It Works

1.  **Input:** Captures motion via phone sensors (accelerometer/gyroscope) or HC-SR04 ultrasonic sensors.
2.  **Processing:** Data is fed into an **LSTM gesture classifier**.
3.  **Feedback:** An **Arduino UNO R4** provides immediate visual confirmation via LEDs.
4.  **Output:** The predicted phrase is spoken aloud via high-quality voice synthesis.

### Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend** | Next.js + React |
| **Backend** | Node.js API routes |
| **AI Model** | LSTM with TensorFlow/Keras |
| **Sensor Input** | Phyphox phone sensors |
| **Hardware** | Arduino UNO R4, HC-SR04, LEDs |
| **Voice Output** | ElevenLabs / Demo playback |
| **Database** | Supabase-ready structure |

---

## 🏆 Sponsor Tracks

Cheshire fits multiple hackathon categories:

* **Dream in AI:** Imagining a future where speech is accessible to everyone.
* **Healthcare / Accessibility:** Focuses on assistive tech for motor impairments.
* **Hardware:** Integrates Arduino R4 and ultrasonic sensors for physical feedback.
* **ElevenLabs**
* **SnowflakeAPI**
* **auth0**

---

## 🎥 Demo & Reality Check

In this prototype, a user performs a tiny gesture. The app detects the motion, displays the confidence score, triggers the Arduino LEDs, and plays the audio.

### What is Real vs. Prototype

**Real Implementation:**
* Next.js interface and gesture-to-phrase mapping.
* LSTM model architecture.
* Arduino LED feedback and HC-SR04 hardware integration.
* Voice output pipeline.

**Prototype Scope:**
* Requires medical validation for clinical use.
* Production-ready voice cloning consent systems are currently conceptual.

---

## 🗺 Future Roadmap

- [ ] Real-time Phyphox streaming integration.
- [ ] Support for **EMG muscle sensors** and **Eye-tracking**.
- [ ] Caregiver dashboard for phrase customization.
- [ ] Mobile app version (iOS/Android).
- [ ] Secure patient voice consent system.

---

## ❤️ Core Message

Speech is not just sound.  
It is **identity**.  
It is **connection**.  
It is **presence**.  

**Cheshire gives people a way to be heard again.**

---
*Created for KeanUHackThis 2026.*
