class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {

        let belongs = (s1:string,s2:string) =>{
            console.log(s1,s2);
            return s1.split('').sort().join('') === s2.split('').sort().join('');
        }

        if(s1.length > s2.length){
            return false;
        }   
        let arr = new Array(26);
        let left = 0;
        for(let right = s1.length-1; right<s2.length; right++){
            // console.log(left,right);
            let temp = s2.substring(left,right+1);
            // console.log(temp);
            if(belongs(s1,temp)){
                return true;
            }
            left++;
        }
        return false;
    }
}


//"lecabee"
//abc

