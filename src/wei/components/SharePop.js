import { withRouter } from 'react-router-dom'
import { Popover, OverlayTrigger, Button } from 'react-bootstrap'
import { FaShare, FaTwitterSquare, FaCopy, FaCheckCircle } from 'react-icons/fa'

function SharePop(props) {
  function copyButtonClick() {
    const copy = document.querySelector('.wei-copy')
    const copied = document.querySelector('.wei-copied')
    copy.style.display = 'none'
    copied.style.display = 'block'
  }
  const { productDetail } = props
  const popover = (
    <Popover id="popover-basic" className="wei-popover wei-share-pop">
      <Popover.Content style={{ fontSize: '24px' }}>
        <div
          onClick={() => {
            window.open(
              `https://twitter.com/intent/tweet?url=http://localhost:3000/products/${productDetail.sid}%0A&hashtags=HONKI,本気&text=Check%20out%20this%20book!📗📕📘%0A%27${productDetail.title}%27%0A推薦這本書👍👍%0A%0A`,
              '_blank'
            )
          }}
          style={{ cursor: 'pointer' }}
        >
          <FaTwitterSquare />
          <div style={{ fontSize: '12px' }}>分享到Twitter</div>
        </div>
        <div
          style={{ cursor: 'pointer' }}
          className="mt-3 wei-copy"
          onClick={() => {
            navigator.clipboard.writeText(
              `http://localhost:3000/products/` + productDetail.sid
            )
            copyButtonClick()
          }}
        >
          <FaCopy />
          <div style={{ fontSize: '12px' }}>複製網址到剪貼簿</div>
        </div>
        <div className="mt-3 wei-copied" style={{ fontSize: '24px' }}>
          <FaCheckCircle />
          <div style={{ fontSize: '12px' }}>已複製</div>
        </div>
      </Popover.Content>
    </Popover>
  )
  return (
    <>
      <OverlayTrigger trigger="click" placement="right" overlay={popover}>
        <Button className="wei-pop wei-detail-icon wei-detail-share">
          <FaShare
            className="wei-detail-share-icon"
            style={{ color: 'black' }}
          />
        </Button>
      </OverlayTrigger>
    </>
  )
}
export default withRouter(SharePop)
