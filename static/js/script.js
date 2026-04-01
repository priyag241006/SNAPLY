let currentAlbum = "";
let stream = null;

function notify(msg) {
    const s = document.getElementById('status-bubble');
    s.innerText = "✨ " + msg;
    s.style.display = 'block';
    setTimeout(() => s.style.display = 'none', 3000);
}

async function createNewAlbum() {
    const name = document.getElementById('albumName').value.trim();
    if(!name) return;
    await fetch('/create-album', { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({ name: name }) });
    document.getElementById('albumName').value = "";
    await loadAlbums();
    selectAlbum(name);
}

async function loadAlbums() {
    const res = await fetch('/get-albums');
    const albums = await res.json();
    document.getElementById('albumList').innerHTML = albums.map(a => `
        <div class="album-item">
            <span onclick="selectAlbum('${a.name}')" style="flex:1;">📁 ${a.name}</span>
            <small>${a.count}</small>
        </div>
    `).join('');
}

function selectAlbum(name) {
    currentAlbum = name;
    document.getElementById('empty-hint').style.display = 'none';
    document.getElementById('capture-area').style.display = 'block';
    document.getElementById('activeFolderTitle').innerText = name;
    document.getElementById('photoGrid').innerHTML = "<p>Loading gallery...</p>";
    loadPhotos();
}

async function loadPhotos() {
    if (!currentAlbum) return;
    const res = await fetch(`/get-photos/${currentAlbum}`);
    const photos = await res.json();
    const grid = document.getElementById('photoGrid');
    grid.innerHTML = photos.length ? photos.map(p => `
        <div class="img-card">
            <img src="/uploads/${currentAlbum}/${p}">
            <button class="photo-del-btn" onclick="deletePhoto('${p}')">×</button>
        </div>
    `).join('') : "<p>No photos yet.</p>";
}

// Fixed Upload Function
function uploadFromFile(input) {
    if(!currentAlbum) return alert("Select a folder first!");
    const reader = new FileReader();
    reader.onload = async (e) => {
        await fetch('/upload-snap', { 
            method: 'POST', 
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify({ image: e.target.result, album: currentAlbum }) 
        });
        notify("Uploaded!");
        loadPhotos();
        loadAlbums();
    };
    reader.readAsDataURL(input.files[0]);
    input.value = ""; // Reset input
}

async function takeSnap() {
    if(!currentAlbum) return;
    const v = document.getElementById('video');
    const c = document.createElement('canvas');
    c.width = v.videoWidth; c.height = v.videoHeight;
    c.getContext('2d').drawImage(v, 0, 0);
    await fetch('/upload-snap', { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({ image: c.toDataURL('image/png'), album: currentAlbum }) });
    notify("Captured!");
    loadPhotos();
    loadAlbums();
}

async function deletePhoto(filename) {
    if(!confirm("Delete this photo?")) return;
    await fetch('/delete-photo', { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({ album: currentAlbum, filename: filename }) });
    loadPhotos();
    loadAlbums();
}

async function deleteCurrentFolder() {
    if(!confirm(`Delete folder '${currentAlbum}' and all contents?`)) return;
    await fetch('/delete-album', { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({ name: currentAlbum }) });
    document.getElementById('capture-area').style.display = 'none';
    document.getElementById('empty-hint').style.display = 'block';
    loadAlbums();
}

async function startCamera() {
    stream = await navigator.mediaDevices.getUserMedia({ video: true });
    document.getElementById('video').srcObject = stream;
    document.getElementById('btnOn').style.display = 'none';
    document.getElementById('btnOff').style.display = 'inline-block';
}

function stopCamera() {
    if(stream) stream.getTracks().forEach(t => t.stop());
    document.getElementById('btnOn').style.display = 'inline-block';
    document.getElementById('btnOff').style.display = 'none';
}

window.onload = loadAlbums;