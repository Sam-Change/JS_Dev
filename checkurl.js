let packet_goHome = {
    "name": "goHome",
}

let packet_closeFuncData = {
    "callback": "",
}

let packet_closeFunc = {
    "name": "closeFunc",
    "data": JSON.stringify(packet_closeFuncData),
}

let packet_onLoadingData = {
    "open": "Y",
}

let packet_onLoading = {
    "name": "onLoading",
    "data": JSON.stringify(packet_onLoadingData),
}

let packet_onOCRData = {
    "ocrType": 1,
}

let packet_onOCR = {
    "name": "onOCR",
    "data": JSON.stringify(packet_onOCRData),
}

let packet_openPopWebViewData = {
    "url": "https://sam-change.github.io/JS_Dev/popweb.html",
}

let packet_openPopWebView = {
    "name": "openPopWebView",
    "data": JSON.stringify(packet_openPopWebViewData),
}

let packet_goFuncData = {
    "FuncID": "100100",
    "Funcext": "測試資料",
}

let packet_goFunc = {
    "name": "goFunc",
    "data": JSON.stringify(packet_goFuncData),
}

let packet_goFuncData1 = {
    "FuncID": "101100",
    "Funcext": "測試資料",
}

let packet_goFunc1 = {
    "name": "goFunc",
    "data": JSON.stringify(packet_goFuncData1),
}

let packet_goFuncData2 = {
    "FuncID": "102100",
    "Funcext": "測試資料",
}

let packet_goFunc2 = {
    "name": "goFunc",
    "data": JSON.stringify(packet_goFuncData2),
}

let packet_goFuncData3 = {
    "FuncID": "103100",
    "Funcext": "測試資料",
}

let packet_goFunc3 = {
    "name": "goFunc",
    "data": JSON.stringify(packet_goFuncData3),
}

let packet_goFuncData4 = {
    "FuncID": "104100",
    "Funcext": "測試資料",
}

let packet_goFunc4 = {
    "name": "goFunc",
    "data": JSON.stringify(packet_goFuncData4),
}

let packet_goFuncData5 = {
    "FuncID": "105100",
    "Funcext": "測試資料",
}

let packet_goFunc5 = {
    "name": "goFunc",
    "data": JSON.stringify(packet_goFuncData5),
}

let packet_goFuncData6 = {
    "FuncID": "106100",
    "Funcext": "測試資料",
}

let packet_goFunc6 = {
    "name": "goFunc",
    "data": JSON.stringify(packet_goFuncData6),
}

let packet_setShareTextData = {
    "webtext": "這是要分享的文字",
}

let packet_setShareText = {
    "name": "setShareText",
    "data": JSON.stringify(packet_setShareTextData),
}

let packet_setWebLogdataData = {
    "weblog": {},
}

let packet_setWebLogdata = {
    "name": "setWebLogdata",
    "data": JSON.stringify(packet_setWebLogdataData),
}

let packet_getEnCrydara = {
    "name": "getEnCrydara",
}

let packet_setAuthdataData = {
    "auth": "1234567890000000",
}

let packet_setAuthdata = {
    "name": "setAuthdata",
    "data": JSON.stringify(packet_setAuthdataData),
}

let packet_checkCertstatusData = {
    "unknowData": {},
}

let packet_checkCertstatus = {
    "name": "checkCertstatus",
    "data": JSON.stringify(packet_checkCertstatusData),
}

let packet_onVerificationData = {
    "verifyType": "1",
    "webData": "1qaz2wsx3edc",
}

let packet_onVerification = {
    "name": "onVerification",
    "data": JSON.stringify(packet_onVerificationData),
}

let packet_getVerifyID = {
    "name": "getVerifyID",
}


var idevice = isIMobileDevice()

function isMobileDevice() {
    const mobileDevice = ['Android', 'webOS', 'iPhone', 'iPad', 'iPod', 'BlackBerry', 'Windows Phone']
    let isMobileDevice = mobileDevice.some(e => navigator.userAgent.match(e))
    return isMobileDevice
}

