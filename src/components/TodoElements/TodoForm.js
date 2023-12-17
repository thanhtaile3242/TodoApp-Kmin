import React from "react";
class TodoForm extends React.Component {
    render() {
        return (
            <>
                <div class="todo-form-container">
                    <form>
                        <input
                            type="text"
                            placeholder="What need to be done?"
                        />
                    </form>
                </div>
            </>
        );
    }
}
export default TodoForm;
