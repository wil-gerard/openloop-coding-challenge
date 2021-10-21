import { Card, Button } from 'antd';
import { UserDeleteOutlined } from '@ant-design/icons';


const UserList = ({ users, removeUser }) => {
    return (
        <>
            {users.length === 0 && (
                <Card type="inner">
                    <div>No users... </div>
                </Card>
            )}
            {users.map(({ email, firstName, lastName, note }, userId) => (
                <Card type="inner" title={`${firstName} ${lastName} | ${email}`} key={email}>
                    <div>{note}</div>
                    <Button style={{ marginTop: '10px' }} onClick={() => removeUser(userId)}><UserDeleteOutlined />Remove</Button>
                </Card>
            ))}
        </>
    )
}

export default UserList
