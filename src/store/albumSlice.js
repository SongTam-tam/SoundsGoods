import { create } from "zustand";

// 로컬스토리지에서 초기값 불러오기
const getLocalPlaylists = () =>
  JSON.parse(localStorage.getItem("playlists")) || [];
const getLocalSelected = () =>
  JSON.parse(localStorage.getItem("selectedPlaylist")) || null;

export const usePlaylistStore = create((set, get) => ({
  playlists: getLocalPlaylists(),
  selectedPlaylist: getLocalSelected(),

  addPlaylist: (name) => {
    if (!name.trim()) return;
    const newId = get().playlists.length
      ? get().playlists[get().playlists.length - 1].id + 1
      : 1;
    const newPlaylists = [...get().playlists, { id: newId, name, songs: [] }];
    localStorage.setItem("playlists", JSON.stringify(newPlaylists));
    set({ playlists: newPlaylists });
  },

  deletePlaylist: (id) => {
    const newPlaylists = get().playlists.filter((p) => p.id !== id);
    localStorage.setItem("playlists", JSON.stringify(newPlaylists));
    set({ playlists: newPlaylists });
    if (get().selectedPlaylist?.id === id) get().deselectPlaylist();
  },
  selectPlaylist: (playlist) => {
    localStorage.setItem("selectedPlaylist", JSON.stringify(playlist));
    set({ selectedPlaylist: playlist });
  },
  deselectPlaylist: () => {
    localStorage.removeItem("selectedPlaylist");
    set({ selectedPlaylist: null });
  },

  clearAll: () => {
    localStorage.removeItem("playlists");
    localStorage.removeItem("selectedPlaylist");
    set({ playlists: [], selectedPlaylist: null });
  },
}));
