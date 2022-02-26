var person = {
    name: "test",
    age: 21,
    hobbies: ['sports', 'cooking'],
    role: [2, 'author', 'georg']
};
var test = generateError("test");
console.log(test);
function generateError(message) {
    throw {};
}
