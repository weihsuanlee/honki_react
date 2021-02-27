// import { useState } from 'react'

import OldSeasonBookCard from '../components/OldSeasonBookCard'

function OldSeasonBookCardList(props) {
  const {
    solarTermBookToShow,
    solarTermNameList,
    solarTermToShowList,
    handlePlateToggle,
    getSolarTermsToList,
    solarTermClicked,
    newTargetToggle,
  } = props

  // console.log(solarTermToShowList)
  // console.log(solarTermNameList)
  // console.log(solarTermBookToShow)
  console.log(solarTermBookToShow['title'])
  console.log(solarTermBookToShow['book_pics'])
  console.log(solarTermBookToShow['sid'])

  return (
    <>
      {solarTermToShowList.map((e) => {
        return (
          <OldSeasonBookCard
            bookName={solarTermBookToShow['title']}
            bookImg={solarTermBookToShow['book_pics']}
            handlePlateToggle={handlePlateToggle}
            getSolarTermsToList={getSolarTermsToList}
            newTargetToggle={newTargetToggle}
            solarTermToShowList={solarTermToShowList}
            solarTermToShow={e}
            solarTermName={solarTermNameList[e]}
            solarTermClicked={solarTermClicked}
          />
        )
      })}
    </>
  )
}

export default OldSeasonBookCardList
