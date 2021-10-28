//*1:
// const grade = (g) => {
//     (g >= 90) ? console.log('A') :
//     (g >= 80) ? console.log('B') : 
//     (g >= 70) ? console.log('C') :
//     (g >= 60) ? console.log('D') :
//     console.log('F');
// }
// grade(process.argv.slice(2)[0]);

//*2:
// const g = process.argv.slice(2)[0];
// let r;

// (g >= 90) ? r = 'A' :
// (g >= 80) ? r = 'B' : 
// (g >= 70) ? r = 'C' :
// (g >= 60) ? r = 'D' :
// r = 'F';

// console.log(r);

//*3:
const g = parseInt(process.argv.slice(2)[0]);
console.log(
    (g === 100) ? 'S' :
    (g >= 90) ? 'A' :
    (g >= 80) ? 'B' :
    (g >= 70) ? 'C' :
    (g >= 60) ? 'D' :
    'F'
);