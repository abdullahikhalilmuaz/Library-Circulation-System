const Notifications = ({ notifications }) => {
  return (
    <div className="notifications-container">
      <h2 className="notifications-header">
        Notifications ({notifications.length})
      </h2>
      {notifications.length === 0 ? (
        <p className="no-notifications">No new notifications</p>
      ) : (
        <ul className="notifications-list">
          {notifications.map((notification) => (
            <li key={notification._id} className="notification-item">
              <div className="notification-message">{notification.message}</div>
              <div className="notification-date">
                {new Date(notification.createdAt).toLocaleString()}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notifications;
