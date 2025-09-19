import './style.scss';

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
    return (
        <section id="main-visual">
            <div className="visual_wrap">
                {vis.map((item) => (
                    <div className={`visual ${item.class}_visual`} key={item.id}>
                        <strong>{item.right}</strong>
                        <div className="pic">
                            <img src={item.img} alt="" />
                        </div>
                        <strong>{item.left}</strong>
                    </div>
                ))}
            </div>
            {/* visual_wrap */}
        </section>
    );
};

export default Main_visual;
