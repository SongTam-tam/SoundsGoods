import { useState } from 'react';
import top_1_50 from '../../../assets/api/musicComponents/top_1_50';
import Con2Top100Item from './Con2Top100Item';
import { Link } from 'react-router-dom';

const Con2Top100 = () => {
    const [Data, setData] = useState(top_1_50);

    return (
        <div className="con-inner">
            <h3>
                인기 차트 TOP 50
                <Link to="top100">
                    <img src="/images/streaming/more.png" alt="" />
                </Link>
            </h3>

            <ul className="top100-wrap">
                {Data.slice(0, 7).map((item) => (
                    <Con2Top100Item key={item.id} data={item} />
                ))}
            </ul>
        </div>
    );
};

export default Con2Top100;
