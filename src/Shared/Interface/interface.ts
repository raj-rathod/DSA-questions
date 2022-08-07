export interface DeleteFromArray {
  deletedItem: number;
  array: number[];
}

export interface RowColumnIndex {
  row: number;
  column: number;
}

export interface MatrixAdjacent {
  top: RowColumnIndex;
  right: RowColumnIndex;
  bottom: RowColumnIndex;
  left: RowColumnIndex;
  leftTopDiagonal: RowColumnIndex;
  leftBottomDiagonal: RowColumnIndex;
  rightTopDiagonal: RowColumnIndex;
  rightBottomDiagonal: RowColumnIndex;
}
