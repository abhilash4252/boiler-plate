import React, { useState } from "react";
import { Segment, Container, List, Button, Menu } from "semantic-ui-react";
import { useAuth0 } from "../../auth/Auth0";
import { useQuery } from "react-query";
import API from "../../utils/API";
import { CustomLoader } from "../../component";
import TodoItem from "../item/TodoItem";

const TodoList = () => {
  const { getTokenSilently } = useAuth0();

  const fetchTodoList = async () => {
    return API.get("/api/todos", {
      headers: { Authorization: `Bearer ${await getTokenSilently()}` },
    });
  };

  const { status, data, error } = useQuery("todos", fetchTodoList);

  if (status === "loading") {
    return <CustomLoader />;
  }

  return (
    <Container text>
      <Segment.Group>
        {data.data.map((todo) => {
          return <TodoItem todo={todo} />;
        })}
      </Segment.Group>
    </Container>
  );
};

export default TodoList;
