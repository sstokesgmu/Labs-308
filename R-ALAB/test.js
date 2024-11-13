let passedString = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

//Data Collections for keys
const keys = ["\n",","];
function Cell(id, contents) {
    this.id = id , //Array of x, y
    this.contents = contents, //String
    this.print = function() {console.log(`This cell location: ${this.id}, and the cell contents: ${this.contents}`)} 
}

for(let i = 0, container = passedString; i < passedString.length;)
{
    cell = new Cell([0, 0], "");
    for(let char of container) //Grab a element at the array
    { 
        if(keys.includes(char)) //determines whether an array includes a certain value among its entries, returning true or false
        {
            container = passedString.slice(i, passedString.length); // Shorten the string 
            cell.print();
            i++
            break; //Close the loop start a new cell 
        }
        cell.contents += char;
        i++
    }
    cell.print(); //print the last cell because we exit the loop early
}
