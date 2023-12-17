import React from "react";
import TodoForm from "./TodoElements/TodoForm.js";
import TodoFilter from "./TodoElements/TodoFilter.js";
import TodoList from "./TodoElements/TodoList.js";
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listTask: [],
        };
        this.handleAddTask = this.handleAddTask.bind(this);
        this.handleDeleteTask = this.handleDeleteTask.bind(this);
    }
    handleAddTask = (taskObject) => {
        this.setState((state) => ({
            listTask: [...state.listTask, taskObject],
        }));
    };

    handleDeleteTask = (uid) => {
        let listTaskClone = [...this.state.listTask];
        const newListTask = listTaskClone.filter((task) => task.uid !== uid);
        this.setState({ listTask: newListTask });
    };

    render() {
        return (
            <>
                <div className="todo-container-wrapper">
                    <div className="todo-container">
                        <TodoForm handleAddTask={this.handleAddTask} />
                        <TodoFilter />
                        <TodoList
                            listTask={this.state.listTask}
                            handleDeleteTask={this.handleDeleteTask}
                        />
                    </div>
                </div>
            </>
        );
    }
}
export default Main;
