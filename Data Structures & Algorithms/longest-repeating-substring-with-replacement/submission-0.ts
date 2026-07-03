class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let maxFrequency = 0;
        let obj = {};
        let left = 0;
        for(let right = 0; right<s.length; right++){
            obj[s[right]] = (obj[s[right]]||0)+1;

            maxFrequency = Math.max(maxFrequency, obj[s[right]]);
            let windowSize = right-left+1;
            const replacementsNeeded = windowSize - maxFrequency;

            if(replacementsNeeded > k){
                const leftIndex = s[left];
                obj[s[left]] = obj[s[left]]-1;
                left++;
            }
        }

        return s.length-left;
        
    }
}
