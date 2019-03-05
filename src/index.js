import React, { useState, useMemo } from "react";
import ReactDOM from "react-dom";
import mock from "./data.generated.json";
import useUserCrawling from "./useUserCrawling";
import "./styles.css";

function useVirtualize(data, h) {
  let [offset, setOffset] = useState(0);
  let start = Math.floor(offset / h);
  const containerStyle = useMemo(() => ({ height: `${data.length * h}px`, paddingTop: `${start * h}px` }), [offset])

  return [
    data.slice(start, start + 20), // data to display
    offset => {
      // offset setter
      setOffset(Math.max(0, offset));
    },
     containerStyle
  ];
}

function List({ initialData }) {
  let [data, setOffset, containerStyle] = useVirtualize(initialData, 30);

  const handleScroll = e => {
    setOffset(e.target.scrollTop);
  };

  return (
    <div className="App">
      <div className="wrapper" onScroll={handleScroll}>
        <div className="container" style={containerStyle}>
          {data.map(i => (
            <div key={i.name} className="row">
              <img src={i.avatar} />
              <span>{i.name}</span>
              <span>{i.country}</span>
              <span>{i.lastSeen}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function App() {
  const data = useUserCrawling(mock);
  return <List initialData={data} />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
