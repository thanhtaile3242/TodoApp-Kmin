import React from "react";
import active_tick from "../../assets/active-tick.svg";
import complete_tick from "../../assets/complete-tick.svg";
import deleteIcon from "../../assets/delete.svg";
import editIcon from "../../assets/edit.svg";

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const listTask = this.props.listTask;

        return (
            <>
                <div className="todo-list-container">
                    {listTask &&
                        listTask.length > 0 &&
                        listTask.map((item) => {
                            return (
                                <>
                                    <div
                                        className="todo-item-container"
                                        key={`task-${item.uid + 1}`}
                                    >
                                        <span className="todo-item-toggle">
                                            <img
                                                src={complete_tick}
                                                alt="tick"
                                            />
                                        </span>
                                        <div className="todo-item-content">
                                            {item.task}
                                        </div>
                                        <div className="todo-item-options">
                                            <span className="icon-btn">
                                                <img
                                                    src={editIcon}
                                                    alt="edit"
                                                />
                                            </span>
                                            <span className="icon-btn">
                                                <img
                                                    src={deleteIcon}
                                                    alt="close"
                                                    onClick={() => {
                                                        this.props.handleDeleteTask(
                                                            item.uid
                                                        );
                                                    }}
                                                />
                                            </span>
                                        </div>
                                    </div>
                                </>
                            );
                        })}
                </div>
            </>
        );
    }
}
export default TodoList;
