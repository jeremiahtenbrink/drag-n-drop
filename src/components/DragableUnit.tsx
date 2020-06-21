import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {
  Draggable, DraggableProvided, DraggableStateSnapshot, DraggingStyle,
  NotDraggingStyle
} from "react-beautiful-dnd";
import { DragElement } from "../interfaces";

/**
 *   DragableUnit
 *
 *  @component
 *
 */
const DragableUnit = ( { el, index, ...props }: { el: DragElement, index: number } ) => {
  // @ts-ignore
  return ( <Container draggableId={ el.id } index={ index }>
    { ( provided, snapshot ) => (
      <div
        ref={ provided.innerRef }
        { ...provided.draggableProps }
        { ...provided.dragHandleProps }
        // @ts-ignore
        style={ getItemStyle(
          snapshot.isDragging,
          provided.draggableProps.style
        ) }
      >
        { ( provided: DraggableProvided, snapshot: DraggableStateSnapshot,
            i: number ) => {
          return <div></div>
        } }
      </div> ) }
  </Container> );
};

const grid = 8;

const getItemStyle = ( isDragging: boolean,
                       draggableStyle: DraggingStyle | NotDraggingStyle | undefined ) => ( {
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: grid * 2,
  margin: `0 ${ grid }px 0 0`,
  
  // change background colour if dragging
  //ts-ignore
  background: isDragging ? 'lightgreen' : 'grey',
  
  // styles we need to apply on draggables
  ...draggableStyle,
} );

const Container = styled( Draggable )`
`;

DragableUnit.propTypes = {};

export default DragableUnit;