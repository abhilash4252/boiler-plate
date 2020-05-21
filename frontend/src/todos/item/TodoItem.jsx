import React, { useState } from "react";
import { Menu, Button, Checkbox, Segment, Icon } from "semantic-ui-react";
import { useAuth0 } from "../../auth/Auth0";
import { useMutation, queryCache } from "react-query";
import API from "../../utils/API";

const TodoItem = (props) => {
  const todo = props.todo;
  const [showActions, setShowActions] = useState(false);
  const { getTokenSilently } = useAuth0();

  const postTodo = async () => {
    return API.put(
      "/api/todos/" + todo.id,
      { isCompleted: !todo.isCompleted },
      {
        headers: { Authorization: `Bearer ${await getTokenSilently()}` },
      }
    );
  };

  const [mutate, { status, data, error }] = useMutation(postTodo, {
    onSuccess: () => {
      queryCache.refetchQueries("todos", { exact: true });
    },
  });

  const deleteTodo = async () => {
    return API.delete("/api/todos/" + todo.id, {
      headers: { Authorization: `Bearer ${await getTokenSilently()}` },
    });
  };

  const [deleteMutate, { deleteStatus, deletaData, deleteError }] = useMutation(
    deleteTodo,
    {
      onSuccess: () => {
        queryCache.refetchQueries("todos", { exact: true });
      },
    }
  );

  const toggleComplete = async () => {
    await mutate();
  };

  const handleDelete = async () => {
    await deleteMutate();
  };

  return (
    <Segment
      key={todo.id}
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      <Checkbox
        className="header"
        label={todo.description}
        checked={todo.isCompleted}
        onClick={() => toggleComplete(todo.id)}
        style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}
      />
      {showActions && (
        <Button
          size="mini"
          icon
          style={{ float: "right" }}
          onClick={() => handleDelete(todo.id)}
        >
          <Icon name="delete"></Icon>
        </Button>
      )}
    </Segment>
  );
};

export default TodoItem;
