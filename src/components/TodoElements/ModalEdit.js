import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

class ModalEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: this.props.show,
            task: this.props.editTask.task,
            uidTask: this.props.editTask.uid,
        };
        this.handleClose = this.handleClose.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.show !== this.props.show) {
            this.setState({
                show: this.props.show,
            });
        }

        if (prevProps.editTask.uid !== this.props.editTask.uid) {
            this.setState({
                task: this.props.editTask.task,
                uidTask: this.props.editTask.uid,
            });
        }
    }

    handleClose() {
        this.props.handleSetShowHideModalEdit();
    }

    handleChange(event) {
        this.setState({
            task: event.target.value,
        });
    }

    handleSave() {
        this.props.handleEditTask(this.state.uidTask, this.state.task);
        this.props.handleSetShowHideModalEdit();
    }

    render() {
        return (
            <>
                <Modal show={this.state.show} backdrop="static">
                    <Modal.Header closeButton onClick={this.handleClose}>
                        <Modal.Title>Update your task</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.task}
                            onChange={(event) => {
                                this.handleChange(event);
                            }}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button
                            variant="primary"
                            onClick={() => {
                                this.handleSave();
                            }}
                        >
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default ModalEdit;
