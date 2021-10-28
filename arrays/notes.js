const notes = ['first', 'second', 'hello', 'what', 'is', 'life'];;

// notes.splice(1, 1, 'see')
// notes[1] = 'see'

/* 
	* unshift -> []
	* shift <- []
	* [] <- push
	* [] -> pull
*/

// console.table(notes)

notes.forEach( (item, index) => {
	console.log(`${index+1}. ${item}`);
});
