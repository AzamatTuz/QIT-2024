const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];

console.log(arr2);

const user = { name: 'Ali', age: 25, };

const hobby = {
    hobby: 'Drawing',
    ...user
}

console.log(hobby);


