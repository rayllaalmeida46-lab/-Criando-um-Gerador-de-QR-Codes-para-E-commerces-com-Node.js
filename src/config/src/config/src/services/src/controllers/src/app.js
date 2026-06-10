const { createQRCode } = require("./controllers/qrCodeController");

const productUrl =
  "https://meuecommerce.com/produto/123";

createQRCode(productUrl);
