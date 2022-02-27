const person: {
  name: string,
  age: number,
  hobbies: string[];
  role: [number, string, string]
} = {
  name: "test",
  age: 21,
  hobbies: ['sports', 'cooking'],
  role: [2, 'author', 'georg']
}

const test = generateError("test");
console.log(test)

function generateError(message:string) {
  console.log("test23")
}