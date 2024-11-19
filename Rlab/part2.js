let fullString = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor\’s Assistant,26";

let table = {
    x: 0,
    y: 0,
    rows: [], 
};

// Building the rows
for(let i = 0; i <= fullString.length;)
{   let partialString =""; 
    let array = [];
    let nextRow =  fullString.indexOf("\n", i);
    if(nextRow == -1){ //if test equal -1 that means no more rows are found and we have reached the end of the string grab the rest
        partialString = fullString.substring(i); // start at position i 
        array.push(partialString);
        table.rows.push(array);
        break; //Exit the loop
    }
    partialString = fullString.substring(i, nextRow);
    array.push(partialString);
    table.rows.push(array);
    //what is the difference between table[rows].push()
    i += partialString.length + 1;
}

console.log(table.rows);





