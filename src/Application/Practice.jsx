import React from "react";
import Hooks from "./Hooks";

const Practice = () => {
  const {
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
  } = Hooks();

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-100 h-10"
        />
        <button type="submit"> + </button>
      </form>
      <ul className="mt-4">
        {todos.map((todo, index) => (
          <li key={index} className="text-lg">
            {todo}
          </li>
        ))}
      </ul>
      <div>
        <p>{primitive.counter}</p>
        <button onClick={Primitive}>Increase Primitive</button>
      </div>
      <div>
        <p>{object.counter}</p>
      </div>
      <button onClick={AddObject}>Increase Object</button>
      <div>
        <div>
          <ul>
            {names.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </div>
        <div>
          <ul>
            {Sort.map((user, index) => (
              <li key={index}>
                {user.name} - Age {user.age}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Average Age: </h2>
          <p>{getAverageUser()}</p>
        </div>
      </div>
      <div>
        <h2>
          {getMappedUsers().map((user, index) => (
            <li key={index}>{user.display}</li>
          ))}
        </h2>
        <h2>Keyed Users:</h2>
        <ul>
          {Object.entries(getKeyedUser()).map(([id, user]) => (
            <li key={id}>
              ID: {id}, Name: {user.name}, Age: {user.age}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Practice;
