import React from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import { Button } from 'react-bootstrap'

const createSliderWithTooltip = Slider.createSliderWithTooltip
const WeiRange = createSliderWithTooltip(Slider.Range)

class RangeSlider extends React.Component {
  constructor(props) {
    super(props)
    this.state = { sliderValues: [0, 1000] }
  }

  handleChange = (sliderValues) => {
    this.setState({ sliderValues })
    // console.log(sliderValues)
  }
  render() {
    const { sliderValues } = this.state
    return (
      <div>
        <WeiRange
          min={0}
          max={2000}
          allowCross={false}
          onChange={this.handleChange}
          defaultValue={sliderValues}
          tipFormatter={(value) => `$ ${value}`}
          className="mt-5 mb-2"
        />
        <p className="text-center">
          ${sliderValues[0]} - ${sliderValues[1]}
        </p>
        <Button
          onClick={() => {
            this.props.applyPriceFilter(sliderValues)
          }}
          className="wei-pop btn-sm-dark w-100 mt-2"
          style={{ backgroundColor: 'var(--honki-red)' }}
        >
          儲存
        </Button>
        <Button
          onClick={() => {
            this.props.clearPriceFilter()
          }}
          className="wei-pop btn-sm-dark w-100 mt-2 mb-4"
        >
          清空
        </Button>
      </div>
    )
  }
}

export default RangeSlider
