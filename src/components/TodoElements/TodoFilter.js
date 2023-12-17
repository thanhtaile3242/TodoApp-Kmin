import React from "react";
class TodoFilter extends React.Component {
    render() {
        return (
            <>
                <div className="todo-filter-container">
                    <div className="todo-filter-count">3 items left</div>
                    <div className="todo-filter-status">
                        <span className="active">All</span>
                        <span>Active</span>
                        <span>Complete</span>
                    </div>
                </div>
            </>
        );
    }
}
export default TodoFilter;
