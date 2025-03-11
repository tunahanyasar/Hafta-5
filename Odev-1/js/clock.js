// Karşılama ve ismi kullanıcıdan alma promptu
function welcomePrompt() {
  let wPrompt = prompt("Lütfen adınızı giriniz!");
  let text = wPrompt;
  document.getElementById("myName").innerHTML = text;
}

// Günleri türkçe olarak çıktı vermek için dizi tanımlaması
const days = [
  "Pazar",
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
];
const today = new Date().getDay();

// Anlık saat fonksiyonu
function showTime() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  h = addZero(h);
  m = addZero(m);
  s = addZero(s);

  const time = h + ":" + m + ":" + s + " " + days[today];
  document.getElementById("myClock").innerHTML = time;
  setTimeout(showTime, 1000);
}


// Saat görünümü vermek için 10dan küçük rakamların başına 0 ekleme fonksiyonu
function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
