//import Cart from "../components/Cart/Cart";
import CartContext from "./cart-context";

const CartProvider=(props)=>{

    const AddItemtoCartHandler=item=>{

    }

    const RemoveItemFromHandler=id=>{

    }
const cartContext={
    items:[],
    totalAmount:0,
    AddItem: AddItemtoCartHandler,
    RemoveItem: RemoveItemFromHandler

}

return <CartContext.Provider value={cartContext}>
{props.children}
</CartContext.Provider>
}

export default CartProvider;