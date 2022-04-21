let packet_goHome = {
    "name": "goHome",
}

let packet_closeFunc = {
    "name": "closeFunc",
}

let packet_onOCRData = {
    "ocrType": 1,
}

let packet_onOCR = {
    "name": "onOCR",
    "data": JSON.stringify(packet_onOCRData),
}

let packet_setShareTextData = {
    "webtext": "精誠隨想SoftMobile\nhttps://www.softmobile.com.tw/",
}

let packet_setShareText = {
    "name": "setShareText",
    "data": JSON.stringify(packet_setShareTextData),
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
