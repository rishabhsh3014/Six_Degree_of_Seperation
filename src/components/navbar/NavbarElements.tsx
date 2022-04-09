import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll'
// import {Link as LinkR} from 'react-router-dom'


interface Props {
    scrollNav: boolean
  }

export const Nav = styled.nav`
     background: ${({scrollNav}:Props)=>(scrollNav?'#000':'transparent')};
     margin-top: -80px;
     height: 80px;
     width: 100%;
     margin-left:0px;
     display: flex;
     justify-content: center;
     align-items: center;
     font-size: 1rem;
     position: sticky;
     top:0;
     z-index: 10;

     @media screen and(max-width:960px){
         transition: 0.8s all ease;
     }
`
export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index:1;
    width: 100%;
    padding: 0 14px;
    max-width: 1400px; 
`
export const NavLogo = styled(LinkS)`
    color:#fff;
    /* position:relative; */
    /* float:left; */
    justify-self: flex-start;
    /* padding-top:20px; */
    margin-right:200px;
    cursor: pointer;
    font-size:1.5rem;
    display: flex;
    /* display:grid; */
    /* border:2px solid black; */
    align-items: center;
    margin-left: 0px;
    font-weight: bold;
    text-decoration: none;
    &:hover{
        color: #fff;
        font-size:1.5rem;
    }

`
export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width:768px){
        display: block;
        position: absolute;
        top:0;
        right: 0;
        transform: translate(-100%,60%);
        font-size: 1.8rem;
        cursor: pointer;
        color:#fff;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    /* align-items: center; */
    list-style: none;
    text-align:center;
    margin-right: -22px;
    /* margin-left:200px; */

    @media screen and (max-width:786px){
        display: none; 
    }
`

export const NavItem = styled.li`
    height:80px;
    font-size: 18px;
    font-weight: 500;
`
export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height:100%;
    cursor: pointer;

    &:hover{
        color: #fff;
        height:100%;
    }

    &.active{
        border-bottom: 4px solid #01bf71 ;
        color: #fff;
    }
`