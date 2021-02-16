import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FaHeart } from 'react-icons/fa'
import React from 'react'
import Slider from 'react-slick'

export default function ProductCarousel() {
  const settings = {
    arrows: true,
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <Slider {...settings}>
      <div className="wei-card position-relative wei-slick">
        <div className="wei-card-icon">NEW</div>
        <div className="wei-card-pic position-relative">
          <div className="wei-book-pic">
            <img
              className="w-100"
              src="/images/books/5ffd7ab5a282a.jpg"
              alt=""
            />
          </div>
          <div className="wei-heart-bg">
            <FaHeart className="wei-heart" />
          </div>
        </div>
        <div className="wei-book-text">
          <p className="wei-book-title">
            婚禮之途: 美學大師約翰．伯格在生命流動中見證永恆的小說
          </p>
          <p className="wei-book-author">約翰．伯格</p>
          <div className="wei-book-price">$300</div>
        </div>
      </div>
      <div className="wei-card position-relative wei-slick">
        <div className="wei-card-icon">NEW</div>
        <div className="wei-card-pic position-relative">
          <div className="wei-book-pic">
            <img
              className="w-100"
              src="/images/books/5ffd7ab5a282a.jpg"
              alt=""
            />
          </div>
          <div className="wei-heart-bg">
            <FaHeart className="wei-heart" />
          </div>
        </div>
        <div className="wei-book-text">
          <p className="wei-book-title">
            婚禮之途: 美學大師約翰．伯格在生命流動中見證永恆的小說
          </p>
          <p className="wei-book-author">約翰．伯格</p>
          <div className="wei-book-price">$250</div>
        </div>
      </div>
      <div className="wei-card position-relative wei-slick">
        <div className="wei-card-icon">NEW</div>
        <div className="wei-card-pic position-relative">
          <div className="wei-book-pic">
            <img
              className="w-100"
              src="/images/books/5ffd7ab5a282a.jpg"
              alt=""
            />
          </div>
          <div className="wei-heart-bg">
            <FaHeart className="wei-heart" />
          </div>
        </div>
        <div className="wei-book-text">
          <p className="wei-book-title">
            婚禮之途: 美學大師約翰．伯格在生命流動中見證永恆的小說
          </p>
          <p className="wei-book-author">約翰．伯格</p>
          <div className="wei-book-price">$300</div>
        </div>
      </div>
      <div className="wei-card position-relative wei-slick">
        <div className="wei-card-icon">NEW</div>
        <div className="wei-card-pic position-relative">
          <div className="wei-book-pic">
            <img
              className="w-100"
              src="/images/books/5ffd7ab5a282a.jpg"
              alt=""
            />
          </div>
          <div className="wei-heart-bg">
            <FaHeart className="wei-heart" />
          </div>
        </div>
        <div className="wei-book-text">
          <p className="wei-book-title">
            婚禮之途: 美學大師約翰．伯格在生命流動中見證永恆的小說
          </p>
          <p className="wei-book-author">約翰．伯格</p>
          <div className="wei-book-price">$300</div>
        </div>
      </div>
      <div className="wei-card position-relative wei-slick">
        <div className="wei-card-icon">NEW</div>
        <div className="wei-card-pic position-relative">
          <div className="wei-book-pic">
            <img
              className="w-100"
              src="/images/books/5ffd7ab5a282a.jpg"
              alt=""
            />
          </div>
          <div className="wei-heart-bg">
            <FaHeart className="wei-heart" />
          </div>
        </div>
        <div className="wei-book-text">
          <p className="wei-book-title">
            婚禮之途: 美學大師約翰．伯格在生命流動中見證永恆的小說
          </p>
          <p className="wei-book-author">約翰．伯格</p>
          <div className="wei-book-price">$300</div>
        </div>
      </div>
      <div className="wei-card position-relative wei-slick">
        <div className="wei-card-icon">NEW</div>
        <div className="wei-card-pic position-relative">
          <div className="wei-book-pic">
            <img
              className="w-100"
              src="/images/books/5ffd7ab5a282a.jpg"
              alt=""
            />
          </div>
          <div className="wei-heart-bg">
            <FaHeart className="wei-heart" />
          </div>
        </div>
        <div className="wei-book-text">
          <p className="wei-book-title">
            婚禮之途: 美學大師約翰．伯格在生命流動中見證永恆的小說
          </p>
          <p className="wei-book-author">約翰．伯格</p>
          <div className="wei-book-price">$300</div>
        </div>
      </div>
      <div className="wei-card position-relative wei-slick">
        <div className="wei-card-icon">NEW</div>
        <div className="wei-card-pic position-relative">
          <div className="wei-book-pic">
            <img
              className="w-100"
              src="/images/books/5ffd7ab5a282a.jpg"
              alt=""
            />
          </div>
          <div className="wei-heart-bg">
            <FaHeart className="wei-heart" />
          </div>
        </div>
        <div className="wei-book-text">
          <p className="wei-book-title">
            婚禮之途: 美學大師約翰．伯格在生命流動中見證永恆的小說
          </p>
          <p className="wei-book-author">約翰．伯格</p>
          <div className="wei-book-price">$300</div>
        </div>
      </div>
      <div className="wei-card position-relative wei-slick">
        <div className="wei-card-icon">NEW</div>
        <div className="wei-card-pic position-relative">
          <div className="wei-book-pic">
            <img
              className="w-100"
              src="/images/books/5ffd7ab5a282a.jpg"
              alt=""
            />
          </div>
          <div className="wei-heart-bg">
            <FaHeart className="wei-heart" />
          </div>
        </div>
        <div className="wei-book-text">
          <p className="wei-book-title">
            婚禮之途: 美學大師約翰．伯格在生命流動中見證永恆的小說
          </p>
          <p className="wei-book-author">約翰．伯格</p>
          <div className="wei-book-price">$300</div>
        </div>
      </div>
    </Slider>
  )
}
