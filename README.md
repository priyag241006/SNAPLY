# SNAPLY 📸

A high-end, dark-themed media management web application built using **Python** and **Flask**. **SNAPLY** bridges the gap between hardware and software by allowing users to capture live snapshots directly from their browser and organize them into a custom local file system.

---

## **About**
**SNAPLY** is an intuitive "Smart Gallery" designed for researchers, engineers, and creators. It provides a seamless, step-by-step workflow to create project-specific folders and capture real-time media without the need for external transfer tools. 

The application is built with a focus on **Information Hierarchy**, ensuring that every captured image is instantly indexed and manageable through a premium glassmorphism interface.

---

## **Snapshots of Snaply** |
<img width="400" height="995" alt="Screenshot 2026-04-01 213805" src="https://github.com/user-attachments/assets/8e0c257b-877e-4f80-b796-a49a2e7dc6e6" />
<img width="400" height="810" alt="Screenshot 2026-04-01 213825" src="https://github.com/user-attachments/assets/c694e875-3c2f-40af-b0bb-dab7d3190290" />
<img width="400" height="764" alt="Screenshot 2026-04-01 213853" src="https://github.com/user-attachments/assets/3faddc3d-a4a3-4eb1-a12e-8647ba58c27c" />
<img width="400" height="758" alt="Screenshot 2026-04-01 214515" src="https://github.com/user-attachments/assets/2d165f31-064b-4a52-b055-904ee9e714fe" />



---

## **Features**

* **Live Camera Capture:** Integrated **HTML5 MediaDevices API** to stream and capture high-resolution photos directly to the server.
* **Dynamic Folder Management:** Create, switch, and delete project-specific folders in real-time.
* **Individual Photo Controls:** Delete specific images from an album with a single click (hover over an image to reveal the delete button).
* **Smart Uploads:** Support for manual file uploads from your local device into selected albums.
* **Midnight UI:** A responsive, glassmorphism-inspired dark mode designed for a premium user experience.
* **Instant Notifications:** Visual feedback via a status bubble for captures, uploads, and deletions.

---

## **Tech Stack**

| Technology | Purpose |
| :--- | :--- |
| **Python 3.x** | Backend logic and Server management |
| **Flask** | Web framework and Routing |
| **JavaScript (ES6+)** | Camera API integration and Asynchronous (AJAX) updates |
| **HTML5 / CSS3** | Midnight Glassmorphism UI and Responsive Layout |
| **OS / Shutil** | Server-side File System I/O operations |

---


## Project Structure

```
SNAPLY/
├── app.py              # Flask Backend & File Logic
├── static/
│   ├── css/style.css   # Midnight Theme & Layout
│   └── js/script.js    # Camera API & Frontend Logic
├── templates/
│   └── index.html      # Dashboard User Interface
└── uploads/            # Local storage for your albums
```
## Author

Priya Gundale
https://github.com/priyag241006
