function roundPrice(price, isBuy = true) {
  let tick;

  if (price < 10) tick = 0.01;
  else if (price < 50) tick = 0.05;
  else if (price < 100) tick = 0.1;
  else if (price < 500) tick = 0.5;
  else if (price < 1000) tick = 1;
  else tick = 5;

  let rounded = isBuy
    ? Math.floor(price / tick) * tick
    : Math.ceil(price / tick) * tick;

  return {
    value: parseFloat(rounded.toFixed(5)),
    tick: tick
  };
}

function formatPrice(priceObj) {
  const { value, tick } = priceObj;

  if (tick >= 5 || tick === 1) return value.toFixed(0);      // 整數跳動
  if (tick >= 0.1) return value.toFixed(1);                  // 顯示一位小數
  return value.toFixed(2);                                   // 顯示兩位小數
}

function calculate() {
  let inputHigh = parseFloat(document.getElementById("inputHigh").value);
  let inputLow = parseFloat(document.getElementById("inputLow").value);
  let inputEnd = parseFloat(document.getElementById("inputEnd").value);

  if (isNaN(inputHigh) || isNaN(inputLow) || isNaN(inputEnd)) {
    alert("請輸入正確的數值！");
    return;
  }

  let cdp = (inputHigh + inputLow + 2 * inputEnd) / 4;
  let buy = 2 * cdp - inputHigh;
  let sell = 2 * cdp - inputLow;
  let buyBuy = cdp + (inputHigh - inputLow);
  let sellSell = cdp - (inputHigh - inputLow);

  // 四檔價位處理（含 tick 值）
  let roundedBuy = roundPrice(buy, true);
  let roundedSell = roundPrice(sell, false);
  let roundedBuyBuy = roundPrice(buyBuy, true);
  let roundedSellSell = roundPrice(sellSell, false);

  // 顯示結果（根據 tick 精度決定格式）
  document.getElementById("Buy").innerHTML = "買進價  " + formatPrice(roundedBuy);
  document.getElementById("Sell").innerHTML = "賣出價  " + formatPrice(roundedSell);
  document.getElementById("BuyBuy").innerHTML = "追價買進  " + formatPrice(roundedBuyBuy);
  document.getElementById("SellSell").innerHTML = "追價賣出  " + formatPrice(roundedSellSell);
}

function clearHigh() {
  document.getElementById("inputHigh").value = "";
}
function clearLow() {
  document.getElementById("inputLow").value = "";
}
function clearEnd() {
  document.getElementById("inputEnd").value = "";
}
