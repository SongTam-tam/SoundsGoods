import React, { useEffect } from 'react';
import { useGoodsStore } from '../../store';
import './style.scss'
const Payment = () => {
        const { itemTotal, paymentTotal, cartItemCount, cart } = useGoodsStore();
        const { updateTotals } = useGoodsStore();
        useEffect(() => {
            updateTotals();
        }, [itemTotal, cart]);
    return (
        <div className='payment_style'>
             <div className="total_price_box">
                <h3>TOTAL</h3>
                <ul className="price_cnt">
                    {cart.map(item=><li>
                        <span>상품금액</span>
                        <p>+ {item.totalPrice} 원</p>
                    </li>)}
                   
                    <li>
                        <span>배송비</span>
                        <p>+ 3,000원</p>
                    </li>
                    <li>
                        <span>할인 금액</span>
                        <p>- 1,000원</p>
                    </li>
                </ul>
                <p className="payment_price">
                    <span>총 결제 금액</span>
                    <strong>{paymentTotal.toLocaleString()}원</strong>
                </p>
                <div className="chk_box_content">
                    <div className="form_con form_con1  all_chk">
                        <input type="checkbox" name="chk1" id="chk1" />
                        <label htmlFor="chk1"></label>
                        <span>약관 모두 동의</span>
                    </div>
                    <div className="form_con form_con2">
                        <input type="checkbox" name="chk2" id="chk2" />
                        <label htmlFor="chk2"></label>
                        <span>(필수) 서비스 이용 약관에 동의합니다</span>
                    </div>
                    <div className="form_con form_con3">
                        <input type="checkbox" name="chk3" id="chk3" />
                        <label htmlFor="chk3" for="chk3"></label>
                        <span>(필수) 개인 정보 수집 및 이용 동의</span>
                    </div>
                    <div className="form_con form_con4">
                        <input type="checkbox" name="chk4" id="chk4" />
                        <label htmlFor="chk4"></label>
                        <span>(선택) 광고성 정보 수신 동의</span>
                    </div>
                </div>
                <p className="payment_btn">
                    <button>{paymentTotal.toLocaleString()}원 주문하기</button>
                </p>
            </div>
        </div>
    );
};

export default Payment;