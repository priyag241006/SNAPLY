from flask import Flask, render_template, request, jsonify, send_from_directory
import os
import base64
import shutil
from datetime import datetime

app = Flask(__name__)

# Base Setup
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
UPLOAD_FOLDER = os.path.join(BASE_DIR, 'uploads')
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/uploads/<path:filename>')
def serve_uploads(filename):
    return send_from_directory(UPLOAD_FOLDER, filename)

@app.route('/create-album', methods=['POST'])
def create_album():
    data = request.get_json()
    name = data.get('name', '').strip()
    if not name: return jsonify({"status": "error"}), 400
    path = os.path.join(UPLOAD_FOLDER, name)
    if not os.path.exists(path):
        os.makedirs(path)
    return jsonify({"status": "success"})

@app.route('/get-albums', methods=['GET'])
def get_albums():
    albums = []
    for d in os.listdir(UPLOAD_FOLDER):
        path = os.path.join(UPLOAD_FOLDER, d)
        if os.path.isdir(path):
            count = len([f for f in os.listdir(path) if f.lower().endswith(('.png', '.jpg', '.jpeg'))])
            albums.append({"name": d, "count": count})
    return jsonify(albums)

@app.route('/get-photos/<album>')
def get_photos(album):
    path = os.path.join(UPLOAD_FOLDER, album)
    if os.path.exists(path):
        photos = sorted(os.listdir(path), reverse=True)
        return jsonify(photos)
    return jsonify([])

@app.route('/upload-snap', methods=['POST'])
def upload_snap():
    data = request.get_json()
    image_data = data.get('image')
    album = data.get('album')
    try:
        header, encoded = image_data.split(",", 1)
        decoded_image = base64.b64decode(encoded)
        # Unique timestamp prevents overwriting files
        filename = f"img_{datetime.now().strftime('%H%M%S')}.png"
        with open(os.path.join(UPLOAD_FOLDER, album, filename), "wb") as f:
            f.write(decoded_image)
        return jsonify({"status": "success"})
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500

@app.route('/delete-photo', methods=['POST'])
def delete_photo():
    data = request.get_json()
    album, filename = data.get('album'), data.get('filename')
    path = os.path.join(UPLOAD_FOLDER, album, filename)
    if os.path.exists(path):
        os.remove(path)
        return jsonify({"status": "success"})
    return jsonify({"status": "error"}), 404

@app.route('/delete-album', methods=['POST'])
def delete_album():
    data = request.get_json()
    path = os.path.join(UPLOAD_FOLDER, data.get('name'))
    if os.path.exists(path):
        shutil.rmtree(path)
        return jsonify({"status": "success"})
    return jsonify({"status": "error"}), 404

if __name__ == '__main__':
    app.run(debug=True, port=5000)