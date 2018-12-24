function myFunction(haystack, needle, threshold) {
 
 
    let smallWord = (haystack.length < needle.length) ? haystack : needle
    let bigWord = (haystack.length > needle.length) ? haystack : needle
    let mySet = new Set();
     
    let count = null;
     
    for(let i = 0; i < smallWord.length; i++){   
        for(let j = 0; j <= smallWord.length - threshold; j++){ 
            let subNeedle = smallWord.slice(i, threshold + j + i);
                if(subNeedle.length >= threshold){
                    mySet.add(subNeedle);
                }    
        }
    }
     
     
    for(let item of mySet){  
        count = count + (bigWord.match(item) || []).length;
    }
    
    console.log(count)
      
      
    
}