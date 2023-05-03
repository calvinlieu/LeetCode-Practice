/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    //max variable
    let max = 0;
    //two pointer method where we have a left that starts at the 0th index and right that starts at 1;
    let left = 0;
    let right = 1;
    
    
    //since we increment right by one, we can't go more than our prices length;
    while (right < prices.length) {
        
        //if the price on the left is less than the right, that means that we can't sell before buying
        if (prices[left] < prices[right]) {
            
            //current profit on the prices at the right and left.
            let currentProfit = prices[right] - prices[left];
            
            //we find the max of the currentProfit and the current max. we set the max to the highest value.
            max = Math.max(max, currentProfit);
        } else {
            
            left = right;
        }
        right++;
    }
    
    return max;
};