let struct = {}
const validPzzl = (list) =>{
    let arrLen = []
    const unique = new Set()
    for (const word of list){
        if (unique.has(word)){
            return 0
        }
        unique.add(word)
        arrLen.push(word.length)
    }
    return Math.max(...arrLen)
}
const validParams = (emptyP,list) => {
    return ((typeof emptyP === "string") && (list instanceof Array)) ? true:false
}
const catchError = (emptyP,list) =>{
    const reg = /^[.201]+$/
    if (validParams(emptyP,list)){
        emptyP = emptyP.split("\n")
        // console.log(emptyP)
        const lineLen = emptyP[0].length
        for (const line of emptyP){
            if (!reg.test(line)) {
                console.log("Errror")
                return
            }
            if (lineLen !== line.length){
                console.log("ERror")
                return
            }
            const wrdLen = validPzzl(list)
            if ((wrdLen>line.length) || (wrdLen===0) || (list.length>emptyP.length)){
                console.log("Error")
                return
            }
        }
        return true
    }else{
        console.log("Error")
        return
    }
}

function crosswordSolver(emptyPuzzle, words){
    struct.freeSlots = []
     puzzle = emptyPuzzle.split("\n").map(row => row.split('')) 
    // console.log(puzzle)
    //const freeSlots = []
   let rows = puzzle.length
   let cols = puzzle[0].length
      const start = []
      if (catchError(emptyPuzzle,words)){
   for (let i =0; i < rows; i++){
    for (let j=0;j< cols;j++){
        let hLength = 0;
        let startCol = j;
        while (startCol < cols && (puzzle[i][startCol] !== '.')) {
            hLength++;
           startCol++;
        }
        if (isValidSlot(words, hLength)) {
            struct.freeSlots.push({
                row: i,
                col: j,
                len: hLength,
                direction: 'H'
                });
                }
                let vLength = 0;
                let startRow = i;
                while (startRow < rows && (puzzle[startRow][j] !== '.')) {
                    vLength++;
                    startRow++;
                    }
                    if (isValidSlot(words, vLength)) {
                        struct.freeSlots.push({
                            row: i,
                            col: j,
                            len: vLength,
                            direction: 'V'
              })
            }
        }
    }}else{
        return "eRROR"
    }
}
function isValidSlot(words, slotLen) {
    let count = 0
    if (slotLen >= 2) {
        for (let i = 0; i < words.length; i++) {
            if (slotLen == words[i].length) {
                count++
            }
        }
        if (count > 0) {
            return true
        }
    }
    return false
}

function backtrack(index){
    if (index === words.length) return true
    const word = words[index]
        for (i =0; i < struct.freeSlots; i++){
            if (isWordValid(struct.freeSlots[i], word)){
                
            }
        }
}

function isWordValid(obj,word){
        if (word.length !== obj.len){
            return false
        }
        return true
}
//
const emptyPuzzle = `2001
0..0
1000
0..0`
const words = ['casa', 'alan', 'ciao', 'anta']

crosswordSolver(emptyPuzzle, words)
// console.log(struct.freeSlots)
