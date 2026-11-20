class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for(let i=0; i<9; i++){
            const visitedValueRow = new Set()
              const visitedValueCol = new Set()
              for(let j=0; j<9; j++){
            let rowValue = board[i][j]
            let colValue = board[j][i]
            if(rowValue !== "."){
                if(visitedValueRow.has(rowValue)){
                    return false
                } else{
                    visitedValueRow.add(rowValue)
                }
            }
              if(colValue !== "."){
                if(visitedValueCol.has(colValue)){
                    return false
                } else{
                    visitedValueCol.add(colValue)
                }
              }
        }
    }
for(let boxRow = 0; boxRow < 3; boxRow++){
    for(let boxCol =0; boxCol<3; boxCol++){
        const visitedValueBox = new Set()
        for (let i = 0; i<3; i++){
            for (let j = 0; j<3; j++){
                let currentValue = board[boxRow * 3 + i]  [boxCol * 3 + j] 
    if(currentValue !== "."){
if(visitedValueBox.has(currentValue)){
    return false
} else{
    visitedValueBox.add(currentValue)
}
    }
            }

        }
        
    }
}   return true
    }
  
}


