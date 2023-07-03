import React from 'react';
import Backraund from '../assets/Rectangle 50.svg';
import './style.css';
import Heart from '../assets/MyHeart.svg';
import Search from '../assets/lumpabtn.svg';
import Corzina from '../assets/Korzinaexe.svg';
import Girl from '../assets/sexygirl.svg';
import bigcircl from '../assets/BigCircl.svg';
import Litlecircl from '../assets/Cirkl1.svg';
import Litlecircl1 from '../assets/Cirkl2.svg';
import Litlecircl2 from '../assets/Circl3.svg';
import Levokortina from '../assets/levokortinanepon.svg';
import prozstrel from '../assets/Group 13.svg';
import Strelka from '../assets/Group 21.svg';
import Cortina from '../assets/cortinafull.svg';
import Pravokortina from '../assets/pravokortinanepon.svg';
import Arrow from '../assets/strelka.svg';

const Header = () => {
  return (
    <header className='header'>
      <div className='section'>
        <nav className='header_nav'>
          <h1 className='header_title'>
            <img src={Backraund} alt="" />
          </h1>
          <p className='logo'>Funiro.</p>
          <p className='menu_items'>Products</p>
          <p className='menu_rooms'>Rooms</p>
          <p className='menu_boxs'>Inspirations</p>
          <p className='lumopa'>
            <img src={Search} alt="" />
          </p>
          <p className='My_heart'>
            <img src={Heart} alt="" />
          </p>
          <p className='korzina'>
            <img src={Corzina} alt="" />
          </p>
          <div className="girl">
            <img src={Girl} alt="" />
          </div>
          <p className="levo_kortina">
            <img src={Levokortina} alt="" />
          </p>
          <p className='circls'>
            <img src={bigcircl} alt="" />
            <img src={Litlecircl} className='circls1' alt="" />
            <img src={Litlecircl1} className='circls2' alt="" />
            <img src={Litlecircl2} className='circls3' alt="" />
          </p>
          <div className="Strelki">
            <img src={prozstrel} alt="" />
            <img src={Strelka} alt="" />
          </div>
          <div className="big_cortina">
            <img src={Cortina} alt="" />
            <div className="pravo_kortina">
              <img src={Pravokortina} alt="" />
            </div>
          </div>
        </nav>
      </div>
      <div className="second_block">
        <div className="second_text_block">
          <p>
            High-Quality Furniture Just For You
          </p>
          <div className="second_gegege_block">
            <p>
              Our furniture is made from selected and best quality materials that are suitable for your dream home
            </p>
            <button className='second_button'>Shop Now</button>
          </div>
        </div>
      </div>
      <div className="third_block">
        <div className="third_block_text">
          <p>
            Bohauss
          </p>
          <div className="third_ratatata_block">
            <p>
              Luxury big sofa 2-seat
            </p>
            <div className="third_price_block">
              <p>
                Rp 17.000.000
              </p>
              <div className="strelka">
                <img src={Arrow} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