function isIMobileDevice() {
    const mobileDevice = ['iPhone', 'iPad', 'iPod']
    let isMobileDevice = mobileDevice.some(e => navigator.userAgent.match(e))
    return isMobileDevice
}

function isAMobileDevice() {
    const mobileDevice = ['Android']
    let isMobileDevice = mobileDevice.some(e => navigator.userAgent.match(e))
    return isMobileDevice
}

function goHome() {
    if (idevice) {
        var action = JSON.stringify(packet_goHome);
        window.webkit.messageHandlers.jstoapp.postMessage(action);
    }
    else {
        if (jstoapp) {
            jstoapp.goHome();
        }
    }
}

function closeFunc() {
    if (idevice) {
        var action = JSON.stringify(packet_closeFunc);
        window.webkit.messageHandlers.jstoapp.postMessage(action);
    }
    else {
        if (jstoapp) {
            jstoapp.closeFunc();
        }
    }
}

function openPopWebView() {
    if (idevice) {
        var action = JSON.stringify(packet_openPopWebView);
        window.webkit.messageHandlers.jstoapp.postMessage(action);
    }
    else {
        if (jstoapp) {
            var action = JSON.stringify(packet_openPopWebViewData);
            jstoapp.openPopWebView(action);
        }
    }
}

function onOCR() {
    if (idevice) {
        var action = JSON.stringify(packet_onOCR);
        window.webkit.messageHandlers.jstoapp.postMessage(action);
    }
    else {
        if (jstoapp) {
            var action = JSON.stringify(packet_onOCRData);
            jstoapp.onOCR(action);
        }
    }
}

function goFunc() {
    if (idevice) {
        var action = JSON.stringify(packet_goFunc);
        window.webkit.messageHandlers.jstoapp.postMessage(action);
    }
    else {
        if (jstoapp) {
            var action = JSON.stringify(packet_goFuncData);
            jstoapp.goFunc(action);
        }
    }
}

function goFunc1() {
    if (idevice) {
        var action = JSON.stringify(packet_goFunc1);
        window.webkit.messageHandlers.jstoapp.postMessage(action);
    }
    else {
        if (jstoapp) {
            var action = JSON.stringify(packet_goFuncData1);
            jstoapp.goFunc(action);
        }
    }
}

function goFunc2() {
    if (idevice) {
        var action = JSON.stringify(packet_goFunc2);
        window.webkit.messageHandlers.jstoapp.postMessage(action);
    }
    else {
        if (jstoapp) {
            var action = JSON.stringify(packet_goFuncData2);
            jstoapp.goFunc(action);
        }
    }
}

function setShareText() {
    if (idevice) {
        var action = JSON.stringify(packet_setShareText);
        window.webkit.messageHandlers.jstoapp.postMessage(action);
    }
    else {
        if (jstoapp) {
            var action = JSON.stringify(packet_setShareTextData);
            jstoapp.setShareText(action);
        }
    }
}

function goFunc4() {
    if (idevice) {
        var action = JSON.stringify(packet_goFunc4);
        window.webkit.messageHandlers.jstoapp.postMessage(action);
    }
    else {
        if (jstoapp) {
            var action = JSON.stringify(packet_goFuncData4);
            jstoapp.goFunc(action);
        }
    }
}

function goFunc5() {
    if (idevice) {
        var action = JSON.stringify(packet_goFunc5);
        window.webkit.messageHandlers.jstoapp.postMessage(action);
    }
    else {
        if (jstoapp) {
            var action = JSON.stringify(packet_goFuncData5);
            jstoapp.goFunc(action);
        }
    }
}

function goFunc6() {
    if (idevice) {
        var action = JSON.stringify(packet_goFunc6);
        window.webkit.messageHandlers.jstoapp.postMessage(action);
    }
    else {
        if (jstoapp) {
            var action = JSON.stringify(packet_goFuncData6);
            jstoapp.goFunc(action);
        }
    }
}
