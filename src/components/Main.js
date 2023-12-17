import React from "react";
import TodoForm from "./TodoElements/TodoForm.js";
import TodoFilter from "./TodoElements/TodoFilter.js";
import TodoList from "./TodoElements/TodoList.js";
class Main extends React.Component {
    render() {
        return (
            <>
                <div className="todo-container-wrapper">
                    <div class="todo-container">
                        <TodoForm />
                        <TodoFilter />
                        <TodoList />
                    </div>
                </div>
            </>
        );
    }
}
export default Main;
