// store/userStore.js
import { create } from 'zustand';

const initialMembers = [
    {
        id: 1,
        name: 'af',
        tel: '010-1111-2222',
        password: 'a1234',
        loginId: 'af',
    },
];

const useUserStore = create((set, get) => {
    let no =
        (localStorage.getItem('members')
            ? JSON.parse(localStorage.getItem('members')).length
            : initialMembers.length) + 1;

    const members = localStorage.getItem('members')
        ? JSON.parse(localStorage.getItem('members'))
        : initialMembers;

    const authed = localStorage.getItem('authed')
        ? JSON.parse(localStorage.getItem('authed'))
        : false;

    const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

    return {
        members,
        authed,
        user,

        login: (payload) => {
            const { name, loginId } = payload;
            set({ authed: true, user: { name, loginId } });
            localStorage.setItem('authed', JSON.stringify(true));
            localStorage.setItem('user', JSON.stringify({ name, loginId }));
        },

        loginSuccess: (user) => {
            set({ authed: true, user });
            localStorage.setItem('authed', JSON.stringify(true));
            localStorage.setItem('user', JSON.stringify(user));
        },

        logout: () => {
            set({ authed: false, user: null });
            localStorage.setItem('authed', JSON.stringify(false));
            localStorage.removeItem('user');
        },

        signup: (payload) => {
            const newMember = { ...payload, id: no++ };
            set((state) => {
                const updatedMembers = [...state.members, newMember];
                localStorage.setItem('members', JSON.stringify(updatedMembers));
                return { members: updatedMembers };
            });
        },
    };
});

export default useUserStore;
