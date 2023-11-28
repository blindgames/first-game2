const btn = document.getElementById("oyun");
const vid = document.getElementById("ses");
 const ac = document.getElementById("ac");
 const aci = document.getElementById("aci");
 const kgir = document.getElementById("k-gir")
 const ksev = document.getElementById("k-sev")
 const adam = document.getElementById("adam")
 const kkurtar = document.getElementById("k-kurtar");
 const kkurtarma = document.getElementById("k-kurtarma");
function basla(){
    alert("görme engelli kullanıcılar için özel yapım RPG oyunu dikkat çok eğlencelidir")
    vid.play();
 }

function gir(){
    alert("Köye girdin!")
    aci.style.display = "block";

}
function ksevs(){
    alert("100 tane kedi geldi gelin yemeğimiz ayağımıza geldi dedi kedilerden kaçtın");
    aci.style.display= "none"
    adam.style.display ="block";
 }
 function kKurtar(){
    alert("adamı kurtarıyorsun bunu yaptığın için adam sana fedakarlik ödülü olarak bir altın kılıç verdi bu kılıç hasarını 5 den 100 e çıkardı artık güçlüsün")
    adam.style.display = "none";
}
 function kKurtarma(){
    alert("adam öldü")
 }
kgir.addEventListener("click",gir)
btn.addEventListener("click",basla)
ksev.addEventListener("click",ksevs)
kkurtar.addEventListener("click",kKurtar)
kkurtarma.addEventListener("click",kKurtarma)