import { TodoContent } from "../types";
import { useRecoilState, useSetRecoilState } from "recoil";
import { todoState, todoContentState } from "../state/todoState";
import { Button, Checkbox, Popconfirm, Space, Typography, DatePicker } from "antd";
import { QuestionCircleOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import moment  from "moment";
import { useState } from "react";

export function TodoItem(props: TodoContent) {
  const [todo, updateTodo] = useRecoilState(todoState(props.id));

	const [isCompleted, setIsComplete] = useState(props.isCompleted);
  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);
  const [dueDate, setDueDate] = useState(props.dueDate);
  const [isPriority, setPriority] = useState(props.isPriority);

	const setTodos = useSetRecoilState(todoContentState);

	// Toggles whichever state its in
	const toggleComplete = () => {
    setIsComplete(prevState => !prevState);
    todo.isCompleted = isCompleted;
    updateTodo(todo);
  }

  const togglePriority = () => {
    setPriority(prevState => !prevState);
    todo.isPriority = isPriority;
    updateTodo(todo);
  }

	const deleteTodo = () => setTodos(todos => todos.filter(todo => todo.id !== props.id));

  const { Text } = Typography;

	return (
    <div className={isPriority ? "priority" : "notPriority"}>
      <Space direction="vertical" style={{ marginLeft: 30 }}>
        <br />
        <br />
        <br />
        <div>
          <Text strong>Title: </Text>
          <Text editable={{ onChange: setTitle }}>{title}</Text>
        </div>
        <br />
        <br />
        <div>
          <Text strong>Description: </Text>
          <Text disabled={description ? false : true} editable={{ onChange: setDescription }}>{description && `${description}`}</Text>
        </div>
        <br />
        <br />
        <div>
          <Text strong>Due: </Text>
          <DatePicker style={moment().diff(dueDate) > 0 ? { borderColor: 'red' } : {}} onChange={setDueDate} defaultValue={dueDate}/>
        </div>
        <br />
        <div>
          <Checkbox onClick={toggleComplete}>
            Completed
          </Checkbox>
          <Checkbox onClick={togglePriority}>
            Priority
          </Checkbox>
        </div>
        <Popconfirm 
            title="Are you sure?" 
            icon={<QuestionCircleOutlined 
            style={{ color: 'red' }} />}
            okText={"Yes"}
            onConfirm={deleteTodo}
          >
            <Button danger>Delete</Button>
          </Popconfirm>
      </Space>
    </div>
  );
}