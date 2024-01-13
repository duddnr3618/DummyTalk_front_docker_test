import { devtools } from "zustand/middleware";
import { createWithEqualityFn } from "zustand/traditional";

export const useServerData = createWithEqualityFn(
  devtools((set) => ({
    data: undefined,
    setData: (data) => set({ data: data }),
    updateChannelListData: (data) => set((prev) => ({ data: { ...prev.data, channelDtoList: [...prev.data.channelDtoList, data]}  })),
  }))
);
