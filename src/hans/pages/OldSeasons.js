import OldSeasonBookCard from '../components/OldSeasonBookCard'
import SolarTermPlate from '../components/SolarTermPlate'

// import style
import '../styles/old-seasons.scss'

function OldSeasons() {
  return (
    <>
      <div className="container-fluid w-100 old-season-container">
        <div className="row justify-content-center">
          <SolarTermPlate />

          <div className="col-xl-6">
            <div className="row justify-content-center osb-book-col fadein-on-start">
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
