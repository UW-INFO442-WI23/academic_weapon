import '../../index.css';
import cart from '../../cart.svg';
import loupe from '../../loupe.svg';
import sort from '../../sort.svg';
import { useEffect, useState } from 'react';
import DEFAULT_DATA from '../../products.json';
import { useNavigate ,useSearchParams } from 'react-router-dom';
import Footer from '../Footer/footer';

function Product() {
  const [sortFlag ,setSortFlag] = useState(true);
  const [initList,setInitList] = useState( DEFAULT_DATA)
  const [list,setList] = useState(DEFAULT_DATA)
  const [ProductName,setProductName] =useState('')
  const [cartList,setCartList] =useState([])
  const navigate = useNavigate()
  const [ params ] = useSearchParams()
  const sortCallBack  = () =>{
    if( sortFlag == true ) {
      const newList = list
      for(let i = 0; i < newList.length - 1; i += 1) {
        for(let j = 0; j < newList.length- 1 - i; j += 1) { 
            if(newList[j].price > newList[j+1].price) { 
                const temp = newList[j];
                newList[j] = newList[j+1];
                newList[j+1] = temp;
            }
        }
      }
      setList(newList)
      setSortFlag(false)
    }
    else{
      const newList = list
      for(let i = 0; i < newList.length - 1; i += 1) {
        for(let j = 0; j < newList.length- 1 - i; j += 1) { 
            if(newList[j].price < newList[j+1].price) { 
                const temp = newList[j];
                newList[j] = newList[j+1];
                newList[j+1] = temp;
            }
        }
      }
      setSortFlag(true)
    }
  }
  const keyDownCallBack = (e)=>{
    if(e.keyCode === 13){
      searchCallBack()
    }
  }
  const searchCallBack  = () =>{
    const serachValue = document.getElementById('input').value;
    setProductName(serachValue)
    if(serachValue == ''){
     setList(initList)
    }
    else{
      let newList =[] ;
      initList.map((item,index) =>{
        let name = item.productName.toLowerCase()
        let value = serachValue.toLowerCase()
        if(name.indexOf(value) !== -1 ){
          newList.push(item)
        }
      })
      setList(newList)
    }
  }
  const aboutCallBack  = () =>{
    navigate('/About')
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
      navigate(`/About?cartList=${newList}`)
    }else{
      navigate(`/About?cartList='null'`)
    }
  }
  const productCallBack  = () =>{
    navigate('/Product')
  }
  const shopCallBack  = () =>{
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
      navigate(`/Cart?cartList='null'`)
    }
  }
  const cartCallBack  = ( item ) =>{
    if(cartList.length > 0 ){
      let newItem = {}
      let flag = true 
      cartList.forEach((Item) =>{
        if(Item.productName == item.productName){
          flag = false
          newItem ={...item,count:Item.count+1}
          let newList = [...cartList]
          newList.splice(newList.indexOf(Item),1)
          setCartList([...newList,newItem])
        }
      })
      if(flag == true){
        setCartList([...cartList,{...item,count:1}])
      }
    }
    else{
      setCartList([...cartList,{...item,count:1}])
    }
  }
  useEffect(()=>{
    let  productList = params.get('productList')
    let newList =[]
    if ( typeof productList =='object' && productList == null ){
      return
    }
    else if(typeof productList =='string' && productList == ''){
      return 
    } 
    else if(typeof productList =='string' && productList == "'null'"){
      return 
    } 
    else{
      productList =  productList.replaceAll('*','&').split('?')
      productList.forEach((item)=>{
      newList.push(JSON.parse(item))
      })
      setCartList(newList)
    }
  },[])
  return (
    <div className='productWhole'>
      <div className='body'>
        <div className='top'>
          <div className='topButton'>
            <div className='tittle'>      
                  <span  className='fontNo'>Nourish</span>
                  <span className='fontNo' style={{color:'black'}}>King</span>        
            </div>
            <div className='rTittle'>  
              <span className="fontTop" onClick={aboutCallBack}>About Us</span>
            </div>
            <div className='rTittle'> 
              <span className="fontTop" onClick={productCallBack} >Shopping</span>
            </div>
            <div className='cart' >  
              <span className="fontTop"  onClick={shopCallBack}><img  className='cartImg' src={cart} width='30px' height= '30px' ></img></span>
            </div>
          </div>
          <div className='backgroundImg'>
              <div className='backgroundTittle1'>
                Farm fresh & budget friendly
              </div>
              <div className='backgroundTittle2'>
                  healthy produce for all
              </div>
              <div className='backgroundTittle3'>
                <input className='input' id='input' onKeyDown={keyDownCallBack} placeholder='Product Name'></input>
                  <img  className='loupe' src={loupe} width='30px' height= '30px' onClick={searchCallBack} ></img>
                </div>
          </div>
        </div>
        <div className='middle' >
          <div className='middleButton'>
            <div  className='midBut1' > <span className='but1'> {ProductName == '' ? 'All Products': ProductName } </span></div>
            <div className='midBut2'><span className='but2'>Price</span>    <img  onClick={sortCallBack} className= {sortFlag == true  ? 'sort' :'sort1'} src={sort} width='30px' height= '30px' ></img></div>    
          </div>
          <div className='productItems'>
            {
              list.map( (item,index)  => (
                (index+1)%4 !== 0 ?
                <div className='item' key={index}>
                  <img className='itemImg' src= {require(''+item.image)}></img>
                  <div className='add' onClick={()=>{cartCallBack(item,index)}}>+</div>
                  <div className='itemVo'>
                    <div  className='itemVo1'>{item.productName}</div>
                    <div  className='itemVo2'>${item.price}<span className='itemVoUnit'>{item.productUnit}</span></div>
                    <div  className='itemVo3'>{item.farm}</div>
                  </div>
                </div>  : 
                <div className='item4' key={index}>
                  <img className='itemImg' src= {require(''+item.image)}></img>
                  <div className='add' onClick={()=>{cartCallBack(item,index)}}>+</div>
                  <div className='itemVo'>
                  <div  className='itemVo1'>{item.productName}</div>
                  <div  className='itemVo2'>${item.price}<span className='itemVoUnit'>{item.productUnit}</span></div>
                  <div  className='itemVo3'>{item.farm}</div>
                </div>
                </div>              
              )
              )
            }
          </div>
        </div>
        <div>
        </div>
      </div>
      <Footer></Footer>
    </div>

  );
}
export default Product;