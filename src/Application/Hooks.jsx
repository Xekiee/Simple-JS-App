import { useState } from "react";

const Hooks = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [primitive, setPrimitive] = useState({ counter: 10 });
  const [object, setObject] = useState({ counter: 0 });
  const [users, setUsers] = useState([
    { id: 1, name: "morgan", age: 22 },
    { id: 2, name: "john", age: 23 },
    { id: 3, name: "Rap", age: 25 },
  ]);
  const [fibInput, setFibInput] = useState("");
  const [fibResutl, setFibResutl] = useState(0);

  const calculateFibonacci = (number) => {
    number = parseInt(number); //convert the string into a integer
    if (isNaN(number) || number < 0) return "Invalid Input";

    if (number <= 1) return number; // return 0 or 1;

    let a = 0,
      b = 1;

    for (let i = 2; i <= number; i++) {
      [a, b] = [b, a + b];
    }
    return b;
  };
  const names = users.map((user) => user.name); //simple maping the name and display in the screen

  const Sort = users.sort((a, b) => a.age - b.age); //sorting the object by their age;

  const getAverageUser = () => {
    return users.reduce((sum, user) => sum + user.age, 0) / users.length; // it returns the average total of 3 object age.
  };

  const getMappedUsers = () => {
    return users.map((user, index) => ({
      id: index,
      display: `Name: ${user.name}, Age: ${user.age}`, // it creates new array that add index every objects and add display calling user.name and user.age
    }));
  };
  const getKeyedUser = () => {
    return users.reduce((obj, user) => {
      obj[user.id] = user;
      return obj;
    }, {});
  }; //it create keyed object from array. turned objects into an array

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    setTodos([...todos, input]);
    setInput("");
    const output = calculateFibonacci(fibInput);
    setFibResutl(output);
  }; // handlesubmit button that creates list of todo that we add in input fields.

  const Primitive = () => {
    let primitiveCounter = { ...primitive };
    primitiveCounter.counter -= 1;

    setPrimitive(primitiveCounter);
  };

  const AddObject = () => {
    let newObject = { ...object };
    newObject.counter += 1;

    setObject(newObject);
  };

  return {
    input,
    setInput,
    todos,
    setTodos,
    handleSubmit,
    primitive,
    setPrimitive,
    object,
    setObject,
    Primitive,
    AddObject,
    getMappedUsers,
    users,
    setUsers,
    names,
    Sort,
    getAverageUser,
    getKeyedUser,
    fibInput,
    setFibInput,
    fibResutl,
    setFibResutl,
  };
};

export default Hooks;
