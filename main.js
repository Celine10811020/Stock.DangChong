function calculate()
{
  inputHigh = document.getElementById("inputHigh").value;
  inputLow = document.getElementById("inputLow").value;
  inputEnd = document.getElementById("inputEnd").value;

  cdp = (parseInt(inputHigh) + parseInt(inputLow) + 2*parseInt(inputEnd)) / 4;
  buy = 2*cdp - parseInt(inputHigh);
  sell = 2*cdp - parseInt(inputLow);
  buyBuy = cdp + (parseInt(inputHigh)-parseInt(inputLow));
  sellSell = cdp - (parseInt(inputHigh)-parseInt(inputLow));

  console.log(inputHigh);
  console.log(inputLow);
  console.log(inputEnd);
  console.log(cdp);
  console.log(buy);
  console.log(sell);
  console.log(buyBuy);
  console.log(sellSell);

  if(buy<10 && sell<10)
  {
    buy = ((Math.floor((Math.floor(buy*100)*100)))/100)/100;
    sell = ((Math.floor((Math.ceil(sell*100)*100)))/100)/100;
    document.getElementById("Buy").innerHTML = "買進價  " + buy;
    document.getElementById("Sell").innerHTML = "賣出價  " + sell;
  }
  else if(buy>10 && sell<10)
  {
    buy = ((Math.floor(((Math.floor(buy/0.05)*0.05)*100)*100))/100)/100;
    sell = ((Math.floor((Math.ceil(sell*100)*100)))/100)/100;
    document.getElementById("Buy").innerHTML = "買進價  " + buy;
    document.getElementById("Sell").innerHTML = "賣出價  " + sell;
  }
  else if(buy>=10 && sell>=10 && buy<=50 && sell<50)
  {
    buy = ((Math.floor(((Math.floor(buy/0.05)*0.05)*100)*100))/100)/100;
    sell = ((Math.floor(((Math.ceil(sell/0.05)*0.05)*100)*100))/100)/100;
    document.getElementById("Buy").innerHTML = "買進價  " + buy;
    document.getElementById("Sell").innerHTML = "賣出價  " + sell;
  }
  else if(buy>=50 && sell>=50 && buy<100 && sell<100)
  {
    buy = ((Math.floor(((Math.floor(buy/0.1)*0.1)*100)*100))/100)/100;
    sell = ((Math.floor(((Math.ceil(sell/0.1)*0.1)*100)*100))/100)/100;
    document.getElementById("Buy").innerHTML = "買進價  " + buy;
    document.getElementById("Sell").innerHTML = "賣出價  " + sell;
  }
  else if(buy>=50 && sell<50 )
  {
    buy = ((Math.floor(((Math.floor(buy/0.1)*0.1)*100)*100))/100)/100;
    sell =(Math.floor((Math.ceil(sell/0.05)*0.05)*100))/100;
    document.getElementById("Buy").innerHTML = "買進價  " + buy;
    document.getElementById("Sell").innerHTML = "賣出價  " + sell;
  }
  else if(buy>=100 && sell>=100 && buy<1000 && sell<1000)
  {
    buy = ((Math.floor(((Math.floor(buy/0.5)*0.5)*100)*100))/100)/100;
    sell = ((Math.floor(((Math.ceil(sell/0.5)*0.5)*100)*100))/100)/100;
    document.getElementById("Buy").innerHTML = "買進價  " + buy;
    document.getElementById("Sell").innerHTML = "賣出價  " + sell;
  }
  else if(buy>=100 && sell<100)
  {
    buy = ((Math.floor(((Math.floor(buy/0.5)*0.5)*100)*100))/100)/100;
    sell = ((Math.floor(((Math.ceil(sell/0.1)*0.1)*100)*100))/100)/100;
    document.getElementById("Buy").innerHTML = "買進價  " + buy;
    document.getElementById("Sell").innerHTML = "賣出價  " + sell;
  }
  else if(buy>=1000 && sell<=1000)
  {
    buy = ((Math.floor(((Math.floor(buy/5)*5)*100)*100))/100)/100;
    sell = ((Math.floor(((Math.ceil(sell/5)*5)*100)*100))/100)/100;
    document.getElementById("Buy").innerHTML = "買進價  " + buy;
    document.getElementById("Sell").innerHTML = "賣出價  " + sell;
  }
  else if(buy>=1000 && sell>=1000)
  {
    buy = ((Math.floor(((Math.floor(buy/5)*5)*100)*100))/100)/100;
    sell = ((Math.floor(((Math.ceil(sell/5)*5)*100)*100))/100)/100;
    document.getElementById("Buy").innerHTML = "買進價  " + buy;
    document.getElementById("Sell").innerHTML = "賣出價  " + sell;
  }

  if(buyBuy<10 && sellSell<10)
  {
    buyBuy = ((Math.floor((Math.floor(buyBuy*100)*100)))/100)/100;
    sellSell = ((Math.floor((Math.ceil(sellSell*100)*100)))/100)/100;
    document.getElementById("BuyBuy").innerHTML = "追價買進  " + buyBuy;
    document.getElementById("SellSell").innerHTML = "追價賣出  " + sellSell;
  }
  else if(buyBuy>10 && sellSell<10)
  {
    buyBuy = ((Math.floor(((Math.floor(buyBuy/0.05)*0.05)*100)*100))/100)/100;
    sellSell = ((Math.floor((Math.ceil(sellSell*100)*100)))/100)/100;
    document.getElementById("BuyBuy").innerHTML = "追價買進  " + buyBuy;
    document.getElementById("SellSell").innerHTML = "追價賣出  " + sellSell;
  }
  else if(buyBuy>=10 && sellSell>=10 && buyBuy<=50 && sellSell<50)
  {
    buyBuy = ((Math.floor(((Math.floor(buyBuy/0.05)*0.05)*100)*100))/100)/100;
    sellSell = ((Math.floor(((Math.ceil(sellSell/0.05)*0.05)*100)*100))/100)/100;
    document.getElementById("BuyBuy").innerHTML = "追價買進  " + buyBuy;
    document.getElementById("SellSell").innerHTML = "追價賣出  " + sellSell;
  }
  else if(buyBuy>=50 && sellSell>=50 && buyBuy<100 && sellSell<100)
  {
    buyBuy = ((Math.floor(((Math.floor(buyBuy/0.1)*0.1)*100)*100))/100)/100;
    sellSell = ((Math.floor(((Math.ceil(sellSell/0.1)*0.1)*100)*100))/100)/100;
    document.getElementById("BuyBuy").innerHTML = "追價買進  " + buyBuy;
    document.getElementById("SellSell").innerHTML = "追價賣出  " + sellSell;
  }
  else if(buyBuy>=50 && sellSell<50 )
  {
    buyBuy = ((Math.floor(((Math.floor(buyBuy/0.1)*0.1)*100)*100))/100)/100;
    sellSell =(Math.floor((Math.ceil(sellSell/0.05)*0.05)*100))/100;
    document.getElementById("BuyBuy").innerHTML = "追價買進  " + buyBuy;
    document.getElementById("SellSell").innerHTML = "追價賣出  " + sellSell;
  }
  else if(buyBuy>=100 && sellSell>=100 && buyBuy<1000 && sellSell<1000)
  {
    buyBuy = ((Math.floor(((Math.floor(buyBuy/0.5)*0.5)*100)*100))/100)/100;
    sellSell = ((Math.floor(((Math.ceil(sellSell/0.5)*0.5)*100)*100))/100)/100;
    document.getElementById("BuyBuy").innerHTML = "追價買進  " + buyBuy;
    document.getElementById("SellSell").innerHTML = "追價賣出  " + sellSell;
  }
  else if(buyBuy>=100 && sellSell<100)
  {
    buyBuy = ((Math.floor(((Math.floor(buyBuy/0.5)*0.5)*100)*100))/100)/100;
    sellSell = ((Math.floor(((Math.ceil(sellSell/0.1)*0.1)*100)*100))/100)/100;
    document.getElementById("BuyBuy").innerHTML = "追價買進  " + buyBuy;
    document.getElementById("SellSell").innerHTML = "追價賣出  " + sellSell;
  }
  else if(buyBuy>=1000 && sellSell<=1000)
  {
    buyBuy = ((Math.floor(((Math.floor(buyBuy/5)*5)*100)*100))/100)/100;
    sellSell = ((Math.floor(((Math.ceil(sellSell/5)*5)*100)*100))/100)/100;
    document.getElementById("BuyBuy").innerHTML = "追價買進  " + buyBuy;
    document.getElementById("SellSell").innerHTML = "追價賣出  " + sellSell;
  }
  else if(buyBuy>=1000 && sellSell>=1000)
  {
    buyBuy = ((Math.floor(((Math.floor(buyBuy/5)*5)*100)*100))/100)/100;
    sellSell = ((Math.floor(((Math.ceil(sellSell/5)*5)*100)*100))/100)/100;
    document.getElementById("BuyBuy").innerHTML = "追價買進  " + buyBuy;
    document.getElementById("SellSell").innerHTML = "追價賣出  " + sellSell;
  }
}

function clearHigh()
{
   document.getElementById('inputHigh').value = "";
}
function clearLow()
{
   document.getElementById('inputLow').value = "";
}
function clearEnd()
{
   document.getElementById('inputEnd').value = "";
}
