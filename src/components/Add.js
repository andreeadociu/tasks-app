import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CardContext } from "../context/CardContext";

const Add = () => {
  const { dispatch } = useContext(CardContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("uncompleted");

  const onAddTask = () => {
    // setTasks([
    //   ...tasks,
    //   {
    //     id: uuid(),
    //     title: title,
    //     content: content,
    //     status: status,
    //   },
    // ]);
    dispatch({ type: "ADD_CARD", task: { title, content, status } });
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

  useEffect(() => {
    const M = window.M;
    const elem = document.getElementById("modal1");
    const instance = M.Modal.init(elem, { dismissible: false });
    instance.open();
  }, []);

  return (
    <div id="modal1" className="modal">
      <div className="modal-content">
        <div className="row">
          <div className="row">
            <div onChange={changeHandlerTitle} className="input-field col s6">
              <input id="title" type="text" />
              <label htmlFor="title">Title</label>
            </div>
            <div onChange={changeHandlerContent} className="input-field col s6">
              <input id="content" type="text" />
              <label htmlFor="content">Content</label>
            </div>
          </div>
          <div onChange={changeHandlerStatus} className="input-field col s12">
            <select className="browser-default">
              <option value="">Choose your option</option>
              <option value="completed">completed</option>
              <option value="uncompleted">uncompleted</option>
            </select>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <Link
          to="/"
          onClick={() => onAddTask()}
          className="modal-close waves-effect waves-green btn-flat"
        >
          Add Task
        </Link>
        <Link to="/" className="modal-close waves-effect waves-red btn-flat">
          Close
        </Link>
      </div>
    </div>
  );
};

export default Add;
