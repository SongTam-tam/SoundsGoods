import './style.scss';

const Main_visual = () => {
    return (
        <section id="main-visual">
            <div className="visual_wrap">
                <div className="visual first_visual">
                    <strong>Play</strong>
                    <img src="/images/main/visual00.jpg" alt="" />
                    <strong>It</strong>
                </div>
                <div className="visual second_visual">
                    <strong>Play</strong>
                    <img src="/images/main/visual02.jpg" alt="" />
                    <strong>It</strong>
                </div>
                <div className="visual third_visual">
                    <strong>Play</strong>
                    <img src="/images/main/visual03.jpg" alt="" />
                    <strong>It</strong>
                </div>
            </div>
            {/* visual_wrap */}
        </section>
    );
};

export default Main_visual;
