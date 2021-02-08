import * as React from 'react'
import '../styles/used-books.scss'

function ChangeBooksIcon1(props) {
  return (
    <svg
      className="prefix__jill-normalpic"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={240}
      height={192}
      viewBox="0 0 240 192"
      {...props}
    >
      <defs>
        <image
          id="prefix__a"
          width={148}
          height={148}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAACQNJREFUeJzt23uMXGUZx/HvtttCqW2XloJbpba0XKXSQrkUCiFSm9oYESEoUdSo/CNCQK0BY9SoiURFoxQVIVGi/ygSxAQi8YKQQhQRpSjFWqQgTVtL3V7pveMfz2z27FzevXTmnNnZ7yc5od2ZznnOzvs7532fcwBJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkqRRqqPoAtQyxgFTgS5gEnAU0AkcBPYB24EtwLaiCiyCARl95gILgDOA04GTgJnA8QxuPOwE1gHPAL8EHgJKTam0BRiQauOBU4mB9CbgBGAicDRwmDib9gCbgZeAF4BXC6l0YB3AWcBS4BLgAmBag/dxP3BVgz9TLWQa8H7g+8CzxJSiNMRtM/AgcCMwO9/yq4wB3g7cBWxk6MfSu+0nrha7gb0DvPfEXI5MuZkOfBJYBRxi+IOo3vY0cD0wJa8DAmYBtzG4UOwjpkj3Al8APkBcYU4FjiXWHpXGAzOARcDNFZ83tzmHVLzRNsW6iAjGlcSiNGUzMXXaSJxJ9xC/r2OIQTQDmANMSHzGTuCHwDfKn9cMFwK3AsuJq0ctm4DHgMeBJ4DngQNHsM8uYprZ62RiXaIR6jJicNQ7o+4EfgWsAC4mAjAYHcTZ8xpiSvNKnc/fBXyJWMc0ynnAr+vsrwQ8B3wFOLuB++zVxSi5grS7ecAj1B5A24B7gCUMfDUZrA7gfOAHROgq9/kisT44EscTU6Nax9QDrATmH+E+BmJARrhjiGnNAaoH0bPAR8vvaaYu4PPEoM3u/zDwTWrP8wfy8RqfVyKuXNeTnu41UmVAHgLOzWnfOkLnAGupHkR/Bd5VQD3TgDuJYGTreZxoFgxGF3Af1ce0AbiOWEDnqTIgvdv9xH0VtagbiPZk9kvbCFxL8Q2JxcQUK1vbOmKBm3IWcb8l++8OALcTd7yLUC8gJaKZ8TmGd4VUk4wD7qb6y7qb+DJbxRTgAaoDfHqd919GPOKRff9q4MymV5pWGZBareWniC6fCjaBvscderf/AZcXWVRCB7E+yta7ierBdDXVV8N7yG+dkVIZkNOIq/e2ip9vA5YVVKOIwfIo1WfYkTAPXkF1h6t3TfJO+jcYDhKNhVZRr4vVTTxRkH3tIPCR/EtUJ9VXjt8Bk4ssaohupXrhvpi4b9L7s73AFUUVWMdAbd5PEHfrs527D+ZZoOB79P+SHib/bk4j3EH/48g++rIXeEdxpdU1mPsgl9C/Jb2PeIpYOfgY/b+gR2nsXeo8jaX+HfFWPesO9kbhfPqvSx7IpbpR7hTiCdPeX/oaWqtTNRzHEc99ZQfd1wqtKG0od9JvybxvVfNLU7ZNupvooLSD6+g7rpcp/r5NylACchMjOCD1nv5sZd2ZP3+d+B+W2sGeij+XiipEfUZiQLK2Fl2A2ttID4jUVAZESjAgUoIBkRIMiJRgQKQEAyIlGBApwYBICQZESjAgUoIBkRIMiJRgQKQEAyIlGBApwYBICQZESjAgUoIBkRIMiJRgQKQEAyIlGBApwYBICQZESjAgUoIBkRIMiJRgQKQEAyIlGBApwYBICQZESjAgUoIBkRIMiJRgQKQEAyIlGBApwYBICQZESjAgUkJn0QWopY0DxhMn0kPAHqBUaEU5MyCj0zhgLnAKMAeYBbwZ6AamA1OBSVSPjxKwG9iaV6FFMyDtrxOYDywCFgILgNOIkAxVB/CG8jYqGJD2NBdYDiwFLiGuBs2yH3itiZ9fKAPSPt4CXAtcDcwb4L0l4CXgeeBfwHrgP8BGYAuwnZhK7S+/txOYAEwGTgBmAqcS07NfANsaeiQtxICMfMuAm4irRUed9/QAjwGrgD8BfwN2DWEf+8vbdiJITw+32JHGgIxsnwJur/Pas8ADwMPAX4DDeRXVTgzIyLaw4u+vAj8Gfgr8M/dq2pAB6W8i0EXMtScQnZ5O4h7AfmAvsIOYauwsqMas24CTiVpWAg8StapBRmNAjidanfOIwTWHWHR2M7T25V5gE7CBWPC+CKwBngPWAgcbV3Jdq4Fzc9jPqDUaAtJNtDwvBS4muj2NcDRxg20WcFHFa3uJhfATwKPAH4iuUN7GASeVtxOBGUQXaipxlZwIHAWMJRb4vVfK14mr0jaiq7WZOBGsB/5NG7d1K7VrQN4IXFPeFlK/uzOQQ0SbcwxDe27taOCC8vZpYtD9HriPaIvuGGY9KROB84DzgbOBtxH3Q8Y2YV89RIt4NfAM8BTwd9qwEdBuAVkE3Ay8l/TA2AP8A3gBWEdMkTYQZ8oeYgC/Tv/5/Bj67gV0EY9kdBNn5tnEYxtvLf+s0niiHbuMWCv8HPg20WkarjFEGJYDS4gTQV7f57HEVTN75dxBtJF/Q3TO1uZUS1O1S0AWEAvWpXVe3wr8lpjqPEmEY6iL2cPENGk3cUNtTZ33TQfOIcJ6afm/2cc6JgAfLm8PArcQQR2sxcSV8UpiujSQUrnel4ku13+JadMOYhq1j7710lgizMcQJ4Kp9D8RzCy/VstkIqzLifCvAX4GTBnCsakB/kh86SVicK0kBm+pYnsNuINYdxT5WP8k4CpisPQ+DZvd9gNfJALT+7PKwBxHHOu6Gv8+u+0hzuLfIu6qz6f+gB6ODuKhxiXEzcl7ialWrd9/rW1VA2tRHdmAHKT6S1gNfIhYfLaaLmJgvUx13VuoDshc4C5qB6tEDMw/A18mTgRFHfOxwLuB75IOsQHJQTYg2W098D6GvyDP0zjgBmK9U+tYXgV+RO0TQIlYFN9InM1b0Tzgq8Ar9K/7kSKLGi1qBeQ7NHYqkZduors1mOnJduIMfUYhlQ7PGOA9xNrvBeLJYjXZk/QNml3AFcWWc8Q6idZvvWBsBFYQi2BpQJ8hBk4PcGHBtTTKBOKx82wweoDPMjKvjCrYbNqvfXg5fWuOnxCdK0kZM4Eziy5CkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJ4v9mZMDHO3XZ9QAAAABJRU5ErkJggg=="
        />
      </defs>
      <g data-name="Group 1263" transform="translate(-499 -373)">
        <g data-name="Group 949">
          <g data-name="Group 948">
            <path
              data-name="Path 27040"
              d="M671.7 430.713h-41.964"
              fill="none"
              stroke="#000"
              strokeWidth={3}
            />
            <path data-name="Path 2" d="M623 431.34l21.8 9.34v-18.681z" />
          </g>
          <path
            data-name="Line 321"
            fill="none"
            stroke="#1c1b1b"
            strokeWidth={3}
            d="M670.5 429.5v26"
          />
        </g>
        <use transform="translate(591 417)" xlinkHref="#prefix__a" />
        <use transform="translate(499 373)" xlinkHref="#prefix__a" />
        <g data-name="Group 950">
          <g data-name="Group 948">
            <path
              data-name="Path 27040"
              d="M565 508.786h41.964"
              fill="none"
              stroke="#000"
              strokeWidth={3}
            />
            <path data-name="Path 2" d="M613.7 508.159l-21.8-9.34V517.5z" />
          </g>
          <path
            data-name="Line 321"
            fill="none"
            stroke="#1c1b1b"
            strokeWidth={3}
            d="M566.2 509.999v-26"
          />
        </g>
      </g>
    </svg>
  )
}

export default ChangeBooksIcon1
