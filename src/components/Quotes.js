import { useEffect, useState } from "react";

export default function Quotes() {
  const quotes = [
    "Вселенная",
    "Лунных хроник",
    "продолжает",
    "Вселенная",
    "Лунных хроник",
    "продолжает",
    "Вселенная",
    "Лунных хроник",
    "продолжает",
    "Вселенная",
    "Лунных хроник",
    "продолжает",
  ];

  const [activeQuote, setActiveQuote] = useState(quotes[0]);

  useEffect(() => {
    let quoteIndex = Math.floor(Math.random() * quotes.length);
    setActiveQuote(quotes[quoteIndex]);
  }, []);

  return (
    <div className="col-12">
      <div className="quotos">{activeQuote}</div>
    </div>
  );
}
