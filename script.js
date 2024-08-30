const tg = window.Telegram.WebApp;
tg.showScanQrPopup({text: "Отсканируйте QR-код на чеке"}, function(text){
    if (text.slice(0,5) == 't=202'){
        tg.sendData(text);
        tg.closeScanQrPopup();
    } else {
        tg.showAlert('Неверный QR код');
    }
 
});

tg.onEvent("scanQrPopupClosed", function(){
    tg.close();
});
