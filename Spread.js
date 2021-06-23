const oldArray = [1, 2, 3];
const newArray = [...oldArray, 4, 5, 6];


const oldObject = {
    name: 'Cliff',
    age: 32,
    height: 'tall'
}

const newObject = {
    ...oldObject,
    weight: '215 lbs'
}

console.log(newObject);