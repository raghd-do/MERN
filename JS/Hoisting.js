// 1
console.log(hello);
var hello = 'world';
// hoisting
var hello;
console.log(hello); 
hello = "world";
// output
/*
undefined
*/
// ==============================

// 2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// hoisting
var needle;
function test(){
    var needle;
    needle = 'magnet';
    console.log(needle);
}
needle = 'haystack';
test();
// output
/*
magnet
*/
// ==============================

// 3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// hoisting
var brendan;
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
brendan = 'super cool';
console.log(brendan);
// output
/*
super cool
*/
// ==============================

// 4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// hoisting
var food;
function eat() {
    var food;
    food = 'half-chicken';
    console.log(food);
    food = 'gone';
}
food = 'chicken';
console.log(food);
eat();
// output
/*
chicken
half-chicken
*/
// ==============================

// 5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// hoisting
var mean;
mean();
console.log(food);
mean = function () {
    var food;
    food = "chicken";
    console.log(food);
    food = "fish";
    console.log(food);
}
console.log(food);
// output
/*
mean is not a function
*/
// ==============================

// 6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// hoisting
var genre;
function rewind() {
    var genre;
    genre = "rock";
    console.log(genre);
    genre = "r&b";
    console.log(genre);
}
console.log(genre);
genre = "disco";
rewind();
console.log(genre);
// output
/*
undefined
rock
r&b
disco
*/
// ==============================

// 7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// hoisting
function learn() {
    var dojo;
    dojo = "seattle";
    console.log(dojo);
    dojo = "burbank";
    console.log(dojo);
}
dojo = "san jose";
console.log(dojo);
learn();
console.log(dojo);
// output
/*
san jose
seattle
burbank
san jose
*/
// ==============================

// 8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// hoisting
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
// output
/*
{
    name: "Chicago",
    students: 65,
    hiring: true
}
error: constant can't be assigned new value
*/
// ==============================