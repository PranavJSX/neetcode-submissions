class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {

        let ans = [];
        let sorted_array = nums.sort((a,b) => a-b);
        console.log(sorted_array);
        for(let i=0; i<sorted_array.length-2; i++){
            if(i>0 && sorted_array[i] === sorted_array[i-1]) continue;

            let left = i+1;
            let right = sorted_array.length-1;
            const target = -sorted_array[i];

            while(left<right){
                if(sorted_array[left]+sorted_array[right] === target){
                    ans.push([sorted_array[left],sorted_array[right],sorted_array[i]]);
                    left++;
                    right--;
                
                while(left<right && sorted_array[left] === sorted_array[left-1]) left++;

                while(left<right && sorted_array[right] === sorted_array[right+1]) right++;
                }
                else if(sorted_array[left]+sorted_array[right]<target){
                    left++;
                } 
                else{
                    right--;
                }
            }
        }
        return ans;
    }
}
