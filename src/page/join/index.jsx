import React from 'react';
import JoinModal from '../../component/modal/login/Join/JoinModal';

const Join = ({ onClose }) => {
    return (
        <div className="overray">
            <JoinModal onClose={onClose} />
        </div>
    );
};

export default Join;
