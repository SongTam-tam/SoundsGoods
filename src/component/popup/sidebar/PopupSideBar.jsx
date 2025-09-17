import { useState } from 'react';
import './style.scss'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const PopupSideBar = () => {
    const [startDate, setStartDate] = useState(new Date());
    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
        const weekday = weekdays[date.getDay()];
        
        return `${year}/${month < 10 ? '0' + month : month}/${day < 10 ? '0' + day : day} (${weekday})`;
    };
    return (
        <div className='popup_side_bar'>
            <div className="side_con">
                <h2>팝업 스토어 찾기</h2>
                <div className="date_pi_">
                <div className="sort_text">
                        <p>날짜</p>
                        <img src="images/icons/black_top.png" alt="" />
                </div>
                <p className='data_style'>
                    {formatDate(startDate)}
                </p>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}/>
                </div>
            </div>
        </div>
    );
};

export default PopupSideBar;