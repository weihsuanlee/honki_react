import { Popover, OverlayTrigger, Button } from 'react-bootstrap'

function MyPopOver() {
  const popover = (
    <Popover id="popover-basic" className="wei-popover">
      <Popover.Title as="h3">價格篩選</Popover.Title>
      <Popover.Content>
        商品平均價格為 <strong>NT$ 350</strong>
        <input type="range" name="price" />
        <Button>儲存</Button>
      </Popover.Content>
    </Popover>
  )
  return (
    <>
      <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
        <Button className="btn-rounded-dark">價格</Button>
      </OverlayTrigger>
    </>
  )
}
export default MyPopOver
