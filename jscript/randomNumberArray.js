//first function 
window.onload = function() {
    //creating the array for the unsorted numbers
    var numbersArray = []
    // a while loop that continues until array length is less than 10
    //I had a for loop (i < 10; i++;) until i relized that it was going 10 times and then
    //ending even if the array didnt have the full 10 integers
    //so I changed it to a while loop
    while(numbersArray.length < 10) {
        //creates a variable for use inside of the while loop that at the start of the loop gets a
        //random number then the if statment checks if the number already exists in the array 
        //if it does it changes the variable back to zero tho that isnt really 
        let randomnumber = Math.floor(Math.random() * 100) + 1;
        if(numbersArray.includes(randomnumber))
        {
            randomnumber = 0;
        } // I would now change it so it doesnt have the else statment and just have 
          // if(!numbersArray.includes(randomnumber))
          // but I wont change it as i feel like thats cheating
        else {
            numbersArray.push(randomnumber);
        }
    }
    document.getElementById("sortedNumbersOutput").innerHTML = `Unsorted Array: ${numbersArray}`;
    console.log("Unsorted Array: ", numbersArray)
    var sortedArray = numbersArray
    sortedArray.sort(function(a, b) {
        return a - b;
    })
    
    console.log("Sorted Array: ", sortedArray)

    document.getElementById("sortedNumbersOutput").innerHTML += `<br>Sorted Array ${sortedArray}`;
}