const notes = [
    {
        place: 'room',
        todo: 'clean'
    },
    {
        place: 'kitchen',
        todo: 'cook'
    },
    {
        place: 'toilet',
        todo: 'wash'
    }
];

// const findNote = (arr, key, value) => {
//     const index = arr.findIndex(el => el[key] === value);
//     return arr[index];
// }

const findNote = (arr, key, value) =>
    arr.find(el =>
        el[key] === value
    )
;

const node = findNote(notes, 'place', 'kitchen');
console.log(node);