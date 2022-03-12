import {Modal, Button, Form} from "react-bootstrap"
const ModalCreateTrucks =(props)=>{
  return(
    <>
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add New Unit
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>License Number</Form.Label>
            <Form.Control type="text" placeholder="Enter license number" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>License Type</Form.Label>
            <Form.Select id="licenseType">
              <option value="Black">Black</option>
              <option value="Yellow">Yellow</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Truck Type</Form.Label>
            <Form.Select id="truckType">
              <option value="Black">Black</option>
              <option value="Yellow">Yellow</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Production Year</Form.Label>
            <Form.Control type="text" placeholder="Enter production year" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>STNK</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>KIR</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    </>
  )
}
export default ModalCreateTrucks;