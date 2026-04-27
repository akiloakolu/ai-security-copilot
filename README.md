# 🛡️ AI Security Copilot

A **SOC-style security analysis dashboard** that helps identify and respond to suspicious activities such as phishing emails, login threats, and malicious scripts.

Built to simulate how a **real Security Operations Center (SOC)** triages alerts, classifies risk, and recommends response actions.

---

## 🌐 Live Demo

🔗 **Frontend (Vercel):**
https://ai-security-copilot-prd03efrl-akiloakolus-projects.vercel.app

🔗 **Backend API (Render):**
https://ai-security-copilot.onrender.com

---

## 📸 Preview

> SOC-style dashboard with real-time alert analysis, severity classification, and response recommendations.

---

## 🚀 Features

* 🔍 Analyze security alerts (phishing, login activity, scripts)
* ⚠️ Severity classification (Low / Medium / High)
* 🧠 Intelligent response recommendations
* 📊 SOC-style dashboard UI
* 🕘 Analysis history tracking
* 🔄 Real-time frontend ↔ backend communication
* 🎯 Simulated incident response workflow

---

## 🧠 How It Works

1. User inputs a security event (e.g., suspicious email)
2. Frontend sends request to backend API
3. Backend analyzes keywords and patterns
4. System classifies severity level
5. Returns recommended SOC actions
6. UI displays structured incident response output

---

## 🛠 Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js
* CORS

### Deployment

* Vercel (Frontend)
* Render (Backend)

---

## 🏗 Architecture

Client (React) → API (Express) → Analysis Engine → Response Output

---

## ⚡ How to Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/akiloakolu/ai-security-copilot.git
cd ai-security-copilot
```

---

### 2. Install dependencies

#### Backend

```bash
cd server
npm install
```

#### Frontend

```bash
cd ../client
npm install
```

---

### 3. Run the backend

```bash
cd server
node server.js
```

Server will run on:
http://localhost:5000

---

### 4. Run the frontend

```bash
cd client
npm run dev
```

Frontend will run on:
http://localhost:5173

---

## 📌 Example Use Case

Input:
User received email asking to reset password

Output:

* Severity: High
* Threat Type: Phishing / Login Threat
* Actions:

  * Reset password
  * Enable MFA
  * Check login history
  * Warn the user

---

## 🔐 Security Concepts Demonstrated

* Phishing detection logic
* Incident triage workflow
* Risk classification
* SOC response playbooks
* Alert analysis patterns

---

## 📈 Future Improvements

* 🔗 Integrate real threat intelligence APIs
* 🧠 Add ML-based classification
* 📊 Add charts & analytics dashboard
* 👥 Multi-user authentication
* 📝 Export incident reports (PDF)

---

## 👨‍💻 Author

**Akilo Akolu**
Cybersecurity | SOC | Risk & Cloud Security

🔗 GitHub: https://github.com/akiloakolu
🔗 LinkedIn: https://www.linkedin.com/in/akilo/

---

## ⭐ Why This Project Matters

This project demonstrates:

* Real-world SOC thinking
* Security event analysis
* Full-stack development (React + Node)
* Deployment & production readiness
* Clean UI + structured outputs

It reflects how modern security teams **analyze, classify, and respond to threats.**

---

## 📜 License

MIT License
