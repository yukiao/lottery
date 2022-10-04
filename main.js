const zeroPad = (num, places) => String(num).padStart(places, '0')

let max_element = 2500;
let excludes_element = [];
let winningNumbers = []

const hamburger = document.querySelector(".hamburger")
const sidebar = document.querySelector('.sidebar')
const updateBtn = document.querySelector('#update-data')
const reset = document.querySelector(".reset-button")

hamburger.addEventListener('click', function(e){
  hamburger.classList.toggle("is-active")
  const sidebarShown = hamburger.classList.contains("is-active")
  console.log(sidebarShown)
  if (sidebarShown) {
    sidebar.classList.add("is-shown")
    document.body.style.overflow = "hidden"
  }else{
    sidebar.classList.remove("is-shown")
    document.body.style.overflow = "unset"
  }
})

reset.addEventListener('click', function(e){
  e.preventDefault()
  alert("Nomor undian telah direset")

  winningNumbers = []
})

updateBtn.addEventListener('click', function(e){
  e.preventDefault()

  const exludeList = document
                      .querySelector("#exclude").value
                      .split(";")
                      .filter(Number)
                      .map(Number)
  
  excludes_element = exludeList;
  winningNumbers = []

  const range = document.querySelector('#range').value
  
  max_element = range === "" ? 2500 : Number(range)
  alert("Data berhasil diupdate")
})

document.querySelector(".lottery-button")
  .addEventListener("click", function(e){
    // console.log(winningNumbers)
    setTimeout(function(){
      let winningNum;
      while(true){
        if(winningNumbers.length + excludes_element.length === max_element){
          alert("Tidak ada nomor undian tersisa. Silahkan tekan reset untuk mengulangi")
          return;
        }

        winningNum = Math.floor(Math.random() * max_element) + 1
        
        if(!(excludes_element.includes(winningNum) || winningNumbers.includes(winningNum))){
          winningNumbers.push(winningNum)
          break;
        }
      }
      odometer.innerHTML = zeroPad(winningNum, 4) ;
    }, 100);
  })
  