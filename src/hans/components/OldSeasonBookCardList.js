// import { useEffect } from 'react'

import OldSeasonBookCard from '../components/OldSeasonBookCard'

function OldSeasonBookCardList(props) {
  // const [cardListLength, setCardListLength] = useState(6)

  const {
    // getInitialStDataFromServer,
    handlePlateToggle,
    newTargetToggle,
    getCardBookSid,
    solarTermClicked,
    firstCardSid,
    clickedCardSid,
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
  // console.log(bookList(1).st_sid)

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

  const getStToShowList2 = (stId) => {
    let tempList = [stId]

    return tempList
  }

  let solarTermToShowList = !solarTermClicked
    ? getStToShowList2(clickedCardSid)
    : getStToShowList(firstCardSid)

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
            getCardBookSid={getCardBookSid}
            // 節氣圓盤要顯示的節氣
            solarTermToShow={bookList(e).solar_term_id - 1}
            solarTermName={solarTermNameList[bookList(e).solar_term_id - 1]}
            // 節氣書卡資訊
            cardStBookId={e}
            bookName={bookList(e).title}
            bookImg={bookList(e).book_pics}
            cardYear={getCardYear(e)}
            whyThisBook={bookList(e).why_this_book}
            thisYearHappened={bookList(e).this_year_happened}
            relatedLink={bookList(e).related_link}
            // 確認卡片點擊狀況
            solarTermClicked={solarTermClicked}
          />
        )
      })}
    </>
  )
}

export default OldSeasonBookCardList
