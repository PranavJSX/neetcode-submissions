class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rows = Array.from({length:9},() => new Set<string>());
        const columns = Array.from({length:9}, () => new Set<string>());
        const squares = Array.from({length:9}, () => new Set<string>());

        for(let i=0;i<9;i++){
            for(let j=0;j<9;j++){
                const current = board[i][j];

                if(current === '.'){
                    continue;
                }

                const squareIndex = Math.floor(i/3)*3+Math.floor(j/3);
                if(rows[i].has(current) || columns[j].has(current) || squares[squareIndex].has(current)){
                    return false;
                }
                else{
                    rows[i].add(current);
                    columns[j].add(current);
                    squares[squareIndex].add(current);
                }
            }
        }
        return true;
    }
}
