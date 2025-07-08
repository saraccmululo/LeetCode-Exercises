const removeDup=(nums)=>{
 const newSet= new Set(nums);
 return newSet.size
}

const nums=[1,1,2]
console.log(removeDup(nums))

const removeDuplicate=(num)=>{
  let k=1;//first element is always unique
 for(let i=1; i<num.length; i++){
  if(num[i]!=num[i-1]){//if find a unique
    num[k]=num[i];//cata todos os uniques e joga eles pra frente do array
    k++;
  }
 }
 return k
}
const num=[0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicate(num))