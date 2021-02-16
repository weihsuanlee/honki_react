import { Popover, OverlayTrigger, Button } from 'react-bootstrap'
import Slider, { Range } from 'rc-slider'
import 'rc-slider/assets/index.css'
const WeiRange = Slider.createSliderWithTooltip(Slider.Range)

function PriceFilterPop() {
  const popover = (
    <Popover id="popover-basic" className="wei-popover">
      <Popover.Title as="h3">價格篩選</Popover.Title>
      <Popover.Content>
        <WeiRange
          className="mt-5 mb-4"
          min={0}
          max={2000}
          defaultValue={[300, 1000]}
          tipFormatter={(value) => `$ ${value}`}
        />
        <p className="text-center">
          商品平均價格為 <strong>NT$ 350</strong>
        </p>
        <Button className="wei-pop btn-sm-dark w-100 mt-2 mb-4">儲存</Button>
      </Popover.Content>
    </Popover>
  )
  return (
    <>
      <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
        <Button className="wei-pop btn-rounded-dark">價格</Button>
      </OverlayTrigger>
    </>
  )
}
export default PriceFilterPop
