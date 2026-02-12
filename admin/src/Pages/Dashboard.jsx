import AddCourse from "../components/AddCourse";
import DeleteCourse from "../components/DeleteCourse";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">

      <div className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <p>Manage Courses Easily</p>
      </div>

      <div className="dashboard-cards">

        <div className="card">
          <h2>Add New Course</h2>
          <AddCourse />
        </div>

        <div className="card delete-card">
          <h2>Delete Course</h2>
          <DeleteCourse />
        </div>

      </div>

    </div>
  );
}

export default Dashboard;
