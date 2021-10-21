import { useCallback, useState } from 'react';
import AddUserForm from './components/AddUserForm';
import UserList from './components/UserList'
import './App.css';
import { Col, Row, Card } from 'antd';

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
    <Row justify="center">
      <Col span={8}>
        <Card title="Add Users">
            <AddUserForm onSubmit={onSubmit} />
        </Card>
      </Col>
      <Col span={8}>
        <Card title="User List">
            <UserList users={users} removeUser={removeUser} />
        </Card>
      </Col>
    </Row>
  )
}

export default App;
