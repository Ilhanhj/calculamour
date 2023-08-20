/**
 * func untuk function
 * sel untuk selector
 * notes untuk catatan
 */

// notes quotes untuk di random

var quotes = [
  "Banyak yang sih yang suka tapi akunya gasuka balik.",
  "❌ Pacaran <br> ❌ Single <br> ✅ Siapa peduli ? aku udh bahagia.",
  "❌ Pacaran <br> ❌ Single <br> ✅ Terlalu sibuk menikmati hidup.",
  "Aku single karena gaada yang percaya kalo aku single.",
  "Aku single karena orang orang ngira aku gamungkin ga punya pacar.",
  "Aku single karena orang orang ngira aku punya pacar.",
  "Aku gaakan nyari pacar tapi pacar yang harus nyari aku.",
  "Single lebih baik daripada bersama orang yang salah.",
  "Banyak sih yang suka tapi akunya gasuka balik.",
  "Pacaran tuh kayak kentut kalo dipaksain jadi eek.",
  "Aku single karena aku gabutuh seseorang buat ngehancurin hidup aku,soalnya udah hancur.",
  "Emang alesan harus pacaran apa ? Serius nanya.",
  "Jomblo sekarang terlalu banyak yang dicari , padahal mereka cuma 1 yang dicari : <br> cari yang mau. itu aja susah !",
  "Jomblo bukan berarti aku jelek tapi karena gaada yang mau aja.",
  "Kenapa aku single ? karena belum ada yang beruntung dapetin aku.",
  "Single itu S nya Suka sendiri kan ?",
  "Yang pacaran aja belum tentu bahagia tapi yang single, belum tentu bahagia juga sih.",
  "Jadilah jomblo yang keren, nggak punya pacar tapi banyak yang naksir.",
  "Aku di sini kamu di sana, kamu sama dia aku sama siapa?.",
  "Pacaran itu tak selamanya indah dan jomblo itu tak selamanya suram.",
  "Jones itu bukan jomblo ngenes, tapi jomblo with hapiness.",
  "Jomblo itu setia loh, setia sama kesendirian.",
  "Jomblo tidak harus malu, jomblo bukan berarti tidak laku, tapi memang tidak ada yang mau.",
  "Aku ga butuh pacar tapi pacar yang butuh aku.",
  "Jomblo itu free. Freehatin.",
  "Buat apa iri sama truk yang gandengan, kalau Ferrari aja kelihatan keren sendirian.",
  "Terkadang kamu perlu sendirian. Tak perlu kesepian, nikmati waktu luangmu dengan menjadi diri sendiri.",
  "Kasihan jodohku, dia pacaran dengan orang yang salah.",
  "Jomblo itu nasib dan Single itu pilihan tapi jelek itu takdir.",
  "Memilih Single itu bahagia. Karena menjadi pribadi tak mudah tergoda.",
];
// func Random Quotes Baru
function newQuote() {
  setTimeout(function () {
    document.querySelector("#quotes").style.textAlign = "center";
    document.querySelector("#quotes").innerHTML = "Lagi Nyari yang cocok nih . . .";
  }, 1500);
  setTimeout(function () {
    const quote = document.querySelector("#quotes");
    quote.style.textAlign = "left";
    quote.style.fontSize = "38px";
    var randomNumber = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[randomNumber];
  }, 3000);
}

// sel untuk DARK MODE
const card = document.querySelector(".card");
const slider = document.querySelector(".slider");
const credit = document.querySelector(".credit p");
const btn = document.querySelectorAll("button");
// func untuk DARK MODE
slider.addEventListener("click", function () {
  credit.style.color = "#ff428a";
  card.classList.toggle("dark-mode");
  for (let i = 0; i < btn.length; i++) {
    btn[i].classList.toggle("button-dark");
  }
});
