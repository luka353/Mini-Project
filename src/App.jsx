import { useEffect, useState } from "react";
import Header from "./components/header";
import UserSearch from "./components/UserSearch";
import UsersList from "./components/UsersList";

export default function App() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      console.log("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filtered = users.filter((u) =>
    u.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ padding: 30 }}>
      <Header />

      <UserSearch value={query} onChange={setQuery} />

      <UsersList users={filtered} loading={loading} />
    </div>
  );
}