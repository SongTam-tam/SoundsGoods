import React, { useEffect, useState } from 'react';
import { useGoodsStore } from '../../store';
import './style.scss'
import PayList from './payList/PayList';
import PayForm from './payInput/PayForm';
const Payment = () => {
    const { itemTotal, paymentTotal, payment, completePush } = useGoodsStore();
    const { updateTotals2 } = useGoodsStore();
    const [allChk, setAllChk] = useState(false);
    const [chk, setChk] = useState({
        service: false,
        privacy: false,
        marketing: false
    });
    
    // PayForm에서 입력한 데이터를 저장할 상태
    const [formData, setFormData] = useState({
        recipient: '',
        phone: '',
        zipcode: '',
        address: '',
        detailAddress: '',
        memo: ''
    });

    const AllChk = (e) => {
        const on = e.target.checked;
        setAllChk(on);
        setChk({
            service: on,
            privacy: on,
            marketing: on
        });
    };

    const onChk = (e) => {
        const { name, checked } = e.target;
        setChk(prev => ({
            ...prev,
            [name]: checked
        }));
    };

    const {service, privacy, marketing} = chk;

    useEffect(() => {
        updateTotals2();
    }, [itemTotal, payment]);

    useEffect(() => {
        const { service, privacy, marketing } = chk;
        setAllChk(service && privacy && marketing);
    }, [chk]);

    
    const handleOrder = () => {
        if(!formData.recipient ||!formData.phone ||!formData.zipcode ||!formData.address ||!formData.detailAddress ||!formData.memo ){
            alert('빈칸을 채워주세요')
            return
        }
        if (!service || !privacy) {
            alert('필수 약관에 동의해주세요.');
            return;
        }

    
        const orderData = {
            items: [...payment], 
            formData: {...formData}, 
            totalPrice: paymentTotal,
            orderDate: new Date().toISOString(),
            orderStatus: '결제완료'
        };

        completePush(orderData);
        toast('주문이 완료되었습니다.');
        // 주문 완료 후 리다이렉트 또는 상태 초기화
    };

    // PayForm에서 데이터를 받아오는 함수
    const handleFormDataChange = (data) => {
        setFormData(data);
    };
    return (
        <div className='payment_style'>
            <div className="pay_list_content">
                <div className="title_box_con">
                <h2 className='pay_title_con'>주문상품 {`(총 ${payment.length})`}</h2>
                <img src="images/icons/black_top.png" alt="" />
                </div>
                <PayList/>
                <h2 className="delivery_addr">
                    배송지 정보 입력
                </h2>
                <PayForm onFormDataChange={handleFormDataChange}/>
            </div>
             <div className="total_price_box">
                <h3>TOTAL</h3>
                <ul className="price_cnt">
                    {payment.map(item=><li>
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
                        <input type="checkbox" name="chk1" id="chk1" checked={allChk} onChange={AllChk}/>
                        <label htmlFor="chk1"></label>
                        <span>약관 모두 동의</span>
                        <img src="images/icons/black_top.png" alt="" />
                    </div>
                    <div className="form_con form_con2">
                        <input type="checkbox" name="service" id="chk2"  checked={service} onChange={onChk}/>
                        <label htmlFor="chk2"></label>
                        <span>(필수) 서비스 이용 약관에 동의합니다</span>
                    </div>
                    <div className="form_con form_con3">
                        <input type="checkbox" name="privacy" id="chk3"  checked={privacy} onChange={onChk}/>
                        <label htmlFor="chk3" for="chk3"></label>
                        <span>(필수) 개인 정보 수집 및 이용 동의</span>
                    </div>
                    <div className="form_con form_con4">
                        <input type="checkbox" name="marketing" id="chk4"  checked={marketing} onChange={onChk}/>
                        <label htmlFor="chk4"></label>
                        <span>(선택) 광고성 정보 수신 동의</span>
                    </div>
                </div>
                <p className="payment_btn" onClick={handleOrder}>
                    <button>{paymentTotal.toLocaleString()}원 주문하기</button>
                </p>
            </div>
        </div>
    );
};

export default Payment;