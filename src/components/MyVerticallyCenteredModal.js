import { Button, Modal } from 'react-bootstrap'
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">互動視窗</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 className="modal-subtitle">訊息</h4>
        <p>
          而這些並不是完全重要，更加重要的問題是，我們可以很篤定的說，這需要花很多時間來嚴謹地論證。普魯塔克曾說過一句意義深遠的話，衡量人生的標準是看其是否有意義;
          而不是看其有多長。希望各位能用心體會這段話。honki似乎是一種巧合，但如果我們從一個更大的角度看待問題，這似乎是一種不可避免的事實。
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="btn-secondary">
          取消
        </Button>
        <Button onClick={props.onHide} className="btn-danger">
          新增
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default MyVerticallyCenteredModal
