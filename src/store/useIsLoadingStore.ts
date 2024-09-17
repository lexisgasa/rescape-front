import { create } from "zustand";

interface loadingStoreStructure {
  isLoading: boolean;
  setIsLoading: (load: boolean) => void;
}

const useIsLoadingStore = create<loadingStoreStructure>((set) => ({
  isLoading: false,
  setIsLoading: (load: boolean) =>
    set(() => ({
      isLoading: load,
    })),
}));

export default useIsLoadingStore;
