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
Step 2: Run the Application
python app.py
Step 3: Open in Browser

Go to:

http://localhost:5000
 How to Use
Create Folder:
Enter a project name in the "Step 1" box and click Create Folder
Select Folder:
Click on a folder from the sidebar to activate it
Capture Media:
Click Turn On Camera → then Snap Photo to save images
Upload Media:
Use Upload File to add images from your device
Manage Files:
Hover on images → Click to delete
Use Delete Folder to remove entire folder
Project Structure
SNAPLY/
├── app.py              # Flask Backend & File Handling
├── static/
│   ├── css/style.css   # Styling (Midnight Theme)
│   └── js/script.js    # Frontend Logic & Camera API
├── templates/
│   └── index.html      # Main UI
└── uploads/            # Stores user media (ignored in Git)
 Author

Priya Gundale GitHub: https://github.com/priyag241006
