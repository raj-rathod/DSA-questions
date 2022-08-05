import { DeleteFromArray } from "../../../Shared/Interface/interface";

export class Array {
  createArray(array: number[]): number[] {
    return array;
  }

  insertAtFirst(array: number[], insertElement: number): number[] {
    array.unshift(insertElement);
    return array;
  }

  insertAtEnd(array: number[], insertElement: number): number[] {
    array.push(insertElement);
    return array;
  }

  insertAtPosition(array: number[], index: number, insertElement: number): number[] {
    array.splice(index, 0, insertElement);
    return array;
  }

  removeAtfirst(array: number[]): DeleteFromArray {
    return {
      deletedItem: array[0],
      array: array.splice(0, 1)
    };
  }

  removeAtEnd(array: number[]): DeleteFromArray {
    const lastIndex = array.length - 1;
    return {
      deletedItem: array[lastIndex],
      array: array.splice(lastIndex, 1)
    };
  }

  removeAtPosition(array: number[], index: number): DeleteFromArray {
    return {
      deletedItem: array[index],
      array: array.splice(index, 1)
    };
  }

  updateAtFirst(array: number[], updateElement: number): number[] {
    array[0] = updateElement;
    return array;
  }

  updateAtEnd(array: number[], updateElement: number): number[] {
    array[array.length - 1] = updateElement;
    return array;
  }

  updateAtPosition(array: number[], index: number, updateElement: number): number[] {
    array[index] = updateElement;
    return array;
  }

  rotateClockwise(array: number[]): number[] {
    const element  = array[0];
    array.splice(0, 1);
    array.push(element);
    return array;
  }

  rotateAntiClockwise(array: number[]): number[] {
    const element  = array[array.length - 1];
    array.splice(array.length - 1, 1);
    array.push(element);
    return array;
  }
}