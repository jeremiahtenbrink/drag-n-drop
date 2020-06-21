import React, { useState } from 'react';
import './App.css';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import DragColumn from "./components/DragColumn";
import { generateRandomId } from './utils/utils';
import { Row, DragElement } from "./interfaces";


function App() {
  
  const [ rows, setRows ]: [ [], Function ] = useState( [] )
  
  const addRow = () => {
    const row: Row = { id: generateRandomId(), elements: [] }
    setRows( ( rows: Row[] | [] ) => [ ...rows, row ] )
  }
  
  
  const addElement = () => {
    const el: DragElement = { id: generateRandomId() }
    setRows( ( rows: Row[] ) => {
      rows[ 0 ].elements.push( el );
      return [ ...rows ]
    } )
  }
  
  function onDragEnd() {
    debugger;
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to react drag and drop!</h1>
        <button onClick={ addRow }>Add Row</button>
        <button onClick={ addElement }>Add Element</button>
      </header>
      
      <DragDropContext onDragEnd={ onDragEnd }>
        { rows.map( ( row: Row ) => {
          return <DragColumn id={ row.id } key={ row.id } row={ row }/>
        } ) }
      </DragDropContext>
    </div>
  );
}


export default App;
