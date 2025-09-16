import LimitPopupList from './limitPopupList/LimitPopupList';
import PopupBtnList from './popupBtn/PopupBtnList';
import './style.scss';

const LimitPopup = () => {
    return (
        <div className="limit_popup">
            <h2>종료 임박 바로가야하는 곳만 모아뒀어요</h2>
            <PopupBtnList />
            <LimitPopupList />
        </div>
    );
};

export default LimitPopup;
