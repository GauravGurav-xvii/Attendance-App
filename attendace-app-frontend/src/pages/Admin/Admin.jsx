// AdminReportPage.jsx
import './Admin.css';
import {Link} from 'react-router-dom';

const AdminReportPage = () => {
 // const [users, setUsers] = useState(usersData); // Initialize state with sample user data

  const users = [
    { id: 1, username: 'john_doe', name: 'John Doe' },
    { id: 2, username: 'jane_smith', name: 'Jane Smith' },
    { id: 3, username: 'bob_jackson', name: 'Bob Jackson' },
    { id: 4, username: 'alice_green', name: 'Alice Green' },
    { id: 5, username: 'mike_brown', name: 'Mike Brown' },
    { id: 6, username: 'emma_white', name: 'Emma White' },
  ];
  
  
  return (
    <div>
      <h1>Admin Report Page</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to={"/"}><button>Back to Home</button></Link>
    </div>
  );
};

export default AdminReportPage;
