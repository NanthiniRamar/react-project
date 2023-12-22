import React, { useState, useEffect } from "react";
import { Container, Table, Row, Col, Card } from  "react-bootstrap"
import Icon from "../Constants/Icon";
import CreateNewEmployee from "../Components/CreateNewEmployee";
import Loader from "../Components/Loader";
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import UpdateEmployee from "../Components/UpdateEmployee";
import DeleteEmployee from "../Components/DeleteEmployee";
import {useNavigate} from "react-router-dom"
import roleOptions from "../Constants/roleOptions";

const EmployeeList = () => {
    const navigate = useNavigate()
    const[employeeData, setEmployeeData] = useState()
    const[mode, setMode] = useState('') 
    const[isLoading, setIsLoading] = useState(false) // show loader if we waiting for the data
    const[refreshCount, setRefreshCount] = useState(1) //its for table reload, once new employee added,updated,deleted 
    const[selectedRow, setSelectedRow] = useState() 

    //get all employee's data
    useEffect(() => {
        setIsLoading(true)
        const fetchData = async () => {
            try{
                const response = await fetch('http://localhost:3000/employees',{
                    method: "GET",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    }
                })
                if(!response.ok){
                    throw new Error(`HTTP Error!, Status: ${response.status}`)
                }
                const result = await response.json()
                setEmployeeData(result)
            }
            catch(error) {
                console.log("Uncaught Error")
            }
            finally {
                setIsLoading(false)
            }
        }
        fetchData()
    },[refreshCount])

    const createNewEmployee = () => {
        setMode('create')
    }

    const refreshTable = () => {
        setRefreshCount(refreshCount+1)
    }

    const onCompletion = (message) => {
        setMode('close')
        //if new employee added or updated or deleted then refresh the table if it is success
        if(message == 'success'){
            refreshTable()
        }
    }

    const editEmployee = (row) => {
        setSelectedRow(row)
        setMode('edit')
    }

    const deleteEmployee = (row) => {
        setSelectedRow(row)
        setMode('delete')
    }

    //to view employee full information
    const viewEmployee = (row) => {
        navigate(`/employee-details/${row?.id}`)
    }

    return(
        <div className="employeeList">
            <ToastContainer />
            {isLoading && <Loader />}
           <Container>
                <Row>
                    <Col className="title">
                        <h1>Employee List</h1>
                    </Col>
                    <Col className="text-end ">
                        <div className="createIcon" onClick={createNewEmployee}>
                            <Icon name="add" />
                        </div>
                    </Col>
                </Row>
                <div className="show_desktop">
                    <div className="listWrapper table-responsive">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Employee Id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Mobile No</th>
                                    <th>Role</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {employeeData?.map((data,index) => {
                                    var matchedRoleOption = roleOptions?.find((role) => role?.value == data?.role)
                                    var roleLabel = matchedRoleOption ? matchedRoleOption.label : ''
                                    return(
                                        <tr key={index}>
                                            <td>{data?.id}</td>
                                            <td>{data?.name}</td>
                                            <td>{data?.email}</td>
                                            <td>{data?.mobile}</td>
                                            <td>{roleLabel}</td>
                                            <td className="actionIcon">
                                                <tr>
                                                    <td className="editIcon" onClick={()=>editEmployee(data)}><Icon name="edit" /></td>
                                                    <td onClick={()=>deleteEmployee(data)}><Icon name="delete" /></td>
                                                    <td class="viewIcon" onClick={()=>viewEmployee(data)}><Icon name="view" /></td>
                                                </tr>
                                            </td>
                                        </tr>
                                    )
                                } )}
                            </tbody>
                        </Table>
                    </div>
                </div>
                <div className="show_mobile">
                    <div className="listWrapper table-responsive">
                        {employeeData?.map((data,index) => {
                            var matchedRoleOption = roleOptions?.find((role) => role?.value == data?.role)
                            var roleLabel = matchedRoleOption ? matchedRoleOption.label : ''
                            return(
                                <Card key={index}>
                                    <Card.Body>
                                        <Card.Text>
                                            <strong>Employee ID:</strong> {data?.id}
                                            <br />
                                            <strong>Name:</strong> {data?.name}
                                            <br />
                                            <strong>Mobile:</strong> {data?.mobile}
                                            <br />
                                            <strong>Email Id:</strong> {data?.email}
                                            <br />
                                            <strong>Job Role:</strong> {roleLabel}
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            )
                        })}
                    </div>
                </div>
                {mode == 'create' &&
                    <CreateNewEmployee setMode={setMode} onCompletion={onCompletion} />
                }
                {mode == 'edit' && 
                    <UpdateEmployee setMode={setMode} onCompletion={onCompletion} selectedRow={selectedRow} />
                }
                {mode == 'delete' && 
                    <DeleteEmployee setMode={setMode} onCompletion={onCompletion} selectedRow={selectedRow} />
                }
           </Container>
        </div>
    )
}

export default EmployeeList;