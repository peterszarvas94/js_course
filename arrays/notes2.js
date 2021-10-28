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

const test = notes.findIndex((obj, i) => {
    return obj.todo === 'cook'
});
console.log(notes[test].place);