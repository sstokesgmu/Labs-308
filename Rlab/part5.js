let passedString = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor\’s Assistant,26";

let table = {
    headingKeys: [],
    rows: [], 
};

// Building the rows
for(let i = 0, j = 1; i <= passedString.length; j++)
{   
    let test =""; 
    let nextRow =  passedString.indexOf("\n", i);
    if(nextRow == -1){ //if test equal -1 that means no more rows are found and we have reached the end of the string grab the rest
        test = passedString.substring(i); // start at position i 
        let valueList = test.split(',');
        let row = {}; //create a empty obj
        for(let i = 0; i < valueList.length; i++)
            row[table.headingKeys[i]] = valueList[i]; 
        //add to the empty object a property of heading key i and a value of the list at i 
        table.rows.push(row);
        break; //Exit the loop
    }
    else if (j == 1) // if this is the first row parse for categories but don't create a new object
    {
        test = passedString.substring(i, nextRow);
        i += test.length + 1; //add onw to skip line or get a inifinite loop
        test = test.toLowerCase();
        let categoryList = test.split(','); //takes a pattern and divides this string into an ordered list of substrings which creates an index string of words
        for(let word of categoryList)
            table.headingKeys.push(word);
        continue;
    }


    test = passedString.substring(i, nextRow);
    let valueList = test.split(',');
    let row = {}; //create a empty obj
    for(let i = 0; i < valueList.length; i++)
        row[table.headingKeys[i]] = valueList[i]; 
    //add to the empty object a property of heading key i and a value of the list at i 
    table.rows.push(row);
    //what is the difference between table[rows].push()
    i += test.length + 1;
}

table.rows.pop();
let obj=  { id: "48", name: "Barry", occupation: "Runner", age: "25" };
table.rows.splice(1,0, obj);

obj =  { id: "7", name: "Bilbo", occupation: "None", age: "111" };
table.rows.push(obj);
let result = table.rows; //[{}] is a multidimensional array 
let cat_array = Object.keys(result[0]); //returns an array of obj key properties

let csv = cat_array.map(function(word){
    return word[0].toUpperCase() + word.slice(1); //Combine the first element of the word at 0 to the rest of the string 
});

result.forEach(function(obj){ //looping through each result of the array
   let val_array = Object.values(obj); //returns an new array of the objects value
    val_array[0] = '\\n' + val_array[0]; // at the first element add a new line \\n string literal
    csv.push(val_array); //push to a csv array
});
csv = csv.flat(); //simplify the nested elements in the array
for(let i = 0; i < csv.length; i++){
    let element = csv[i];
    if(element.includes('\\n')){
        csv[i-1] += element; // combine array element before the newline with the current element
        csv.splice(i,1); //remove the eleement from the array
    }
}
csv = csv.toString(); //convert the array to a string.
console.log(csv);



