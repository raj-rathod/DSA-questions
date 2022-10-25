import { Queue } from '../Queue/queue';
import { Stack } from '../Stack/stack';

export class Graph {
  adjacencyMatrix: number[][];

  constructor() {
    this.adjacencyMatrix = [[]];
  }

  createAGraph(inputMatrix: number[][]): number[][] {
    return (this.adjacencyMatrix = inputMatrix);
  }

  totalEdges(): number {
    let count = 0;
    this.adjacencyMatrix.forEach(row =>{
       row.forEach(column =>{
         if(column > 0){  // if column is greater than zero it means that is the edge
           count++;
         }
       });
    });
    return count;
  }

  insertVertex(): number[][] {
    if (this.adjacencyMatrix.length === 0) return [[]];
    this.adjacencyMatrix.forEach(row => {
      row.push(0);
    });
    this.adjacencyMatrix.push(
      this.adjacencyMatrix[0].map(element => element * 0)
    );
    return this.adjacencyMatrix;
  }

  deleteVertex(index: number): number[][] {
    if (this.adjacencyMatrix.length === 0) return [[]];
    this.adjacencyMatrix.forEach(row => {
      row.splice(index, 1);
    });
    this.adjacencyMatrix.splice(index, 1);
    return this.adjacencyMatrix;
  }

  addEdge(
    rowIndex: number,
    columnIndex: number,
    weight: number = 0
  ): number[][] {
    if (this.adjacencyMatrix.length === 0) return [[]];
    this.adjacencyMatrix[rowIndex][columnIndex] = weight;
    return this.adjacencyMatrix;
  }

  deleteEdge(rowIndex: number, columnIndex: number): number[][] {
    if (this.adjacencyMatrix.length === 0) return [[]];
    this.adjacencyMatrix[rowIndex][columnIndex] = 0;
    return this.adjacencyMatrix;
  }

  breadthFirstSearch(): number[] {
    if (this.adjacencyMatrix.length === 0) return [];
    const visitedArray = [1];
    const queue = new Queue([1]);
    while (queue.queue.length > 0) {
      this.adjacencyMatrix[queue.peek() - 1].forEach((edge, index) => {
        queue.dequeue();
        if (!visitedArray.includes(index + 1) && edge > 0) {
          queue.enqueue(index + 1);
          visitedArray.push(index + 1);
        }
      });
    }
    return visitedArray;
  }

  depthFirstSearch(): number[] {
    if (this.adjacencyMatrix.length === 0) return [];
    const visitedArray = [1];
    const stack = new Stack([1]);
    while (stack.stack.length > 0) {
      let count = 0;
      for (let i = 0; i < this.adjacencyMatrix[stack.peek() - 1].length; i++) {
        count++;
        if (
          !visitedArray.includes(i + 1) &&
          this.adjacencyMatrix[stack.peek() - 1][i] > 0
        ) {
          stack.push(i + 1);
          visitedArray.push(i + 1);
          break;
        }
      }
      if (count > this.adjacencyMatrix[stack.peek() - 1].length - 1) {
        stack.pop();
      }
    }
    return visitedArray;
  }
}
