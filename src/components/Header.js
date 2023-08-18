import React, { useEffect } from 'react'
import logo from '../images/GrubGologo.png'
import profile from '../images/profile.jpeg'
import { BarChart, SearchRounded, ShoppingCartRounded } from '@mui/icons-material'

function Header() {
    useEffect(() => {
        const toggleMenu = document.querySelector('.toggleMenu');
        const rightMenu = document.querySelector('.rightMenu');
        const toggleActiveClass = () => {
          rightMenu.classList.toggle('active');
        //   console.log("clicked");
        };
        toggleMenu.addEventListener('click', toggleActiveClass);
        return () => {
          toggleMenu.removeEventListener('click', toggleActiveClass);
        };
      }, []);
    
    
  return (
    
    <header>
        <img src={logo} alt='logo' className='logo'/>
        
        <div className='inputBox'>
        <SearchRounded className='searchIcon'/>
            <input type='text' placeholder='search'/>
        </div>
        <div className="shoppingCart">
            <ShoppingCartRounded className='cart'/>
            <div className="cartContent">
                <p>2</p>
            </div>
        </div>

        <div className="profileContainer">
            <div className="imgBox">
                <img className='profilePic' src={profile} alt="" />
            </div>
            <h2 className='userName'>nadir ali</h2>
        </div>

        <div className="toggleMenu">
            <BarChart className='toggleIcon'/>
        </div>
       
    </header>
  )
}

export default Header