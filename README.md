# SNAPLY 📸

A high-end, dark-themed media management web application built using **Python** and **Flask**. **SNAPLY** bridges the gap between hardware and software by allowing users to capture live snapshots directly from their browser and organize them into a custom local file system.

---

## **About**
**SNAPLY** is an intuitive "Smart Gallery" designed for researchers, engineers, and creators. It provides a seamless, step-by-step workflow to create project-specific folders and capture real-time media without the need for external transfer tools. 

The application is built with a focus on **Information Hierarchy**, ensuring that every captured image is instantly indexed and manageable through a premium glassmorphism interface.

---

## **Visual Experience & Interface**

### 🎨 **Modern Midnight Dashboard**
*Once you upload your screenshots to GitHub, replace the placeholder links below to show off your UI.*

| **Feature** | **Snapshot Link** |
| :--- | :--- |
| **Main Dashboard** | ![Main UI](URL_TO_YOUR_IMAGE_1) |
| **Live Camera Capture** | ![Camera Active](URL_TO_YOUR_IMAGE_2) |
| **Project Library** | ![Gallery View](URL_TO_YOUR_IMAGE_3) |

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

## **How to Run**

### **Step 1: Install Flask**
Ensure you have Python installed, then run:
```bash
pip install flask
Step 2: Clone the Repository
Bash
git clone [https://github.com/priyag241006/SNAPLY.git](https://github.com/priyag241006/SNAPLY.git)
cd SNAPLY
Step 3: Run the Application
Bash
python app.py
Open http://localhost:5000 in your browser.

How to Use
Create a Folder: Enter a project name in the "Step 1" box and click Create Folder.

Select Folder: Click on your folder name in the sidebar to unlock the workspace.

Capture Media: Click Turn On Camera and use Snap Photo to save an image directly into the active folder.

Upload Media: Use the Upload File button to add existing images from your computer.

Manage Files: Hover over any photo to see the Delete (×) button or use the Delete Folder button in the header to remove an entire set.

Project Structure
Plaintext
SNAPLY/
├── app.py              # Flask Backend & File Logic
├── static/
│   ├── css/style.css   # Midnight Theme & Layout
│   └── js/script.js    # Camera API & Frontend Logic
├── templates/
│   └── index.html      # Dashboard User Interface
└── uploads/            # Local storage for your albums (Git Ignored)
Author
Priya Gundale – GitHub Profile
