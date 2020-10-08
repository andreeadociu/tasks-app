import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CardContext } from "../context/CardContext";

function Edit(props) {
  const { tasks, dispatch } = useContext(CardContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("uncompleted");

  const onEditTask = (idTask) => {
    dispatch({
      type: "EDIT_CARD",
      task: { id: idTask, title, content, status },
    });
  };

  const changeHandlerTitle = (e) => {
    setTitle(e.target.value);
  };

  const changeHandlerContent = (e) => {
    setContent(e.target.value);
  };

  const changeHandlerStatus = (e) => {
    setStatus(e.target.value);
  };

  const idTask = props.match.params.id;
  const task = tasks.find((t) => t.id === idTask);

  useEffect(() => {
    const M = window.M;
    const elem = document.getElementById("modal1");
    const instance = M.Modal.init(elem, { dismissible: false });
    instance.open();

    setTitle(task.title);
    setContent(task.content);
    setStatus(task.status);
  }, []);

  return (
    <div id="modal1" className="modal">
      <div className="modal-content">
        <div className="row">
          <div className="row">
            <div className="input-field col s6">
              <input
                onChange={changeHandlerTitle}
                id="title"
                type="text"
                value={title}
              />
            </div>
            <div className="input-field col s6">
              <input
                onChange={changeHandlerContent}
                id="content"
                type="text"
                value={content}
              />
            </div>
          </div>
          <div className="input-field col s12">
            <select
              onChange={changeHandlerStatus}
              className="browser-default"
              value={status}
            >
              <option value="uncompleted">uncompleted</option>
              <option value="completed">completed</option>
            </select>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <Link
          to="/"
          onClick={() => onEditTask(task.id)}
          className="modal-close waves-effect waves-green btn-flat"
        >
          Edit Task
        </Link>
        <Link to="/" className="modal-close waves-effect waves-red btn-flat">
          Close
        </Link>
      </div>
    </div>
  );
}

export default Edit;
