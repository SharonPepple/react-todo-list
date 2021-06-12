import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const CreateTask = ({modal, toggle, save}) => {
    const [taskName, setTaskName] = useState('');
    const [notes, setNotes] = useState('');

    const handleChange = (e) => {
        
        const {name, value} = e.target

        if (name ==="taskName"){
            setTaskName(value)
        }else{
            setNotes(value)
        }

    }
    const handleSave = () => {
        let taskObj = {}
        taskObj["Name"] = taskName
        taskObj["Notes"] = notes
        save(taskObj)

    }



    return (
         <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create ToDo</ModalHeader>
            <ModalBody>
                <form>
                    <div className ="form-group">
                        <label>Task Name</label>
                        <input type ="text" className = "form-control" value = {taskName} onChange = {handleChange} name = "taskName"/>

                    </div>

                    <div className = "form-group">
                        <label>Notes</label>
                        <textarea rows = "5" className = "form-control" value ={notes} onChange = {handleChange} name = "notes"></textarea>

                    </div>

                </form>
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleSave}>Go!</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
};

export default CreateTask;