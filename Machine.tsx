import { useState } from 'react';
import Draggable from 'react-draggable';
import * as React from 'react';

function Machine({ machine, onDrag }) {
  const [x, setX] = useState(machine.x);
  const [y, setY] = useState(machine.y);

  const handleDrag = (e, { x, y }) => {
    const newX = x < 0 ? 0 : x;
    const newY = y < 0 ? 0 : y;

    setX(x);
    setY(y);

    onDrag(machine.id, x, y);
  };

  return (
    <Draggable position={{ x, y }} onDrag={handleDrag}>
      <div>
        {/* o conteúdo da máquina aqui */}
        <img src={machine.icon} alt={machine.nameMachine} />
      </div>
    </Draggable>
  );
}

export default Machine;
