import { useState } from "react";
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import { Menu, Switch, Typography } from 'antd';
import 'antd/dist/antd.css';
import './App.css';

const { SubMenu } = Menu;

const App = () => {
  const [theme, setTheme] = useState('light');

  const updateTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <div className={theme}>
      <br/>
      <Typography.Title>To Do List</Typography.Title>
      <Switch
        checked={theme === 'dark'}
        onChange={updateTheme}
        checkedChildren="Dark"
        unCheckedChildren="Light"
        style={{ width: 70 }}
      />
      <Menu
        className={theme}
        style={{ width: 300 }}
        mode="inline"
      >
        <AddTodo />
        <SubMenu key="sub1" title="Uncompelted">
          
        </SubMenu>

        <SubMenu key="sub2" title="Completed">
          <TodoList />
        </SubMenu>
      </Menu>
    </div>
  );
};

export default App;
