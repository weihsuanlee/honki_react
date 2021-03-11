import { Button, Modal } from 'react-bootstrap'
import { FaBookOpen } from 'react-icons/fa'

function ReadTrialModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton style={{ padding: '1.2rem 1rem 1rem 1rem' }}>
        <Modal.Title id="contained-modal-title-vcenter" className="ml-4">
          <FaBookOpen className="mr-3" />
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ height: '60vh', overflow: 'scroll' }}>
        <h4 className="modal-subtitle">{props.subtitle}</h4>
        <p style={{ whiteSpace: 'pre-line', fontSize: '16px' }}>
          {props.message}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="btn-danger">
          關閉
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ReadTrialModal
