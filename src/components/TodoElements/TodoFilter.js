import React from "react";
class TodoFilter extends React.Component {
    render() {
        return (
            <>
                <div class="todo-filter-container">
                    <div class="todo-filter-count">3 items left</div>
                    <div class="todo-filter-status">
                        <span class="active">All</span>
                        <span>Active</span>
                        <span>Complete</span>
                    </div>
                </div>
            </>
        );
    }
}
export default TodoFilter;
