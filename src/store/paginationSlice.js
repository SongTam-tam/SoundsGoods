import { create } from 'zustand';

const usePaginationStore = create((set, get) => ({
    pageData: [],
    perPage: 10, // 페이지 당 아이템 수 store에서 관리
    currentPage: 1,
    totalPages: 1,

    setData: (data) =>
        set(() => {
            // const sortedData = [...data].sort((a, b) => a.id - b.id);
            const totalCount = data.length;
            const perPage = get().perPage;
            return {
                pageData: data,
                totalPages: Math.ceil(totalCount / perPage),
                currentPage: 1,
            };
        }),
    // set(() => {
    //     const sortedData = [...data].sort((a, b) => a.id - b.id);
    //     const totalCount = sortedData.length;
    //     const perPage = get().perPage;
    //     return {
    //         pageData: sortedData,
    //         totalPages: Math.ceil(totalCount / perPage),
    //         currentPage: 1,
    //     };
    // }),

    setCurrentPage: (num) =>
        set((state) => {
            if (num >= 1 && num <= state.totalPages) {
                return { currentPage: num };
            }
            return {};
        }),

    getCurrentPageData: () => {
        const { pageData, currentPage, perPage } = get();
        const start = (currentPage - 1) * perPage;
        return pageData.slice(start, start + perPage);
    },

    nextPage: () =>
        set((state) => {
            if (state.currentPage < state.totalPages) {
                return { currentPage: state.currentPage + 1 };
            }
            return {};
        }),

    prevPage: () =>
        set((state) => {
            if (state.currentPage > 1) {
                return { currentPage: state.currentPage - 1 };
            }
            return {};
        }),
}));

export default usePaginationStore;
