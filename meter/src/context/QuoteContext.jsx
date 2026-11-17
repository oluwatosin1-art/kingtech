import { createContext, useContext, useState } from 'react';

const QuoteContext = createContext();

export function QuoteProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [prefill, setPrefill] = useState({});
  const openQuote = (data = {}) => { setPrefill(data); setOpen(true); };
  const closeQuote = () => setOpen(false);
  return (
    <QuoteContext.Provider value={{ open, openQuote, closeQuote, prefill }}>
      {children}
    </QuoteContext.Provider>
  );
}

export const useQuote = () => useContext(QuoteContext);