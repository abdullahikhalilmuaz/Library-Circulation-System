import axios from "axios";

const BorrowedBooks = ({ books }) => {
  const handleRenew = async (loanId) => {
    try {
      await axios.post(`/api/user/renew/${loanId}`);
      alert("Book renewed successfully!");
      window.location.reload(); // Refresh the data
    } catch (error) {
      alert(error.response?.data?.message || "Renewal failed");
    }
  };

  return (
    <div className="borrowed-books-container">
      <table className="books-table">
        <thead>
          <tr>
            <th>Book Title</th>
            <th>Author</th>
            <th>Due Date</th>
            <th>Days Remaining</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((loan) => {
            const daysRemaining = Math.ceil(
              (new Date(loan.dueDate) - new Date()) / (1000 * 60 * 60 * 24)
            );

            return (
              <tr key={loan._id}>
                <td>{loan.book.title}</td>
                <td>{loan.book.author}</td>
                <td>{new Date(loan.dueDate).toLocaleDateString()}</td>
                <td className={daysRemaining <= 3 ? "warning" : ""}>
                  {daysRemaining}
                </td>
                <td>
                  <button
                    onClick={() => handleRenew(loan._id)}
                    disabled={loan.renewals >= 2}
                    className="renew-button"
                  >
                    Renew
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BorrowedBooks;
