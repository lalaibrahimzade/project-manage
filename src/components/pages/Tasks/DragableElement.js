import { Droppable } from "react-beautiful-dnd";
import ListItem from "./ListItem";
import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const ColumnHeader = styled.div`
  text-transform: uppercase;
  margin-bottom: 20px;
  color:#2d2a70;
  font-weight:600;
  text-align:center;
`;

const DroppableStyles = styled.div`
  padding: 10px;
  border-radius: 6px;
  background: #f1f1f1 ;
`;

const DraggableElement = ({ prefix, elements, companyData, allUsers }) => (
  <DroppableStyles>
    <ColumnHeader>{prefix}</ColumnHeader>
    <Droppable
      isDropDisabled={!companyData.role.changeStatus}
      droppableId={prefix}
    >
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          {elements?.map((item, index) => (
            <ListItem
              users={allUsers}
              key={item.id}
              item={item}
              index={index}
            />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </DroppableStyles>
);

const mapStateToProps = ({ user }) => {
  return {
    companyData: user.companyData,
  };
};

export default connect(mapStateToProps, {})(DraggableElement);
