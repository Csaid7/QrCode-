import qrcode  # type: ignore
from pathlib import Path

# Link to the qrcode we want to go to
website_link = "https://forms.gle/r1znXC2cX16FX5M48"


def make_qr(link: str, out_path: Path) -> Path:
	"""Create a QR code image for `link` and save it to `out_path`.

	Returns the path to the created file.
	"""
	# Call package constructor to create a qrcode object
	# version : controls the size of the QR code
	# box_size: controls how many pixels each box of the Qr code is
	# border: controls how many boxes thick the border should be
	qr = qrcode.QRCode(version=1, box_size=5, border=5)
	# Data is added to the QR code
	qr.add_data(link)
	# Qr code is generated
	qr.make()
	# save QR code in pillow object
	img = qr.make_image(fill_color="black", back_color="white")
	# ensure parent dir exists
	out_path.parent.mkdir(parents=True, exist_ok=True)
	img.save(str(out_path))
	return out_path


if __name__ == "__main__":
	# Save next to this script so it's easy to find
	default_out = Path(__file__).parent / "NSBEMemberFeedback.png"
	saved = make_qr(website_link, default_out)
	print(f"Saved QR code to: {saved}")
