// import { useState } from 'react'

import OldSeasonBookCard from '../components/OldSeasonBookCard'

function OldSeasonBookCardList(props) {
  // const [cardListLength, setCardListLength] = useState(6)

  const {
    handlePlateToggle,
    newTargetToggle,
    solarTermClicked,
    solarTermBookToShow,
    solarTermBookToShowList,
    solarTermNameList,
  } = props

  // const solarTermToShowList = (stSid) => {
  //   Array.from(Array(6).keys()).map((e) =>
  //     stSid - e >= 0 ? stSid - e : stSid - e + 24
  //   )
  // }

  console.log('solarTermToShowList', solarTermBookToShowList)
  console.log('stlbt', solarTermBookToShowList[1])

  let solarTermToShowList = [1, 2, 3, 4, 5, 6]
  console.log(solarTermToShowList)

  // console.log(solarTermNameList)
  console.log(solarTermBookToShow)
  //
  // console.log('title', solarTermBookToShow['title'])
  // console.log('book_pics', solarTermBookToShow['book_pics'])
  // console.log('sid', solarTermBookToShow['sid'])
  // console.log('year', solarTermBookToShow['year'])

  return (
    <>
      <OldSeasonBookCard
        handlePlateToggle={handlePlateToggle}
        newTargetToggle={newTargetToggle}
        // debug
        // bookName={solarTermBookToShowList[27 - 1].title}
        bookName={'test'}
        // debug
        // bookImg={solarTermBookToShowList[27 - 1].book_pics}
        bookImg={''}
        // debug
        // solarTermToShow={solarTermBookToShowList[27 - 1].solar_term_id}
        solarTermToShow={11}
        // debug
        solarTermName={11}
        // debug
        solarTermName={'test'}
        // debug
        // cardYear={solarTermBookToShowList[27 - 1].year.substring(0, 4)}
        cardYear={2021}
        solarTermClicked={solarTermClicked}
      />
      {/* {solarTermToShowList.map((e) => {
        return (
          <OldSeasonBookCard
            handlePlateToggle={handlePlateToggle}
            newTargetToggle={newTargetToggle}
            bookName={solarTermBookToShowList[27 - 1].title}
            bookImg={solarTermBookToShowList[27 - 1].book_pics}
            solarTermToShow={solarTermBookToShowList[27 - 1].solar_term_id}
            solarTermName={
              solarTermNameList[solarTermBookToShowList[27 - 1].solar_term_id]
            }
            cardYear={solarTermBookToShowList[27 - 1].year.substring(0, 4)}
            solarTermClicked={solarTermClicked}
          />
        )
      })} */}
    </>
  )
}

export default OldSeasonBookCardList
