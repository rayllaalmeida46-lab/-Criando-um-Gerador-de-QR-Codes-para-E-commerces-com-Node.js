const qrCodeService = require("../services/qrCodeService");

async function createQRCode(productLink) {
  const qrCode = await qrCodeService.generateQRCode(productLink);

  console.log(qrCode);
}

module.exports = {
  createQRCode
};
