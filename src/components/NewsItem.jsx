import NewsBoard from "./NewsBoard"
import React from 'react';
import styled from 'styled-components';

const NewsItem = ({title, description, imgSrc, readmore}) => {
  
  return (
    <>
     
    {/* ______________// NEWS CARDS \\________________ */}

<StyledWrapper>
      <div className="card">
        <div className="icons"> 
          <a href={readmore} className="save">
            Read more
          </a>
        </div>
        <div className="image"> <img className="imgbox" src={imgSrc} alt="...." /> </div>
        <div className="card__info">
    
          <p href="#" className="title">{title}</p>
          <p className="content">{description}</p>
        </div>
      </div>
    </StyledWrapper>
    </>
  )
}

//_______________________ Card Style______________________________

const StyledWrapper = styled.div`
  .card {
    margin: 10px;
    width: 350px;
    background:rgba(194, 225, 225, 0.6);
    border-radius: 15px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    color: #212121; 
    border: 2px solid rgb(169, 25, 235);
    transition: all .5s ease;
  }

  .icons {
    display: flex;
    flex-direction: row;
    gap: 5px;
    position: absolute;
    right: 15px;
    top: 15px;
    transition: opacity 0.5s ease;
    opacity: 0;
  }

  .image {
    width: 350px;
    height: 260px;
    box-shadow: inset 5px 5px 10px 0px rgba(6, 75, 38, 0.4);
    background: rgb(66, 159, 113);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .imgbox {
        width:92%;
        aspect-ratio: 3/2;
        border-radius: 15px;
        object-fit: cover;
        box-shadow: -5px 5px 10px rgb(32, 51, 110);
  }

  .save {
    background:rgb(225, 43, 43);
    color: white;
    border: none;
    border-radius: 5px;
    text-decoration: none;
    box-shadow: 5px 5px 10px rgb(12, 11, 11);

  }

  .see-more {
    background: #ab4b38;
    border: none;
    border-radius: 5px;
    color: white;
  }

  .save, .see-more {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 5px;
    padding: 5px;
  }

  .save__icon, .see-more__icon {
    width: 15px;
    fill: white;
  }

  .card__info {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
    padding: 15px;
    gap: 3px;
  }

  .page {
    font-size: 13px;
    font-weight: 100;
  }

  .title {
    text-decoration: none;
    font-weight: 700;
    font-size: 19px;
    color: black;
  }

  .content {
    font-size: 14px;
  }

  .card:hover {
    box-shadow: 3px 3px 10px 0px rgba(34, 35, 32, 0.59);
  }

  .card:hover .icons {
    z-index: 1;
    opacity: 1;
  }

  .card:hover .image {
    filter: brightness(.5);
  }

  .card:hover .title {
    color:rgb(61, 17, 163);
  }`;


export default NewsItem;
