import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
    Main,
    Oauth,
    Streaming,
    Artist,
    ArtistInfo,
    Genre,
    LatestMusic,
    Top100,
    Mymusic,
    Magazine,
    Goods,
    GoodsDetail,
    Cart,
} from './page';
import Layout from './common/Layout';
import './styled/reset.scss';
import Mymusic_Access from './component/mymusic/access/Mymusic_Access';
import Search from './page/search';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Main />} />
                        <Route path="oauth" element={<Oauth />} />
                        <Route path="mymusic" element={<Mymusic />} />
                        <Route path="search/:text" element={<Search />} />
                        <Route path="mymusic/access" element={<Mymusic_Access />} />
                        <Route path="magazine" element={<Magazine />} />
                        <Route path="cart" element={<Cart />} />

                        <Route path="goods">
                            <Route index element={<Goods />} />

                            <Route path=":goodsID" element={<GoodsDetail />} />
                        </Route>
                        <Route path="streaming">
                            <Route index element={<Streaming />} />
                            <Route path="artist" element={<Artist />} />

                            <Route path="artistinfo/:id" element={<ArtistInfo />} />

                            <Route path="genre" element={<Genre />} />
                            <Route path="genre/:title" element={<Genre />} />

                            <Route path="latestmusic" element={<LatestMusic />} />
                            <Route path="top100" element={<Top100 />} />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};
export default App;
