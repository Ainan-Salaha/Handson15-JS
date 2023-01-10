/*1. callback hell */

function age(a, b) {
    return a + b;
}

function detail(name, age) {
    console.log(`${name} ${age}`);
}

detail("Ainan", age(15, 8));


/*2. callback hell */


setTimeout(() => {
    let  count=1;
    console.log(count++);
    setTimeout(() => {
        console.log(count++)
        setTimeout(() => {
            console.log(count++)
            setTimeout(() => {
                console.log(count++)
                setTimeout(() => {
                    console.log(count++)
                    setTimeout(() => {
                        console.log(count++)
                        setTimeout(() => {
                            console.log(count++)
                        }, 7000);
                    }, 6000);
                }, 5000);
            }, 4000);
        }, 3000);
    }, 2000);
}, 1000);


/*3. Promise Function */

const apromise= new Promise((res,rej)=>{
    let a=10;
    if(a > 9){
        function cbh(){
            setTimeout(() => {
                console.log(count++)
                setTimeout(() => {
                    console.log(count++)
                    setTimeout(() => {
                        console.log(count++)
                        setTimeout(() => {
                            console.log(count++)
                            setTimeout(() => {
                                console.log(count++)
                                setTimeout(() => {
                                    console.log(count++)
                                    setTimeout(() => {
                                        console.log(count++)
                                    }, 7000);
                                }, 6000);
                            }, 5000);
                        }, 4000);
                    }, 3000);
                }, 2000);
            }, 1000);
        }
        let count=1;
        cbh();
    }
    else{
        rej("a less than 9")
    }
});

apromise.then(function(data){
    console.log(data);
}).catch(function(err){
    console.log("Error",err)
})

/*4.Question */
const aPromise =new Promise((resolve,reject)=>{
    let a=10;
    let b=10;
    if(a == b){
        resolve("Promise Resolved!!");
    }
    else{
        reject("Promise Rejected..")
    }
})
aPromise.then(function(data1){
    console.log(data1);
}).catch(function(err1){
    console.log("Error",err1)
})


/*5.Question */

function sum(num1, cb){
    console.log("number is"+ " "+ num1);
    cb();
}
function cbb(){
    console.log("ainan")
}
sum(7,cbb);


/*6.Question */
function callbackHell() {
    setTimeout(() => {
      console.log("A");
      setTimeout(() => {
        console.log("B");
        setTimeout(() => {
          console.log("C");
          setTimeout(() => {
            console.log("D");
            setTimeout(() => {
              console.log("E");
              setTimeout(() => {
                console.log("E");
                setTimeout(() => {
                  console.log("F");
                }, 7000);
              }, 6000);
            }, 5000);
          }, 4000);
        }, 3000);
      }, 2000);
    }, 1000);
  }
  callbackHell();

/*7.Question */
const epromise = new Promise((res,rej)=>{
    setTimeout(() => {
        res("Asynchronus Promise Resloved")
    }, 1000);
})

epromise.then(function(data2){
    console.log(data2)
}).catch(function(err2){
    console.log("Error",err2)
})

/*8.Question */
const aapromise = new Promise((res,rej)=>{
    setTimeout(() => {
        res(1)
    }, 1000);
})

async function asf(){
    let an=await(aapromise);
    console.log("Async-Await Promise Resloved!!")
}
asf();


/*9.Question */
const a1promise = new Promise((res,rej)=>{
    setTimeout(() => {
        console.log("The 1st promise has been resolved!!")
        res(1)
    }, 1000);
})
const a2promise = new Promise((res,rej)=>{
    setTimeout(() => {
        console.log("The 2nd promise has been resolved!!")
        res(2)
    }, 2000);
})
const a3promise = new Promise((res,rej)=>{
    setTimeout(() => {
        console.log("The 3rd promise has been resolved!!")
        res(3)
    }, 3000);
})
const a4promise = new Promise((res,rej)=>{
    setTimeout(() => {
        console.log("The 4th promise has been resolved!!")
        res(4)
    }, 4000);
})

Promise.all([a1promise , a2promise , a3promise , a4promise ]).then((result)=>{
    const total=result.reduce((r,s) => r+s )
    console.log(`Result: ${result}`);
    console.log(`Total: ${total}`);
})