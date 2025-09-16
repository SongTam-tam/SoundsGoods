import { useState } from 'react';
import './style.scss';

const Magazine3 = () => {
    const articles = [
        { title: '골든 밤스터의 동남향 발라드, 정국 (GOLDEN)', date: '2025.08.20' },
        {
            title: '관객에서 축원한 감정들을 모으고 있어, Troye Sivan [Something To Give Each Other]',
            date: '2025.08.19',
        },
        { title: '한게 없는 음악 세계를 담아내다, NCT 127 [Fact Check]', date: '2025.08.12' },
        {
            title: '괜찮 성취감없이 사람한 아티스트 4 - BLACKPINK 편 (젠리의 전달)',
            date: '2025.08.01',
        },
        { title: "크아 다른 Money Swagg, Ariana Grande '7 Rings'", date: '2025.07.30' },
        { title: '음악 산업을 빛낸 여성들의 축제, 빌보드 위민 인 뮤직 2025', date: '2025.07.26' },
        { title: '불멍의 출근 출격!', date: '2025.07.06' },
        { title: '내려와라는 이름의 패기, Zion.T [Zip]', date: '2025.06.30' },
        { title: '화제를 몰고 올 수밖에 없는 이유, 태연 (TAEYEON) [To. X]', date: '2025.06.13' },
        {
            title: '성숙을 넘어 한층으로, 더보이즈 (THE BOYZ) [PHANTASY Pt. 2 Sixth Sense]',
            date: '2025.05.22',
        },
        { title: '골든 밤스터의 동남향 발라드, 정국 (GOLDEN)', date: '2025.05.21' },
        {
            title: '관객에서 축원한 감정들을 모으고 있어, Troye Sivan [Something To Give Each Other]',
            date: '2025.05.05',
        },
        { title: '한게 없는 음악 세계를 담아내다, NCT 127 [Fact Check]', date: '2025.04.27' },
        {
            title: '괜찮 성취감없이 사람한 아티스트 4 - BLACKPINK 편 (젠리의 전달)',
            date: '2025.04.18',
        },
        { title: "크아 다른 Money Swagg, Ariana Grande '7 Rings'", date: '2025.04.16' },
    ];

    const [page, setPage] = useState(1);
    const itemsPerPage = 5; // 한 페이지당 보여줄 개수

    // 현재 페이지 데이터
    const startIndex = (page - 1) * itemsPerPage;
    const currentData = articles.slice(startIndex, startIndex + itemsPerPage);

    // 총 페이지 수
    const totalPages = Math.ceil(articles.length / itemsPerPage);

    return (
        <div className="content3">
            <div className="table-header">
                <h3>매거진 카테고리 글</h3>
                <a href="#">전체보기</a>
            </div>

            <table>
                <tbody>
                    {currentData.map((item, index) => (
                        <tr key={index}>
                            <td className="title">{item.title}</td>
                            <td className="date">{item.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="pagination">
                <button
                    onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                    disabled={page === 1}
                >
                    〈 이전
                </button>
                <span>
                    {page} / {totalPages}
                </span>
                <button
                    onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={page === totalPages}
                >
                    다음 〉
                </button>
            </div>
        </div>
    );
};

export default Magazine3;
