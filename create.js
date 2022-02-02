<!--<script src="qrcode.js"></script>-->

function createCode(url) {
    var newCode = new QRCode('qrcode').makeCode(url);
    return newCode;
}
