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
    <Row className="main-container" justify="center" align="top" >
      <Row justify="center">
        <Col span={'md'} className="content-col">
          <Card className="container-content" title="Add Users" bordered={true}>
            <AddUserForm onSubmit={onSubmit} />
          </Card>
        </Col>
        <Col span={'md'} className="content-col">
          <Card className="container-content" title="User List" bordered={false}>
            <UserList users={users} removeUser={removeUser} />
          </Card>
        </Col>
      </Row>
    </Row>
  );
};

export default App;
