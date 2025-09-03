import { create } from 'zustand';

export const useFeatureStore = create((set) => ({
    inViewFeature: null,
    setinViewFeature: (feature) => set({ inViewFeature: feature }),
}))