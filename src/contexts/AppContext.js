import { createContext, useContext } from "react";

export const AppContext = createContext({
  scrollY: 0,
  homeLinkRef: null,
  isAccordionOpen: false,
  setIsAccordionOpen: () => {},
});

export const useAppContext = () => useContext(AppContext);
