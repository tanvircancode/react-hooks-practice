/* eslint-disable array-callback-return */

import React, { useEffect, useState } from "react";

export default function List({ getItems }) {
  const [items, setItems] = useState([]);
console.log(getItems)
  useEffect(() => {
    console.log('xx')
    setItems(getItems(5));
  console.log('calling');
    
  }, [getItems]);
  
  return (
    <div>
      {items.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
}
