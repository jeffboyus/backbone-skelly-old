// add a body class of ios5 if it's... ios5
$(function () {
    if (navigator.userAgent.indexOf('iPhone OS 5') !== -1) {
        document.body.classList.add('ios5');
    }
});
