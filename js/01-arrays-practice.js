/*eslint-env*/

//STEP 1
/*
var movies = ["Cloud Atlas", "Kill Bill", "Frida", "Diarios de motocicleta", "The Next Best Thing"];
window.console.log(movies[1]);
*/

//STEP 2
/*
var movies = new Array(5);
movies[0] = "Cloud Atlas";
movies[1] = "Kill Bill";
movies[2] = "Frida";
movies[3] = "Diarios de motocicleta";
movies[4] = "The Next Best Thing";
window.console.log(movies[0]);
*/

//STEP 3
/*
var movies = new Array(5);
movies[0] = "Cloud Atlas";
movies[1] = "Kill Bill";
movies[2] = "Frida";
movies[3] = "Diarios de motocicleta";
movies[4] = "The Next Best Thing";
movies[5] = "Titanic";
window.console.log(movies.length);
*/

//STEP 4
/*
var movies = [];
movies = ["Cloud Atlas", "Kill Bill", "Frida", "Diarios de motocicleta", "The Next Best Thing"];
delete movies[0];

window.console.log(movies);
*/


//STEP 5
/*
var movies = [];
var i;
movies = ["Cloud Atlas", "Kill Bill", "Frida", "Diarios de motocicleta", "The Next Best Thing", "Titanic", "Scary Movie"];

for (i=0; i < movies.length; i++) {
    window.console.log(movies[i]);
}
*/

//STEP 6
/*
var movies = [];
var index;
movies = ["Cloud Atlas", "Kill Bill", "Frida", "Diarios de motocicleta", "The Next Best Thing", "Titanic", "Scary Movie"];

for (index in movies) {
    window.console.log(movies[index]);
}
*/

//STEP 7
/*
var movies = [];
var index;
movies = ["Cloud Atlas", "Kill Bill", "Frida", "Diarios de motocicleta", "The Next Best Thing", "Titanic", "Scary Movie"];
movies.sort();

for (index in movies) {
    window.console.log(movies[index]);
}
*/

//STEP 8
/*
var movies = [];
var index;
movies = ["Cloud Atlas", "Kill Bill", "Frida", "Diarios de motocicleta", "The Next Best Thing", "Titanic", "Scary Movie"];
var leastFavMovies = [];
leastFavMovies = ["Incident in a Ghost Land", "Mamma Mia! Here We Go Again", "Black Panther"];

window.console.log("Movies I like:");
window.console.log("");
for (index in movies) {
    window.console.log(movies[index]);
}

window.console.log("");
window.console.log("Movies I regret watching:");
window.console.log("");
for (index in leastFavMovies) {
    window.console.log(leastFavMovies[index]);
}
*/

//STEP 9
/*
var movies = [];
var index;
movies = ["Cloud Atlas", "Kill Bill", "Frida", "Diarios de motocicleta", "The Next Best Thing", "Titanic", "Scary Movie"];
var leastFavMovies = [];
leastFavMovies = ["Incident in a Ghost Land", "Mamma Mia! Here We Go Again", "Black Panther"];
movies.concat(leastFavMovies).reverse();

for (index in movies) {
window.console.log(movies[index]);
}
*/

//STEP 10
/*
var movies = [];
movies = ["Cloud Atlas", "Kill Bill", "Frida", "Diarios de motocicleta", "The Next Best Thing", "Titanic", "Scary Movie"];
var leastFavMovies = [];
leastFavMovies = ["Incident in a Ghost Land", "Mamma Mia! Here We Go Again", "Black Panther"];
movies.concat(leastFavMovies).reverse();

window.console.log(movies.pop());
//window.console.log(movies[movies.length - 1]);  //second way without deleting last item
*/

//STEP 11
/*
var movies = [];
movies = ["Cloud Atlas", "Kill Bill", "Frida", "Diarios de motocicleta", "The Next Best Thing", "Titanic", "Scary Movie"];
var leastFavMovies = [];
leastFavMovies = ["Incident in a Ghost Land", "Mamma Mia! Here We Go Again", "Black Panther"];
movies.concat(leastFavMovies).reverse();

window.console.log(movies.shift());
*/

//STEP 12
/*
var movies = [];
var index = [];
movies = ["Cloud Atlas", "Unlike Movie 1", "Kill Bill", "Unlike Movie 2", "Frida", "Diarios de motocicleta", "The Next Best Thing", "Titanic", "Scary Movie", "Unlike Movie 3"];        //Change "Unlike Movie 1,2,3" on "Cool movie 1,2,3" 

index[1] = movies.indexOf("Unlike Movie 1");
index[2] = movies.indexOf("Unlike Movie 2");
index[3] = movies.indexOf("Unlike Movie 3");

window.console.log(index[1], index[2], index[3]);

movies.splice(index[1], 1, "Cool movie 1");
movies.splice(index[2], 1, "Cool movie 2");
movies.splice(index[3], 1, "Cool movie 3");

window.console.log(movies);
*/

