import { MerchantsResponse } from "@/types";

type BottomSheetContent = "filters" | "menu" | "profile" | null;

export interface BottomSheetState {
  isVisible: boolean;
  content: BottomSheetContent;
  showBottomSheet: (content: BottomSheetContent) => void;
  hideBottomSheet: () => void;
  snapPoints: (string | number)[];
  setSnapPoints: (points: (string | number)[]) => void;
}

export interface MerchantsStore {
  merchants: MerchantsResponse[];
  setMerchants: (merchants: MerchantsResponse[]) => void;
  getMerchantById: (id: string) => MerchantsResponse | undefined;
}