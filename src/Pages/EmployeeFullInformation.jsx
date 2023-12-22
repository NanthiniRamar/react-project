import React,{useState, useEffect} from  'react'
import { useParams } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';
import Loader from '../Components/Loader';
import roleOptions from '../Constants/roleOptions';

const EmployeeFullInformation = () => {
    const employee = useParams()
    const[employeeData, setEmployeeData] = useState()
    const[isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        const fetchData = async () => {
            try{
                const response = await fetch(`http://localhost:3000/employees/${employee?.id}`,{
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
    },[])

    var matchedRoleOption = roleOptions?.find((role) => role?.value == employeeData?.role)
    var roleLabel = matchedRoleOption ? matchedRoleOption.label : ''

    return(
        <div className='employeeInfo'>
            <Container>
                <h2>Employee Details </h2>
                <div className='text-center'>{isLoading && <Loader />}</div>
                <p>*We will find the employee information here.</p>
                <div className='info'>
                    <Card>
                        <Card.Body>
                            <Card.Text>
                                <strong>Employee ID:</strong> {employeeData?.id}
                                <br />
                                <strong>Name:</strong> {employeeData?.name}
                                <br />
                                <strong>Mobile:</strong> {employeeData?.mobile}
                                <br />
                                <strong>Email Id:</strong> {employeeData?.email}
                                <br />
                                <strong>Job Role:</strong> {roleLabel}
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </div>
    )
}

export default EmployeeFullInformation;