var inputHigh;
var inputLow;
var inputEnd;
var buy;
var sell;
var buyBuy;
var sellSell;
var cdp;

document.getElementById("calculate").onclick = function() {calculate()};

document.getElementById("inputHigh").addEventListener("keyup", function(e) {
  if (e.keyCode === 13) {
    clearLow()
    document.getElementById("inputLow").focus();
  }
});
document.getElementById("inputLow").addEventListener("keyup", function(e) {
  if (e.keyCode === 13) {
    clearEnd()
    document.getElementById("inputEnd").focus();
  }
});
document.getElementById("inputEnd").addEventListener("keyup", function(e) {
  if (e.keyCode === 13) {
    document.getElementById("calculate").click();
  }
});

document.getElementById("inputHigh").onclick = function() {clearHigh()};
document.getElementById("inputLow").onclick = function() {clearLow()};
document.getElementById("inputEnd").onclick = function() {clearEnd()};
