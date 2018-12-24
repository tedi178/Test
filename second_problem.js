function myFunction(array) {
  
  let maks=array[0];
  let min=array[0];
  let shuma = null;
  let poz1;
  let poz2;

for(let i=1; i<array.length ;i++){
  if(maks <=array[i]){
    maks=array[i];
    poz1=i;
  }
  
  if(min>=array[i]){
    min=array[i];
    poz2=i;
  }
}

if (poz1>poz2){
  for(let i = poz2+1; i < poz1 ; i++){
    shuma = shuma + array[i];
  }
  console.log("Start Index:"+poz2+    "End Index:"+poz1+   "Sum:"+shuma)  
} 

if(poz1<poz2){    
  for(let i=poz1+1;i<poz2;i++){
    shuma=shuma+array[i];
  }
  console.log("Start Index:"+poz1+    "End Index:"+poz2+   "Sum:"+shuma)  
}

}