//STEP 13
/*
var employee1 = [];     //Associative Array
var employee2 = [];     //Associative Array
var employees = [];     //Two-Dimensional Array

employee1["id"] = 5456;
employee1["name"] = "Barack Obama";
employee1["title"] = "President of the US";
employee1["department"] = "White House";
employee1["isCurrent"] = false;

employee2["id"] = 7515;
employee2["name"] = "Donald Dump";
employee2["title"] = "President of the America Great Again";
employee2["department"] = "Tower of Dump";
employee2["isCurrent"] = true;

employees[0] = employee1;
employees[1] = employee2;
window.console.log(employees[1]["name"]);

*/
//STEP 14
/*
var employee1 = [];     //Associative Array
var employee2 = [];     //Associative Array
var employees = [];     //Two-Dimensional Array
var i;

employee1["id"] = 5456;
employee1["name"] = "Barack Obama";
employee1["title"] = "President of the US";
employee1["department"] = "White House";
employee1["isCurrent"] = false;

employee2["id"] = 7515;
employee2["name"] = "Donald Dump";
employee2["title"] = "President of the America Great Again";
employee2["department"] = "Tower of Dump";
employee2["isCurrent"] = true;

employees[0] = employee1;
employees[1] = employee2;

for (i=0; i < employees.length; i++) {
    window.console.log(employees[i]["name"]);
}
*/

//STEP 15
/*
var employee1 = [];     //Associative Array
var employee2 = [];     //Associative Array
var employee3 = [];     //Associative Array
var employees = [];     //Two-Dimensional Array
var i;

employee1["id"] = 5456;
employee1["name"] = "Barack Obama";
employee1["title"] = "President of the US";
employee1["department"] = "White House";
employee1["isCurrent"] = true;

employee2["id"] = 7515;
employee2["name"] = "Donald Dump";
employee2["title"] = "President of the America Great Again";
employee2["department"] = "Tower of Dump";
employee2["isCurrent"] = true;

employee3["id"] = 4522;
employee3["name"] = "Vladimir Putin";
employee3["title"] = "Tsar of Russia";
employee3["department"] = "Kremlin";
employee3["isCurrent"] = false;

employees[0] = employee1;
employees[1] = employee2;
employees[2] = employee3;

for (i=0; i < employees.length; i++) {
    if (employees[i]["isCurrent"] === true) {
        window.console.log(employees[i]["name"]);
    } else {
        continue;
    }       
}
*/

//STEP 16 -------- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
/*
var movies = [
    ["Cloud Atlas",7.5], 
    ["Kill Bill",8.1], 
    ["Frida",7.4], 
    ["Diarios de motocicleta",7.8], 
    ["The Next Best Thing",4.7]
];

var i;

for(i=0; i<movies.length; i++) {
   window.console.log(movies[i].filter(function(item) {
       "use strict"; 
       return typeof(item) === "string";
   }));
    
}
*/    
              
//STEP 17
/*
var employees = ["employee-1", "employee-2", "employee-3", "employee-4", "employee-5", "employee-6","employee-7"];
var i;

var showEmployee = function(i) {
    window.console.log(employees[i]);
}

window.console.log("Employees:");
window.console.log("");
for (i=0; i<employees.length; i++) {
    showEmployee(i);
}
*/

//STEP 18
/*
function filterValues(arr) {
    "use strict";
  arr = arr.filter(isEligible);
  return arr;
}

function isEligible(value) {
    "use strict";
  if(value !== false || value !== null || value !== 0 || value !== "") {
    return value;
  }
}

window.console.log(filterValues([58, '', 'abcd', true, null, false, 0]));
*/
    
//STEP 19
/*
function returnRandomNumber(arr) {
    var i = Math.round((Math.random()*10) + 0);
    return arr[i];
}

window.console.log(returnRandomNumber([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
*/

//STEP 20 
        
/*
function returnLargestNumber(arr) {
    "use strict";
    
    return arr.reduce(function (previousLargestNumber, currentLargestNumber) {
    if (currentLargestNumber > previousLargestNumber == true) {
        return currentLargestNumber;
    } else {
        return previousLargestNumber;
}
    });
}
 
window.console.log(returnLargestNumber([2, 5, 7, 3, 10, 12, 8]));

*/