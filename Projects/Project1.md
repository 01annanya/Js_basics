# Projects related to DOM

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-hpr9bs?file=1-colorChanger%2Fchaiaurcode.js,1-colorChanger%2Findex.html)

# Solution code

## Project 1
 ```javascript 
 console.log ("hitesh")

 const buttons =document.querySelectorAll('.button');
const body= document.querySelector("body");


buttons.forEach(function (button){
  console.log(button);
  button.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target);
    if (e.target.id==='grey'){
      body.style.backgroundColor =e.target.id;
    }
    if (e.target.id==='white'){
      body.style.backgroundColor =e.target.id;
    }
    if (e.target.id==='blue'){
      body.style.backgroundColor =e.target.id;
    }
    if (e.target.id==='yellow'){
      body.style.backgroundColor =e.target.id;
    }
  })
});




 ```

 # Project 2 

``` javascript code 

const form = document.querySelector('form')
//this usecase will give you empty value
// const height=parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function(e){
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')
   
  //height empty nhi honi chaiye , 0 se choti nhi honi chaiye , also ek no. honi chaiye 

  if (height ===''|| height < 0 ){
    results.innerHTML= `Please give a valid height ${height}`;
 }else if (weight ===''|| weight < 0 ){
  results.innerHTML= `Please give a valid weight ${weight}`;
 }else {
   const bmi = (weight / ((height * height)/10000)).toFixed(2);

   //show result
   results.innerHTML= `<span>${bmi}</span>`;
 }

})



