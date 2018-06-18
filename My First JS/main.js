function doClick() {
    alert('You Clicked!');
}

function changeText(id) {
    // alert('You Clicked!');
    id.innerHTML = 'You clicked me!';
    var heading = document.getElementById('heading');
    // heading.innerHTML = 'You clicked a button changing the heading';
    var time = document.getElementById('time');
    time.innerHTML = Date();
}

function doHover(id) {
    id.innerHTML = 'Too close buddy!';
}

function resetButton(id) {
    id.innerHTML = 'Show date';
}

function changeBackground(id) {
    var body = document.getElementById('body');
    var navbar = document.getElementById('navbar');
    body.style.backgroundColor = id.value;
}

function validateForm() {
    var firstName = document.forms["myForm"]["firstName"].value;
    if (firstName == null || firstName == "") {
        alert("First Name is required");
        return false;
    }
    if (firstName.length < 3) {
        alert("First Name must contain at least 3 characters");
        return false;
    }
}

function getAverage (a,b) {
    var average = (a+b)/2;
    document.write(
        "<h2>Average between ", a , " and ", b, " is ", Math.round(average), "</h2>"
    );
    document.write(
        "<h2>The maximum number between ", a , " and ", b, " is ", Math.max(a,b), "</h2>"
    );
};
var Car = function(maxSpeed,driver){
    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function(speed, time){
        console.log("Now driving car");
        console.log("Distance travelled ",speed * time,"km");
    };
    this.logDriver = function() {
        console.log("Driver name is " + this.driver);
    };
}
var myCar = {
    maxSpeed:50, 
    driver:"Henk Meiring",
    drive: function(speed, time){
        document.write("Now driving car 2<br/>");
        document.write("Distance travelled ",speed * time,"km<br/>");
    },
    // test: function() {
    //     console.log(this);
    //     document.write(this);
    // },
    logDriver: function() {
        console.log("Driver name is " + this.driver);
    }
};
var birthday = new Date(1970, 0, 1, 2, 0, 0);
console.log(birthday);
console.log(birthday.getMonth());
console.log(birthday.getFullYear());
console.log(birthday.getDay()); // Day of week
console.log(birthday.getDate());
console.log(birthday.getHours());
console.log(birthday.getTime()); // Get number of milliseconds since 1st Jan 1970 2am
// var myCar3 = {
//     maxSpeed:50, 
//     driver:"Warbreaker",
//     drive: function(speed, time){
//         document.write("Now driving car 2<br/>");
//         document.write("Distance travelled ",speed * time,"km<br/>");
//     },
//     test: function() {
/*         console.log(this);
         document.write(this);*/
//     }
// };
// // var number1 = 1; // Number
// // var number2 = '2'; // String
// // // JS is case sensitive
// // var Test = 'This is a test';
// // var test = 'this is another test'
// // // Arrays
// // // This is an initialised array
// // var colours = [];
// // // this is an araay with vallues
// // var colours1 = ['red', 'blue', 'green'];
// // // Another way to create an array
// // var colours2 = new Array('red', 'yellow', 'green');
// // // adding to an array
// // colours2.push('purle');
// // colours2.push('purle');
// // // Loops
// // // For Loops
// // for(var i = 0; i < 10; i++) {
// //     console.log('for loop '+i);
// // }
// // // A while loop
// var i = 0;
// while(i < 10){
//     console.log('while loop '+i);
//     i++;
// }
// // for each loop - works with arrays
// var numbers = [1,2,3,4,5,6,7]
// numbers.forEach(function(number){
//     console.log('for each loop '+number);
// })
// if (number1 == 1) {
//     alert('It worked!');
// } else {
//     alert('It did not worked!');
// }
// switch(number1) {
//     case 1:
//         alert('one');
//         break;
//     case 2:
//         alert('two');
//         break;
//     case 3:   
//         alert('three');
//         break; 
//     default:
//         alert('None of the above');
//         break;    
// } 
// // Objects
// var person = {
//     firstName: 'Henk',
//     lastName: 'Meiring',
//     Age: 31,
//     children: ['None'],
//     address: {
//         street: 'Test Street',
//         city: 'Johannesburg',
//         State: 'SA',
//     },
//     fullName: function() {
//         return this.firstName + " " + this.lastName;
//     }
// }
// alert(person.fullName());