/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy=prices[0];
    let sell;
    let maxProfit=0;
    for(let i of prices) {
        if(i < buy) {
            console.log(i)
            buy = i
        } else if( (i - buy) > maxProfit) {
            console.log(i,buy)
            sell = i
            maxProfit = i - buy;
        }
    }
    return maxProfit
};