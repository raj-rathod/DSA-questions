import { Helper } from '../../../Helper/helper';
import { DeleteFromArray } from '../../../Shared/Interface/interface';

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

  insertAtPosition(
    array: number[],
    index: number,
    insertElement: number
  ): number[] {
    array.splice(index, 0, insertElement);
    return array;
  }

  removeAtfirst(array: number[]): DeleteFromArray {
    return {
      deletedItem: array.splice(0, 1)[0],
      array: array,
    };
  }

  removeAtEnd(array: number[]): DeleteFromArray {
    return {
      deletedItem: array.splice(array.length - 1, 1)[0],
      array: array,
    };
  }

  removeAtPosition(array: number[], index: number): DeleteFromArray {
    return {
      deletedItem: array.splice(index, 1)[0],
      array: array,
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

  updateAtPosition(
    array: number[],
    index: number,
    updateElement: number
  ): number[] {
    array[index] = updateElement;
    return array;
  }

  rotateClockwise(array: number[]): number[] {
    const element = array[0];
    array.splice(0, 1);
    array.push(element);
    return array;
  }

  rotateAntiClockwise(array: number[]): number[] {
    const element = array[array.length - 1];
    array.splice(array.length - 1, 1);
    array.splice(0, 0, element);
    return array;
  }

  reverseArray(array: number[]): number[] {
    return array.reverse();
  }

  sortArray(array: number[]): number[] {
    array.sort();
    return array;
  }

  seperatePositivesAndNegatives(array: number[]): number[] {
    let low = 0;
    let high = array.length - 1;
    while (low < high) {
      if (array[low] < 0) {
        low++;
      } else if (array[high] > 0) {
        high--;
      } else {
        let temp = array[high];
        array[high] = array[low];
        array[low] = temp;
      }
    }
    return array;
  }

  sortThreeDigitsArray(array: number[], threeDigits: number[]): number[] {
    let low = 0;
    let high = array.length - 1;
    let tracker = 0;
    while (low < high) {
      if (array[low] === threeDigits[0]) {
        low++;
        tracker = low;
      } else if (array[high] === threeDigits[2]) {
        high--;
      } else if (
        array[low] === +threeDigits[1] &&
        array[high] === +threeDigits[1]
      ) {
        if (tracker === high) {
          break;
        } else if (array[tracker] !== threeDigits[1]) {
          array = Helper.swapElement(array, low, tracker);
        } else {
          tracker++;
        }
      } else {
        array = Helper.swapElement(array, low, high);
      }
    }
    return array;
  }

  findMaximumMinimum(array: number[]): number[] {
    let max = 0;
    let min = 0;
    let index = 0;
    if (array.length % 2 === 0) {
      max = Math.max(array[index], array[index + 1]);
      min = Math.min(array[index], array[index + 1]);
      index = 2;
    } else {
      max = array[index];
      min = array[index];
      index = 1;
    }

    while (index < array.length) {
      max = Math.max(max, array[index]);
      max = Math.max(max, array[index + 1]);
      min = Math.min(min, array[index]);
      min = Math.min(min, array[index + 1]);
      index += 2;
    }

    return [min, max];
  }

  unionOfTwoSet(arrayA: number[], arrayB: number[]): number[] {
    arrayB = arrayB.filter((item: number) => !arrayA.includes(item));
    return arrayA.concat(arrayB);
  }

  intersectionOfTwoSet(arrayA: number[], arrayB: number[]): number[] {
    arrayB = arrayB.filter((item: number) => arrayA.includes(item));
    return arrayB;
  }
}
