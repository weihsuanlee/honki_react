import * as React from 'react'

function SvgEast(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 91 76.62" {...props}>
      <g data-name="east">
        <path
          data-name="Line 1"
          fill="none"
          stroke="#826627"
          strokeWidth={6}
          d="M46.09 46.69v29.93"
        />
        <g data-name="Rectangle 792">
          <path fill="#789d3f" d="M0 0h91v46H0z" />
          <path
            strokeLinejoin="round"
            fill="none"
            stroke="#826627"
            strokeWidth={6}
            d="M3 3h85v40H3z"
          />
        </g>
        <text
          transform="translate(9 31)"
          style={{
            isolation: 'isolate',
          }}
          fontSize={18}
          fill="#fff"
          fontFamily="NotoSansCJKtc-Regular-B5pc-H,Noto Sans CJK TC"
        >
          {'\u6771\u90E8\u5730\u5340'}
        </text>
      </g>
    </svg>
  )
}

export default SvgEast
