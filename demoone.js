// // // window.addEventListener('load', function () {

// // //     header = document.getElementById('header')


// // // });

// // // // var contant = document.getElementById('contant').value

// // // function showData() {
// // //     console.log(header);
// // // }
// // // // window.oncontextmenu = function (e) { e.preventDefault(); }

// // console.log(test) // undefind becouse we call it before decliration 
// // var test = 3.14;

// // console.log(test) // it will return 3.14 becouse we called it after initialize 


// // console.log(a) // it will return undefind becouase we called it before initialize 
// // var a;

// // a = 20.14;
// // console.log(a) // it will return 20.14 becouse we called it after initialize 

// //     (function testfun() {
// //         let testVariable = 10.4;
// //         console.log('testVariable = ', testVariable);
// //     }()) // function self invoked && function decliration 


// // let testfunTwo = () => {
// //     console.log(12)

// // } // function expration 

// // console.log('testVariable = ', testVariable);

// // // defrance between var and let and const 
// // // var we can use it every where in script 
// // // let we only can use it in tha scop we declared there. 
// // // const we can't change it after decleartion 

// // // Initialized 
// // // Declarations 
// // // Assignments  


// // setInterval(() => {

// //     for (var i = 0; i <= 4; i++) {
// //         console.log(i++)
// //     }
// // }, 3000);


// class person {
//     constructor(name) {
//         this.name = name
//     }
//     setname(value) {
//         this.name = value
//     }

//     returnName() {
//         return this.name
//     }
// }


// const ne = new person();
// // console.log(ne.returnName());
// ne.setname(120)
// console.log(ne.name);
// var name = false;

// // console.log(name)





// if (name) {
//     console.log(name)
// } else {
//     console.log(false)
// }

let name = 'mo1',
    age = 23;




function fireTest() {
    if (name == 'mo' || age == 23) {
        console.log(true)
    } else {
        console.log(false);
    }
}