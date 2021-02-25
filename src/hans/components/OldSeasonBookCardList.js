// import { useState } from 'react'

import OldSeasonBookCard from '../components/OldSeasonBookCard'

function OldSeasonBookCardList(props) {
  const {
    solarTermData,
    solarTermNameList,
    solarTermToShowList,
    handlePlateToggle,
    getSolarTermsToList,
  } = props

  console.log(solarTermToShowList)

  return (
    <>
      {solarTermToShowList.map((e) => {
        return (
          <OldSeasonBookCard
            solarTermToShowList={solarTermToShowList}
            solarTermToShow={e}
            solarTermName={solarTermNameList[e]}
            handlePlateToggle={handlePlateToggle}
            getSolarTermsToList={getSolarTermsToList}
          />
        )
      })}
    </>
  )
}

export default OldSeasonBookCardList
