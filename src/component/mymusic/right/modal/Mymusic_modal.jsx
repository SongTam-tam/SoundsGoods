import React from 'react';

const Mymusic_modal = () => {
    return (
        <div className="Mymusic_modal">
            <div className="modal_img">
                <img src="../../../../../public/images/mymusic/playlist.png" alt="" />
            </div>
            <div className="right_text">
                <div className="title">
                    <h2>음악제목</h2>
                    <div className="subtitle">
                        <p>음악제목</p>
                    </div>
                    <div className="modalbtn">
                        <img src="../../../../../public/images/mymusic/modalbtn/btn1.png" alt="" />
                        <img src="../../../../../public/images/mymusic/modalbtn/btn2.png" alt="" />
                        <img src="../../../../../public/images/mymusic/modalbtn/btn3.png" alt="" />
                        <img src="../../../../../public/images/mymusic/modalbtn/btn4.png" alt="" />
                        <img src="../../../../../public/images/mymusic/modalbtn/btn5.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mymusic_modal;
