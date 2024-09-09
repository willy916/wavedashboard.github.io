const botonactive = document.querySelector(".botonactive");
const stopCam = document.querySelector(".stopCam");

const scannerDiv = document.querySelector(".scanner");

var parentQr =document.querySelector(".parentQr")

var BtnQr=document.querySelector(".BtnQr")

var lien2=document.querySelector('.lien2')

BtnQr.addEventListener('click',function(){
  parentQr.style.display="flex"
})

lien2.addEventListener('click',function(){
  parentQr.style.display="flex"
})


const form = scannerDiv.querySelector(".scanner-form");

const p = form.querySelector("p");
const img = form.querySelector("img");
const video = document.querySelector("video");
const content = form.querySelector(".content");
const chargment=document.querySelector('.chargment')

const bannerQr=document.querySelector('.bannerQr')





// Scan QR Code Camera
let scanner;

botonactive.addEventListener("click", () => {

  bannerQr.classList.add("reduire")



  chargment.style.display="flex"
  
  form.classList.add("pointerEvents");
  stopCam.style.display="flex"
  botonactive.style.display="none"


  scanner = new Instascan.Scanner({video: video});


  Instascan.Camera.getCameras()
    .then(cameras => {
      if(cameras.length > 0){
        scanner.start(cameras[0]).then(() => {
          form.classList.add("active-video");
          stopCam.style.display = "inline-block";
          chargment.style.display="none"
        })
      }else{
        console.log("No Cameras Found");
      }
    })
    .catch(err => console.error(err))
   
    console.log(Instascan)
  
  // addListener not addEventListener
  scanner.addListener("scan", c => {
    Swal.fire(
      'Très bien',
      'Transfert effectué',
      'success',

    )
    scannerDiv.classList.add("active");


    
  })
})

video.onload=()=>{
console.log('video charger')
}

// Close
stopCam.addEventListener("click", () => stopScan());

// Stop Scan
function stopScan(){
  parentQr.style.display="flex"
  bannerQr.classList.remove("reduire")
  stopCam.style.display="none"
  botonactive.style.display="flex"

  stopCam.style.display = "none";
  
  form.classList.remove("active-video", "active-img", "pointerEvents");
  scannerDiv.classList.remove("active");

  if(scanner) scanner.stop();

}


video.addEventListener("load",function(){
  console.log('chargment')
})





var fermerbtn=document.querySelector('.fermerbtn')

fermerbtn.addEventListener('click',function(){


  parentQr.style.display="none"
  bannerQr.classList.remove("reduire")
  stopCam.style.display="none"
  botonactive.style.display="flex"
  stopCam.style.display = "none";


  form.classList.remove("active-video", "active-img", "pointerEvents");
  scannerDiv.classList.remove("active");

  if(scanner){
    scanner.stop();
  }
})