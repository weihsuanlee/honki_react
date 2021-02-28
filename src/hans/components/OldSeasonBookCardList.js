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

  console.log(solarTermBookToShowList)
  console.log(firstCardSid)
  let tempList = { ...solarTermBookToShowList[firstCardSid + 1] }
  console.log(tempList)

  const bookList = (id) => {
    let tempList = { ...solarTermBookToShowList[id] }
    return tempList
  }

  console.log(solarTermNameList)

  let solarTermToShowList = [26, 25, 24, 23, 22, 21]

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
            handlePlateToggle={handlePlateToggle}
            newTargetToggle={newTargetToggle}
            bookName={bookList(e).title}
            bookImg={bookList(e).book_pics}
            solarTermToShow={bookList(e).solar_term_id}
            solarTermName={
              solarTermNameList[bookList(e).solar_term_id] +
              'stId' +
              bookList(e).solar_term_id
            }
            cardYear={bookList(e).year}
            solarTermClicked={solarTermClicked}
          />
        )
      })}
    </>
  )
}

export default OldSeasonBookCardList
