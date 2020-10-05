import React, { useContext } from "react";
import { CardContext } from "../context/CardContext";
import Card from "./Card";

const Home = () => {
  const { tasks, dispatch } = useContext(CardContext);

  const onComplete = (idTask) => {
    dispatch({ type: "COMPLETE_TASK", id: idTask, status: "completed" });
  };

  return (
    <div>
      <div className="container">
        <h2 className="blue-text text-darken-2">Task List</h2>
        <section className="cards row">
          {tasks.length ? (
            tasks.map((task) => (
              <Card
                key={task.id}
                title={task.title}
                content={task.content}
                status={task.status}
                id={task.id}
                onComplete={onComplete.bind(this, task.id)}
              />
            ))
          ) : (
            <h4>No tasks for today</h4>
          )}
        </section>
      </div>
    </div>
  );
};

export default Home;
