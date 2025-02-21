function findLargestElement (arry){
    let max = arry[0];
      for(let i = 0 ; i<arry.length;i++){
            if(arry[i] > max){
                max = arry[i];
            }
      }
      return max;
}

console.log(findLargestElement([5,10,88,200]));