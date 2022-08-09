import { MatrixAdjacent } from '../../../Shared/Interface/interface';

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
  matrixAdjacentOfElement(
    rowLength: number,
    columnLength: number,
    rowIndex: number,
    columnIndex: number
  ): MatrixAdjacent {
    const initialValue = {
      row: -1,
      column: -1,
    };

    let matrixAdjacent: MatrixAdjacent = {
      top: initialValue,
      right: initialValue,
      bottom: initialValue,
      left: initialValue,
      leftTopDiagonal: initialValue,
      leftBottomDiagonal: initialValue,
      rightTopDiagonal: initialValue,
      rightBottomDiagonal: initialValue,
    };
    if (rowIndex - 1 >= 0) {
      matrixAdjacent.top = {
        row: rowIndex - 1,
        column: columnIndex,
      };
    }
    if (rowIndex + 1 < rowLength) {
      matrixAdjacent.bottom = {
        row: rowIndex + 1,
        column: columnIndex,
      };
    }
    if (columnIndex - 1 >= 0) {
      matrixAdjacent.left = {
        row: rowIndex,
        column: columnIndex - 1,
      };
    }
    if (columnIndex + 1 < columnLength) {
      matrixAdjacent.right = {
        row: rowIndex,
        column: columnIndex + 1,
      };
    }
    if (rowIndex - 1 >= 0 && columnIndex - 1 >= 0) {
      matrixAdjacent.leftTopDiagonal = {
        row: rowIndex - 1,
        column: columnIndex - 1,
      };
    }
    if (rowIndex + 1 < rowLength && columnIndex - 1 >= 0) {
      matrixAdjacent.leftBottomDiagonal = {
        row: rowIndex + 1,
        column: columnIndex - 1,
      };
    }
    if (rowIndex - 1 >= 0 && columnIndex + 1 < columnLength) {
      matrixAdjacent.rightTopDiagonal = {
        row: rowIndex - 1,
        column: columnIndex + 1,
      };
    }
    if (rowIndex + 1 < rowLength && columnIndex + 1 < columnLength) {
      matrixAdjacent.rightBottomDiagonal = {
        row: rowIndex + 1,
        column: columnIndex + 1,
      };
    }

    return matrixAdjacent;
  }
}
