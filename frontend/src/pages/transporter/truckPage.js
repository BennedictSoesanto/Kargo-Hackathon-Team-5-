import {Table, Container, DropdownButton, Dropdown} from "react-bootstrap"
import "./styleTrucks.css"

const TruckPage =()=>{
  return (
    <>
    <Container className="page">
      <Table className="table-trucks">
        <thead>
          <tr>
            <th>License Number</th>
            <th>Truck Type</th>
            <th>Plate Type</th>
            <th>Production Year</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>B</td>            
            <td>Trunton</td> 
            <td>Yellow</td> 
            <td>2001</td> 
            <td></td>
            <td>
              <DropdownButton id="dropdown-basic-button" title="actions">
                <Dropdown.Item href="#/action-2">Update</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Delete</Dropdown.Item>
              </DropdownButton>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>    
    </>
  )

}
export default TruckPage;