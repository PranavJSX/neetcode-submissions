class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let i = 0;
        let j = heights.length-1;
        let area = 0;
        while(i<j){
            let temp = (j-i)* Math.min(heights[i],heights[j]);
            if(area<temp){
                area = temp;
            }
            if(heights[i]<heights[j]){
                i++;
            }
            else{
                j--;
            }
        }
        return area;

    }
}