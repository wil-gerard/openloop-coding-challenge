const UserList = ({ users, removeUser }) => {
    console.log(users)
    return (
        <ul>
            {users.length === 0 && (
                <li>No users... 😞</li>
            )}
            {users.map(({ email, firstName, lastName, note}, userId) => (
                <li key={email}>
                    👋 Hey {firstName} {lastName}! | {email}
                    <div>{note}</div>
                    <button onClick={() => removeUser(userId)}>Remove 😞</button>
                </li>
            ))}
        </ul>
    )
}

export default UserList
