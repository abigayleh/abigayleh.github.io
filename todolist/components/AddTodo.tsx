import { Form, Input, Button, DatePicker, Modal, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import { useSetRecoilState } from "recoil";
import { todoContentState } from "../state/todoState";
import { nanoid } from "nanoid";
import { useState } from "react";

export function AddTodo() {
  const setTodos = useSetRecoilState(todoContentState);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const addTodo = (values: any) => {
    setTodos(todos => [...todos, {...values, isCompleted: false, id: nanoid() }]);
  }

  const showModal = () => {
    setIsModalVisible(true);
  }

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Button onClick={showModal}>
        Add new item
      </Button>
      <Modal title="Add a new item" visible={isModalVisible}>
        <Form 
          labelCol={{
            span: 5,
          }}
          wrapperCol={{
            span: 8,
          }}
          layout="horizontal"
          onFinish={addTodo}
          autoComplete="off"
        >
          <br/>
          <Form.Item
            label="Title"
            name="title"
            rules={[
              {
                required: true,
                message: 'Please input a title',
              }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
          >
            <Input />
          </Form.Item>

          <Form.Item 
            label="Due Date"
            name="dueDate"
          >
            <DatePicker />
          </Form.Item>

          <Form.Item
            label="Priority"
            name="priority"
          >
             <Checkbox />
          </Form.Item>
           
          <Form.Item 
            wrapperCol={{
              offset: 5
            }}
          >
            <Button htmlType="submit" onClick={handleOk}>
              Add Item
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}