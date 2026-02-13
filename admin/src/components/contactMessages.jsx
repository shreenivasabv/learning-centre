import React, { useEffect, useState } from "react";
import "./contactMessages.css";

function ContactMessages() {
  const [messages, setMessages] = useState([]);

  // Fetch messages on component load
  useEffect(() => {
    fetch("http://localhost:5000/api/contact") // Updated to plural to match your API
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => setMessages(data))
      .catch((err) => console.error("Error fetching messages:", err));
  }, []);

  // Handle Delete Logic
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this message?")) {
      try {
        const response = await fetch(`http://localhost:5000/api/contact/${id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          // Remove the deleted message from UI state immediately
          setMessages(messages.filter((msg) => msg._id !== id));
        } else {
          alert("Error deleting message from server.");
        }
      } catch (error) {
        console.error("Delete error:", error);
      }
    }
  };

  return (
    <div className="messages-container">
      <h2 className="messages-title">Contact Messages</h2>

      <div className="messages-grid">
        {messages.length === 0 ? (
          <div className="no-messages">No messages found.</div>
        ) : (
          messages.map((msg) => (
            <div key={msg._id} className="message-card">
              <div className="card-header">
                <span className="subject-badge">{msg.subject}</span>
                <div className="header-right">
                   <span className="message-date">
                    {new Date(msg.createdAt).toLocaleDateString()}
                  </span>
                  <button 
                    className="delete-btn" 
                    onClick={() => handleDelete(msg._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>

              <h4>{msg.name}</h4>
              <p className="email-text">{msg.email}</p>

              <div className="message-content">
                {msg.message}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ContactMessages;