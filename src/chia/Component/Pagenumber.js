import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'

function Pagenumber({ postsPerPage, totalPosts, paginate }) {
  const pagenumber = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pagenumber.push(i)
  }

  return (
    <>
      <div className="pagenumber d-flex justify-content-center">
        <nav aria-label="Page navigation example">
          <ul className="pagination text-center  d-flex align-items-center ">
            <li className="page-item">
              <Link className="chia_custompage" to="#">
                <BsArrowLeftShort />
              </Link>
            </li>
            {pagenumber.map((number) => (
              <li className="page-item ">
                <Link
                  className="chia_custompage"
                  // to={`&page=${number}` }}
                  onClick={() => paginate(number)}
                >
                  {number}
                </Link>
              </li>
            ))}
            <li className="page-item">
              <Link className="chia_custompage" to="#">
                <BsArrowRightShort />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Pagenumber
