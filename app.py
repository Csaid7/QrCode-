# Accept POST requests at /generate-qr
# Get the URL from the request
# Use your existing QR code logic to generate it
# Send the image back
# Flask: The framework that creates your web server
# request: Gets data FROM the frontend (like the URL the user typed)
# send_file: Sends data BACK to the frontend (like the QR code image)
from flask import Flask, request, send_file
#CORS: Lets your React app (running on one port) talk to your Flask server (running on another port). 
# Without this, your browser blocks the connection for security reasons.
from flask_cors import CORS
#like a temporary container that holds the image just long enough to send it
import io
from PIL import Image, ImageDraw, ImageFont
import qrcode

app = Flask(__name__)
CORS(app) # allows react frontend to talk to backend

@app.route('/Qr-Code-Generator', methods =['POST'])
def make_qr():
	data = request.get_json()
	url = data['url']
	"""Create a QR code image for `link` and save it to `out_path`.

	Returns the path to the created file.
	"""
	# Call package constructor to create a qrcode object
	# version : controls the size of the QR code
	# box_size: controls how many pixels each box of the Qr code is
	# border: controls how many boxes thick the border should be
	qr = qrcode.QRCode(version=1, box_size=5, border=5)
	# Data is added to the QR code
	qr.add_data(url)
	# Qr code is generated
	qr.make()
	# save QR code in pillow object
	img = qr.make_image(fill_color="black", back_color="white")
    
    #save to memory instead of disk
    ##empty container waiting to hold image data
	img_bytes = io.BytesIO()#creates fake file in memory
	img.save(img_bytes, format='PNG')
	img_bytes.seek(0)#sends it back to position 0
	
	return send_file(img_bytes, mimetype='image/png')
if __name__ == '__main__':
    app.run(debug=True, port=5000)

