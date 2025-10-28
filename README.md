# 💸 PaySnap — Instant UPI QR Code Generator

> **Generate live UPI payment QR codes instantly from any UPI ID (VPA)**  
> Built with **React + FastAPI**, PaySnap is a full-stack mini project demonstrating how UPI payments can be integrated seamlessly using open standards.

---

## 🚀 Project Overview

**PaySnap** is a smart, minimalistic web app that allows users to create real, scannable **UPI payment QR codes** using only a **Virtual Payment Address (VPA)** — no banking API or external service required.

Whether you’re showcasing a **fintech demo**, building a **college mini-project**, or learning **full-stack development**, PaySnap bridges **frontend React** and **backend FastAPI** to demonstrate how payments can be visualized in real-time.

---

## 🌐 Live Demo
Check out the live version of our project here: [PaySnap Live](https://paysnap-uf2g.onrender.com/)

---

## 🎯 Motivation & Importance

Digital payments dominate India’s economy — and **UPI (Unified Payments Interface)** is at the heart of it.  
But few people understand *how simple the technology really is*.

The motive behind **PaySnap** is to:
- 🔍 **Demystify** how UPI QR codes work under the hood.  
- 💡 **Demonstrate** full-stack integration using open standards (React + FastAPI).  
- 🧠 **Educate** students and developers on practical, low-cost fintech concepts.  
- 🚀 **Showcase** how QR generation and payment linking can be automated in any app.

In short, PaySnap proves that even without a complex banking backend, you can build a *real, scannable* UPI payment system — and understand the technology that powers it.

---

## 🧩 Features

- ✅ Generate UPI payment QR instantly using only a VPA  
- 🧾 Add optional fields — Name, Amount, and Payment Note  
- 🧠 Smart backend logic to format UPI URI automatically  
- 💻 FastAPI backend for QR generation  
- 🎨 React frontend with clean, modern UI  
- ⚡ Real-time Base64 QR rendering (no file downloads needed)

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | React (Vite) |
| **Styling** | TailwindCSS / Inline CSS |
| **Backend** | FastAPI |
| **QR Generator** | Python `qrcode` + `Pillow` |
| **API Client** | Axios |
| **Runtime** | Node.js (Frontend) + Uvicorn (Backend) |
| **Containerization** | Docker & Docker Compose |

---

## 🧱 Project Structure

```bash
PaySnap/
│
├── backend/
│   ├── main.py              # FastAPI server
│   ├── requirements.txt
│   ├── Dockerfile       # Dependencies
│   └── .env                 # Optional backend config
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── components/
│   │   │   └── QRForm.jsx
│   │   └── ...
│   ├── .env
│   ├── Dockerfile                   # FRONTEND_BASE_URL for API
│   └── package.json
│
├── docker-compose.yml       # Root-level Docker Compose config            
└── README.md
```

---

## ⚙️ Installation & Setup

### 🧠 Prerequisites
Make sure you have installed:
- **Python 3.10+**
- **Node.js 18+**
- **pip** and **npm** or **yarn**

---

### 1️⃣ Backend Setup (FastAPI)
```bash
cd backend
python -m venv venv
source venv/bin/activate   # On Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

```bash
Once started, your API runs at:
👉 http://127.0.0.1:8000

Check docs at:
📘 http://127.0.0.1:8000/docs
```

### 2️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### 3️⃣ Environment Variables

## 📍 Backend .env

```bash
# Example (optional)
PORT=8000
```

## 💻 Frontend .env

```bash
VITE_BACKEND_URL=http://127.0.0.1:8000
```

## 🐳 Docker Support

**PaySnap** now includes full **Docker** and **Docker Compose** setup for both the frontend (React + Nginx) and backend (FastAPI).  
This allows you to launch the entire project with a single command — no manual environment setup required.

---

### 🔹 1️⃣ Prerequisites

Ensure you have the following installed:

- Docker Desktop  
- Docker Compose  

---

### 🔹 2️⃣ Build & Run Containers

From the **project root directory** (where `docker-compose.yml` exists), run:

```bash
docker-compose up --build
```
This command will:

Build both frontend and backend Docker images

Start two containers:

🧩 paysnap-backend → FastAPI app (port 8000)

🎨 paysnap-frontend → React app served via Nginx (port 3000)

Once containers start successfully:
```bash

🖥️ Visit the app at http://localhost:3000

⚙️ Backend API runs at http://localhost:8000
```
### 🔹 3️⃣ Stop Containers

```bash
docker-compose down
```

## 🧪 How It Works

1. User enters their **UPI ID (VPA)**, optional **name**, **amount**, and **note**.  
2. The **frontend** sends these details to the **FastAPI backend**.  
3. The backend dynamically generates a **UPI payment link** in the standard format:
   upi://pay?pa=<VPA>&pn=<Name>&am=<Amount>&tn=<Note>
4. The link is converted into a **QR code image** using Python’s `qrcode` library.  
5. The React frontend displays the QR instantly — **scannable by GPay, PhonePe, Paytm, etc.**

---

## 🧠 Learning Outcomes

- Understand how **UPI URI schemes** work  
- Integrate **React + FastAPI** in a clean, modern architecture  
- Work with **Axios**, **Base64 image rendering**, and **REST APIs**  
- Learn how to build **fintech prototypes** without external SDKs  
- Strengthen **full-stack communication** skills (frontend ↔ backend)

---

## 🌟 Future Enhancements

- 🔒 Integrate **UPI deep-link verification**  
- 📊 Add a **payment tracking dashboard**  
- 🌐 Host live on **Render / Vercel + Railway**  
- 📱 Convert into a **mobile PWA**  
- 🤖 Add **AI-based transaction description suggestions**

---

## 📸 Demo (Optional)

You can insert screenshots or a GIF here later, for example:

![App Preview](./assets/demo.gif)

---

### 👨‍💻 Author  
**Jeet Goyal**  
Software Developer | NIT Bhopal  
Focused on building intelligent, scalable, and user-centric applications.

 

🔗 [GitHub](https://github.com/jeetgoyal80) | 🌐 [LinkedIn](https://www.linkedin.com/in/jeet-goyal-95bb21285)

---

## 🏁 License

This project is **open-source** under the **MIT License** — free for learning, modification, and sharing.

---

## ⭐ Contribute or Fork

If you liked this project:

- ⭐ **Star this repo**  
- 🍴 **Fork it**  
- 🧠 **Use it as your next demo or learning reference**

> “Fintech isn’t magic — it’s just smart code, simplicity, and trust.”
   




