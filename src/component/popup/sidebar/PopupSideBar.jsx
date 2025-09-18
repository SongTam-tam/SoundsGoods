import { useState, useRef } from 'react';
import './style.scss';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/locale';
import { registerLocale } from 'react-datepicker';
import { isSameMonth } from 'date-fns';
registerLocale('ko', ko);
const PopupSideBar = () => {
    const [startDate, setStartDate] = useState(new Date());
    const datePickerRef = useRef();

    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
        const weekday = weekdays[date.getDay()];
    
        return `${year} .${month < 10 ? '0' + month : month} .${day < 10 ? '0' + day : day} (${weekday}) ~`;
    };
    const isSameMonthDate = (date) => {
        return isSameMonth(date, startDate);
    };
    const handleButtonClick = () => {
        datePickerRef.current.setOpen(true);
    };
    const close = () => {
        datePickerRef.current.setOpen(false);
    };
    const renderCustomHeader = ({
        date,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
    }) => {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;

        return (
            <div className="custom-datepicker-header">
                <div className="hh_con">
                    <div className="header-text">날짜 선택</div>
                    <button onClick={close}>
                        <img src="/images/icons/close2.png" alt="" />
                    </button>
                </div>
                <div className="header_date">
                    <button
                        type="button"
                        onClick={decreaseMonth}
                        disabled={prevMonthButtonDisabled}
                        className="nav_button_left"
                    >
                        <img src="/images/icons/left_date.png" alt="" />
                    </button>
                    <div className="month-year-display">
                        {year}, {month < 10 ? `0${month}` : month}
                    </div>
                    <button
                        type="button"
                        onClick={increaseMonth}
                        disabled={nextMonthButtonDisabled}
                        className="nav_button_right"
                    >
                        <img src="/images/icons/right_date.png" alt="" />
                    </button>
                </div>
                <div className="bootom_button">
                    <button>날짜 지정 완료</button>
                </div>
            </div>
        );
    };
    return (
        <div className="popup_side_bar">
            <div className="side_con">
                <h2>팝업 스토어 찾기</h2>
                <div className="date_pi_">
                    <div className="sort_text">
                        <p>날짜</p>
                        <img src="images/icons/black_top.png" alt="" />
                    </div>

                    <p className="data_style">{formatDate(startDate)}</p>

                    <button className="date-select-button" onClick={handleButtonClick}>
                        <span>날짜 직접 선택</span>
                    </button>

                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        ref={datePickerRef}
                        className="hidden-datepicker"
                        locale="ko"
                        dateFormat="yyyy,MM"
                        popperPlacement="right-end"
                        renderCustomHeader={renderCustomHeader}
                        showPopperArrow={false}
                        monthsShown={1}
                        filterDate={isSameMonthDate}
                    />
                </div>
            </div>
            {/* side_con */}
            <div className="mark_con">
                <div className="sort_text">
                    <p>위치</p>
                    <img src="images/icons/black_top.png" alt="" />
                </div>
                <div className="ul_content">
                    <ul>
                        <li>서울</li>
                        <li>경기 /인천</li>
                    </ul>
                    <ul>
                        <li>전라 / 광주</li>
                        <li>강원 / 대전</li>
                    </ul>
                    <ul>
                        <li>충청</li>
                        <li>경남 / 부산 / 울산</li>
                    </ul>
                    <ul>
                        <li>경북 / 대구</li>
                        <li>제주</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PopupSideBar;
