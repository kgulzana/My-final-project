import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchQuotes } from "../store/actions/quotes";

export default function Quotes() {
  let { loading, quotes } = useSelector((state) => state.quotes);
  const [activeQuote, setActiveQuote] = useState(null);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuotes());
  }, []);

  useEffect(() => {
    let quoteIndex = Math.floor(Math.random() * quotes.length);
    setActiveQuote(quotes[quoteIndex]);
  }, [quotes]);

  return (
    <>
      {!activeQuote ? (
        <>loading</>
      ) : (
        <div className="col-xs-12 col-sm-12 col-md-12 col-12 quotes-m">
          <p className="quotes">
            {activeQuote.author}: "{activeQuote.text}"
          </p>
        </div>
      )}
    </>
  );
}
