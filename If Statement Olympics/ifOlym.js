// Preliminaries
// 1
if(5>3){
    console.log("prelim 1. is greater than")
}

// 2
var cat = "cat"
if (cat.length === 3) {
    console.log("prelim 2. is the length")
}

// 3
var dog = "dog"
if (cat === dog){
    console.log("prelim 3. are the same")
} else {
    console.log("prelim 3. not the same")
}

// Bronze Medal
// 1
var person = {
    name: "Bobby",
    age: 12
}
if (person.age >= 18){
    console.log("bronze1 " + person.name + " is allowed to go to the movie")
} else {
    console.log("bronze1 " + person.name + " is not allowed to go to the movie")
}

// 2
if (person.name[0] === "B"){
    console.log("bronze2 " + person.name + " is allowed to go to the movie")
} else {
    console.log("bronze2 " + person.name + " is not allowed to go to the movie")
}

//3
if (person.age >= 18 && person.name[0] === "B"){
    console.log("bronze3 " + person.name + " is allowed to go to the movie")
} else {
    console.log("bronze3 " + person.name + " is not allowed to go to the movie")
}

// Silver Medal
// 1
if (1 === "1"){
    console.log("silver1 strict")
} else if (1 == "1") {
    console.log("silver1 abstract")
} else {
    console.log("silver1 not equal at all")
}

// 2
if (1 <=2 && 2 === 4){
    console.log("silver2 yes")
} else {
    console.log("silver2 no")
}

// Gold Medal
// 1
// dog variable was created earlier
if (typeof dog === "string" || dog instanceof String){
    console.log("gold1 It's a string.")
} else {
    console.log("gold1 It's not a string.")
}

// 2
if (typeof true === "boolean" || true instanceof Boolean){
    console.log("gold2 It's a boolean.")
} else {
    console.log("gold2 It's not a boolean.")
}

// 3
if (typeof leg != "undefined"){
    console.log("gold3 It's defined." + dog.name)
} else {
    console.log("gold3 It's not defined.")
}

// 4
if ("s" > 12){
    console.log("gold4 s > 12")
} else {
    console.log("gold4 s !> 12")
}

// 5
if ("z" > 1){
    console.log("gold5 z > 1")
} else {
    console.log("gold5 z !> 1")
}

if (12 > "s"){
    console.log("gold5 12 > z")
} else {
    console.log("gold5 12 !> z")
}


// 6
var myNum = 10;
myNum % 2 === 0 ? console.log("gold6 even") : console.log("gold6 not even");