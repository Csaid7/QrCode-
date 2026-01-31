# QR Code Generator

A full-stack web application that generates downloadable QR codes from user-provided URLs. Built to learn and demonstrate end-to-end web development skills connecting a Python backend API to a React frontend.

## What I Built

This application takes a URL from the user through a React frontend, sends it as JSON data to a Flask backend API, generates a QR code on the server, and returns the image to the frontend for display and download - all without saving files to disk.

**Key Features:**
- Real-time QR code generation from any URL
- Clean, responsive user interface
- Instant download functionality
- Efficient in-memory image processing (no disk storage)

## Technologies Used

**Backend:**
- Python Flask - RESTful API server
- qrcode - QR code generation
- Pillow (PIL) - Image processing
- Flask-CORS - Cross-origin resource sharing

**Frontend:**
- React - UI framework
- Fetch API - HTTP requests
- Blob API - Binary data handling

## What I Learned

- How to build RESTful API endpoints that accept JSON data and return binary files
- Frontend-backend communication using HTTP POST requests
- Working with binary data (blobs) in the browser vs. text/JSON data
- In-memory file handling using BytesIO to avoid unnecessary disk I/O
- CORS configuration for local development across different ports
- Converting binary image data to displayable URLs using `URL.createObjectURL()`

## How to Run

**Backend Setup:**
```bash
# Install dependencies
pip install flask flask-cors pillow qrcode

# Run the Flask server
python app.py
# Server runs at http://localhost:5000
```

**Frontend Setup:**
```bash
# Navigate to frontend directory
cd qr-frontend

# Install dependencies (first time only)
npm install

# Start React development server
npm start
# App runs at http://localhost:3000
```

## Project Structure
```
QrCode/
├── app.py              # Flask backend API
├── QRmaker.py          # Original standalone QR generator
└── qr-frontend/        # React frontend application
    └── src/
        └── App.js      # Main React component
```

## Future Improvements
- Custom QR code styling (colors, logos)
- Batch QR code generation
- QR code history/management
- Deployment to production environment
