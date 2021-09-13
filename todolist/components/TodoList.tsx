import { useRecoilValue } from "recoil";
import { todoContentState } from "../state/todoState";
import { TodoItem } from "./TodoItem";
import { Space, Typography } from "antd";

export function TodoList() {
  const todos = useRecoilValue(todoContentState);

	return (
    <Space direction="vertical" >
      {todos.length ? todos.map(todoProps =>
        <TodoItem 
          {...todoProps}
          key={todoProps.id}
        />
      )
      :
      <Typography.Text>Nothing to see here!</Typography.Text>
      }
      <br />
      <br />
    </Space>
  );
}