import { createWithEqualityFn } from "zustand/traditional";
import { devtools } from 'zustand/middleware';

export const useModal = createWithEqualityFn(devtools((set) => ({
    type: null,
    data: {},
    isOpen: false,
    onOpen: (type, data = {}) => set({ isOpen: true, type, data }),
    onClose: () => set({ type: null, isOpen: false }),
})));
