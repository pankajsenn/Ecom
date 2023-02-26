import styled from "styled-components";
import React from "react";
import {useNavigate} from "react-router-dom";
function Navbar({basket,setbasket}){
const navigate = useNavigate();
return(
        <>
        <Container>
            <Inner>
                <Logo>
                    <img src="gamelogo1.jpg" alt='web-logo' onClick={()=>{navigate('/')}}/>
                </Logo>
                <Searchbar>
                    <input type="text" placeholder="Search..."/>
                    
                    <SearchIcon>
                    <img src="./searchIcon.png" alt="search-icon"/>
                    </SearchIcon>
                    
                </Searchbar>
                <Rightcontainer>
                     <Navbutton>
                        <p>Hello,</p>
                        <p>Guest</p>
                    </Navbutton>
                    <Navbutton>
                        <p>Return</p>
                        <p>& Orders</p>
                    </Navbutton>
                    <Basketbutton>
                        <img src="./basket-icon.png" alt="basket-icon" onClick={()=>navigate("/checkout")}/>
                        <p>{basket.length}</p>
                    </Basketbutton> 
                </Rightcontainer>
            </Inner>
            <MobileSearchbar>
                    <input type="text" placeholder="Search..."/>
                    <SearchIcon>
                     <img src="./searchIcon.png" alt="search-icon"/>
                    </SearchIcon>
                </MobileSearchbar>
        </Container>
        </>
)
}

const Container = styled.div`
width:100%;
height:60px;
background-color: black;
display:flex;
align-items:center;
position:relative;

@media only screen and (max-width:767px){
    height:120px;
    flex-direction:column;
}
`;
const Logo = styled.div`
margin-left:20px;
margin-top:2px;
cursor:pointer;
img{
    width:100px;
    height:50px;
}
`;
const SearchIcon = styled.div`
height:105%;
background-color : #d31249;
width:40px;
display:flex;
align-items:center;
justify-content:center;
margin-top:1px;
border-radius : 0px 5px 5px 0px;
img{
    width:22px;
}
`;
const Inner = styled.div`
width:100%;
display:flex;
align-items:center;

 @media only screen and (max-width:767px){
    justify-content:space-between;
}
`;
const Navbutton = styled.div`
color:#fff;
padding :5px;
height:50%;
display:flex;
flex-direction: column;
justify-content:center;
cursor:pointer;
margin-right:5px;

p{
    &:nth-child(1){
        font-size:12px;
        margin-bottom :0px;
    }
    &:nth-child(2){
        font-size:14px;
        font-weight:bold;
        margin-top:0px;
    }
}
`;
const Basketbutton = styled.div`
display:flex;
align-items:center;
height:90%;
cursor: pointer;
img{
    width:30px;
    margin-right:5px;
}
p{
    color:#fff;
    font-weight:500px;
    margin-right:10px;
}
`;
const Rightcontainer = styled.div`
display:flex;
align-items:center;
width:fit-content;
justify-content : space-around;
height:100%;
margin-right:10px;
`;
const Searchbar = styled.div`
height:35px;
flex:1;
margin:0px 15px;
display:flex;
align-items: center;

input{
    flex:1;
    width:100%;
    height:100%;
    border :none;
    border-radius: 5px 0px 0px 5px;

    &::placeholder{
        padding-left :6px;
    }
}

@media only screen and (max-width:767px){
    display:none;
}
`;

const MobileSearchbar= styled.div`
height:35px;
width:90%;
display:flex;
align-items:center;
padding:10px;

input{
    flex:1;
    width:100%;
    height:100%;
    border:none;
    border-radius:5px 0px 0px 5px;

    &::placeholder{
        padding-left:10px;
    }
}

@media only screen and (min-width:767px){
    display:none;
}
`;
export default Navbar;