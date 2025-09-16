import React, { useState, useEffect, useRef } from 'react';
import './style.scss';

const teamMembers = [
    {
        name: '로제(ROSÉ)',
        role: '25.09.01 ~ 25.12.31',
        ff: '말레이시아, 쿠알라룸푸르',
        img: '/images/main/main_con6_01.jpg',
    },
    {
        name: 'Futurea canvas 2025',
        role: '25.09.25 ~ 25.09.06',
        ff: '서울 강남구 가로수길',
        img: '/images/main/main_con6_02.jpg',
    },
    {
        name: 'ADA POP-UP STORE – Ado',
        role: '25.08.21 ~ 25.09.03',
        ff: '서울 중구 명동길 60',
        img: '/images/main/main_con_03.jpg',
    },

    {
        name: 'AHOF – “WHO WE ARE”',
        role: '2025. 9. 1 ~ 2025. 9. 10',
        ff: '영등포 타임스퀘어',
        img: 'https://images.unsplash.com/photo-1655249481446-25d575f1c054?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    },
    {
        name: '2025 레코드 팝업스토어',
        role: '25.09.15 ~ 25.12.30',
        ff: '인천 개항장 인근',
        img: '/images/main/main_con6_04.jpg',
    },
];

const PopupSwiperItem = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const updateCarousel = (newIndex) => {
        if (isAnimating) return;
        setIsAnimating(true);
        const total = teamMembers.length;
        setCurrentIndex((newIndex + total) % total);
        setTimeout(() => setIsAnimating(false), 800);
    };

    const handleSwipe = () => {
        const diff = touchStartX.current - touchEndX.current;
        if (Math.abs(diff) > 50) {
            if (diff > 0) updateCarousel(currentIndex + 1);
            else updateCarousel(currentIndex - 1);
        }
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') updateCarousel(currentIndex - 1);
            if (e.key === 'ArrowRight') updateCarousel(currentIndex + 1);
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [currentIndex]);

    return (
        <div className="popup_item">
            <div
                className="carousel-container"
                onTouchStart={(e) => (touchStartX.current = e.changedTouches[0].screenX)}
                onTouchEnd={(e) => {
                    touchEndX.current = e.changedTouches[0].screenX;
                    handleSwipe();
                }}
            >
                <div className="carousel-track">
                    {teamMembers.map((member, i) => {
                        let className = 'card hidden';
                        const offset = (i - currentIndex + teamMembers.length) % teamMembers.length;
                        if (offset === 0) className = 'card center';
                        else if (offset === 1) className = 'card right-1';
                        else if (offset === 2) className = 'card right-2';
                        else if (offset === teamMembers.length - 1) className = 'card left-1';
                        else if (offset === teamMembers.length - 2) className = 'card left-2';

                        return (
                            <div key={i} className={className} onClick={() => updateCarousel(i)}>
                                <img src={member.img} alt={member.name} />
                                <div className="textBox">
                                    <strong>{member.name}</strong>
                                    <span>{member.role}</span>
                                    <em>{member.ff}</em>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default PopupSwiperItem;
