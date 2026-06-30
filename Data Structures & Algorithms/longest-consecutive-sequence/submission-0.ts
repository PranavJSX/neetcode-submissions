class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        if (nums.length === 0) return 0;
        let ans = 0;
        let left = 0;
        let right = 0;
        let i = 0;
        let sorted_array = nums.sort((a,b) => (a-b));
        sorted_array = [...new Set(sorted_array)];
        
        while(i < sorted_array.length){
            if(i > 0 && sorted_array[i] === sorted_array[i-1] + 1){
                right++;
            }
            else{
                left = i;
                right = i + 1;
            }

            if(right-left > ans){
                ans = right-left;
            }
            i++;
        }
        return ans;
    }
}
