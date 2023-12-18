import React from "react";
class TodoFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            choiceAll: true,
            choiceProgress: false,
            choiceComplete: false,
            text: "",
        };
        this.handleChoiceAll = this.handleChoiceAll.bind(this);
        this.handleChoiceComplete = this.handleChoiceComplete.bind(this);
        this.handleChoiceProgress = this.handleChoiceProgress.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (this.props.isAdd === true) {
            this.setState({
                choiceAll: true,
                choiceComplete: false,
                choiceProgress: false,
                text: "",
            });
            this.props.handleFilterAllTask();
        }
    }

    handleChoiceComplete() {
        this.setState({
            choiceComplete: true,
            choiceAll: false,
            choiceProgress: false,
            text: " compeleted",
        });
        this.props.handleFilterCompleteTask();
    }

    handleChoiceAll() {
        this.setState({
            choiceAll: true,
            choiceComplete: false,
            choiceProgress: false,
            text: "",
        });
        this.props.handleFilterAllTask();
    }
    handleChoiceProgress() {
        this.setState({
            choiceProgress: true,
            choiceComplete: false,
            choiceAll: false,
            text: " in progress",
        });
        this.props.handleFilteProgressTask();
    }
    render() {
        return (
            <>
                <div className="todo-filter-container">
                    <div className="todo-filter-count">
                        {this.props.listFilterTask.length} tasks
                        {this.state.text}
                    </div>
                    <div className="todo-filter-status">
                        <span
                            onClick={this.handleChoiceAll}
                            className={
                                this.state.choiceAll === true ? "active" : ""
                            }
                        >
                            All
                        </span>
                        <span
                            onClick={this.handleChoiceProgress}
                            className={
                                this.state.choiceProgress === true
                                    ? "active"
                                    : ""
                            }
                        >
                            In progress
                        </span>
                        <span
                            onClick={this.handleChoiceComplete}
                            className={
                                this.state.choiceComplete === true
                                    ? "active"
                                    : ""
                            }
                        >
                            Complete
                        </span>
                    </div>
                </div>
            </>
        );
    }
}
export default TodoFilter;
