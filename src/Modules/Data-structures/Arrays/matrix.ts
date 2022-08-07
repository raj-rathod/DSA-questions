export class Matrix {
  createMatrix(matrix: number[][]): number[][] {
    return matrix;
  }

  matrixTranspose(matrix: number[][]): number[][] {
    let result: number[][] = [];
    for (let i = 0; i < matrix[0].length; i++) {
      let row: number[] = [];
      for (let j = 0; j < matrix.length; j++) {
        row.push(matrix[j][i]);
      }
      result.push(row);
    }
    return result;
  }
}
