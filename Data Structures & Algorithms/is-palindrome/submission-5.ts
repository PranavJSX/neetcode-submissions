class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        s = s.toLowerCase();
        let i = 0;
        let j = s.length-1;
        let regex = /[a-z]|[1-9]/
        if(s.length===2){
            if(s.includes('.')){
                return true;
            }
            if(s[0]!=s[1]){
                return false;
            }
        }
        while(j>=i){
            console.log(s[i],s[j])
            if(!regex.test(s[i])){
                i++;
                continue;
            }
            if(!regex.test(s[j])){
                j--;
                continue;
            }
            if(s[i]!=s[j]){
                return false;
            }
            i++;
            j--;
        }
        return true;
    }
}
