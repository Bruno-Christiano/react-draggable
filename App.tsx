import * as React from 'react';
import Draggable from 'react-draggable';
import Machine from './Machine';
import './style.css';

export default function App() {
  const [items, setItems] = React.useState([
    { id: 1, text: 'Item 1', x: 413, y: 90 },
    { id: 2, text: 'Item 2', x: 66, y: -38 },
  ]);

  function handleDrag(event, data, item) {
    const { x, y } = data;
    console.log(x, y);
  }
  return (
    <div
      style={{
        maxWidth: '800px',
        height: '800px',
        border: '1px solid red',
        position: 'relative',
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
          <div style={{ width: '40px', background: 'blue' }}>{item.text}</div>
        </Draggable>
      ))}
    </div>
  );
}
