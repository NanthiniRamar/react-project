import React,{useState, useEffect} from "react";
import { Modal, Button, Container } from 'react-bootstrap';
import { toast } from 'react-toastify';
import roleOptions from "../Constants/roleOptions";

const CreateNewEmployee = ({setMode, onCompletion}) => {
    const[formValues, setFormValues] = useState({}) //store user input data
    const[errors, setErrors] = useState({}) // store if exists errors from api

    const onChangeValues = (event) => {
        setFormValues({...formValues,[event.target.name]:event.target.value})
    }

    //validate form data
    const validateForm = () => {
        let isValid = true
        var newErrors = {}

        // Validate employee id
        if (!formValues?.id?.trim()) {
            newErrors.id = 'Id is required';
            isValid = false;
        }
        else if(formValues?.id?.length < 4){
            newErrors.id = "Employee id atleast has minimum 4 characters";
            isValid = false
        }
        
        // Validate name
        if (!formValues?.name?.trim()) {
            newErrors.name = 'Name is required';
            isValid = false;
        }
        else if(formValues?.name?.length < 3){
            newErrors.name = "Name atleast has minimum 3 characters";
            isValid = false
        }
        else if(formValues?.name?.length >= 15){
            newErrors.name = "Maximum characters exists";
            isValid = false
        }


        // Validate email
        if (!formValues?.email?.trim()) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!/^\S+@\S+\.\S+$/.test(formValues.email)) {
            newErrors.email = 'Invalid email format';
            isValid = false;
        }

        // Validate mobile no
        if(formValues?.mobile != null){
            if (!/^\d{10}$/.test(formValues?.mobile)) {
                newErrors.mobile = 'Invalid mobile number format';
                isValid = false;
            }
        }

        // Validate role
        if (!formValues?.role?.trim()) {
            newErrors.role = 'Role is required';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;

    }

    //create new employee
    const submitForm = () => {
        const isValid = validateForm();
        if (isValid) {
            fetch('http://localhost:3000/employees', {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formValues),
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
                toast.success('Employee added successfully', {
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

    }
   
    return(
        <div className="createEmployee">
            <Modal show>
                <Modal.Header>
                    <Modal.Title>
                        Create New Employee
                    </Modal.Title>
                    <button type="button" class="btn-close" aria-label="Close" onClick={()=>setMode("close")}></button>
                </Modal.Header>
                <Modal.Body>
                    <div className="form-group employee-id">
                        <label for="id">Employee Id <span class="required">*</span></label>
                        <input type="text" id="id" name="id" value={formValues.id} onChange={onChangeValues} required/>
                        {errors?.id && <p className="errors">{errors?.id}</p>}
                    </div>
                    <div className="form-group name">
                        <label for="name">Name <span class="required">*</span></label>
                        <input type="text" id="name" name="name" value={formValues.name} onChange={onChangeValues} required />
                        {errors?.name && <p className="errors">{errors?.name}</p>}
                    </div>
                    <div className="form-group email">
                        <label for="email">Email <span class="required">*</span></label>
                        <input type="text" id="email" name="email" value={formValues.email} onChange={onChangeValues} required/>
                        {errors?.email && <p className="errors">{errors?.email}</p>}
                    </div>
                    <div className="form-group mobile">
                        <label for="mobile">Mobile No</label>
                        <input type="text" id="mobile" name="mobile" value={formValues.mobile} onChange={onChangeValues} />
                        {errors?.mobile && <p className="errors">{errors?.mobile}</p>}
                    </div>
                    <div className="form-group role">
                        <label for="role">Role <span class="required">*</span></label>
                        <select id="role" type="dropdown" name="role" value={formValues.role} onChange={onChangeValues} required>
                            <option defaultValue="Select Option"  hidden>Select Option</option>
                            {roleOptions?.map((option, index) => {
                                return (
                                    <option key={index} value={option.value}>{option.label}</option>
                                )
                            })}
                        </select>
                        {errors?.role && <p className="errors">{errors?.role}</p>}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={submitForm}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default CreateNewEmployee;