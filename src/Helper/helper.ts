export class Helper {
  static swapElement(
    array: number[],
    firstIndex: number,
    secondIndex: number
  ): number[] {
    let temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
    return array;
  }

  static maximum = (firstNumber: number, secondNumber: number): number => {
    return Math.max(firstNumber, secondNumber);
  };

  static minimum = (firstNumber: number, secondNumber: number): number => {
    return Math.min(firstNumber, secondNumber);
  };

  static getPrime = (number: number): number => {
    if(number % 2 === 0) {
      number += 1;
    }
    while(!Helper.isPrime(number)){
      number += 2;
    }
    return number;
  };

  static isPrime = (number: number): boolean =>{
    if(number === 0 || number === 1) return false;
    for(let i=2; i< number/2; i++){
      if(number % i === 0) return false;
    }
    return true;
  }

}
