import useTodo from "./Hooks/TodoHooks";
import Listoftodo from "./Component/Listoftodo";

const Todolist = () => {
  const {
    input,
    setInput,
    todos,
    done,
    handleSubmit,
    handleDone,
    handleDelete,
  } = useTodo();

  return (
    <div className="flex justify-center bg-base-200 flex-col h-screen items-center">
      <div className="flex justify-center mt-4  text-base-content text-2xl font-extrabold">
        <header>
          <p>Todo-List</p>
        </header>
      </div>

      <div className="mt-10 h-140 w-70 rounded-2xl bg-base-100 bg-opacity-70">
        <form className="flex justify-center mt-7" onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            className="bg-none border-2 border-base-conten rounded-xl mr-2 pl-3"
            placeholder="What to do!"
          />
          <button className="bg-none border-2 w-14 h-8 rounded-lg text-xl pb-8">
            <p>+</p>
          </button>
        </form>

        <div className="flex ml-3 mt-10">
          <p>List of todo</p>
        </div>
        <div className="flex justify-center mt-4">
          <div className="bg-base-300 h-40 w-60 rounded-2xl overflow-y-auto">
            <ul>
              {todos.map((todo, index) => (
                <li key={index}>
                  <Listoftodo
                    todo={todo}
                    onDone={() => handleDone(todo)}
                    onDelete={() => handleDelete(todo)}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <div className="mt-2 pl-4">
            <p>Done Task</p>
          </div>
          <div className="flex justify-center mt-4">
            <div className="bg-base-300 h-40 w-60 rounded-xl flex justify-center overflow-y-auto">
              <ul className="mt-4">
                {done.map((d, index) => (
                  <li key={index}>{d}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todolist;
