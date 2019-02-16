import React, { useEffect, useState } from "react";

export default function useUserCrawling(initialData) {
  const [data, setData] = useState(initialData);
  useEffect(() => {
    let lastSeenTimer = setInterval(() => {
      const index = Math.floor(Math.random() * 10000);
      setData(
        data.map((u, i) =>
          i === index
            ? {
                ...u,
                lastSeen: (new Date()).toLocaleString()
              }
            : u
        )
      );
    }, 50);

    let switchTimer = setInterval(() => {
      for (let i = 0; i < 10; i++) {
        const index = Math.floor(Math.random() * 10000);
        setData(data.filter((_, j) => j!== index));
      }


    }, 100);

    return () => {
      clearInterval(lastSeenTimer);
      clearInterval(switchTimer);
    };
  }, []);
  return data;
}
