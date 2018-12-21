function myFunction(array) {
 
  
    let minValue = Math.min.apply(Math, array);
      
    let maxValue = Math.max.apply(Math, array);
      
    let minIndex = array.indexOf(minValue);
      
    let maxIndex = array.indexOf(maxValue);
      
    let sum = null;
     
      if(minIndex > maxIndex){
        
    let newArray = array.slice(maxIndex+1, minIndex);
        
    sum = newArray.reduce((a,b) => a+b)
      }
      
    if(minIndex < maxIndex){
        
    let newArray= array.slice(minIndex+1, maxIndex);
        
    sum = newArray.reduce((a,b) => a+b)
      
    }
      
    
    }