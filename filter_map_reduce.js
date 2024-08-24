//filter 

// const myNums=[1,2,3,4,5,6,7,8,9,10]

// const newNums=myNums.filter((num) =>num > 4 )

// console.log (newNums);

//when scope is used 

// const myNums=[11,12,13,14,15,16,17,18,19,20]

// const newNums= myNums.filter((num) => {
//     return num > 15
// })
// console.log(newNums);

// //map

// const myName =['ananya','abhay','shashi','mahendra']

// const newName=myName.map((name)=>{
//     return name+' '+'singh'})
// console.log(newName);

//reduce

const myNums=[1,2,3,4,5]

// const myTotal=myNums.reduce(function(acc,currval){
// console.log(`acc:${acc} and currval: ${currval}`);
//     return acc+ currval
// },0)
// console.log (myTotal);

const  myTotal= myNums.reduce((acc,currval) => acc+currval,0)

console.log(myTotal);