import { create } from "zustand";

const useStore = create((set) => ({
  username: "",
  handleChangeUsername: (e) => set({ username: e.target.value }),
  isLoggedIn: false,
  toggleLoggedIn: () => set({isLoggedIn: true})
}));

export default useStore;
  