/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = (grid) => {
    let islands = 0;

    for (let rowIndex in grid) {
        for (let columnIndex in grid[rowIndex]) {
            if (grid[rowIndex][columnIndex] == '1') {
                islands++;
                teraform(parseInt(rowIndex), parseInt(columnIndex), grid);
            }
        }
    }


    return islands;
};

const teraform = (rowIndex, columnIndex, grid) => {

    if (grid && (grid[rowIndex] == undefined ||
        grid[rowIndex][columnIndex] == undefined ||
        grid[rowIndex][columnIndex] == '0')) {
        return
    }
    if (grid && grid[rowIndex]) {
        grid[rowIndex][columnIndex] = '0';
        teraform(rowIndex + 1, columnIndex, grid);
        teraform(rowIndex, columnIndex + 1, grid);
        teraform(rowIndex - 1, columnIndex.gird);
        teraform(rowIndex, columnIndex - 1, grid);
    }
}

console.log(numIslands([["1","0","1","1","1"],["1","0","1","0","1"],["1","1","1","0","1"]]));