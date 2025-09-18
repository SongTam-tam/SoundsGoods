import { useState, useEffect } from 'react';
import './style.scss'

const payData = [
    {
        id:1,
        con:'신용카드',
        isOn:true,
    },
    {
        id:2,
        con:'휴대폰 결제',
        isOn:false,
    },
    {
        id:3,
        con:'간편결제',
        isOn:false,
    },
    {
        id:4,
        con:'카카오페이',
        isOn:false,
    },
]

const PayForm = ({ onFormDataChange }) => {
    const [data, setData] = useState(payData);
    const [formData, setFormData] = useState({
        recipient: '',
        phone: '',
        zipcode: '',
        address: '',
        detailAddress: '',
        memo: ''
    });

    const onOff = (x) => {
        setData(data.map(item => item.id === x ? {...item, isOn:true} : {...item, isOn:false}));
    };

 
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };


    useEffect(() => {
        if (onFormDataChange) {
            onFormDataChange(formData);
        }
    }, [formData, onFormDataChange]);

    return (
        <div className='pay_delivery_form'>
            <div className="name_text_box">
                <strong>받으시는분</strong>
                <div className='con inp'>
                    <input 
                        type="text" 
                        name="recipient" 
                        placeholder='이름을 입력해 주세요.' 
                        value={formData.recipient}
                        onChange={handleInputChange}
                    />
                    <input 
                        type="text" 
                        name="phone" 
                        placeholder='휴대폰번호를 - 없이 입력해 주세요.' 
                        value={formData.phone}
                        onChange={handleInputChange}
                    />
                    <div className="cont">
                        <input type="checkbox" name="" id="chk_name" />
                        <label htmlFor="chk_name" className='chh'></label>
                        <span>주문자와 동일</span>
                    </div>
                </div>
            </div>
            
            <div className="addr_box">
                <strong>주소</strong>
                <div className='con inp'>
                    <div className="addr_text">
                        <input 
                            type="text" 
                            name="zipcode" 
                            placeholder='우편번호' 
                            value={formData.zipcode}
                            onChange={handleInputChange}
                        />
                        <button>주소검색</button>
                    </div>
                    <input 
                        type="text" 
                        name="address" 
                        placeholder='기본주소를 입력해 주세요.' 
                        value={formData.address}
                        onChange={handleInputChange}
                    />
                    <input 
                        type="text" 
                        name="detailAddress" 
                        placeholder='상세주소를 입력해 주세요.' 
                        value={formData.detailAddress}
                        onChange={handleInputChange}
                    />
                    <div className="cont">
                        <input type="checkbox" name="" id="chk_addr" />
                        <label htmlFor="chk_addr" className='chh'></label>
                        <span>최근 배송지</span>
                    </div>
                </div>
            </div>
            
            <div className="addr_memo">
                <strong>배송 메모</strong>
                <select 
                    name="memo" 
                    value={formData.memo}
                    onChange={handleInputChange}
                >
                    <option value="">배송메모를 선택해주세요</option>
                    <option value="문 앞에 두고가세요">문 앞에 두고가세요</option>
                    <option value="경비실에 맡겨주세요">경비실에 맡겨주세요</option>
                    <option value="배송전 문자주세요">배송전 문자주세요</option>
                    <option value="배송전 연락주세요">배송전 연락주세요</option>
                </select>
            </div>
            
            <div className="pay_content">
                <h3>결제수단</h3>
                <ul className="pay_content_list">
                    {data.map(item => (
                        <li 
                            key={item.id} 
                            className={item.isOn ? 'on' : ""} 
                            onClick={() => onOff(item.id)}
                        >
                            <span></span>
                            <strong>{item.con}</strong>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PayForm;