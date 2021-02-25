import { useState } from 'react'

import OldSeasonBookCard from '../components/OldSeasonBookCard'

function OldSeasonBookCardList(props) {
  const { handlePlateToggle, getSolarTermsToList, solarTermsToShowList } = props

  console.log('test', solarTermsToShowList)

  return (
    <>
      {/* {solarTermsToShowList.map((e) => {
        return (
          <OldSeasonBookCard
            solarTermOfThisCard={e}
            handlePlateToggle={handlePlateToggle}
            getSolarTermsToList={getSolarTermsToList}
          />
        )
      })} */}
    </>
  )
}

export default OldSeasonBookCardList
