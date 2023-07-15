import {create} from 'zustand';

export const useScreenStore = create((set) => ({
  screen: 'HOME',
  setScreen: (screen) => set({screen}),
}));
