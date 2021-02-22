import { SVG_FACES } from '../constants'

const COLUMN_NUM = 4

function ItemView(props) {
  let index = `${props.prefix}${props.id}`
  return (
    <div>
      <input
        id={index}
        type="radio"
        className="yu-edit-input"
        name={props.prefix}
        value={props.id}
        onChange={props.onChange}
      />
      <label htmlFor={index} className="yu-edit-label">
        <img src={props.url} alt="" />
      </label>
    </div>
  )
}

function EditTab3(props) {
  return (
    <>
      <div className="panel-title">修改節氣頭貼</div>
      {/* <!-- 收合選單-3修改節氣頭貼 --> */}
      <div className="panel" id="three-panel">
        {/* <!-- 頭貼選單-選擇表情 --> */}
        <div className="form-group yu-edit-form">
          <span>選擇表情</span>
          {[0, 1].map((row) => {
            return (
              <div key={row} className="formItems row d-flex">
                {SVG_FACES.filter((value, index) => {
                  return Math.floor(index / COLUMN_NUM) === row
                }).map((value, index) => {
                  let order = COLUMN_NUM * row + index
                  return (
                    <ItemView
                      key={order}
                      id={order}
                      url={value}
                      prefix="face"
                      onChange={(event) => {
                        const value = event.target.value
                        props.onChangeFace(value)
                      }}
                    />
                  )
                })}
              </div>
            )
          })}
        </div>

        {/* <!-- 頭貼選單-選擇髮型 --> */}
        <div className="form-group yu-edit-form">
          <span>選擇髮型</span>
          {/* hair第一列 */}
          <div className="formItems row d-flex">
            {/* hair-1 */}
            <div>
              <input
                id="hair-1"
                type="radio"
                className="yu-edit-input"
                name="hair"
                value="hair-1"
              />
              <label htmlFor="hair-1" className="yu-edit-label">
                <img
                  // className="w-100"
                  src="/images/yu/peepsphotos/hair/1Bangs 2.svg"
                  alt=""
                />
              </label>
            </div>
            {/* hair-2 */}
            <div>
              <input
                id="hair-2"
                type="radio"
                className="yu-edit-input"
                name="hair"
                value="hair-2"
              />
              <label htmlFor="hair-2" className="yu-edit-label">
                <img
                  // className="w-100"
                  src="/images/yu/peepsphotos/hair/2Bun 2.svg"
                  alt=""
                />
              </label>
            </div>
            {/* hair-3 */}
            <div>
              <input
                id="hair-3"
                type="radio"
                className="yu-edit-input"
                name="hair"
                value="hair-3"
              />
              <label htmlFor="hair-3" className="yu-edit-label">
                <img
                  // className="w-100"
                  src="/images/yu/peepsphotos/hair/3Long Bangs.svg"
                  alt=""
                />
              </label>
            </div>
            {/* hair-4 */}
            <div>
              <input
                id="hair-4"
                type="radio"
                className="yu-edit-input"
                name="hair"
                value="hair-4"
              />
              <label htmlFor="hair-4" className="yu-edit-label">
                <img
                  // className="w-100"
                  src="/images/yu/peepsphotos/hair/4Medium Bangs 3.svg"
                  alt=""
                />
              </label>
            </div>
          </div>
          {/* hair第二列 */}
          <div className="formItems row d-flex">
            {/* hair-5 */}
            <div>
              <input
                id="hair-5"
                type="radio"
                className="yu-edit-input"
                name="hair"
                value="hair-5"
              />
              <label htmlFor="hair-5" className="yu-edit-label">
                <img
                  // className="w-100"
                  src="/images/yu/peepsphotos/hair/5hat-hip.svg"
                  alt=""
                />
              </label>
            </div>
            {/* hair-6 */}
            <div>
              <input
                id="hair-6"
                type="radio"
                className="yu-edit-input"
                name="hair"
                value="hair-6"
              />
              <label htmlFor="hair-6" className="yu-edit-label">
                <img
                  // className="w-100"
                  src="/images/yu/peepsphotos/hair/6Pomp.svg"
                  alt=""
                />
              </label>
            </div>
            {/* hair-7 */}
            <div>
              <input
                id="hair-7"
                type="radio"
                className="yu-edit-input"
                name="hair"
                value="hair-7"
              />
              <label htmlFor="hair-7" className="yu-edit-label">
                <img
                  // className="w-100"
                  src="/images/yu/peepsphotos/hair/7Shaved 2.svg"
                  alt=""
                />
              </label>
            </div>
            {/* hair-8 */}
            <div>
              <input
                id="hair-8"
                type="radio"
                className="yu-edit-input"
                name="hair"
                value="hair-8"
              />
              <label htmlFor="hair-8" className="yu-edit-label">
                <img
                  // className="w-100"
                  src="/images/yu/peepsphotos/hair/8Twists 2.svg"
                  alt=""
                />
              </label>
            </div>
          </div>
        </div>

        {/* <!-- 頭貼選單-選擇服飾 --> */}
        <div className="form-group yu-edit-form">
          <span>選擇服飾</span>
          {/* cloth第一列 */}
          <div className="formItems row d-flex">
            {/* cloth-1 */}
            <div>
              <input
                id="cloth-1"
                type="radio"
                className="yu-edit-input"
                name="cloth"
                value="cloth-1"
              />
              <label htmlFor="cloth-1" className="yu-edit-label">
                <img
                  className="w-100"
                  src="/images/yu/peepsphotos/cloth/Button Shirt 1.svg"
                  alt=""
                />
              </label>
            </div>
            {/* cloth2 */}
            <div>
              <input
                id="cloth-2"
                type="radio"
                className="yu-edit-input"
                name="cloth"
                value="cloth-2"
              />
              <label htmlFor="cloth-2" className="yu-edit-label">
                <img
                  className="w-100"
                  src="/images/yu/peepsphotos/cloth/Device.svg"
                  alt=""
                />
              </label>
            </div>
            {/* cloth-3 */}
            <div>
              <input
                id="cloth-3"
                type="radio"
                className="yu-edit-input"
                name="cloth"
                value="cloth-3"
              />
              <label htmlFor="cloth-3" className="yu-edit-label">
                <img
                  className="w-100"
                  src="/images/yu/peepsphotos/cloth/Dress.svg"
                  alt=""
                />
              </label>
            </div>
            {/* cloth-4 */}
            <div>
              <input
                id="cloth-4"
                type="radio"
                className="yu-edit-input"
                name="cloth"
                value="cloth-4"
              />
              <label htmlFor="cloth-4" className="yu-edit-label">
                <img
                  className="w-100"
                  src="/images/yu/peepsphotos/cloth/Fur Jacket.svg"
                  alt=""
                />
              </label>
            </div>
          </div>
          {/* cloth第二列 */}
          <div className="formItems row d-flex">
            {/* cloth-5 */}
            <div>
              <input
                id="cloth-5"
                type="radio"
                className="yu-edit-input"
                name="cloth"
                value="cloth-5"
              />
              <label htmlFor="cloth-5" className="yu-edit-label">
                <img
                  className="w-100"
                  src="/images/yu/peepsphotos/cloth/Hoodie.svg"
                  alt=""
                />
              </label>
            </div>
            {/* cloth-6 */}
            <div>
              <input
                id="cloth-6"
                type="radio"
                className="yu-edit-input"
                name="cloth"
                value="clothr-6"
              />
              <label htmlFor="cloth-6" className="yu-edit-label">
                <img
                  className="w-100"
                  src="/images/yu/peepsphotos/cloth/Polo and Sweater.svg"
                  alt=""
                />
              </label>
            </div>
            {/* cloth-7 */}
            <div>
              <input
                id="cloth-7"
                type="radio"
                className="yu-edit-input"
                name="cloth"
                value="cloth-7"
              />
              <label htmlFor="cloth-7" className="yu-edit-label">
                <img
                  className="w-100"
                  src="/images/yu/peepsphotos/cloth/Striped Tee.svg"
                  alt=""
                />
              </label>
            </div>
            {/* cloth-8 */}
            <div>
              <input
                id="cloth-8"
                type="radio"
                className="yu-edit-input"
                name="cloth"
                value="cloth-8"
              />
              <label htmlFor="cloth-8" className="yu-edit-label">
                <img
                  className="w-100"
                  src="/images/yu/peepsphotos/cloth/Tee 1.svg"
                  alt=""
                />
              </label>
            </div>
          </div>
        </div>

        {/* <!-- 頭貼選單-選擇配件 --> */}
        <div className="form-group yu-edit-form">
          <span>選擇配件</span>
          {/* acc第一列 */}
          <div className="formItems row d-flex">
            {/* acc-1 */}
            <div>
              <input
                id="acc-1"
                type="radio"
                className="yu-edit-input"
                name="acc"
                value="acc-1"
              />
              <label htmlFor="acc-1" className="yu-edit-label">
                <img
                  // className="w-100"
                  src="/images/yu/peepsphotos/acc/_ None.svg"
                  alt=""
                />
              </label>
            </div>
            {/* acc-2 */}
            <div>
              <input
                id="acc-2"
                type="radio"
                className="yu-edit-input"
                name="acc"
                value="acc-2"
              />
              <label htmlFor="acc-2" className="yu-edit-label">
                <img
                  // className="w-100"
                  src="/images/yu/peepsphotos/acc/Glasses 2.svg"
                  alt=""
                />
              </label>
            </div>
            {/* acc-3 */}
            <div>
              <input
                id="acc-3"
                type="radio"
                className="yu-edit-input"
                name="acc"
                value="acc-3"
              />
              <label htmlFor="acc-3" className="yu-edit-label">
                <img
                  // className="w-100"
                  src="/images/yu/peepsphotos/acc/Glasses 3.svg"
                  alt=""
                />
              </label>
            </div>
            {/* acc-4 */}
            <div>
              <input
                id="acc-4"
                type="radio"
                className="yu-edit-input"
                name="acc"
                value="acc-4"
              />
              <label htmlFor="acc-4" className="yu-edit-label">
                <img
                  // className="w-100"
                  src="/images/yu/peepsphotos/acc/Glasses 4.svg"
                  alt=""
                />
              </label>
            </div>
          </div>
          {/* acc第二列 */}
          <div className="formItems row d-flex">
            {/* acc-5 */}
            <div>
              <input
                id="acc-5"
                type="radio"
                className="yu-edit-input"
                name="acc"
                value="acc-5"
              />
              <label htmlFor="acc-5" className="yu-edit-label">
                <img
                  // className="w-100"
                  src="/images/yu/peepsphotos/acc/Glasses 5.svg"
                  alt=""
                />
              </label>
            </div>
            {/* acc-6 */}
            <div>
              <input
                id="acc-6"
                type="radio"
                className="yu-edit-input"
                name="acc"
                value="acc-6"
              />
              <label htmlFor="acc-6" className="yu-edit-label">
                <img
                  // className="w-100"
                  src="/images/yu/peepsphotos/acc/Glasses.svg"
                  alt=""
                />
              </label>
            </div>
            {/* acc-7 */}
            <div>
              <input
                id="acc-7"
                type="radio"
                className="yu-edit-input"
                name="acc"
                value="acc-7"
              />
              <label htmlFor="acc-7" className="yu-edit-label">
                <img
                  // className="w-100"
                  src="/images/yu/peepsphotos/acc/Sunglasses 2.svg"
                  alt=""
                />
              </label>
            </div>
            {/* acc-8 */}
            <div>
              <input
                id="acc-8"
                type="radio"
                className="yu-edit-input"
                name="acc"
                value="acc-8"
              />
              <label htmlFor="acc-8" className="yu-edit-label">
                <img
                  // className="w-100"
                  src="/images/yu/peepsphotos/acc/Sunglasses.svg"
                  alt=""
                />
              </label>
            </div>
          </div>
        </div>

        {/* <!-- 頭貼選單-選擇背景 --> */}
        <div className="form-group yu-edit-form">
          <span>選擇背景</span>
          {/* bg第一列 */}
          <div className="formItems row d-flex">
            {/* bg-1 */}
            <div>
              <input
                id="bg-1"
                type="radio"
                className="yu-edit-input"
                name="bg"
                value="bg-1"
              />
              <label htmlFor="bg-1" className="yu-edit-label-bg">
                <img
                  className="w-100"
                  src="/images/yu/peepsphotos/24terms/term1.jpg"
                  alt=""
                />
              </label>
            </div>
            {/* bg-2 */}
            <div>
              <input
                id="bg-2"
                type="radio"
                className="yu-edit-input"
                name="bg"
                value="bg-2"
              />
              <label htmlFor="bg-2" className="yu-edit-label-bg">
                <img
                  className="w-100"
                  src="/images/yu/peepsphotos/24terms/term2.jpg"
                  alt=""
                />
              </label>
            </div>
            {/* bg-3 */}
            <div>
              <input
                id="bg-3"
                type="radio"
                className="yu-edit-input"
                name="bg"
                value="bg-3"
              />
              <label htmlFor="bg-3" className="yu-edit-label-bg">
                <img
                  className="w-100"
                  src="/images/yu/peepsphotos/24terms/term3.jpg"
                  alt=""
                />
              </label>
            </div>
            {/* bg-4 */}
            <div>
              <input
                id="bg-4"
                type="radio"
                className="yu-edit-input"
                name="bg"
                value="bg-4"
              />
              <label htmlFor="bg-4" className="yu-edit-label-bg">
                <img
                  className="w-100"
                  src="/images/yu/peepsphotos/24terms/term4.jpg"
                  alt=""
                />
              </label>
            </div>
          </div>
          {/* bg第二列 */}
          <div className="formItems row d-flex">
            {/* bg-5 */}
            <div>
              <input
                id="bg-5"
                type="radio"
                className="yu-edit-input"
                name="bg"
                value="bg-5"
              />
              <label htmlFor="bg-5" className="yu-edit-label-bg">
                <img
                  className="w-100"
                  src="/images/yu/peepsphotos/24terms/term5.jpg"
                  alt=""
                />
              </label>
            </div>
            {/* bg-6 */}
            <div>
              <input
                id="bg-6"
                type="radio"
                className="yu-edit-input"
                name="bg"
                value="bg-6"
              />
              <label htmlFor="bg-6" className="yu-edit-label-bg">
                <img
                  className="w-100"
                  src="/images/yu/peepsphotos/24terms/term6.jpg"
                  alt=""
                />
              </label>
            </div>
            {/* bg-7 */}
            <div>
              <input
                id="bg-7"
                type="radio"
                className="yu-edit-input"
                name="bg"
                value="bg-7"
              />
              <label htmlFor="bg-7" className="yu-edit-label-bg">
                <img
                  className="w-100"
                  src="/images/yu/peepsphotos/24terms/term7.jpg"
                  alt=""
                />
              </label>
            </div>
            {/* bg-8 */}
            <div>
              <input
                id="bg-8"
                type="radio"
                className="yu-edit-input"
                name="bg"
                value="bg-8"
              />
              <label htmlFor="bg-8" className="yu-edit-label-bg">
                <img
                  className="w-100"
                  src="/images/yu/peepsphotos/24terms/term8.jpg"
                  alt=""
                />
              </label>
            </div>
          </div>
          {/* bg第三列 */}
          <div className="formItems row d-flex">
            {/* bg-9 */}
            <div>
              <input
                id="bg-9"
                type="radio"
                className="yu-edit-input"
                name="bg"
                value="bg-9"
              />
              <label htmlFor="bg-9" className="yu-edit-label-bg">
                <img
                  className="w-100"
                  src="/images/yu/peepsphotos/24terms/term9.jpg"
                  alt=""
                />
              </label>
            </div>
            {/* bg-10 */}
            <div>
              <input
                id="bg-10"
                type="radio"
                className="yu-edit-input"
                name="bg"
                value="bg-10"
              />
              <label htmlFor="bg-10" className="yu-edit-label-bg">
                <img
                  className="w-100"
                  src="/images/yu/peepsphotos/24terms/term10.jpg"
                  alt=""
                />
              </label>
            </div>
            {/* bg-11 */}
            <div>
              <input
                id="bg-11"
                type="radio"
                className="yu-edit-input"
                name="bg"
                value="bg-11"
              />
              <label htmlFor="bg-11" className="yu-edit-label-bg">
                <img
                  className="w-100"
                  src="/images/yu/peepsphotos/24terms/term11.jpg"
                  alt=""
                />
              </label>
            </div>
            {/* bg-12 */}
            <div>
              <input
                id="bg-12"
                type="radio"
                className="yu-edit-input"
                name="bg"
                value="bg-12"
              />
              <label htmlFor="bg-12" className="yu-edit-label-bg">
                <img
                  className="w-100"
                  src="/images/yu/peepsphotos/24terms/term12.jpg"
                  alt=""
                />
              </label>
            </div>
          </div>

          {/* bg第四列 */}
          <div className="formItems row d-flex">
            {/* bg-13 */}
            <div>
              <input
                id="bg-13"
                type="radio"
                className="yu-edit-input"
                name="bg"
                value="bg-13"
              />
              <label htmlFor="bg-13" className="yu-edit-label-bg">
                <img
                  className="w-100"
                  src="/images/yu/peepsphotos/24terms/term13.jpg"
                  alt=""
                />
              </label>
            </div>
            {/* bg-14 */}
            <div>
              <input
                id="bg-14"
                type="radio"
                className="yu-edit-input"
                name="bg"
                value="bg-14"
              />
              <label htmlFor="bg-14" className="yu-edit-label-bg">
                <img
                  className="w-100"
                  src="/images/yu/peepsphotos/24terms/term14.jpg"
                  alt=""
                />
              </label>
            </div>
            {/* bg-15 */}
            <div>
              <input
                id="bg-15"
                type="radio"
                className="yu-edit-input"
                name="bg"
                value="bg-15"
              />
              <label htmlFor="bg-15" className="yu-edit-label-bg">
                <img
                  className="w-100"
                  src="/images/yu/peepsphotos/24terms/term15.jpg"
                  alt=""
                />
              </label>
            </div>
            {/* bg-16 */}
            <div>
              <input
                id="bg-16"
                type="radio"
                className="yu-edit-input"
                name="bg"
                value="bg-16"
              />
              <label htmlFor="bg-16" className="yu-edit-label-bg">
                <img
                  className="w-100"
                  src="/images/yu/peepsphotos/24terms/term16.jpg"
                  alt=""
                />
              </label>
            </div>
          </div>
          {/* bg第五列 */}
          <div className="formItems row d-flex">
            {/* bg-17 */}
            <div>
              <input
                id="bg-17"
                type="radio"
                className="yu-edit-input"
                name="bg"
                value="bg-17"
              />
              <label htmlFor="bg-17" className="yu-edit-label-bg">
                <img
                  className="w-100"
                  src="/images/yu/peepsphotos/24terms/term17.jpg"
                  alt=""
                />
              </label>
            </div>
            {/* bg-18 */}
            <div>
              <input
                id="bg-18"
                type="radio"
                className="yu-edit-input"
                name="bg"
                value="bg-18"
              />
              <label htmlFor="bg-18" className="yu-edit-label-bg">
                <img
                  className="w-100"
                  src="/images/yu/peepsphotos/24terms/term18.jpg"
                  alt=""
                />
              </label>
            </div>
            {/* bg-19 */}
            <div>
              <input
                id="bg-19"
                type="radio"
                className="yu-edit-input"
                name="bg"
                value="bg-19"
              />
              <label htmlFor="bg-19" className="yu-edit-label-bg">
                <img
                  className="w-100"
                  src="/images/yu/peepsphotos/24terms/term19.jpg"
                  alt=""
                />
              </label>
            </div>
            {/* bg-20 */}
            <div>
              <input
                id="bg-20"
                type="radio"
                className="yu-edit-input"
                name="bg"
                value="bg-20"
              />
              <label htmlFor="bg-20" className="yu-edit-label-bg">
                <img
                  className="w-100"
                  src="/images/yu/peepsphotos/24terms/term20.jpg"
                  alt=""
                />
              </label>
            </div>
          </div>
          {/* bg第六列 */}
          <div className="formItems row d-flex">
            {/* bg-21 */}
            <div>
              <input
                id="bg-21"
                type="radio"
                className="yu-edit-input"
                name="bg"
                value="bg-21"
              />
              <label htmlFor="bg-21" className="yu-edit-label-bg">
                <img
                  className="w-100"
                  src="/images/yu/peepsphotos/24terms/term21.jpg"
                  alt=""
                />
              </label>
            </div>
            {/* bg-22 */}
            <div>
              <input
                id="bg-22"
                type="radio"
                className="yu-edit-input"
                name="bg"
                value="bg-22"
              />
              <label htmlFor="bg-22" className="yu-edit-label-bg">
                <img
                  className="w-100"
                  src="/images/yu/peepsphotos/24terms/term22.jpg"
                  alt=""
                />
              </label>
            </div>
            {/* bg-23 */}
            <div>
              <input
                id="bg-23"
                type="radio"
                className="yu-edit-input"
                name="bg"
                value="bg-23"
              />
              <label htmlFor="bg-23" className="yu-edit-label-bg">
                <img
                  className="w-100"
                  src="/images/yu/peepsphotos/24terms/term23.jpg"
                  alt=""
                />
              </label>
            </div>
            {/* bg-24 */}
            <div>
              <input
                id="bg-24"
                type="radio"
                className="yu-edit-input"
                name="bg"
                value="bg-24"
              />
              <label htmlFor="bg-24" className="yu-edit-label-bg">
                <img
                  className="w-100"
                  src="/images/yu/peepsphotos/24terms/term24.jpg"
                  alt=""
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default EditTab3
