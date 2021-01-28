// Required variables
let minutes = parseInt(document.getElementById("minutes").innerHTML)
let seconds = "00"
let interval = 0
let minutinput = prompt("Menit berapa ?", "24")
minutinput = parseInt(minutinput)

if (minutinput != null) {
    document.getElementById("minutes").innerHTML = minutinput
}
// if (minutinput === null) {
//     alert(Gagal, silahkan refresh kembali!)
// }
        
    

// function() {
//     document.getElementById("body").style.backgroundColor = "black";
//     document.getElementById("body").style.color = "white";
// }

// Audio files
var click_sound = new Audio("interval.mp3")
var bell = new Audio("over.mp3");


minutes = document.getElementById("minutes").innerHTML
document.getElementById("seconds").innerHTML = seconds


function start_timer() {
  click_sound.play()
//   document.getElementsByTagName("body").style.backgroundColor = "black";
//   document.getElementsByTagName("body").style.color = "white";
    
    // ganti menit dan detik untuk mulai menghitung
  if (minutes < 10) {
      if (minutes <= 0) {
        minutes = "0" + 0
        seconds = 59
      } else {
          minutes = "0" + (minutes - 1)
          seconds = 59
      }
  } else {
      minutes = minutes - 1
      seconds = 59
  }

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
        minutes = 0
        clearInterval(minutes_interval)
        clearInterval(seconds_interval)

        // tambah pesan
        document.getElementById("done").innerHTML =
          "Sesi Selesai!! Silahkan Istirahat atau klik reset untuk mengulang"
        document.getElementById("done").classList.add("show_message")
        bell.play()
      }

      // reset ke 60
      seconds = 60
    }
  }
}


