

const QRCode = require('qrcode')

QRCode.toString('Hello From Balkrishna',{type:'terminal'}, function (err, url) {
  console.log(url)
});