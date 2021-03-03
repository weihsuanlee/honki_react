import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
// 二手書svg
// import NormalBee from './../components/NormalBee'
import DancingImg from '../components/DancingImg'

import Swal from 'sweetalert2'

function NormalAdd(props) {
  const [dataLoading, setDataLoading] = useState(false)
  let jillForm = document.getElementById('form-jill')
  const [ISBN, setISBN] = useState('')
  const [book_name, setBook_name] = useState('')
  const [BC_pic1, setBC_pic1] = useState('')
  const [book_condition, setBook_condition] = useState('5成新')
  const [written_or_not, setWritten_or_not] = useState('')
  // 抓登入者localstorage的userid
  const userId = localStorage.getItem('userId')

  //preloading file
  const [preloading, setPreloading] = useState(false)

  // const [BC_pic1File, setBC_pic1File] = useState([])

  async function addUserToSever() {
    // 開啟載入指示
    setDataLoading(true)

    const newData = {
      ISBN,
      book_name,
      BC_pic1,
      book_condition,
      written_or_not,
    }

    // 連接的伺服器資料網址
    const url = 'http://localhost:3333/normal-index/add'

    // 注意資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(newData),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    console.log(JSON.stringify(newData))

    const response = await fetch(request)
    const data = await response.json()

    console.log('伺服器回傳的json資料', data)
    // 要等驗証過，再設定資料(簡單的直接設定)

    //直接在一段x秒關掉指示器
    setTimeout(() => {
      setDataLoading(false)
      alert('儲存完成')
      props.history.push('/')
    }, 500)
  }

  // 真正的新增上傳功能
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formdata = new FormData(e.target)
    formdata.append('userId', userId)

    const url = 'http://localhost:3333/normal-index/picture-upload'

    const request = new Request(url, {
      method: 'POST',
      body: formdata,
    })
    const response = await fetch(request)
    const data = await response.json()
    console.log('data:', data)
    // handleClose();

    // data.BC_pic1(secondhand_normalchange.c_sid)
    // getMember(props.member.sid);
    console.log(formdata)

    // addUserToSever()
    //直接在一段x秒關掉指示器
    setTimeout(() => {
      setDataLoading(false)
      // alert('儲存完成')

      Swal.fire({
        title: '新增成功!!',
        // text: 'Congratulations! We welcome you to your VIP membership.',
        imageUrl: 'http://localhost:3000/images/jill/mushroom-hero.gif',
        imageWidth: 251,
        imageHeight: 196,
        imageAlt: 'logo',
        showConfirmButton: false,
        timer: 5000,
      })

      // props.history.push('/NormalIndex')
    }, 500)

    window.setTimeout(
      () => (window.location.href = `http://localhost:3000/NormalIndex`),
      3000
    )
  }

  const handleFileChange = (event) => {
    console.log(event)
    setPreloading(true)
    // if (event.target.files[0]) {
    setBC_pic1(event.target.files[0])
    // }
    setTimeout(() => {
      setPreloading(false)
    }, 5000)
  }

  // 一開始就會開始載入資料
  // useEffect(() => {
  //   getUserFromServer(userid)
  // }, [])

  // 每次users資料有變動就會X秒後關掉載入指示
  // useEffect(() => {
  //   setTimeout(() => {
  //     setDataLoading(false)
  //   }, 1000)
  // }, [userid])

  const loading = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )

  const display = (
    <>
      <div className="container my-5">
        {/* <!-- 麵包屑 --> */}
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-honki">
              <Link to="#">首頁</Link>
            </li>
            <li className="breadcrumb-honki">
              <Link to="./used-books">二手交換</Link>
            </li>
            <li className="breadcrumb-honki active" aria-current="page">
              隨機交換
            </li>
          </ol>
        </nav>
        <div className="jill-myaddform row">
          <form onSubmit={handleSubmit} name="form-jill" id="form-jill">
            {/* <!-- 比例 --> */}
            <div className=" form-width-height">
              {/* <!-- 表單標題 --> */}
              <div className="form-tittle">
                <h5>新增二手書</h5>
              </div>
              {/* <!-- 一般input --> */}
              <div className="form-group ">
                <div className="formItems row d-flex">
                  <label
                    className="inputText col-5"
                    for="exampleFormControlInput1"
                  >
                    ISBN
                  </label>
                  <input
                    type="text"
                    className="form-control formInput col-7 "
                    placeholder="ex:9789869961202"
                    name="ISBN"
                    value={ISBN}
                    onChange={(event) => {
                      setISBN(event.target.value)
                    }}
                  />
                </div>
              </div>
              {/* <!-- 一般input --> */}
              <div className="form-group ">
                <div className="formItems row d-flex">
                  <label
                    className="inputText col-5"
                    for="exampleFormControlInput1"
                  >
                    書名
                  </label>
                  <input
                    type="text"
                    className="form-control formInput col-7 "
                    placeholder="ex:種日子的人"
                    name="book_name"
                    value={book_name}
                    onChange={(event) => {
                      setBook_name(event.target.value)
                    }}
                  />
                </div>
              </div>
              {/* <!-- select --> */}
              <div className="form-group ">
                <div className="formItems row d-flex">
                  <label
                    className="inputText col-5"
                    for="exampleFormControlSelect1"
                  >
                    書況
                  </label>
                  <select
                    className="form-control formInput  col-7"
                    id="exampleFormControlSelect1"
                    name="book_condition"
                    value={book_condition}
                    onChange={(event) => {
                      setBook_condition(event.target.value)
                    }}
                  >
                    {/* 發現bug，一定要去選才寫得進去 */}
                    <option>1成新</option>
                    <option>3成新</option>
                    <option selected>5成新</option>
                    <option>7成新</option>
                    <option>9成新</option>
                  </select>
                </div>
              </div>
              {/* <!-- 上傳檔案 --> */}
              <div className="form-group">
                <label className="BC_pic_title">書況圖片</label>
                <label className="jill-upload-btn" for="BC_pic1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="84"
                    height="30"
                    viewBox="0 0 84 30"
                  >
                    <g
                      id="Group_905"
                      data-name="Group 905"
                      transform="translate(-1315 -1138)"
                    >
                      <g id="trial-button" transform="translate(1315 1138)">
                        <rect
                          id="Rectangle_837"
                          data-name="Rectangle 837"
                          width="84"
                          height="30"
                          rx="4"
                          fill="#1c1b1b"
                        />
                        <text
                          id="選擇檔案"
                          transform="translate(18 20)"
                          fill="#fff"
                          font-size="12"
                          font-family="NotoSansTC-Medium, Noto Sans TC"
                          font-weight="500"
                          letter-spacing="0em"
                        >
                          <tspan x="0" y="0">
                            選擇檔案
                          </tspan>
                        </text>
                      </g>
                    </g>
                  </svg>
                  <input
                    type="file"
                    className=""
                    id="BC_pic1"
                    accept="image/*"
                    multiple
                    style={{ display: 'none' }}
                    // name="BC_pic1"
                    name="BC_pic1"
                    required={true}
                    onChange={(event) => {
                      handleFileChange(event)
                    }}
                  />
                </label>
              </div>

              {/* <!-- select_radio --> */}
              <div className="form-group ">
                <div className="formItems row">
                  <label
                    className="inputText col-5"
                    for="exampleFormControlSelect1"
                  >
                    有無塗改書寫
                  </label>
                  <div className="col-7">
                    <div className="form-check form-check-inline radio-item">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="inlineRadio1"
                        name="written_or_not"
                        value="有塗改"
                        onChange={(event) => {
                          setWritten_or_not(event.target.value)
                        }}
                      />
                      <label className="form-check-label" for="inlineRadio1">
                        有塗改
                      </label>
                    </div>
                    <div className="form-check form-check-inline radio-item">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="inlineRadio2"
                        name="written_or_not"
                        value="無塗改"
                        onChange={(event) => {
                          setWritten_or_not(event.target.value)
                        }}
                      />
                      <label className="form-check-label" for="inlineRadio2">
                        無塗改
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="jill-fix-addform-btn">
              <button
                type="submit"
                // onClick={() => {
                //   addUserToSever()
                // }}
                className="btn-md-dark jill-addform-btn"
              >
                新增
              </button>
              <Link to="./NormalIndex">
                <button className="btn-md-dark jill-addform-btn">取消</button>
              </Link>
            </div>
          </form>
          {/* <!-- 按鈕 --> */}
          <div className="form-group button-group jill-fix-btn">
            <div className="d-flex">
              {/* <Link to="#">
                <button className="btn-md-dark jill-addform-btn">新增</button>
              </Link> */}
            </div>
          </div>
          {/* <!-- 跳舞的人 --> */}
          <div className="jill-dancing-img">
            <DancingImg />
          </div>
        </div>
      </div>
    </>
  )

  return (
    <>
      {/* <h1>新增成功</h1> */}
      <hr />

      {dataLoading ? loading : display}
    </>
  )
}

export default withRouter(NormalAdd)
