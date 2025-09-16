import { useEffect } from 'react';
import { useGoodsStore } from '../../store';
import CartList from './cartList/CartList';
import './style.scss';
const ShoppingCart = () => {
    const { itemTotal, paymentTotal, cartItemCount, cart } = useGoodsStore();
    const { updateTotals } = useGoodsStore();
    useEffect(() => {
        updateTotals();
    }, [itemTotal, cart]);
    return (
        <div className="shopping_cart">
            <div className="shopping_item">
                <h3 className="all_select">
                    <button>전체 선택</button>
                </h3>
                {/* all_select */}
                <CartList />
                <p className="total_price">
                    <span>총 합계 금액</span>
                    <strong>₩ {itemTotal.toLocaleString()}</strong>
                </p>
            </div>
            {/* shopping_item */}
            <div className="total_price_box">
                <h3>TOTAL</h3>
                <ul className="price_cnt">
                    <li>
                        <span>상품금액</span>
                        <p>1000원</p>
                    </li>
                    <li>
                        <span>배송비</span>
                        <p>- 3,000원</p>
                    </li>
                    <li>
                        <span>할인 금액</span>
                        <p>- 1,000원</p>
                    </li>
                </ul>
                <p className="payment_price">
                    <span>총 결제 금액</span>
                    <strong>106,000원</strong>
                </p>
                <p className="payment_btn">
                    <button>구매하기</button>
                </p>
            </div>
            {/* total_price_box */}
        </div>
        // shopping_cart
    );
};

export default ShoppingCart;
