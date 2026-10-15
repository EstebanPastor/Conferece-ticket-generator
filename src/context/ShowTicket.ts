import { createContext, Dispatch, SetStateAction } from "react";

export interface ShowTicketContextType {
  showTicket: boolean;
  setShowTicket: Dispatch<SetStateAction<boolean>>;
}

export const ShowTicketContext = createContext<ShowTicketContextType>({
  showTicket: false,
  setShowTicket: () => {},
});
