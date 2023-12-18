import React from "react";
import active_tick from "../../assets/active-tick.svg";
import complete_tick from "../../assets/complete-tick.svg";
import deleteIcon from "../../assets/delete.svg";
import editIcon from "../../assets/edit.svg";
import ModalEdit from "./ModalEdit.js";
class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowHideModelEdit: false,
            editTask: {},
        };
        this.handleSetShowHideModalEdit =
            this.handleSetShowHideModalEdit.bind(this);
    }

    handleSetShowHideModalEdit(obj) {
        this.setState({
            isShowHideModelEdit: !this.state.isShowHideModelEdit,
            editTask: { ...obj },
        });
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
                                                src={
                                                    item.isCompleted === true
                                                        ? complete_tick
                                                        : active_tick
                                                }
                                                alt="tick"
                                                onClick={() => {
                                                    this.props.handleCompleteTask(
                                                        item.uid
                                                    );
                                                }}
                                            />
                                        </span>
                                        <div
                                            className={
                                                item.isCompleted === true
                                                    ? "todo-item-content completed"
                                                    : "todo-item-content"
                                            }
                                        >
                                            {item.task}
                                        </div>
                                        <div className="todo-item-options">
                                            <span className="icon-btn">
                                                <img
                                                    src={editIcon}
                                                    alt="edit"
                                                    onClick={() => {
                                                        this.handleSetShowHideModalEdit(
                                                            {
                                                                task: item.task,
                                                                uid: item.uid,
                                                            }
                                                        );
                                                    }}
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
                                    <ModalEdit
                                        show={this.state.isShowHideModelEdit}
                                        editTask={this.state.editTask}
                                        handleSetShowHideModalEdit={
                                            this.handleSetShowHideModalEdit
                                        }
                                        handleEditTask={
                                            this.props.handleEditTask
                                        }
                                    />
                                </>
                            );
                        })}
                </div>
            </>
        );
    }
}
export default TodoList;
