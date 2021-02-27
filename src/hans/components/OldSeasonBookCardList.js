// import { useState } from 'react'

import OldSeasonBookCard from '../components/OldSeasonBookCard'

function OldSeasonBookCardList(props) {
  const {
    solarTermBookToShow,
    solarTermBookToShowList,
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
  //
  // console.log('title', solarTermBookToShow['title'])
  // console.log('book_pics', solarTermBookToShow['book_pics'])
  // console.log('sid', solarTermBookToShow['sid'])
  // console.log('year', solarTermBookToShow['year'])

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
