const QRCode = require("qrcode");

const data = "https://www.instagram.com/elektromerkle/"; // Change this to the URL or text you want to encode

QRCode.toFile(
	"elektro-merkle-instagram.png",
	data,
	{
		type: "png",
		width: 600,
		margin: 2,
	},
	(err) => {
		if (err) {
			console.error("Error generating QR code:", err);
		} else {
			console.log("QR code generated successfully: qrcode.png");
		}
	}
);
