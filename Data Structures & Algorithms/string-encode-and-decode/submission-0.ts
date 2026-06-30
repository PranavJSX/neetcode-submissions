class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let res = '';
        for(let i of strs){
            let word = i;
            let count = convertToFourDigits(i.length);
            let temp = count + word;
            res+=temp;
        }
        return res;
    }


    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let arr = [];
        let i=0;
        while(i<str.length){
            let lengthStr = str.substring(i,i+4);
            let current_word_length = Number(lengthStr);
            i+=4;
            arr.push(str.substring(i,i+current_word_length));
            i = i+current_word_length;
        }
        return arr;
    }
}

const convertToFourDigits = (count:number) =>{
    return ('0000'+count).slice(-4);
}
