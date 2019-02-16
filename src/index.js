import React from "react";
import ReactDOM from "react-dom";
import mock from "./data.generated.json";
import useUserCrawling from "./useUserCrawling";
import "./styles.css";

function useVirtualize(data, h) {}

function List({ initialData }) {
  const handleScroll = e => {};

  return (
    <div className="App">
      <div className="wrapper" onScroll={handleScroll}>
        <table className="container">
          <thead>
            <tr>
              <th />
              <th>Name</th>
              <th>Country</th>
              <th>Last seen</th>
            </tr>
          </thead>
          {initialData.map(i => (
            <tr key={i.number} className="row">
              <td>
                <img src={i.avatar} />
              </td>
              <td>{i.name}</td>
              <td>{i.country}</td>
              <td>{i.lastSeen}</td>
            </tr>
          ))}
        </table>
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
