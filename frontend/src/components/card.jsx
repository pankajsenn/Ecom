import styled from "styled-components";
import React from "react";

function Card({basket,setbasket,id,price,title,description,image}) {

    const Addtobasket=()=>{
        console.log(basket)
        setbasket([...basket,{id,price,title,description,image}]);
    }
    return (
        <Container>
            <Image>
                <img src={`http://localhost:1337${image}`} alt="games"></img>
            </Image>
            <Description>
                <h5>{title}</h5>
                <p> &#x20B9; {price}</p>
                <p>{description}</p>
                <button onClick={Addtobasket}>Add to cart</button>
            </Description>
        </Container>
    )
}

const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
background: black;
z-index: 10;
color: white;
`;
const Image = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 20px;
flex: 0.3;
img{
    width: 200px;
    height: 200px;
}
`;
const Description = styled.div`
width: 90%;
margin: auto;
display: flex;
flex-direction: column;
justify-content: space-evenly;
flex: 0.7;

h5{
 font-size:16px;
 font-weight: 600px;
 margin-top: 0;
 margin-bottom: 0;
}
p{
    font-weight: 600;
    margin-top: 0;
 margin-bottom: 0;
}
button{
    width: 100%;
    height: 33px;
    margin-top: 0;
 margin-bottom: 0;
 border: none;
 border-radius: 33px;
 background-color: #87172a;
 cursor: pointer;
 color: white;
}
`;

export default Card;