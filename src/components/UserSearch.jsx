export default function UserSearch({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search user..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{
        padding: 10,
        width: "100%",
        marginBottom: 20,
        borderRadius: 8,
        border: "1px solid gray",
      }}
    />
  );
}