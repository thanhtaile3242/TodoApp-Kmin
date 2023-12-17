import React from "react";
import active_tick from "../../assets/active-tick.svg";
import complete_tick from "../../assets/complete-tick.svg";
import deleteIcon from "../../assets/delete.svg";
import editIcon from "../../assets/edit.svg";

class TodoList extends React.Component {
    render() {
        return (
            <>
                <div class="todo-list-container">
                    <div class="todo-item-container">
                        <span class="todo-item-toggle">
                            <img src={complete_tick} alt="tick" />
                        </span>
                        <div class="todo-item-content completed">
                            Ăn bánh mì
                        </div>
                        <div class="todo-item-options">
                            <span class="icon-btn">
                                <img src={editIcon} alt="edit" />
                            </span>
                            <span class="icon-btn">
                                <img src={deleteIcon} alt="close" />
                            </span>
                        </div>
                    </div>
                    <div class="todo-item-container">
                        <span class="todo-item-toggle">
                            <img src={active_tick} alt="tick" />
                        </span>
                        <div class="todo-item-content">
                            Uống một tách trà nóng
                        </div>
                        <div class="todo-item-options">
                            <span class="icon-btn">
                                <img src={editIcon} alt="edit" />
                            </span>
                            <span class="icon-btn">
                                <img src={deleteIcon} alt="close" />
                            </span>
                        </div>
                    </div>
                    <div class="todo-item-container">
                        <span class="todo-item-toggle">
                            <img src={active_tick} alt="tick" />
                        </span>
                        <div class="todo-item-content">Thực hành lập trình</div>
                        <div class="todo-item-options">
                            <span class="icon-btn">
                                <img src={editIcon} alt="edit" />
                            </span>
                            <span class="icon-btn">
                                <img src={deleteIcon} alt="close" />
                            </span>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default TodoList;
