export const usemainAlbumStore = create((set) => ({
  playlists: [], // 앱 전체 플레이리스트
  setPlaylists: (newPlaylists) => set({ playlists: newPlaylists }),
}));
