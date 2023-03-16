import * as React from 'react';
import Draggable from 'react-draggable';
import Machine from './Machine';
import './style.css';

export default function App() {
  const [items, setItems] = React.useState([
    { id: 1, text: 'Item 1', x: 0, y: 0 },
    { id: 2, text: 'Item 2', x: 10, y: 0 },
  ]);

  function handleDrag(event, data, item) {
    const { x, y } = data;
    console.log(x, y);
    const itemOne = items.find((i) => i.id === item.id);
    const itemIndex = items.findIndex((i) => i.id === item.id);
    console.log('item1', itemOne);
    console.log(itemIndex);

    // const newItem1 = { ...item1, x: item2.x, y: item2.y };
    // const newItem2 = { ...item2, x: item1.x, y: item1.y };

    // const newItems = [
    //   ...items.slice(0, item1Index),
    //   newItem1,
    //   ...items.slice(item1Index + 1, item2Index),
    //   newItem2,
    //   ...items.slice(item2Index + 1),
    // ];

    // console.log(newItems);

    // setItems(newItems);
  }
  return (
    <div
      style={{
        maxWidth: '800px',
        height: '800px',
        border: '1px solid red',
        position: 'relative',
        display: 'flex',
      }}
    >
      {items?.map((item) => (
        <Draggable
          bounds="parent"
          key={item.id}
          defaultPosition={{ x: item.x, y: item.y }}
          // position={{ x: item.x, y: item.y }}
          onDrag={(event, data) => handleDrag(event, data, item)}
        >
          <div style={{ width: '40px', height: '40px', background: 'gray' }}>
            {item.text}
          </div>
        </Draggable>
      ))}
    </div>
  );
}
