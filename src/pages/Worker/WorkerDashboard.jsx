function WorkerDashboard() {
  return (
    <div>
      <h1>Welcome to Your Jaelon Enterprise Limited Worker Dashboard</h1>
      {/* Display relevant information and actions */}
      <div>
        <h2>Assigned Tasks</h2>
        {/* Display assigned tasks */}
        <ul>
          <li>Task 1</li>
          <li>Task 2</li>
          <li>Task 3</li>
        </ul>
      </div>
      <div>
        <h2>Task Details</h2>
        {/* Display details of selected task */}
        <p>Task Name: Task 1</p>
        <p>Due Date: September 15, 2023</p>
        <p>Assigned by: John Doe</p>
      </div>
      <div>
        <h2>Task Progress</h2>
        {/* Display task progress and options */}
        <p>Progress: 50%</p>
        <button>Mark as Complete</button>
      </div>
      <div>
        <h2>Communication</h2>
        {/* Display messaging or chat features */}
        <button>Send Message</button>
        <button>View Messages</button>
      </div>
    </div>
  );
}
export default WorkerDashboard;
