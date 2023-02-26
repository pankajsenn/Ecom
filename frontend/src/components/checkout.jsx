import  styled  from "styled-components";
import Navbar from "./navbar";

function Checkout({basket,setbasket,user}) {
        let totalsum = 0;
      for(let i=0 ; i<basket.length ;i++){
          totalsum = totalsum + parseInt(basket[i].price);
      }
      function Deletehandler(product){
        let newBasket = basket.filter((value)=>{
          return value.id!== product.id
        })
         setbasket(newBasket);
        }
    return (
        <Container>
            <Navbar basket={basket} setbasket={setbasket} user={user}/>
            <Main>
                <Shopingcart>
                    <h2>Shoping Cart</h2>
                    {
                       basket?.map((product,index) =>(
                     <Product key={index}>
                     <Image>
                        <img src={`http://localhost:1337${product.image}`}  alt="product"/>
                     </Image>
                     <Description>
                        <h4>
                        {product.title}
                        </h4>
                        <p>&#8377; {product.price} </p>
                        <button onClick={()=>{Deletehandler(product)}}>Remove</button>
                     </Description>
                    </Product>
                       ))
                    }
                    
                </Shopingcart>
                <Subtotal>
                    <>
                    <p>
                        Subtotal({basket.length} items )
                        :<strong>{totalsum}</strong>
                    </p>
                    <small>
                        <input type="checkbox"/>
                        <span>This order contains a gift.</span>
                    </small>
                    </>
                    <button>
                 Proceed to checkout
                    </button>
                    
                </Subtotal>
            </Main>
        </Container>
    )
}
const Container = styled.div`
width: 100%;
max-width: 1400px;
height: fit-content;
margin: auto;
background-color: white;
position: relative;
`;
const Main = styled.div`
display: flex;
padding: 15px;
@media only screen and (max-width:1200px){
    flex-direction: column;
}
`;
const Subtotal = styled.div`
flex:0.3;
background-color: white;
height: 200px;
margin-left: 15px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

p{
    font-size: 20px;
}
small{
    display: flex;
    align-items: center;
    margin-top: 10px;
    
    span{
        margin-left: 10px;
    }
}
button{
        width: 65%;
        height: 33px;
        background-color:  #87172a;
        margin-top: 20px;
        border: none;
        outline: none;
        border-radius: 8px;
        color: white;
    }

    @media only screen and (max-width:1200px){
     flex: none;
     margin-top: 20px;
    }
`
;
const Shopingcart = styled.div`
padding:15px;
background-color: #fff;
flex: 0.7;
h2{
    font-weight:500;
    border-bottom: 1px solid lightgray;
}

@media only screen and (max-width:1200px){
    flex: none;
}

`;
const Product = styled.div`
display: flex;
align-items: center;
`;
const Image = styled.div`
flex: 0.3;
img{
    width: 100%;
}
`;
const Description = styled.div`
flex: 0.7;
h4{
    font-weight: 600;
    font-size: 18px;
}
p{
    font-weight: 600;
    margin-top: 10px;
}
button{
    background-color: transparent;
    color: #1384b4;
    margin-top: 10px;
    border: none;
    outline: none;
    cursor:pointer;
    &:hover{
        text-decoration: underline;
    }
}
`;
export default Checkout;