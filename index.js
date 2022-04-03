//this program uses the map method to access a property from each object of an array

//sample array
const books = [
    {
        title: "Good Omens",
        authors: ['Terry .P', "Neil. G"],
        rating: 4.25
    },
    {
        title: "Bone: The compelete Edition",
        authors: ['jeff smith'],
        rating: 4.42
    },
    {
        title:'American Gods',
        authors: ['neil gaiman'],
        rating: 4.41
    }
]

//testing
const titles = collectProperty(books, "title");


//actual function
function collectProperty(array, property){
    const modified = []; //to save all the objects in the array and exclude any other type
    //filter array
    for(el of array){
        if(typeof el === 'object'){
            modified.push(el);
        }
    }

    const collection = modified.map(
        function(el){
            return el[property];
        }
    )

    return collection;
}
