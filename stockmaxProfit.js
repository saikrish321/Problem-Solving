
// Problem:
// You are given an array of integers representing stock prices on different days. Your goal is to maximize profit by buying and selling the stock at the right time. Write a JavaScript function to find the maximum profit that can be obtained. You can only make one transaction (i.e., buy one and sell one share of the stock), and you cannot engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).
function maxProfit(prices) {
    let minPrice = Infinity;  // Initialize the minimum price to a very large value
    let maxProfit = 0;  // Initialize the maximum profit to 0
    
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }
    
    return maxProfit;
}

// Example usage:
const stockPrices = [7, 1, 5, 3, 6, 4];
const profit = maxProfit(stockPrices);
console.log("Maximum profit:", profit);
