import { useCallback, useState } from 'react';
import AddUserForm from './components/AddUserForm';
import UserList from './components/UserList'
import './App.css';
import { Col, Row, Divider } from 'antd';

const App = () => {
  const [users, setUsers] = useState([])

  const onSubmit = useCallback(
    (user) => {
      setUsers([user, ...users])
    },
    [users]
  );

  const removeUser = useCallback(
    (userId) => {
      const newUsers = [...users];
      newUsers.splice(userId, 1);
      setUsers(newUsers);
    },
    [users],
  );

  return (
    <div>
      <Row justify="center" gutter={[40]}>
        <Col span={8}>
          <div>
            <h1>Add Users</h1>
            <Divider />
          </div>
          <div>
            <AddUserForm onSubmit={onSubmit} />
          </div>
        </Col>
        <Col span={8}>
          <div>
            <h1>User List</h1>
            <Divider />
          </div>
          <div>
            <UserList users={users} removeUser={removeUser} />
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default App;
