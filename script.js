const tg = window.Telegram.WebApp;
tg.showScanQrPopup({text: "Отсканируйте QR-код на чеке"}, function(text){
    tg.sendData(text);
    tg.closeScanQrPopup();
});

tg.onEvent("scanQrPopupClosed", function(){
    tg.sendData('App closed');
    tg.close();
});
