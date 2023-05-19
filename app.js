let message = 'http://alexgolovanov.ru';
const qrImage = document.querySelector('.qr__images-box');
const qrMessage = document.querySelector('.qr__textarea');
const qrBtn = document.querySelector('.qr__btn');
// ---- ---- QRCode ---- ---- //
let qrcode = new QRCode(qrImage, {
  text: message,
  width: 300,
  height: 300,
  colorDark: '#121212',
  colorLight: '#ffffff',
});
