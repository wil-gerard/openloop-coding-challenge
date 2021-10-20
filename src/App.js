import { useCallback, useState } from 'react';
import AddUserForm from './components/AddUserForm';
// import { User } from '../../../types';
import UserList from './components/UserList'
import './App.css';

const App = () => {
  const [users, setUsers] = useState([])

  const onSubmit = useCallback(
    (user) => {
      setUsers([user, ...users])
    },
    [users]
  );

  const removeUser = useCallback(
    (idx) => {
      const newUsers = [...users];
      newUsers.splice(idx, 1);
      setUsers(newUsers);
    },
    [users],
  );

  return (
    <div>
      <div>
        <div>
          <h1>Add Users</h1>
        </div>
        <div>
          <AddUserForm onSubmit={onSubmit} />
        </div>
        <div>
          <UserList users={users} removeUser={removeUser} />
        </div>
      </div>
    </div>
  )
}

export default App;
