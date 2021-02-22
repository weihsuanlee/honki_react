import '../styles/cartStyle.scss'
import { FaThLarge, FaListUl, FaHeart } from 'react-icons/fa'
import { withRouter, NavLink } from 'react-router-dom'
// import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
// import ProductBanner from '../components/ProductBanner'
// import ListSpinner from '../components/ListSpinner'
// import MyPopOver from '../components/MyPopOver'
import { useEffect, useState } from 'react'
// import Select from 'react-select'
// import options from './options'
function CartItems(props) {
  const [mycart, setMycart] = useState([])
  const [dataLoading, setDataLoading] = useState(false)
  const [mycartDisplay, setMycartDisplay] = useState([])
  //select into localStorage
  const SELECT_VALUE_KEY = 'MySelectValue'

  function MySelect() {
    const [selected, setSelected] = useState([])
    const handleChange = (s) => {
      localStorage.setItem(SELECT_VALUE_KEY, JSON.stringify(s))
      setSelected(s)
    }

    useEffect(() => {
      const lastSelected = JSON.parse(
        localStorage.getItem(SELECT_VALUE_KEY) ?? '[]'
      )
      setSelected(lastSelected)
    }, [])
  }
  //

  function getCartFromLocalStorage() {
    // 開啟載入的指示圖示
    setDataLoading(true)

    const newCart = localStorage.getItem('cart') || '[]'

    console.log(JSON.parse(newCart))

    setMycart(JSON.parse(newCart))
  }

  useEffect(() => {
    getCartFromLocalStorage()
  }, [])

  // 每次mycart資料有改變，1秒後關閉載入指示
  // componentDidUpdate
  useEffect(() => {
    setTimeout(() => setDataLoading(false), 1000)

    // mycartDisplay運算
    let newMycartDisplay = []

    //尋找mycartDisplay
    for (let i = 0; i < mycart.length; i++) {
      //尋找mycartDisplay中有沒有此mycart[i].id
      //有找到會返回陣列成員的索引值
      //沒找到會返回-1
      const index = newMycartDisplay.findIndex(
        (value) => value.id === mycart[i].id
      )
      //有的話就數量+1
      if (index !== -1) {
        //每次只有加1個數量
        //newMycartDisplay[index].amount++
        //假設是加數量的
        newMycartDisplay[index].amount += mycart[i].amount
      } else {
        //沒有的話就把項目加入，數量為1
        const newItem = { ...mycart[i] }
        newMycartDisplay = [...newMycartDisplay, newItem]
      }
    }

    console.log(newMycartDisplay)
    setMycartDisplay(newMycartDisplay)
  }, [mycart])

  // 更新購物車中的商品數量
  const updateCartToLocalStorage = (item, isAdded = true) => {
    console.log(item, isAdded)
    const currentCart = JSON.parse(localStorage.getItem('cart')) || []

    // find if the product in the localstorage with its id
    const index = currentCart.findIndex((v) => v.id === item.id)

    console.log('index', index)
    // found: index! == -1
    if (index > -1) {
      isAdded ? currentCart[index].amount++ : currentCart[index].amount--
    }

    localStorage.setItem('cart', JSON.stringify(currentCart))

    // 設定資料
    setMycart(currentCart)
  }

  // 計算總價用的函式
  const sum = (items) => {
    let total = 0
    for (let i = 0; i < items.length; i++) {
      total += items[i].amount * items[i].price
    }
    return total
  }

  const loading = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )

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
                              // value={selected}
                              // onChange={handleChange}
                              // options={options}
                              isMulti
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
