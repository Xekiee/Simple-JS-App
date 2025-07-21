import Card from "./Card";

const List = () => {
  return (
    <div>
      <div className="px-4 grid gap-2 grid-cols-2 md:grid-cols-3 md:gap-4 lg:gap-6 ">
        <Card title="Calculator" />
        <Card title="Rock Paper Scissor" />
        <Card title="To-Do-List" />
        <Card title="Dark/Light Mode" />
        <Card title="Counter" />
      </div>
    </div>
  );
};

export default List;
