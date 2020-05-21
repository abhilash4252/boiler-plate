import React, { useState } from "react";
import { Segment, Form, Container, Button, Grid } from "semantic-ui-react";
import { useAuth0 } from "../../auth/Auth0";
import { useMutation, queryCache } from "react-query";
import API from "../../utils/API";

const TodoCreate = () => {
  const { getTokenSilently } = useAuth0();
  const [description, setDescription] = useState("");

  const postTodo = async () => {
    return API.post(
      "/api/todos",
      { description },
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

  const handleSubmit = async () => {
    await mutate();
    setDescription("");
    console.log(data);
  };

  return (
    <Container text>
      <Segment>
        <Form onSubmit={handleSubmit} inline>
          <Form.Group>
            <Form.Input
              placeholder="Add Todo"
              value={description}
              required
              onChange={(e) => setDescription(e.target.value)}
            />

            <Form.Button content="Add Todo" />
          </Form.Group>
        </Form>
      </Segment>
    </Container>
  );
};

export default TodoCreate;
