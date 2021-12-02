let packet_goHome = {
    "name": "goHome",
}

let packet_goPreview = {
    "name": "goPreview",
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
    "url": "/JS_SMPop.html",
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

let packet_setShareTextData = {
    "webtext": "分享文字",
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


var idevice = isAMobileDevice()

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

function GoHome() {
    if (idevice) { 
        var action = JSON.stringify(packet_goHome);
        window.webkit.messageHandlers.jstoapp.postMessage(action); }
    else {
        if (jstoapp) {
            jstoapp.goHome();
        }
    }
}

function aGoHome() {
    if (jstoapp) {
        jstoapp.goHome();
    }
}