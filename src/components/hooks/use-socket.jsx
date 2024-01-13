import { devtools } from 'zustand/middleware';
import { createWithEqualityFn } from "zustand/traditional";

export const useSocket = createWithEqualityFn(devtools((set) => ({
    isConnected: false,
	socket: undefined,
    setSocket: (socket) => set({ isConnected: true, socket }),
})));
