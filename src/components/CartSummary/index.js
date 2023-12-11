import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.map(each => {
        total += each.quantity * each.price
        return total
      })
      const onClickCheckOut = () => {
        console.log('Checking out...')
        alert('Order Placed Successfully !!')
      }
      return (
        <>
          <div className="cart-summary-container">
            <h1 className="order-total-value">
              <span className="order-total-label">Order Total:</span> RS {total}{' '}
              /-
            </h1>
            <p className="total-items">{cartList.length} items in cart</p>
            <button
              type="button"
              className="checkout-button d-sm-none"
              onClick={onClickCheckOut}
            >
              Place Order
            </button>
          </div>
          <button
            type="button"
            className="checkout-button d-lg-none"
            onClick={onClickCheckOut}
          >
            Place Order
          </button>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
