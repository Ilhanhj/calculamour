/**
 * func untuk function
 * sel untuk selector
 * notes untuk catatan
 */

// sel setiap Element
const btnHitung = document.querySelector("#hitung");
const btn = document.querySelectorAll("button");
const reset = document.querySelectorAll(".jomblo")[0];
const credit = document.querySelector(".credit p");
const card = document.querySelector(".card");
const desc = document.querySelector("#desc");
let yName = document.querySelector("#yName");
let yPartner = document.querySelector("#yPartner");
const slider = document.querySelector(".slider");
// func untuk Dark Mode
slider.addEventListener("click", function () {
  credit.style.color = "#ff428a";
  card.classList.toggle("dark-mode");

  for (let i = 0; i < btn.length; i++) {
    btn[i].classList.toggle("button-dark");
  }
});
// func untuk reload halaman
reset.addEventListener("click", function () {
  window.location.reload();
});
// func untuk validasi nama
function validate() {
  if (!isEmpty(yName) && !isEmpty(yPartner)) {
    btnHitung.disabled = false;
  } else {
    btnHitung.disabled = true;
  }
}

function isEmpty(element) {
  if (element.value.length == 0) {
    return true;
  } else {
    return false;
  }
}
// func Output
btnHitung.addEventListener(
  "click",
  function () {
    // sel element untuk output
    let yName = document.querySelector("#yName").value;
    let yPartner = document.querySelector("#yPartner").value;
    let hasil = document.querySelector("#hasil");
    let text1 = document.querySelector("#text-1");
    let text2 = document.querySelector("#text-2");
    let span = document.querySelector("#span");
    let ex = document.querySelector("#ex");
    let desc = document.querySelector("#desc");
    let form = document.querySelector("form");
    // notes untuk menghitung bilangan random
    yName = Math.round(Math.random() * 5 * 10);
    yPartner = Math.round(Math.random() * 5 * 10);

    hasil = yName + yPartner;
    // notes untuk loading sebelum output
    setTimeout(function () {
      document.querySelector("#hasil").innerHTML = "Menghitung Cinta . . .";
      text1.style.display = "none";
      text2.style.display = "none";
      ex.style.display = "none";
      desc.style.display = "none";
    }, 1500);
    // notes untuk if else output
    if (hasil >= 0 && hasil <= 10) {
      text1.style.display = "none";
      text2.style.display = "none";
      ex.style.display = "none";
      desc.style.display = "none";
      span.style.display = "none";
      slider.style.display = "none";
      for (let i = 0; i < btn.length; i++) {
        btn[i].style.display = "none";
      }
      text1.style.textAlign = "center";
      text2.style.textAlign = "center";
      form.style.display = "none";
      document.getElementById("text-1").innerHTML = "Hasilnya";
      document.getElementById("text-2").innerHTML = "Yah  Persentase cinta kalian ternyata cuman";
      document.getElementById("span").innerHTML = "Cinta";
      // notes untuk loading sebelum output

      setTimeout(function () {
        document.getElementById("ex").innerHTML = "Gaada yang Special";
        document.getElementById("desc").innerHTML = "Ada kemungkinan sih tapi kecil banget, mendingan cari yang lain aja, hubungan kaamu sama doi ga se special itu, cukup sampe kenal aja kali yaa dia belum beruntung dapetin kamu. ";
      }, 3000);
    } else if (hasil >= 11 && hasil <= 30) {
      text1.style.display = "none";
      text2.style.display = "none";
      ex.style.display = "none";
      desc.style.display = "none";
      span.style.display = "none";
      slider.style.display = "none";
      for (let i = 0; i < btn.length; i++) {
        btn[i].style.display = "none";
      }
      text1.style.textAlign = "center";
      text2.style.textAlign = "center";
      form.style.display = "none";
      // notes untuk loading sebelum output

      document.getElementById("text-1").innerHTML = "Hasilnya";
      document.getElementById("text-2").innerHTML = " Yah  Persentase cinta kalian cukup rendah nih <br>";
      document.getElementById("span").innerHTML = "Cinta";
      setTimeout(function () {
        document.getElementById("ex").innerHTML = "Temen Doang";
        document.getElementById("desc").innerHTML =
          "Cukup berteman aja udah cukup ko, atau mungkin bisa jadi bestie yang terus nemenin kamu.Coba Lakuin banyak hal seru bareng bareng, kayak naik gunung bareng, belanja bareng, ngacak ngacak sampah bareng";
      }, 3000);
    } else if (hasil >= 31 && hasil <= 50) {
      text1.style.display = "none";
      text2.style.display = "none";
      ex.style.display = "none";
      desc.style.display = "none";
      span.style.display = "none";
      slider.style.display = "none";
      for (let i = 0; i < btn.length; i++) {
        btn[i].style.display = "none";
      }
      text1.style.textAlign = "center";
      text2.style.textAlign = "center";
      form.style.display = "none";
      // notes untuk loading sebelum output

      document.getElementById("text-1").innerHTML = "Hasilnya";
      document.getElementById("text-2").innerHTML = " Wih Persentase cinta kalian lumayan tinggi nih";
      document.getElementById("span").innerHTML = "Cinta";
      setTimeout(function () {
        document.getElementById("ex").innerHTML = "Bestie";
        document.getElementById("desc").innerHTML = "Beresiko jadi Friendzone nih. Nanti pusing sendiri loh, jangan sampe baper ya, mending lakuin banyak hal hal seru sama bestie kamu kayak nonton film bareng, main tiktok, kuda lumping. ";
      }, 3000);
    } else if (hasil >= 51 && hasil <= 70) {
      text1.style.display = "none";
      text2.style.display = "none";
      ex.style.display = "none";
      desc.style.display = "none";
      span.style.display = "none";
      slider.style.display = "none";
      for (let i = 0; i < btn.length; i++) {
        btn[i].style.display = "none";
      }
      text1.style.textAlign = "center";
      text2.style.textAlign = "center";
      form.style.display = "none";
      // notes untuk loading sebelum output

      document.getElementById("text-1").innerHTML = "Hasilnya";
      document.getElementById("text-2").innerHTML = " Wih Persentase cinta kalian cukup tinggi nih <b>tapi</b> ";
      document.getElementById("span").innerHTML = "Cinta";
      setTimeout(function () {
        document.getElementById("ex").innerHTML = "Bertepuk Sebelah Tangan";
        document.getElementById("desc").innerHTML =
          "Zona ini bakal bikin capek banget karena cuman 1 orang yang perjuangin, mending cari yang lain aja yang jauh lebih baik dari dia, itu juga kalo ada :). Tenang aja ! pasti ada ko. Eh Tapi rasa nya susah ilang kan ? :).";
      }, 3000);
    } else if (hasil >= 71 && hasil <= 90) {
      text1.style.display = "none";
      text2.style.display = "none";
      ex.style.display = "none";
      desc.style.display = "none";
      span.style.display = "none";
      slider.style.display = "none";
      for (let i = 0; i < btn.length; i++) {
        btn[i].style.display = "none";
      }
      text1.style.textAlign = "center";
      text2.style.textAlign = "center";
      form.style.display = "none";
      // notes untuk loading sebelum output

      document.getElementById("text-1").innerHTML = "Hasilnya";
      document.getElementById("text-2").innerHTML = " Wih Persentase cinta kalian tinggi banget nih <b>tapi</b> ";
      document.getElementById("span").innerHTML = "Cinta";
      setTimeout(function () {
        document.getElementById("ex").innerHTML = "Friendzone";
        document.getElementById("desc").innerHTML =
          "Zona ini bakal bikin ngang ngong ngang ngong tapi bisa jadi dia emang cuman temen doang, atau mau ngubah FRIENDZONE jadi LOVEZONE ? Udah Ungkapin aja tapi siap siap tetep di anggep temen doang ya :)";
      }, 3000);
    } else if (hasil >= 91 && hasil <= 100) {
      text1.style.display = "none";
      text2.style.display = "none";
      ex.style.display = "none";
      desc.style.display = "none";
      span.style.display = "none";
      slider.style.display = "none";
      for (let i = 0; i < btn.length; i++) {
        btn[i].style.display = "none";
      }
      text1.style.textAlign = "center";
      text2.style.textAlign = "center";
      form.style.display = "none";
      // notes untuk loading sebelum output

      document.getElementById("text-1").innerHTML = "Hasilnya";
      document.getElementById("text-2").innerHTML = " Wih Persentase cinta kalian paling tinggi nih <b>tapi</b> ";
      document.getElementById("span").innerHTML = "Cinta";
      setTimeout(function () {
        document.getElementById("ex").innerHTML = "Jodoh";
        document.getElementById("desc").innerHTML =
          "Dia itu semua yang kamu butuhin, kamu itu semua yang dia butuhin Udah langsung nikah aja, tunggu apa lagi sih ? Setelah nikah punya anak 11 terus menua bersama deh berdua. Coba bayangin itu kejadian.";
      }, 3000);
    } else {
    }
    // notes untuk memuncul output
    setTimeout(function () {
      text1.style.display = "block";
      text2.style.display = "block";
      span.style.display = "block";
      span.style.textAlign = "center";
      ex.style.display = "block";
      desc.style.display = "block";
      for (let i = 0; i < btn.length; i++) {
        btn[i].style.display = "block";
      }
      document.querySelector("#hasil").innerHTML = hasil + "%";
    }, 3000);
  },
  { once: true }
);
