//this program uses the map method to access a property form each object an array


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
    },
]

const titles = books.map(
    (book)=> book.title
);