
const scannerTab = document.querySelector(".nav-scan");



scannerTab.addEventListener("click", () => {
  scannerTab.classList.add("active");
  
  document.querySelector(".scanner").classList.add("active")
  
})