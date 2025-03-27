import axios from "axios";

const PendingRequests = ({ requests }) => {
  const handleCancel = async (requestId) => {
    if (window.confirm("Are you sure you want to cancel this request?")) {
      try {
        await axios.delete(`/api/user/request/${requestId}`);
        alert("Request cancelled successfully!");
        window.location.reload(); // Refresh the data
      } catch (error) {
        alert(error.response?.data?.message || "Cancellation failed");
      }
    }
  };

  return (
    <div className="pending-requests-container">
      <table className="requests-table">
        <thead>
          <tr>
            <th>Book Title</th>
            <th>Author</th>
            <th>Request Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request._id}>
              <td>{request.book.title}</td>
              <td>{request.book.author}</td>
              <td>{new Date(request.requestedAt).toLocaleDateString()}</td>
              <td className={`status-${request.status.toLowerCase()}`}>
                {request.status}
              </td>
              <td>
                <button
                  onClick={() => handleCancel(request._id)}
                  disabled={request.status !== "pending"}
                  className="cancel-button"
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PendingRequests;
