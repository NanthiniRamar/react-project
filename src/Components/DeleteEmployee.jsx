import React from "react";
import { Modal, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

const DeleteEmployee = ({setMode, onCompletion, selectedRow}) => {

    const onClickYes = () => {
        console.log("yes")
        fetch(`http://localhost:3000/employees/${selectedRow?.id}`, {
            method: 'DELETE',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
        .then((response) => {
            if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            toast.dismiss(); // Dismiss any existing notifications
            // Display a success notification
            toast.success('Employee deleted successfully', {
            position: toast.POSITION.TOP_RIGHT,
            });
            onCompletion('success');
        })
        .catch((error) => {
            toast.dismiss(); 
            toast.error(`Error adding employee: ${error.message}`, {
            position: toast.POSITION.TOP_RIGHT,
            });
        });
    }

    return(
        <div className="deleteEmployee">
            <Modal show>
                <Modal.Header>
                    <Modal.Title>
                        Delete Employee 
                    </Modal.Title>
                    <button type="button" class="btn-close" aria-label="Close" onClick={()=>setMode("close")}></button>
                </Modal.Header>
                <Modal.Body>
                    <p>Are you sure you want to delete the <strong>{selectedRow?.id}({selectedRow?.name})</strong> employee?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={()=>onClickYes()}>
                        Yes
                    </Button>
                    <Button variant="secondary" onClick={()=>setMode('close')}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default DeleteEmployee;