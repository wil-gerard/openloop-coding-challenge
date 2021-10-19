import { useCallback, useState } from 'react';
import AddUserForm from './components/AddUserForm';
// import { User } from '../../../types';
import UserList from './components/UserList'
import './App.css';

const App = () => {
  const [users, setUsers] = useState([])

  // const onSubmit = useCallback(() => {
  //   setUsers([user, ...users])
  // }

  return (
    <div>
      <div>
        <div>
          <h1>Add Users</h1>
        </div>
        <div>
          <AddUserForm />
        </div>
        <div>
          <UserList data={users} />
        </div>     
      </div>
    </div>
  )
}

export default App;
