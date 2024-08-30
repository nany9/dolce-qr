const tg = window.Telegram.WebApp;
tg.showScanQrPopup({text: "Отсканируйте QR-код на чеке"}, function(text){
    tg.sendData('qrdata');
});
