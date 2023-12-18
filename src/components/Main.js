import React from "react";
import TodoForm from "./TodoElements/TodoForm.js";
import TodoFilter from "./TodoElements/TodoFilter.js";
import TodoList from "./TodoElements/TodoList.js";
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listTask: [],
            listFilterTask: [],
            isAdd: false,
        };
        this.handleAddTask = this.handleAddTask.bind(this);
        this.handleDeleteTask = this.handleDeleteTask.bind(this);
        this.handleCompleteTask = this.handleCompleteTask.bind(this);
        this.handleEditTask = this.handleEditTask.bind(this);
        this.handleFilterCompleteTask =
            this.handleFilterCompleteTask.bind(this);
        this.handleFilteProgressTask = this.handleFilteProgressTask.bind(this);
        this.handleFilterAllTask = this.handleFilterAllTask.bind(this);
    }
    handleAddTask(taskObject) {
        this.setState((state) => ({
            listTask: [...state.listTask, taskObject],
            listFilterTask: [...state.listTask, taskObject],
            isAdd: true,
        }));
    }

    handleDeleteTask(uid) {
        let listTaskClone1 = [...this.state.listTask];
        let listTaskClone2 = [...this.state.listFilterTask];
        const newListTask1 = listTaskClone1.filter((task) => task.uid !== uid);
        const newListTask2 = listTaskClone2.filter((task) => task.uid !== uid);
        this.setState({
            listTask: newListTask1,
            listFilterTask: newListTask2,
        });
    }

    handleCompleteTask(uid) {
        let listTaskClone = [...this.state.listTask];
        listTaskClone.forEach((task) => {
            if (task.uid === uid) {
                task.isCompleted = !task.isCompleted;
            }
        });
        this.setState({ listTask: listTaskClone });
    }

    handleEditTask(uid, editTask) {
        let listTaskClone1 = [...this.state.listTask];
        let listTaskClone2 = [...this.state.listFilterTask];
        listTaskClone1.forEach((task) => {
            if (task.uid === uid) {
                task.task = editTask;
            }
        });
        listTaskClone2.forEach((task) => {
            if (task.uid === uid) {
                task.task = editTask;
            }
        });
        this.setState({
            listTask: listTaskClone1,
            listFilterTask: listTaskClone2,
        });
    }

    handleFilterCompleteTask() {
        let listTaskClone = [...this.state.listTask];
        const newListTask = listTaskClone.filter(
            (task) => task.isCompleted === true
        );
        this.setState({ listFilterTask: newListTask });
    }

    handleFilteProgressTask() {
        let listTaskClone = [...this.state.listTask];
        const newListTask = listTaskClone.filter(
            (task) => task.isCompleted === false
        );
        this.setState({ listFilterTask: newListTask });
    }

    handleFilterAllTask() {
        let listTaskClone = [...this.state.listTask];
        this.setState({ listFilterTask: listTaskClone, isAdd: false });
    }
    render() {
        return (
            <>
                <div className="todo-container-wrapper">
                    <div className="todo-container">
                        <TodoForm handleAddTask={this.handleAddTask} />
                        <TodoFilter
                            isAdd={this.state.isAdd}
                            listFilterTask={this.state.listFilterTask}
                            handleFilterCompleteTask={
                                this.handleFilterCompleteTask
                            }
                            handleFilteProgressTask={
                                this.handleFilteProgressTask
                            }
                            handleFilterAllTask={this.handleFilterAllTask}
                        />
                        <TodoList
                            listTask={this.state.listFilterTask}
                            handleDeleteTask={this.handleDeleteTask}
                            handleEditTask={this.handleEditTask}
                            handleCompleteTask={this.handleCompleteTask}
                        />
                    </div>
                </div>
            </>
        );
    }
}
export default Main;
