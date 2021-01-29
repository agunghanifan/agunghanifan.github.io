// Required variables
let minutes = parseInt(document.getElementById("minutes").innerHTML)
let seconds = "00"
let interval = prompt("Berapa Interval yang dibutuhkan ?", "4")
interval = parseInt(interval)
let restInterval = 1
let minutinput = prompt("Berapa jumlah menit yang diinginkan?", "24")
minutinput = parseInt(minutinput)
let resetMinutes = minutinput

if (minutinput != null) {
    document.getElementById("minutes").innerHTML = minutinput
}

// Audio files
var click_sound = new Audio("start.mp3")
var bell = new Audio("over.mp3");
var intBell = new Audio("intervalsong.mp3")

minutes = document.getElementById("minutes").innerHTML
document.getElementById("seconds").innerHTML = seconds

document.getElementById("isInterval").innerHTML = interval 

// function myFunction() {
//   var x = document.getElementById("button1");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display === "none";
//   }
// }

function start_timer() {
  click_sound.play()
  // ganti menit dan detik untuk mulai menghitung
  document.getElementById("dissapear").style.display = "none"
  console.log(document.getElementById("dissapear"))

  if (minutes < 10) {
    if (minutes <= 0) {
      minutes = "0" + 0
    } else {
      minutes = "0" + (minutes - 1)
    }
  } else {
    minutes = minutes - 1
  }
  seconds = 59
  
  // menambahkan menit dan detik ke indexhtml
  document.getElementById("minutes").innerHTML = minutes
  document.getElementById("seconds").innerHTML = seconds
  
  // start hitung mundur
  var minutes_interval = setInterval(minutesTimer, 60000)
  var seconds_interval = setInterval(secondsTimer, 1000)
  
  
  // counter menit
  function minutesTimer() {
    minutes = minutes - 1;
    document.getElementById("minutes").innerHTML = minutes
  }
  
  // counter detik
  function secondsTimer() {
    seconds = seconds - 1;
    if (seconds < 10) {
      seconds = "0" + seconds
    }
    document.getElementById("seconds").innerHTML = seconds
    
    // kondisi saat menit dan detik 0
    if (seconds <= 0) {
      if (minutes <= 0) {
        // stop counter
        if (interval === restInterval) {
          document.getElementById("isInterval").innerHTML =
          `Jumlah Interval 0`
          document.getElementById("isInterval").classList.add("show_message")
          minutes = 0
          clearInterval(minutes_interval)
          clearInterval(seconds_interval)
          
          // tambah pesan
          document.getElementById("done").innerHTML =
          "Sesi Selesai!! Silahkan Istirahat atau klik reset untuk mengulang"
          document.getElementById("done").classList.add("show_message")
          bell.play()
          
        } else {
          restInterval++   
          minutes = resetMinutes
          document.getElementById("isInterval").innerHTML =
          `Saat ini Interval ke ${restInterval} dari jumlah interval ${interval} `
          document.getElementById("isInterval").classList.add("show_message") 
          intBell.play()
        }
        
      }
      // reset ke 60
      seconds = 60
    }
  }
}


// function test() {
//   document.getElementById("button1").innerHTML = "Reset"
//   document.getElementById("butt").onclick = location.href="./index.html"
// }

