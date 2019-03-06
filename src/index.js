import React from "react";
import ReactDOM from "react-dom";
import mock from "./data.generated.json";
import useUserCrawling from "./useUserCrawling";
import "./styles.css";

function List({ initialData }) {
  const data = initialData;
  const handleScroll = e => {
  };

  return (
    <div className="App">
      <div className="wrapper" onScroll={handleScroll}>
        <div className="container">
          {data.map(i => (
            <div key={i.name} className="row">
              <img src={i.avatar} alt={i.name} />
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
