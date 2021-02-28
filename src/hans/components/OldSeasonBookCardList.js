// import { useEffect } from 'react'

import OldSeasonBookCard from '../components/OldSeasonBookCard'

function OldSeasonBookCardList(props) {
  // const [cardListLength, setCardListLength] = useState(6)

  const {
    // getInitialStDataFromServer,
    handlePlateToggle,
    newTargetToggle,
    solarTermClicked,
    firstCardSid,
    solarTermBookToShow,
    solarTermBookToShowList,
    solarTermNameList,
  } = props

  // const solarTermToShowList = (stSid) => {
  //   Array.from(Array(6).keys()).map((e) =>
  //     stSid - e >= 0 ? stSid - e : stSid - e + 24
  //   )
  // }

  // console.log(firstCardSid)

  const bookList = (id) => {
    let tempList = { ...solarTermBookToShowList[id] }
    return tempList
  }

  const getCardYear = (id) => String(bookList(id).year).substr(0, 4)

  // console.log(solarTermNameList)

  // 因用 array, 所以 firstCardSid 要 -1 對應的節氣才是對的

  const getStToShowList = (stId) => {
    let tempList = []

    for (let i = 0; i < 6; i++) {
      tempList.push(stId - i - 1)
    }

    return tempList
  }

  let solarTermToShowList = getStToShowList(firstCardSid)
  // console.log(solarTermToShowList)

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
            key={e}
            handlePlateToggle={handlePlateToggle}
            newTargetToggle={newTargetToggle}
            bookName={bookList(e).title}
            bookImg={bookList(e).book_pics}
            solarTermToShow={bookList(e).solar_term_id - 1}
            solarTermName={solarTermNameList[bookList(e).solar_term_id - 1]}
            cardYear={getCardYear(e)}
            solarTermClicked={solarTermClicked}
          />
        )
      })}
    </>
  )
}

export default OldSeasonBookCardList
