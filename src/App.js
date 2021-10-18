// import { useCallback, useState } from 'react';

import AddUserForm from './components/AddUserForm';
// import { User } from '../../../types';
// import UserList from '../UserList';
import './App.css';

const App = () => {

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
          {/* <div className={styles.col}>
          <UserList removeUser={removeUser} users={users} />
        </div> */}
        </div>
      </div>
    )
}

export default App;
