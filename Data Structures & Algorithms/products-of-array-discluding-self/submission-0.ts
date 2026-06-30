class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let res = [];
        let initialProduct = 1;
        for(let i=0;i<nums.length;i++){
            res[i] = initialProduct;
            initialProduct*=nums[i];
        }
        let suffixProduct = 1;
        for(let i=nums.length-1;i>=0;i--){
            res[i]*= suffixProduct;
            suffixProduct*= nums[i];
        }
        return res;
    }
}
