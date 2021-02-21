import OldSeasonBookCard from '../components/OldSeasonBookCard'
import SolarTermPlate from '../components/SolarTermPlate'
import OldSeasonPageTitle from '../components/OldSeasonPageTitle'

// import style
import '../styles/old-seasons.scss'

function OldSeasons() {
  return (
    <>
      <div className="container-fluid w-100 old-season-container">
        <div className="row justify-content-center">
          <div className="col">
            <div className="row justify-content-center fadein-on-start">
              {/* 節氣圓盤 */}
              <SolarTermPlate />
            </div>
            {/* 過往節氣頁面標題 */}
            <OldSeasonPageTitle />
          </div>

          <div className="col-xl-6 osb-book-col-outer">
            <div className="osb-book-col-grad"></div>
            <div className="row justify-content-center osb-book-col fadein-on-start">
              {/* 過往節氣選書卡片 */}
              <OldSeasonBookCard />
              <OldSeasonBookCard />
              <OldSeasonBookCard />
              <OldSeasonBookCard />
              <OldSeasonBookCard />
              <OldSeasonBookCard />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OldSeasons
