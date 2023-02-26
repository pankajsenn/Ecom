import { useState,useEffect } from "react";
import styled from "styled-components";
import Navbar from "./navbar";
import Card from "./card";
function Home({basket,setbasket}) {
    const [products,setproducts] = useState([]);
    useEffect(() => {
        fetch(" http://localhost:1337/api/products?populate=*").then((res) => {
          return res.json();
        }).then((data) => {
            setproducts(data.data)
        }).catch((err) => { console.log(err) })
      }, [])
    return (
        <>
            <Container>
                <Navbar basket={basket} setbasket={setbasket}/>
                <Banner>
                <img src="gamebaner.jpg"/>
                </Banner>
                <Main>
                {
                    products.map(function(product,index){
                        return(
                        <Card key={index} id={Date.now()} price={product.attributes.price} basket={basket} setbasket={setbasket} title={product.attributes.Title} description ={product.attributes.description} image={product.attributes.images.data.attributes.url}/>
                        )
                    })
                  }
                </Main>
            </Container>
        </>
    )
}

const Container = styled.div`
width:100%;
background-color: black;
max-width: 1400px;
margin: auto;
height: fit-content;
`;
const Banner = styled.div`
width: 100%;
img{
    width: 100%;
    height: 500px;
}
`;
const Main = styled.div`
display: grid;
justify-content: center;
place-items: center;
width: 100%;

grid-auto-rows: 420px 420px;
grid-template-columns: repeat(4,280px);
grid-gap: 20px;

@media only screen and (min-width:767px){
    margin-top: -130px;
    padding :10px 0px;
}


//for mobile
@media only screen and (max-width:767px){
    grid-template-columns: repeat(2,50%);
    grid-gap: 0;
}
@media only screen and (max-width:360px){
    grid-template-columns: repeat(1,100%);
    grid-gap: 0;
}

//for tablet
@media only screen and (min-width:767px) and (max-width:1200px){
    grid-template-columns: repeat(3,30%);
}

`;

export default Home;