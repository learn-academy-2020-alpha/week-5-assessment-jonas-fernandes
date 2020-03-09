// ASSESSMENT 5: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.


var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"

const coded = (str) =>{ 
    return str.split("").map((letter) =>{  
        var number = letter
            if( letter == "a" ) {
                number = "4"
            } else if( letter == "e" ) {
                number = "3"
            } else if( letter == "i" ) {
                number = "1"
            } else if( letter == "o" ) {
                number = "0"
    }
        return number; 
     }).join("") 
}

console.log(coded(secretCodeWord1))
console.log(coded(secretCodeWord2))


// --------------------2) Create a function that takes in an array and returns all the words that have the letter a in them.


var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: "Apple" "Banana" "Peach"

const filterWords = (array) =>{
    return array.filter((word) =>{  
        return word.toLowerCase().includes("a"); 
     }) 
}

console.log(filterWords(arrayOfWords))





// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is one pair and one three of a kind.



var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false

const removeDuplicate = (a) =>{ 
    return uniqueArray = a.filter(function(item, pos) {
        return a.indexOf(item) == pos;
    })
}

const isFullHouse = (hand) =>{
    var isFullHouse = false
    var onlyTowNumbers = removeDuplicate(hand)
    if( onlyTowNumbers.length==2) {
    var first = 0
    var second = 0
    for(var i=0; i<hand.length; i++) {
        if( hand[i]==onlyTowNumbers[0] ) {
            first++;
            }
        if( hand[i]==onlyTowNumbers[1] ) {
            second++;
        }           
        }

    isFullHouse = (first+second === 5) 
    }
        return isFullHouse
}



console.log(isFullHouse(hand1))
console.log(isFullHouse(hand2))
