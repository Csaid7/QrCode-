import qrcode
#Link to the qrcode we want to go to
website_link = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
#Call package constructor to create a qrcode object
# version : controls the size of the QR code
# box_size: controls how many pixels each box of the Qr code is
#border: controls how many boxes thick the border should be
qr = qrcode.QRCode(version = 1, box_size = 5, border = 5 )
#Data is added to the QR code
qr.add_data(website_link)
#Qr code is generated
qr.make()
#save QR code in pillow object
img = qr.make_image(fill_color = 'black', back_color= 'white')
#store and save the file
img.save('youtubeQr.png')
