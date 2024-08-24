// singleton 

//object literals

// const JsUser={
//     name: "ananya",
//     age : 22,
//     location : "etawah",

// }


// const obj1= {1:"a",2:"n",3:"a"}
// const obj2= { 4:"n",5:"y",6:"a"}

// const obj3= Object.assign({},obj1,obj2)     //const returnTarget= Object.aasign(target,source);   //target={} source= obj1 obj2 
// console.log(obj3);


//object de-structuring

// const course={
//     coursename: "js in hindi",
//     price: "1999",
//     courseInstructor: "ananya"

// }
// // course.courseInstructor
// const {courseInstructor}=course

// console.log(courseInstructor); 

var name = "John";

function greet() {
    var greeting = "Hello, " + name;
    console.log(greeting);
}

function changeName() {
    var name = "Jane";
    greet();
}

changeName(); // Outputs: "Hello, John"






















