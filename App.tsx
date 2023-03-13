import * as React from 'react';
import Draggable from 'react-draggable';
import Machine from './Machine';
import './style.css';

export default function App() {
  const [items, setItems] = React.useState([
    { id: 1, text: 'Item 1', x: 413, y: 90, height: 0 },
    { id: 2, text: 'Item 2', x: 66, y: -38 },
  ]);
  function addItem() {
    const newId = items.length + 1;
    const newItem = { id: newId, text: `Item ${newId}`, x: 0, y: 0 };
    setItems([...items, newItem]);
  }

  function handleDrag(event, data, item) {
    const { x, y } = data;
    console.log(x, y);
    const { width, height } = item;

    const minY = Math.max(
      0,
      ...items.filter((i) => i.id !== item.id).map((i) => i.y + i.height)
    );
    const maxY = Math.max(0, minY + height);

    const updatedItems = items.map((i) => {
      if (i.id === item.id) {
        return { ...i, x, y };
      } else {
        return i;
      }
    });

    if (y < minY) {
      item.y = minY;
      setItems(updatedItems);
    } else if (y + height > maxY) {
      item.y = maxY - height;
      setItems(updatedItems);
    } else {
      setItems(updatedItems);
    }
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
          bounds="body"
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
