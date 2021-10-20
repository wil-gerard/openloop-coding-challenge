const UserList = ({ users, removeUser }) => {
    console.log(users)
    return (
        <ul>
            {users.length === 0 && (
                <li>No users... 😞</li>
            )}
            {users.map(({ email, firstName, lastName, note}, idx) => (
                <li key={email}>
                    👋 Hey {firstName} {lastName}! note: {note} email: {email} id: {idx}
                    <button onClick={() => removeUser(idx)}>Remove User 😞</button>
                </li>
            ))}
        </ul>
    )
}

export default UserList
