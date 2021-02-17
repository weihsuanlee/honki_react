import '../styles/cartStyle.scss'
import { FaThLarge, FaListUl, FaHeart } from 'react-icons/fa'
import { withRouter, NavLink } from 'react-router-dom'
// import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
// import ProductBanner from '../components/ProductBanner'
// import ListSpinner from '../components/ListSpinner'
// import MyPopOver from '../components/MyPopOver'
import { useEffect, useState } from 'react'

function CartItems(props) {
  // 書籍商品狀態
  const [books, setBooks] = useState([])
  // 分類選單 Display
  const [categoryDisplay, setCategoriesDisplay] = useState([])
  // 篩選類別狀態
  const [category, setCategory] = useState('')
  // 模擬componentDidUpdate
  useEffect(() => {
    filterProduct()
  }, [category])
  const [isLoading, setIsLoading] = useState(true)
  const getDataFromServer = async () => {
    // 先開啟spinner
    setIsLoading(true)

    // 和伺服器要資料
    const response = await fetch('http://localhost:3333/cart', {
      method: 'get',
    })
    const data = await response.json()
    console.log(data)
    setBooks(data.rows)
    setCategoriesDisplay(data.c_rows)

    // 2秒後關閉spinner
    // setTimeout(() => {
    //   setIsLoading(false)
    // }, 2000)
  }
  const categoriesDisplay = (
    <div className="wei-categories">
      <h6 className="wei-categories-title">書籍分類</h6>
      <ul>
        {categoryDisplay.map((v, i) => (
          <>
            <NavLink
              activeClassName="active"
              className="wei-category"
              to={{
                search: '?category=' + v.category_sid,
              }}
              key={i}
              onClick={() => {
                setCategory(`category=${v.category_sid}`)
              }}
            >
              <p>{v.name}</p>
            </NavLink>
          </>
        ))}
      </ul>
    </div>
  )

  async function filterProduct() {
    // 先開啟spinner
    setIsLoading(true)
    // 和伺服器要資料
    const response = await fetch('http://localhost:3333/product?' + category, {
      method: 'get',
    })
    const data = await response.json()
    console.log(data, 'data1')
    setBooks(data.rows)

    // 1.5秒後關閉spinner
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }
  // const spinner = <ListSpinner show="true" />
  const bookCardDisplay = (
    <>
      {books.map((v, i) => (
        <div
          onClick={() => {
            props.history.push('/products/' + v.sid)
          }}
          className="col-6 col-sm-6 col-md-4 col-lg-3 wei-card"
          key={i}
        >
          <div className="wei-card-icon">NEW</div>
          <div className="wei-card-pic position-relative">
            <div className="wei-book-pic">
              <img
                className="w-100"
                src={`http://localhost:3000/images/books/` + v.book_pics}
                alt=""
              />
            </div>
            <div className="wei-heart-bg">
              <FaHeart className="wei-heart" />
            </div>
          </div>
          <div className="wei-book-text">
            <p className="wei-book-title">{v.title}</p>
            <p className="wei-book-author">{v.author}</p>
            <div className="wei-book-price">NT$ {v.final_price}</div>
          </div>
        </div>
      ))}
    </>
  )
  // 模擬componentDidMount
  useEffect(() => {
    getDataFromServer()
  }, [])

  // console.log(props)

  return (
    <>
      <div class="container-fluid">
        <div class="aw-progress-bar">
          <div class="row aw-row">
            <div class="col-sm-2 col-lg-3"></div>
            <div class="col-sm-8 col-lg-6 aw-progress">
              <div class=" row aw-row aw-progress-text  ">
                <div class="col-sm">
                  <h6>購物明細</h6>
                </div>
                <div class="col-sm">
                  <h6>付款方式</h6>
                </div>
                <div class="col-sm">
                  <h6>確認訂單</h6>
                </div>
              </div>
              <div class="aw-progress-bar">
                <div class="row aw-row aw-progress-line">
                  <div class="aw-progress-line-item col-sm"></div>
                  <div class="aw-progress-line-item-pink col-sm"></div>
                  <div class="aw-progress-line-item-pink col-sm"></div>
                </div>
                <div class="row aw-row justify-content-between aw-progress-circle">
                  <div class="aw-progress-circle-item"></div>
                  <div class="aw-progress-circle-item">
                    <img
                      src="http://localhost:3000/images/aw/ladybird.svg"
                      alt=""
                    ></img>
                  </div>

                  <div class="aw-progress-circle-item-pink"></div>
                  <div class="aw-progress-circle-item-pink"></div>
                </div>
              </div>
              <div class="col-sm-2 col-lg-3"></div>
            </div>
          </div>
          <div class="row">
            <div class="aw-cart-left">
              <div class="row">
                <div class="col-4"> </div>
                <div class="col-6">
                  <div class="row aw-changeProductBtnRow">
                    <div class="col-3"></div>
                    <div class="col-6">
                      <div class=" d-flex justify-content-center">
                        <button class="aw-changeProductBtn-active">書籍</button>
                      </div>
                    </div>
                    <div class="col-3"></div>
                  </div>
                </div>
                <div class="col-2"></div>
              </div>
            </div>
            <div class="aw-cart-right"></div>
          </div>
        </div>
        <div class="container-fluid">
          <div class="row">
            <div class="aw-cart-left aw-cartBackground-left contai">
              <div class="row">
                <div class="col-3"></div>
                <div class="aw-cartContent col-8">
                  <div class="aw-cart-page1-subtitle row  ">
                    <div class=" col-5 row aw-row  align-items-center aw-p-0">
                      <div class="col-5"></div>
                      <div class=" col-7 text-center align-items-center aw-p-9 ">
                        <h6 class="m-0 ">商品明細</h6>
                      </div>
                    </div>
                    <div class="col-7 row aw-row  align-items-center justify-content-center aw-p-0">
                      <div class="col-sm text-center aw-p-9 ">
                        <h6 class="m-0 ">優惠價</h6>
                      </div>
                      <div class="col-sm text-center aw-p-0  aw-select-title">
                        <h6 class="m-0 ">數量</h6>
                      </div>
                      <div class="col-sm text-center aw-p-9 ">
                        <h6 class="m-0 ">小計</h6>
                      </div>
                      <div class="col-sm text-center align-items-center aw-p-0 ">
                        <button class="btn-sm-dark aw-btn-sm-dark">
                          <span>清空</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="aw-productAreaPadding">
                    <div class="aw-productArea">
                      <div class="row aw-card d-flex align-items-center ">
                        <div class="col-5 row aw-row  align-items-center aw-p-0 ">
                          <div class="col-5 aw-card-pic aw-p-9 ">
                            <div class="aw-book-pic">
                              <img
                                class="w-100"
                                src="http://localhost:3000/images/aw/cartpic1.png"
                                alt=""
                              />
                            </div>
                          </div>
                          <div class="col-7 aw-book-text d-flex justify-content-center aw-p-9 ">
                            <p class="aw-book-title">
                              種日子的人
                              申請年輕，原始碼取得方案當地品種以便幾乎天天，比賽上面版權書庫幾個全部文化，上一頁考察給我像是上漲土地其它檢查歐洲楠雅幸福能不能訪問，呵呵就是手機鈴聲舉行電信職業資料細胞出租，中文平方米含有模式發行也能我都還在他們決定一大我對不需要，歌詞透露研究，確定書。
                            </p>
                          </div>
                        </div>
                        <div class="col-7 row aw-row  align-items-center justify-content-center aw-p-0">
                          <div class="col-sm d-flex justify-content-center aw-p-9">
                            <p class="aw-book-title">226元</p>
                          </div>
                          <div class="col-sm d-flex align-items-center justify-content-center aw-p-0">
                            <select
                              class="aw-select-sm form-control formInput  col-7 "
                              id="exampleFormControlSelect1"
                            >
                              <option value="">1</option>
                              <option value="">2</option>
                              <option value="">3</option>
                              <option value="">4</option>
                              <option value="">5</option>
                              <option value="">6</option>
                              <option value="">7</option>
                              <option value="">8</option>
                              <option value="">9</option>
                              <option value="">10</option>
                              <option value="">11</option>
                              <option value="">12</option>
                              <option value="">13</option>
                              <option value="">14</option>
                              <option value="">15</option>
                              <option value="">16</option>
                              <option value="">17</option>
                              <option value="">18</option>
                              <option value="">19</option>
                              <option value="">20</option>
                              <option value="">21</option>
                              <option value="">22</option>
                              <option value="">23</option>
                              <option value="">24</option>
                              <option value="">25</option>
                              <option value="">26</option>
                              <option value="">27</option>
                              <option value="">28</option>
                              <option value="">29</option>
                              <option value="">30</option>
                              <option value="">31</option>
                              <option value="">32</option>
                              <option value="">33</option>
                              <option value="">34</option>
                              <option value="">35</option>
                              <option value="">36</option>
                              <option value="">37</option>
                              <option value="">38</option>
                              <option value="">39</option>
                              <option value="">40</option>
                              <option value="">41</option>
                              <option value="">42</option>
                              <option value="">43</option>
                              <option value="">44</option>
                              <option value="">45</option>
                              <option value="">46</option>
                              <option value="">47</option>
                              <option value="">48</option>
                              <option value="">49</option>
                              <option value="">50</option>
                              <option value="">51</option>
                              <option value="">52</option>
                              <option value="">53</option>
                              <option value="">54</option>
                              <option value="">55</option>
                              <option value="">56</option>
                              <option value="">57</option>
                              <option value="">58</option>
                              <option value="">59</option>
                              <option value="">60</option>
                              <option value="">61</option>
                              <option value="">62</option>
                              <option value="">63</option>
                              <option value="">64</option>
                              <option value="">65</option>
                              <option value="">66</option>
                              <option value="">67</option>
                              <option value="">68</option>
                              <option value="">69</option>
                              <option value="">70</option>
                              <option value="">71</option>
                              <option value="">72</option>
                              <option value="">73</option>
                              <option value="">74</option>
                              <option value="">75</option>
                              <option value="">76</option>
                              <option value="">77</option>
                              <option value="">78</option>
                              <option value="">79</option>
                              <option value="">80</option>
                              <option value="">81</option>
                              <option value="">82</option>
                              <option value="">83</option>
                              <option value="">84</option>
                              <option value="">85</option>
                              <option value="">86</option>
                              <option value="">87</option>
                              <option value="">88</option>
                              <option value="">89</option>
                              <option value="">90</option>
                              <option value="">91</option>
                              <option value="">92</option>
                              <option value="">93</option>
                              <option value="">94</option>
                              <option value="">95</option>
                              <option value="">96</option>
                              <option value="">97</option>
                              <option value="">98</option>
                              <option value="">99</option>
                            </select>
                          </div>
                          <div class="col-sm d-flex align-items-center justify-content-center aw-p-9">
                            <p class="aw-book-title">226元</p>
                          </div>
                          <div class="col-sm aw-book-price  d-flex justify-content-center aw-p-0 aw-btn-sm-dark">
                            <i class="fas fa-times-circle aw-delete-cross"></i>
                          </div>
                        </div>
                      </div>

                      <div class="row aw-card d-flex align-items-center ">
                        <div class="col-5 row aw-row  align-items-center aw-p-0 ">
                          <div class="col-5 aw-card-pic aw-p-9 ">
                            <div class="aw-book-pic">
                              <img
                                class="w-100"
                                src="http://localhost:3000/images/aw/cartpic2.png"
                                alt=""
                              />
                            </div>
                          </div>
                          <div class="col-7 aw-book-text d-flex justify-content-center aw-p-9 ">
                            <p class="aw-book-title">山林製造</p>
                          </div>
                        </div>
                        <div class="col-7 row aw-row  align-items-center justify-content-center aw-p-0">
                          <div class="col-sm d-flex justify-content-center aw-p-9">
                            <p class="aw-book-title">226元</p>
                          </div>
                          <div class="col-sm d-flex align-items-center justify-content-center aw-p-0">
                            <select
                              class="aw-select-sm form-control formInput  col-7 "
                              id="exampleFormControlSelect1"
                            >
                              <option value="">1</option>
                              <option value="">2</option>
                              <option value="">3</option>
                              <option value="">4</option>
                              <option value="">5</option>
                              <option value="">6</option>
                              <option value="">7</option>
                              <option value="">8</option>
                              <option value="">9</option>
                              <option value="">10</option>
                              <option value="">11</option>
                              <option value="">12</option>
                              <option value="">13</option>
                              <option value="">14</option>
                              <option value="">15</option>
                              <option value="">16</option>
                              <option value="">17</option>
                              <option value="">18</option>
                              <option value="">19</option>
                              <option value="">20</option>
                              <option value="">21</option>
                              <option value="">22</option>
                              <option value="">23</option>
                              <option value="">24</option>
                              <option value="">25</option>
                              <option value="">26</option>
                              <option value="">27</option>
                              <option value="">28</option>
                              <option value="">29</option>
                              <option value="">30</option>
                              <option value="">31</option>
                              <option value="">32</option>
                              <option value="">33</option>
                              <option value="">34</option>
                              <option value="">35</option>
                              <option value="">36</option>
                              <option value="">37</option>
                              <option value="">38</option>
                              <option value="">39</option>
                              <option value="">40</option>
                              <option value="">41</option>
                              <option value="">42</option>
                              <option value="">43</option>
                              <option value="">44</option>
                              <option value="">45</option>
                              <option value="">46</option>
                              <option value="">47</option>
                              <option value="">48</option>
                              <option value="">49</option>
                              <option value="">50</option>
                              <option value="">51</option>
                              <option value="">52</option>
                              <option value="">53</option>
                              <option value="">54</option>
                              <option value="">55</option>
                              <option value="">56</option>
                              <option value="">57</option>
                              <option value="">58</option>
                              <option value="">59</option>
                              <option value="">60</option>
                              <option value="">61</option>
                              <option value="">62</option>
                              <option value="">63</option>
                              <option value="">64</option>
                              <option value="">65</option>
                              <option value="">66</option>
                              <option value="">67</option>
                              <option value="">68</option>
                              <option value="">69</option>
                              <option value="">70</option>
                              <option value="">71</option>
                              <option value="">72</option>
                              <option value="">73</option>
                              <option value="">74</option>
                              <option value="">75</option>
                              <option value="">76</option>
                              <option value="">77</option>
                              <option value="">78</option>
                              <option value="">79</option>
                              <option value="">80</option>
                              <option value="">81</option>
                              <option value="">82</option>
                              <option value="">83</option>
                              <option value="">84</option>
                              <option value="">85</option>
                              <option value="">86</option>
                              <option value="">87</option>
                              <option value="">88</option>
                              <option value="">89</option>
                              <option value="">90</option>
                              <option value="">91</option>
                              <option value="">92</option>
                              <option value="">93</option>
                              <option value="">94</option>
                              <option value="">95</option>
                              <option value="">96</option>
                              <option value="">97</option>
                              <option value="">98</option>
                              <option value="">99</option>
                            </select>
                          </div>
                          <div class="col-sm d-flex align-items-center justify-content-center aw-p-9">
                            <p class="aw-book-title">226元</p>
                          </div>
                          <div class="col-sm aw-book-price  d-flex justify-content-center aw-p-0 aw-btn-sm-dark">
                            <i class="fas fa-times-circle aw-delete-cross"></i>
                          </div>
                        </div>
                      </div>

                      <div class="row aw-card d-flex align-items-center ">
                        <div class="col-5 row aw-row  align-items-center aw-p-0 ">
                          <div class="col-5 aw-card-pic aw-p-9 ">
                            <div class="aw-book-pic">
                              <img
                                class="w-100"
                                src="http://localhost:3000/images/aw/cartpic3.png"
                                alt=""
                              />
                            </div>
                          </div>
                          <div class="col-7 aw-book-text d-flex justify-content-center aw-p-9 ">
                            <p class="aw-book-title">閃電崩盤</p>
                          </div>
                        </div>
                        <div class="col-7 row aw-row  align-items-center justify-content-center aw-p-0">
                          <div class="col-sm d-flex justify-content-center aw-p-9">
                            <p class="aw-book-title">226元</p>
                          </div>
                          <div class="col-sm d-flex align-items-center justify-content-center aw-p-0">
                            <select
                              class="aw-select-sm form-control formInput  col-7 "
                              id="exampleFormControlSelect1"
                            >
                              <option value="">1</option>
                              <option value="">2</option>
                              <option value="">3</option>
                              <option value="">4</option>
                              <option value="">5</option>
                              <option value="">6</option>
                              <option value="">7</option>
                              <option value="">8</option>
                              <option value="">9</option>
                              <option value="">10</option>
                              <option value="">11</option>
                              <option value="">12</option>
                              <option value="">13</option>
                              <option value="">14</option>
                              <option value="">15</option>
                              <option value="">16</option>
                              <option value="">17</option>
                              <option value="">18</option>
                              <option value="">19</option>
                              <option value="">20</option>
                              <option value="">21</option>
                              <option value="">22</option>
                              <option value="">23</option>
                              <option value="">24</option>
                              <option value="">25</option>
                              <option value="">26</option>
                              <option value="">27</option>
                              <option value="">28</option>
                              <option value="">29</option>
                              <option value="">30</option>
                              <option value="">31</option>
                              <option value="">32</option>
                              <option value="">33</option>
                              <option value="">34</option>
                              <option value="">35</option>
                              <option value="">36</option>
                              <option value="">37</option>
                              <option value="">38</option>
                              <option value="">39</option>
                              <option value="">40</option>
                              <option value="">41</option>
                              <option value="">42</option>
                              <option value="">43</option>
                              <option value="">44</option>
                              <option value="">45</option>
                              <option value="">46</option>
                              <option value="">47</option>
                              <option value="">48</option>
                              <option value="">49</option>
                              <option value="">50</option>
                              <option value="">51</option>
                              <option value="">52</option>
                              <option value="">53</option>
                              <option value="">54</option>
                              <option value="">55</option>
                              <option value="">56</option>
                              <option value="">57</option>
                              <option value="">58</option>
                              <option value="">59</option>
                              <option value="">60</option>
                              <option value="">61</option>
                              <option value="">62</option>
                              <option value="">63</option>
                              <option value="">64</option>
                              <option value="">65</option>
                              <option value="">66</option>
                              <option value="">67</option>
                              <option value="">68</option>
                              <option value="">69</option>
                              <option value="">70</option>
                              <option value="">71</option>
                              <option value="">72</option>
                              <option value="">73</option>
                              <option value="">74</option>
                              <option value="">75</option>
                              <option value="">76</option>
                              <option value="">77</option>
                              <option value="">78</option>
                              <option value="">79</option>
                              <option value="">80</option>
                              <option value="">81</option>
                              <option value="">82</option>
                              <option value="">83</option>
                              <option value="">84</option>
                              <option value="">85</option>
                              <option value="">86</option>
                              <option value="">87</option>
                              <option value="">88</option>
                              <option value="">89</option>
                              <option value="">90</option>
                              <option value="">91</option>
                              <option value="">92</option>
                              <option value="">93</option>
                              <option value="">94</option>
                              <option value="">95</option>
                              <option value="">96</option>
                              <option value="">97</option>
                              <option value="">98</option>
                              <option value="">99</option>
                            </select>
                          </div>
                          <div class="col-sm d-flex align-items-center justify-content-center aw-p-9">
                            <p class="aw-book-title">226元</p>
                          </div>
                          <div class="col-sm aw-book-price  d-flex justify-content-center aw-p-0 aw-btn-sm-dark">
                            <i class="fas fa-times-circle aw-delete-cross"></i>
                          </div>
                        </div>
                      </div>

                      <div class="row aw-card d-flex align-items-center ">
                        <div class="col-5 row aw-row  align-items-center aw-p-0 ">
                          <div class="col-5 aw-card-pic aw-p-9 ">
                            <div class="aw-book-pic">
                              <img
                                class="w-100"
                                src="http://localhost:3000/images/aw/cartpic1.png"
                                alt=""
                              />
                            </div>
                          </div>
                          <div class="col-7 aw-book-text d-flex justify-content-center aw-p-9 ">
                            <p class="aw-book-title">種日子的人</p>
                          </div>
                        </div>
                        <div class="col-7 row aw-row  align-items-center justify-content-center aw-p-0">
                          <div class="col-sm d-flex justify-content-center aw-p-9">
                            <p class="aw-book-title">226元</p>
                          </div>
                          <div class="col-sm d-flex align-items-center justify-content-center aw-p-0">
                            <select
                              class="aw-select-sm form-control formInput  col-7 "
                              id="exampleFormControlSelect1"
                            >
                              <option value="">1</option>
                              <option value="">2</option>
                              <option value="">3</option>
                              <option value="">4</option>
                              <option value="">5</option>
                              <option value="">6</option>
                              <option value="">7</option>
                              <option value="">8</option>
                              <option value="">9</option>
                              <option value="">10</option>
                              <option value="">11</option>
                              <option value="">12</option>
                              <option value="">13</option>
                              <option value="">14</option>
                              <option value="">15</option>
                              <option value="">16</option>
                              <option value="">17</option>
                              <option value="">18</option>
                              <option value="">19</option>
                              <option value="">20</option>
                              <option value="">21</option>
                              <option value="">22</option>
                              <option value="">23</option>
                              <option value="">24</option>
                              <option value="">25</option>
                              <option value="">26</option>
                              <option value="">27</option>
                              <option value="">28</option>
                              <option value="">29</option>
                              <option value="">30</option>
                              <option value="">31</option>
                              <option value="">32</option>
                              <option value="">33</option>
                              <option value="">34</option>
                              <option value="">35</option>
                              <option value="">36</option>
                              <option value="">37</option>
                              <option value="">38</option>
                              <option value="">39</option>
                              <option value="">40</option>
                              <option value="">41</option>
                              <option value="">42</option>
                              <option value="">43</option>
                              <option value="">44</option>
                              <option value="">45</option>
                              <option value="">46</option>
                              <option value="">47</option>
                              <option value="">48</option>
                              <option value="">49</option>
                              <option value="">50</option>
                              <option value="">51</option>
                              <option value="">52</option>
                              <option value="">53</option>
                              <option value="">54</option>
                              <option value="">55</option>
                              <option value="">56</option>
                              <option value="">57</option>
                              <option value="">58</option>
                              <option value="">59</option>
                              <option value="">60</option>
                              <option value="">61</option>
                              <option value="">62</option>
                              <option value="">63</option>
                              <option value="">64</option>
                              <option value="">65</option>
                              <option value="">66</option>
                              <option value="">67</option>
                              <option value="">68</option>
                              <option value="">69</option>
                              <option value="">70</option>
                              <option value="">71</option>
                              <option value="">72</option>
                              <option value="">73</option>
                              <option value="">74</option>
                              <option value="">75</option>
                              <option value="">76</option>
                              <option value="">77</option>
                              <option value="">78</option>
                              <option value="">79</option>
                              <option value="">80</option>
                              <option value="">81</option>
                              <option value="">82</option>
                              <option value="">83</option>
                              <option value="">84</option>
                              <option value="">85</option>
                              <option value="">86</option>
                              <option value="">87</option>
                              <option value="">88</option>
                              <option value="">89</option>
                              <option value="">90</option>
                              <option value="">91</option>
                              <option value="">92</option>
                              <option value="">93</option>
                              <option value="">94</option>
                              <option value="">95</option>
                              <option value="">96</option>
                              <option value="">97</option>
                              <option value="">98</option>
                              <option value="">99</option>
                            </select>
                          </div>
                          <div class="col-sm d-flex align-items-center justify-content-center aw-p-9">
                            <p class="aw-book-title">1106元</p>
                          </div>
                          <div class="col-sm aw-book-price  d-flex justify-content-center aw-p-0 aw-btn-sm-dark">
                            <i class="fas fa-times-circle aw-delete-cross"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="aw-countArea">
                    <div class="d-flex justify-content-end">
                      <div class="row aw-row aw-count ">
                        <h5> 共 </h5>
                        <div class="aw-count-num d-flex justify-content-end">
                          <h5> 16</h5>
                        </div>
                        <h5> 本 </h5>
                      </div>
                    </div>

                    <div class="d-flex justify-content-end">
                      <div class="row aw-row aw-count ">
                        <h5> 小計 </h5>
                        <div class="aw-count-num d-flex justify-content-end">
                          <h5> 1,661</h5>
                        </div>
                        <h5> 元 </h5>
                      </div>
                    </div>
                  </div>

                  <div class="row justify-content-between aw-stepBtn">
                    <div class="aw-preStep  d-flex align-items-center">
                      <a class="aw-a" href="./Cart">
                        <div class="row aw-row">
                          <i class="fas fa-angle-left mr-2"></i>
                          <h6> 回上一頁</h6>
                        </div>
                      </a>
                    </div>
                    <div class="aw-nextStep  d-flex align-items-center">
                      <a class="aw-a" href="./CartInput">
                        {' '}
                        <button class="btn-lg aw-btn-lg">下一步</button>
                      </a>
                    </div>
                  </div>
                  <div class="col-2"> </div>
                </div>
                <div class="col-1"> </div>
              </div>
            </div>
            <div class="aw-cart-right cartBackground-right-aw"> </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(CartItems)
