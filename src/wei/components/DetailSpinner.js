import MultiLevelBreadCrumb from '../../components/MultiLevelBreadCrumb'
import { FaShoppingCart } from 'react-icons/fa'
import { Tabs, Tab, Accordion, Card, Button } from 'react-bootstrap'

function DetailSpinner() {
  return (
    <>
      <div className="container-fluid wei-bg-white wei-detail-spinner">
        <div className="row position-relative">
          <div className="col-12">
            <MultiLevelBreadCrumb class="breadcrumb wei-breadcrumb" />
          </div>
          <div className="col-12 col-md-5 wei-detail-left text-center mt-5">
            <div className="wei-detail-pic mx-auto mb-5"></div>
          </div>
          <div className="col-12 col-md-7 wei-detail-right pt-5">
            <div className="wei-detail-title"></div>
            <div className="wei-detail-subtitle"></div>
            <hr className="wei-line" />
            <div className="wei-reviews"></div>
            <div className="wei-detail-text wei-detail-text-author mt-3"></div>
            <div className="wei-detail-text"></div>
            <div className="wei-detail-text"></div>
            <div className="wei-detail-text"></div>
            <div className="wei-detail-text"></div>
            <div className="wei-detail-pricearea d-flex my-4">
              <div className="wei-detail-final-price"></div>
              <div className="wei-detail-badge mx-4"></div>
              <div className="wei-detail-final-price"></div>
            </div>
            <button className="btn-lg wei-add-to-cart">
              <FaShoppingCart className="mr-5" />
              放入購物車
            </button>
          </div>
        </div>
        <div className="row">
          <div className="holder d-none d-lg-block mx-auto wei-holder">
            <Tabs defaultActiveKey="bookOverview" id="uncontrolled-tab-example">
              <Tab eventKey="bookOverview" title="內容簡介">
                <div class="panel-title">內容簡介</div>
              </Tab>
              <Tab eventKey="authorIntro" title="作者介紹">
                <div class="panel-title">作者介紹</div>
              </Tab>
              <Tab eventKey="bookList" title="書籍目錄">
                <div class="panel-title">書籍目錄</div>
              </Tab>
            </Tabs>
          </div>
          <div className="holder-mobile d-lg-none wei-holder-mobile">
            <Accordion defaultActiveKey="10">
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="10">
                    內容簡介
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="10">
                  <Card.Body></Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="11">
                    作者介紹
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="11">
                  <Card.Body></Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="12">
                    書籍目錄
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="12">
                  <Card.Body></Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailSpinner
