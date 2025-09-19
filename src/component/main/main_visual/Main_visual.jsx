import './style.scss';
import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// GSAP 플러그인 등록
gsap.registerPlugin(ScrollTrigger, useGSAP);

const vis = [
    {
        id: 1,
        img: '/images/main/visual00.jpg',
        right: 'Play',
        left: 'It',
        class: 'first',
    },
    {
        id: 2,
        img: '/images/main/visual02.jpg',
        right: 'Feel',
        left: 'It',
        class: 'second',
    },
    {
        id: 3,
        img: '/images/main/visual03.jpg',
        right: 'Love',
        left: 'It',
        class: 'third',
    },
];

const Main_visual = () => {
    const sectionRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    useGSAP(
        () => {
            const visuals = gsap.utils.toArray('.visual');
            const totalSlides = visuals.length;
            const slideHeight = window.innerHeight;

            // 초기 상태 설정
            gsap.set(visuals, {
                zIndex: (i) => (i === 0 ? 10 : 5 - i),
            });

            // 첫 번째 슬라이드 (센터)
            gsap.set(visuals[0], {
                opacity: 1,
                scale: 1,
                y: 0,
                z: 0,
            });

            // 두 번째 슬라이드 (위) - Y값 조정으로 겹침 정도 변경 가능
            gsap.set(visuals[1], {
                opacity: 0.3,
                scale: 0.75,
                y: -slideHeight * 0.35,
                z: -300,
            });

            // 세 번째 슬라이드 (아래) - Y값 조정으로 겹침 정도 변경 가능
            gsap.set(visuals[2], {
                opacity: 0.3,
                scale: 0.75,
                y: slideHeight * 0.35,
                z: -300,
            });

            // 텍스트 초기 상태
            gsap.set('.visual strong', {
                opacity: 0,
                y: 15,
            });

            // 중앙 슬라이드 텍스트만 보이게
            gsap.set(visuals[0].querySelectorAll('strong'), {
                opacity: 1,
                y: 0,
            });

            // 스크롤 트리거 설정
            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: 'top top',
                end: () => `+=${slideHeight * (totalSlides - 1)}`,
                pin: true,
                scrub: 1,
                markers: false,
                onUpdate: (self) => {
                    // 진행도를 0과 1 사이로 제한 (마지막 슬라이드 이후 변화 방지)
                    const progress = Math.min(Math.max(self.progress, 0), 1);
                    const activeIndex = Math.min(
                        Math.floor(progress * totalSlides),
                        totalSlides - 1
                    );

                    // 현재 슬라이드 업데이트
                    setCurrentSlide(activeIndex);

                    visuals.forEach((visual, i) => {
                        // 현재 슬라이드의 위치 계산
                        let targetY = 0;
                        let targetZ = 0;
                        let targetOpacity = 0.3;
                        let targetScale = 0.75;
                        let textOpacity = 0;

                        // 슬라이드 위치에 따른 상태 설정
                        if (i === activeIndex) {
                            // 현재 활성화된 슬라이드 (센터)
                            targetY = 0;
                            targetZ = 0;
                            targetOpacity = 1;
                            targetScale = 1;
                            textOpacity = 1;
                        } else if (i === (activeIndex + 1) % totalSlides) {
                            // 다음 슬라이드 (위)
                            targetY = -slideHeight * 0.35;
                            targetZ = -300;
                        } else {
                            // 이전 슬라이드 (아래)
                            targetY = slideHeight * 0.35;
                            targetZ = -300;
                        }

                        // 슬라이드 애니메이션
                        gsap.to(visual, {
                            y: targetY,
                            z: targetZ,
                            opacity: targetOpacity,
                            scale: targetScale,
                            duration: 0.5,
                        });

                        // 텍스트 애니메이션
                        gsap.to(visual.querySelectorAll('strong'), {
                            opacity: textOpacity,
                            y: textOpacity ? 0 : 15,
                            duration: 0.3,
                        });

                        // z-index 관리
                        gsap.set(visual, {
                            zIndex: i === activeIndex ? 10 : 5 - Math.abs(i - activeIndex),
                        });
                    });
                },
            });
        },
        { scope: sectionRef }
    );

    return (
        <section id="main-visual" ref={sectionRef}>
            <div className="visual_wrap">
                {vis.map((item, index) => (
                    <div className={`visual ${item.class}_visual`} key={item.id}>
                        <strong className="right-text">{item.right}</strong>
                        <div className="pic">
                            <img src={item.img} alt={item.right} />
                        </div>
                        <strong className="left-text">{item.left}</strong>
                    </div>
                ))}
            </div>

            {/* 페이지 인디케이터 - 현재 슬라이드에 따라 업데이트 */}
            <div className="page-indicator">
                <span className="current">{(currentSlide + 1).toString().padStart(2, '0')}</span>
                <span className="separator">/</span>
                <span className="total">03</span>
            </div>
        </section>
    );
};

export default Main_visual;
