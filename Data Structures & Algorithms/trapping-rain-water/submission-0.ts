class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        let ans = 0;
        let l = [];
        l[0] = height[0];
        let r= [];
        r[height.length-1] = height[height.length-1];
        for(let i = 1;i<height.length;i++){
            l[i] = Math.max(l[i-1], height[i]);
        }

        for(let i = height.length-2;i>=0;i--){
            r[i] = Math.max(height[i],r[i+1]);
        }

        for(let i=0;i<height.length;i++){
            let temp = Math.min(l[i],r[i]);
            ans+= temp-height[i];
        }
        return ans;
    }
}
