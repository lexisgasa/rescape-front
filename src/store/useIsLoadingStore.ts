import { create } from "zustand";

interface LoadingStoreStructure {
  isLoading: boolean;
  setIsLoading: (load: boolean) => void;
}

const useIsLoadingStore = create<LoadingStoreStructure>((set) => ({
  isLoading: false,
  setIsLoading: (load: boolean) =>
    set(() => ({
      isLoading: load,
    })),
}));

export default useIsLoadingStore;
