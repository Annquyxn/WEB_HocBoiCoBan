import React, { useState } from "react";

function CommentSection() {
  const [comments, setComments] = useState([]);
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() && comment.trim()) {
      setComments([...comments, { username, comment }]);
      setUsername("");
      setComment("");
    }
  };

  return (
    <div>
      <h2>Thảo luận & Bình luận</h2>
      <div className="comments">
        {comments.map((c, idx) => (
          <div className="comment" key={idx}>
            <strong>{c.username}:</strong> {c.comment}
          </div>
        ))}
      </div>
      <form className="comment-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tên của bạn"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <textarea
          placeholder="Bình luận..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
        <button type="submit">Gửi</button>
      </form>
    </div>
  );
}

export default CommentSection;
