import 'rc-slider/assets/index.css'
import { withRouter } from 'react-router-dom'
import RangeSlider from './RangeSlider'
import { Popover, OverlayTrigger, Button } from 'react-bootstrap'

function PriceFilterPop(props) {
  const { setSliderValues, avgPrice } = props
  function applyPriceFilter(sliderValues) {
    setSliderValues(sliderValues)
    let searchParams = new URLSearchParams(props.location.search)
    searchParams.set('minPrice', sliderValues[0])
    searchParams.set('maxPrice', sliderValues[1])
    const queryString = {
      pathname: props.match.url,
      search: '?' + searchParams.toString(),
    }
    props.history.push(queryString)
  }
  function clearPriceFilter() {
    let searchParams = new URLSearchParams(props.location.search)
    searchParams.delete('minPrice')
    searchParams.delete('maxPrice')
    const queryString = {
      pathname: props.match.url,
      search: '?' + searchParams.toString(),
    }
    props.history.push(queryString)
  }
  const popover = (
    <Popover id="popover-basic" className="wei-popover">
      <Popover.Title as="h3">自訂商品價格範圍</Popover.Title>
      <Popover.Content>
        <p className="text-center mt-2">
          商品平均價格為 <strong>NT$ {avgPrice}</strong>
        </p>
        <RangeSlider
          applyPriceFilter={applyPriceFilter}
          clearPriceFilter={clearPriceFilter}
        />
      </Popover.Content>
    </Popover>
  )
  return (
    <>
      <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
        <Button className="wei-pop btn-rounded-dark">價格篩選</Button>
      </OverlayTrigger>
    </>
  )
}
export default withRouter(PriceFilterPop)
