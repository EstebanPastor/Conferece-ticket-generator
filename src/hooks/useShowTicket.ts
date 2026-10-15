import { useContext } from "react";
import { ShowTicketContext } from "../context/ShowTicket";

export const useShowTicket = () => {
  const context = useContext(ShowTicketContext);

  if (!context) {
    throw new Error("userShowTicket can be used in a ShowTicketProvider");
  }

  return context;
};
