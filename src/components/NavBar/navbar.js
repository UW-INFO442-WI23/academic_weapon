import cart from '../../cart.svg';
import '../../index.css';
import { useState } from 'react';
import { useNavigate} from 'react-router-dom';
function Navbar(props) {
    const [cartList,setCartList] =useState([])
    const [ productList ,setProductList ] = useState([])
    const navigate = useNavigate()
    const aboutCallBack  = () =>{
      navigate('/About')
    }
    const productCallBack  = () =>{
        if( props.newList == 'null' ){
          navigate(`/Product?productList='null'`)
        }else{
          navigate(`/Product?productList=${props.newList}`)
        } 
    }
    const shopCallBack  = () =>{
      if( props.newList == 'null' ){
        navigate(`/Cart?cartList=null`)
      }else{
        let newList =''
        if(cartList.length > 0 ){
          cartList.forEach((item ,index ) =>{
            if(index == 0 ){
              newList = newList + JSON.stringify(item)
            }
            else {
              newList = newList + '?' + JSON.stringify(item)
            }
          })
          newList = newList.replaceAll('&' ,'*')
          navigate(`/Cart?cartList=${newList}`)
        }else{
          navigate(`/Cart?cartList=null`)
        }
      }
      
    }

    return (
        <div className='topButton'>
            <div className='tittle'>      
                <span  className='fontNo'>Nourish</span>
                <span className='fontNo' style={{color:'black'}}>King</span>        
            </div>
            <div className='rTittle'>  
            <span className="fontTop" onClick={aboutCallBack}>About us</span>
            </div>
            <div className='rTittle'> 
            <span className="fontTop" onClick={productCallBack} >Shopping</span>
            </div>
            <div className='cart' >  
            <span className="fontTop"  onClick={shopCallBack}><img  className='cartImg' src={cart} width='30px' height= '30px' ></img></span>
            </div>
      </div>
    )
}

export default Navbar;