# SNAPLY 📸

A dark-themed media management web application built using **Python** and **Flask**.

**SNAPLY** is designed to make capturing and organizing images simple and efficient. In many situations, users need to manually sort and separate images after capturing them, which can be time-consuming.

**SNAPLY** solves this by allowing users to directly capture images into selected folders in real-time. As images are clicked, they are automatically stored in the chosen project folder, eliminating the need for manual sorting later.

This ensures a smoother, faster, and more organized workflow for users.

---

## 📌 About

**SNAPLY** is an intuitive **"Smart Gallery"**. It provides a seamless, step-by-step workflow to create project-specific folders and capture real-time media without the need for external transfer tools.

The application is built with a focus on **Information Hierarchy**, ensuring that every captured image is instantly indexed and manageable through a premium glassmorphism interface.

---

## 📸 Snapshots of Snaply

<div align="center">

<img width="380" alt="Home Screen" src="https://github.com/user-attachments/assets/8e0c257b-877e-4f80-b796-a49a2e7dc6e6" />
&nbsp;&nbsp;
<img width="380" alt="Gallery View" src="https://github.com/user-attachments/assets/c694e875-3c2f-40af-b0bb-dab7d3190290" />

<br><br>

<img width="380" alt="Camera Capture" src="https://github.com/user-attachments/assets/3faddc3d-a4a3-4eb1-a12e-8647ba58c27c" />
&nbsp;&nbsp;
<img width="380" alt="Folder Management" src="https://github.com/user-attachments/assets/2d165f31-064b-4a52-b055-904ee9e714fe" />

</div>

---

## ✨ Features

- 📷 **Live Camera Capture** — Integrated HTML5 MediaDevices API to stream and capture high-resolution photos directly to the server
- 📁 **Dynamic Folder Management** — Create, switch, and delete project-specific folders in real-time
- 🗑️ **Individual Photo Controls** — Delete specific images from an album with a single click (hover over an image to reveal the delete button)
- 📤 **Smart Uploads** — Support for manual file uploads from your local device into selected albums
- 🌙 **Midnight UI** — A responsive, glassmorphism-inspired dark mode designed for a premium user experience
- 🔔 **Instant Notifications** — Visual feedback via a status bubble for captures, uploads, and deletions

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **Python 3.x** | Backend logic and server management |
| **Flask** | Web framework and routing |
| **JavaScript (ES6+)** | Camera API integration and asynchronous (AJAX) updates |
| **HTML5 / CSS3** | Midnight glassmorphism UI and responsive layout |
| **OS / Shutil** | Server-side file system I/O operations |

---

## ▶️ How to Run

### Step 1 — Install Flask
```bash
pip install flask
```

### Step 2 — Run the Application
```bash
python app.py
```

### Step 3 — Open in Browser
```
http://localhost:5000
```

---

## 📖 How to Use

### 📁 Create Folder
- Enter a project name in the **"Step 1"** box
- Click **Create Folder**

### 🖱️ Select Folder
- Click on a folder from the sidebar to activate it

### 📷 Capture Media
- Click **Turn On Camera**
- Then click **Snap Photo** to save images

### 📤 Upload Media
- Use **Upload File** to add images from your device

### 🗑️ Manage Files
- Hover over images → Click **Delete**
- Use **Delete Folder** to remove the entire folder

---

## 📁 Project Structure

```
SNAPLY/
├── app.py                  # Flask backend & file logic
├── static/
│   ├── css/style.css       # Midnight theme & layout
│   └── js/script.js        # Camera API & frontend logic
├── templates/
│   └── index.html          # Dashboard user interface
└── uploads/                # Local storage for your albums
```

---

## 👩‍💻 Author

**Priya Gundale**
GitHub: [@priyag241006](https://github.com/priyag241006)
