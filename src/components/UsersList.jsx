export default function UsersList({ users, loading }) {
  if (loading) return <p>იტვირთება...</p>;

  return (
    <ul>
      {users.map((user) => (
        <li
          key={user.id}
          style={{
            padding: 10,
            marginBottom: 8,
            background: "#eee",
            borderRadius: 6,
          }}
        >
          {user.name} – {user.email}
        </li>
      ))}
    </ul>
  );
}