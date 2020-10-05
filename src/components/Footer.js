import React, { useContext } from "react";
import { CardContext } from "../context/CardContext";

import { Link } from "react-router-dom";

function Footer() {
  const { tasks } = useContext(CardContext);
  const completedTasks = tasks.filter((task) => task.status === "completed");

  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col s12 footer-container ">
            <div>
              <p className="grey-text text-lighten-4">
                Total tasks: {tasks.length}
              </p>
              <p className="grey-text text-lighten-4">
                Completed tasks: {completedTasks.length}
              </p>
            </div>
            <ul id="nav-mobile" className="right">
              <li>
                <Link
                  to="/new"
                  className="waves-effect waves-light btn modal-trigger"
                >
                  <i className="material-icons">add</i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">© 2020</div>
      </div>
    </footer>
  );
}

export default Footer;
