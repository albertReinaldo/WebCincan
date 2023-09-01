$(document).ready(function(){
    document.getElementById("navbar").style.backgroundColor = "rgb(198, 237, 255)";
});
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
        document.getElementById("navbar").style.backgroundColor = "transparent";
        if (currentScrollPos < 49){
            document.getElementById("navbar").style.backgroundColor = "rgb(198, 237, 255)";
        }
    } else {
        document.getElementById("navbar").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
}



function wa(isi) {
    window.open("https://wa.me/6281807906062?text= Di hari ulang tahun ini, cincan mau " + isi);
}
async function tanya() {
    var { value: kado } = await swal.fire({ title: "Cincan mau apa di ulang tahun Cincan?", input: "text", showCancelButton: false, });
    if (kado) {
        await swal.fire("Forward jawabannya ke abub"); wa(kado);
    } else{
        await swal.fire("Uci harus kasih tau abub");
    }
}
