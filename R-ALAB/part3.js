let fullString = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor\’s Assistant,26";

let table = {
    headingKeys: [],
    rows: [], 
};

// Building the rows
for(let i = 0, j = 1; i <= fullString.length; j++)
{   
    let partialString =""; 
    let nextRow =  fullString.indexOf("\n", i);
    if(nextRow == -1){ //if test equal -1 that means no more rows are found and we have reached the end of the string grab the rest
        partialString = fullString.substring(i); // start at position i 
        let valueList = partialString.split(',');
        let row = {}; //create a empty obj
        for(let i = 0; i < valueList.length; i++)
            row[table.headingKeys[i]] = valueList[i]; 
        //add to the empty object a property of heading key i and a value of the list at i 
        table.rows.push(row);
        break; //Exit the loop
    }
    else if (j == 1) // if this is the first row parse for categories but don't create a new object
    {
        partialString = fullString.substring(i, nextRow);
        i += partialString.length + 1; //add onw to skip line or get a inifinite loop
        partialString = partialString.toLowerCase();
        let categoryList = partialString.split(','); //takes a pattern and divides this string into an ordered list of substrings which creates an index string of words
        for(let word of categoryList)
            table.headingKeys.push(word);
        continue;
    }


    partialString = fullString.substring(i, nextRow);
    let valueList = partialString.split(',');
    let row = {}; //create a empty obj
    for(let i = 0; i < valueList.length; i++)
        row[table.headingKeys[i]] = valueList[i]; 
    //add to the empty object a property of heading key i and a value of the list at i 
    table.rows.push(row);
    //what is the difference between table[rows].push()
    i += partialString.length + 1;
}
console.log(table.rows);