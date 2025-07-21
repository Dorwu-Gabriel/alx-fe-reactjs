function UserProfile(props) {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ color: 'blue', fontSize: '1.5em', marginBottom: '8px' }}>{props.name}</h2>
      <p style={{ margin: '6px 0' }}>Age: <span style={{ fontWeight: 'bold', color: '#333' }}>{props.age}</span></p>
      <p style={{ margin: '6px 0' }}><strong>Bio:</strong> <span style={{ color: '#555' }}>{props.bio}</span></p>
    </div>
  );
}

export default UserProfile;