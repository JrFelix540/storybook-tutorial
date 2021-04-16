import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Task = ({ task: { id, title, state } }, onArchiveTask, onPinTask) => {
  return (
    <Fragment>
      <div className={`list-item ${state}`}>
        <label className="checkbox">
          <input
            type="checkbox"
            name="checked"
            disabled={true}
            defaultChecked={state === "TASK_ARCHIVED"}
          />
          <span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
        </label>
        <div className="title">
          <input
            type="text"
            value={title}
            readOnly={true}
            placeholder="Input title"
            style={{ background: "red" }}
          />
        </div>

        <div className="actions" onClick={(event) => event.stopPropagation()}>
          {state !== "TASK_ARCHIVED" && (
            <a onClick={() => onPinTask(id)}>
              <span className={`icon-star`} />
            </a>
          )}
        </div>
      </div>
    </Fragment>
  );
};
Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),

  onArchiveTask: PropTypes.func,
  onPinTask: PropTypes.func,
};

export default Task;
