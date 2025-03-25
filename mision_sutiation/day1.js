function fincdTullSting (Array)
{ 
  let gronde = Array[0];
  
   for( let i = 0 ; i<Array.length ; i++) {
       if (i.length > gronde.length ) {
           gronde = i ;
       }
   }
   
   return gronde ;
    
}



console.log(test);
// exerce 2 

function sum (Array1 , Array2) {
  
    let sumAry [] ;
     
    
    for( let i = 0 ; i < Array1.length ; i++ ) 
    {
      sumArry[i] = Array1[i] + Array2[i] ;
    }
    
    return sumAry[];
}