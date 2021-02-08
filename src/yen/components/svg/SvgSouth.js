import * as React from 'react'

function SvgSouth(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 91 77.14" {...props}>
      <g data-name="south">
        <path
          data-name="Line 1"
          fill="none"
          stroke="#826627"
          strokeWidth={6}
          d="M45.85 47.2v29.94"
        />
        <g data-name="Rectangle 792">
          <path fill="#789d3f" d="M0 0h91v47H0z" />
          <path
            strokeLinejoin="round"
            fill="none"
            stroke="#826627"
            strokeWidth={6}
            d="M3 3h85v41H3z"
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
          {'\u5357\u90E8\u5730\u5340'}
        </text>
      </g>
    </svg>
  )
}

export default SvgSouth
