import Pagination from '../pagination/Pagination';
import './style.scss';
import Top100Music from './top100music/Top100Music';

const Top100Wrap = () => {
    return (
        <section id="top100-wrap">
            <div className="inner">
                <Top100Music />
            </div>
        </section>
    );
};

export default Top100Wrap;
