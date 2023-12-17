import React from "react";
import { v4 as uuidv4 } from "uuid";
class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: "",
            placeholder: "What needs to be done?",
        };
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleKeyDown(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            const newTask = this.state.task.trim();
            if (newTask !== "") {
                this.props.handleAddTask({
                    uid: uuidv4(),
                    task: newTask,
                });

                this.setState({ task: "" });
            }
        }
    }
    handleChange(event) {
        this.setState({ task: event.target.value });
    }

    render() {
        return (
            <>
                <div className="todo-form-container">
                    <form>
                        <input
                            type="text"
                            placeholder={this.state.placeholder}
                            value={this.state.task}
                            onChange={this.handleChange}
                            onKeyDown={this.handleKeyDown}
                        />
                    </form>
                </div>
            </>
        );
    }
}

export default TodoForm;
