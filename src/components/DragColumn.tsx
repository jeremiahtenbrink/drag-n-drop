import React from "react";
import styled from 'styled-components';
import PropTypes from "prop-types";
import {
  Droppable, DroppableProvided, DroppableStateSnapshot
} from "react-beautiful-dnd";
import DragableUnit from "./DragableUnit";
import { Row } from "../interfaces/Row";
import { DragElement } from "../interfaces";

/**
 *   DragColumn
 *
 *  @component
 *
 */
const DragColumn = ( { id, row, ...props }: { id: string, row: Row } ) => {
  return ( <DropContainer droppableId={ id }>
    { ( provided: DroppableProvided, snapshot: DroppableStateSnapshot ) => {
      return <DropColumn ref={ provided.innerRef }
                         isDraggingOver={ snapshot.isDraggingOver }
                         { ...provided.droppableProps }
      >
        { row.elements.map( ( el: DragElement, i: number ) => {
          
          return ( <DragableUnit
            // @ts-ignore
            ref={ provided.innerRef }{ ...provided.droppableProps } el={ el }
            index={ i }/> )
        } )
        }
      </DropColumn>
    } }
  </DropContainer> );
  
};

const grid = 8;

const DropColumn = styled.div`
background: ${ ( props: { isDraggingOver: any; } ) => ( props.isDraggingOver ?
  'lightblue' : '#4A4A4A' ) };
padding: ${ grid };
border: 1px solid green;
height: 100%;
min-height: 600px;
width: 300px;
`

const DropContainer = styled( Droppable )`
display: flex;
flex-direction: column;
`;

DragColumn.propTypes = {};

export default DragColumn;