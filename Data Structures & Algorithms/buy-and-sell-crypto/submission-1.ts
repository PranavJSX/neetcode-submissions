class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let maxProfit = 0;
        let buy = 0;
        for(let i = 0; i < prices.length ; i++){
            let current = prices[i] - prices[buy];
            console.log(current);
            console.log(maxProfit);
            if(current > maxProfit){
                maxProfit = current;
            }
            if(prices[buy]>prices[i] || prices[buy] === prices[i]){
                buy = i;
            }
            else{
                continue;
            };
        }
        return maxProfit;
    }
}
