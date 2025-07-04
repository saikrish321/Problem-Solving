/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let buyPrice = prices[0];
  let sellPrice = 0;
  let maxProfit = sellPrice - buyPrice;
  
  for(let i=0; i<prices.length; i++) {
    if(prices[i] < buyPrice && (sellPrice - prices[i]) > maxProfit ) {
      buyPrice = prices[i]
    }
    
    if(prices[i] > buyPrice && (prices[i] - buyPrice) > maxProfit) {
      sellPrice = prices[i];
      maxProfit = sellPrice - buyPrice
    }
  }
  console.log(buyPrice,sellPrice,maxProfit)
  return maxProfit > 0 ? maxProfit : 0;
};