import React, { useState } from 'react';
import styled from 'styled-components';
import { menuItems } from '../../utils/menuItems';
import { signout } from '../../utils/Icons';
import { useGlobalContext } from '../../context/GlobalContext';
import { useNavigate } from 'react-router-dom';

function Navigation() {
  const { logout, userInfo } = useGlobalContext();
  const navigate = useNavigate();
  const [active, setActive] = useState(1);
  const handleNavigation = (id, path) => {
    setActive(id);
    navigate(path);
  };

  return (
    <NavStyled>
      <div className='flex flex-col gap-4'>
        <div className="user-con">
          <img src="" alt="" className='h-16 w-16' />
          <div className="text">
            <h2 className='font-semibold text-xl capitalize'>{userInfo}</h2>
            <p className='text-xs'>Your money</p>
          </div>
        </div>
        <div className='w-full h-px rounded-lg bg-[#a0a0a0]'></div>
      </div>

      <ul className="menu-items">
        {menuItems.map((item) => (
          <li
            key={item.id}
            onClick={() => handleNavigation(item.id, item.link)}
            className={active === item.id ? 'active' : ''}
          >
            {item.icon}
            <span>{item.title}</span>
          </li>
        ))}
      </ul>
      <div className="bg-black flex justify-center py-3 rounded-md" onClick={logout}>
        <button className='flex items-center justify-center gap-4 text-base cursor-pointer'>{signout}Sign Out</button>
      </div>
    </NavStyled>
  );
}

const NavStyled = styled.nav`
  padding: 2rem 1.5rem;
  width: 20vw;
  height: 100%;
  background: rgba(51, 51, 51, 0.78); 
  border: 2px solid #585858;
  backdrop-filter: blur(4.5px);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;

  .user-con {
    height: 100px;
    display: flex;
    align-items: center;
    gap: 1rem;
    img {
      border-radius: 50%;
      object-fit: cover;
      background: #fcf6f9;
      border: 20px solid black;
      padding: 0.2rem;
      box-shadow: 0px 1px 17px rgba(0,0,0,0.6);
    }
  }

  .menu-items {
    flex: 1;
    display: flex;
    flex-direction: column;
    li {
      display: grid;
      grid-template-columns: 40px auto;
      align-items: center;
      margin: .6rem 0;
      font-weight: 300;
      font-size: medium;
      cursor: pointer;
      transition: all .4s ease-in-out;
      padding-left: 1rem;
      position: relative;
      i {
        color: rgb(255, 255, 255);
        font-size: 1.4rem;
        transition: all .4s ease-in-out;
      }
    }
  }

  .active {
    color: rgba(34, 34, 96, 1) !important;
    font-weight: 400 !important;
    font-size: large !important;
    i {
      color: #ededed !important;
    }
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 4px;
      height: 100%;
      background: #efefef;
      border-radius: 0 10px 10px 0;
    }
  }
`;

export default Navigation;
