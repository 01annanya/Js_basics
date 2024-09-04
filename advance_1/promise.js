const promiseOne =new Promise(function(resolve,reject){

    setTimeout(function(){
        console.log('Async task is completed');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed")
})

new Promise(function(resolve,reject){
    setTimeout(function(){
     console.log('Async task 2 completed');
     resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved ")
})

const promiseThird= new Promise (function(resolve,reject){
    setTimeout(function(){
    resolve({username:"ananya",email:"ananya@example.com"})
    },1000)
})
    promiseThird.then(function(user){
        console.log(user);
    })


    const promiseFour= new Promise(function(resolve,reject){
        setTimeout(function(){
            let error =false
            if (!error){
                resolve({username:"ananya",password:"1234"})
            }else {
                reject('ERROR :something went wrong')
            }
        },1000)
    })

    promiseFour
    .then((user) => {
console.log(user);
return user.username
    }).then((username)=> {
        console.log(username);
    }).catch(function(error){
        console.log(error);
    }).finally(()=> console.log("the promise is either resolved or rejected "))

    async function consumePromiseFour(){
       try{
        const response = await promiseFour
        console.log(response);
       } catch (error){
        console.log(error);
       }
    }

    consumePromiseFour()

    //fetch

    fetch ('https://api.github.com/users/hiteshchoudhary')
        .then((response)=> {
            return response.json()
        })
        .then ((data)=>{
            console.log(data);
            
        })
        .catch((error)=> console.log(error))
    
    