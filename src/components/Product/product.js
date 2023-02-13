
import './Product.css';
import cart from '../../cart.svg';
function Product() {
  return (
    <div className='body'>
      <div className='top'>
        {/* <div className='topButton'>
          <div className='tittle'>      
            <text  className='fontNo'>Nourish</text>
            <text className='fontNo' style={{color:'black'}}>King</text>        
          </div>
          <div className='rTittle'> <text className='fontTop'>About us</text></div>
          <div className='rTittle'> <text className='fontTop' >Shopping</text></div>
          <div className='cart' ><img  className='cartImg' src={cart} width='30px' height= '30px' ></img></div>
        </div> */}

        <div className='backgroundImg'>
          <div className='backgroundTittle1'>
            Farm fresh & budget friendly
          </div>
          <div className='backgroundTittle2'>
            healthy produce for all
          </div>
          <div className='backgroundTittle3'>
            <input className='input' placeholder='Product Name'></input>
            <img  className='magnifier' src={cart} width='30px' height= '30px' ></img>
            </div>
        </div>
      </div>
      
      <div className='middle' >
        <div className='middleButton'>
          <div  className='midBut1' > <text className='but1'> All Products</text></div>
          <div className='midBut2'><text className='but1'>Price</text>  </div>
          <div>icon</div>
        </div>
        <div className='productItems'>
           <div className='item'>
              <div className='itemImg'> <div className='add'>+</div></div>
              <div className='itemVo'>
              <div  className='itemVo1' >name</div>
              <div  className='itemVo2'>price</div>
              <div  className='itemVo3'>introduction</div>
             
            </div>
            </div>
            <div className='item'>
              <div className='itemImg'></div>
              <div className='itemVo'>
              <div>name</div>
              <div>price</div>
              <div>introduction</div>
            </div>
            </div>
            <div className='item'>
              <div className='itemImg'></div>
              <div className='itemVo'>
              <div>name</div>
              <div>price</div>
              <div>introduction</div>
            </div>
            </div>
            <div className='item1'>
              <div className='itemImg'></div>
              <div className='itemVo'>
              <div>name</div>
              <div>price</div>
              <div>introduction</div>
            </div>
            </div>
            <div className='item'>
              <div className='itemImg'> <div className='add'>+</div></div>
              <div className='itemVo'>
              <div  className='itemVo1' >name</div>
              <div  className='itemVo2'>price</div>
              <div  className='itemVo3'>introduction</div>
             
            </div>
            </div>
            <div className='item'>
              <div className='itemImg'></div>
              <div className='itemVo'>
              <div>name</div>
              <div>price</div>
              <div>introduction</div>
            </div>
            </div>
            <div className='item'>
              <div className='itemImg'></div>
              <div className='itemVo'>
              <div>name</div>
              <div>price</div>
              <div>introduction</div>
            </div>
            </div>
            <div className='item1'>
              <div className='itemImg'></div>
              <div className='itemVo'>
              <div>name</div>
              <div>price</div>
              <div>introduction</div>
            </div>
            </div>
           

        </div>
      </div>
      <div className='bottom'>
        <div> Nourish King</div>
      </div>
    </div>
  );
}

export default Product;