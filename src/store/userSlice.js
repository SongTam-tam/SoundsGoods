import { create } from 'zustand';

const useUserStore = create((set) => ({
    isLoggedIn: false,
    userInfo: null,
    login: (user) => set({ isLoggedIn: true, userInfo: user }),
    logout: () => set({ isLoggedIn: false, userInfo: null }),
}));

export default useUserStore;
