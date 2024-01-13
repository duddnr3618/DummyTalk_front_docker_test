import { devtools } from "zustand/middleware";
import { createWithEqualityFn } from "zustand/traditional";

export const useChatData = createWithEqualityFn(
  devtools((set) => ({
    data: [],
    setData: (data) => set({ data: data }),
    updateData: (data) => set((prev) => ({ data: [...prev.data, data] })),
  }))
);
