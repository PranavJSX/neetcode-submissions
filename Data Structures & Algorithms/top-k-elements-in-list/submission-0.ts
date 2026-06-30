class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const obj: Record<number,number> = {};
        for(let i of nums){
            if(obj[i]){
                obj[i] = obj[i]+1;
            }
            else{
                obj[i] = 1;
            }
        }
        let res = [];
        const temp = Object.entries(obj).sort((a,b)=>b[1]-a[1]);
        console.log(temp);
        let count = k;
        let i = 0;
        while(k>0){
            res.push(Number(temp[i][0]));
            i++;
            k--;
        }
        return res;
    }
}
