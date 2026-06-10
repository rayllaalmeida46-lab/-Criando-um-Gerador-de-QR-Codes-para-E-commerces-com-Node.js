const QRCode = require("qrcode");

async function generateQRCode(url) {
  try {
    const qrCode = await QRCode.toString(url, {
      type: "terminal",
      small: true
    });

    return qrCode;
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  generateQRCode
};

const QRCode = require("qrcode");

async function generateQRCode(url) {
  try {
    await QRCode.toFile(
      "./qrcode.png",
      url
    );

    console.log("QR Code criado com sucesso!");
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  generateQRCode
};
