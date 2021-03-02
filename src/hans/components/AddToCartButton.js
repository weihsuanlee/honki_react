function AddToCartButton() {
  //aw-購物車按鈕
  const [mycart, setMycart] = useState([])
  const [show, setShow] = useState(false)
  const [productName, setProductName] = useState('')
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const { updateCartNum } = props
  const updateCartToLocalStorage = (item) => {
    const currentCart = JSON.parse(localStorage.getItem('cart5566')) || []
    // find if the product in the localstorage with its id
    const index = currentCart.findIndex((v) => v.book_sid === item.book_sid)
    // found: index! == -1
    if (index > -1) {
      //currentCart[index].amount++
      setProductName('這個商品已經加過了')
      handleShow()
      console.log(index)
      console.log(item)
      currentCart.push(item)
      console.log(currentCart)
      return
    } else {
      currentCart.push(item)
      localStorage.setItem('cart5566', JSON.stringify(currentCart))
      // 更新購物車數量
      updateCartNum()
    }
    // 設定資料
    setMycart(currentCart)
    setProductName('產品：' + item.name + '已成功加入購物車')
    handleShow()
  }

  return (
    <>
      <button
        className="btn-lg wei-add-to-cart"
        // aw-購物車按鈕
        onClick={() =>
          updateCartToLocalStorage({
            ISBN: productDetail.ISBN,
            price: productDetail.final_price,
            amount: 1,
            book_id: productDetail.book_pics,
            book_sid: productDetail.sid,
            bookname: productDetail.title,
          })
        }
      >
        <FaShoppingCart className="mr-5" />
        放入購物車
      </button>
    </>
  )
}

export default AddToCartButton
