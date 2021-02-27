import { useEffect } from 'react'

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
      {solarTermToShowList.map((e) => {
        return (
          <OldSeasonBookCard
            handlePlateToggle={handlePlateToggle}
            newTargetToggle={newTargetToggle}
            // bookName={solarTermBookToShowList[27 - 1].title}
            // bookImg={solarTermBookToShowList[27 - 1].book_pics}
            // solarTermToShow={solarTermBookToShowList[27 - 1].solar_term_id}
            // solarTermName={
            //   solarTermNameList[solarTermBookToShowList[27 - 1].solar_term_id]
            // }
            // cardYear={solarTermBookToShowList[27 - 1].year.substring(0, 4)}
            solarTermClicked={solarTermClicked}
          />
        )
      })}
    </>
  )
}

export default OldSeasonBookCardList
