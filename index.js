function isMobile(){
    // credit to Timothy Huang for this regex test: 
    // https://dev.to/timhuang/a-simple-way-to-detect-if-browser-is-on-a-mobile-device-with-javascript-44j3
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        window.location.href = "/m/index.html"
        return true;
   }
   else{
        return false
   }
} 

function switchiframe() {
     document.getElementById('morph').classList.add('hide');
     document.getElementById('disc').classList.remove('hide');
}