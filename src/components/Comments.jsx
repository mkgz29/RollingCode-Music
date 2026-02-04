import { useEffect, useState } from "react";
import { getRandomComments } from "../data/comments";

const Comments = ({ songId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setComments(getRandomComments(songId, 50));
  }, [songId]);

  return (
    <div className="container mt-4 overflow-auto thin-scroll"style={{ height: "180vh" }}>
      <h5 className="text-light mb-3">Comentarios</h5>

      {comments.map((comment, index) => (
  <div
    key={comment.id || index}
    className="card bg-dark text-light mb-3 rounded-4"
  >
    <div className="card-body d-flex gap-3">

      <img
        src={comment.avatar}
        alt={comment.name}
        width="48"
        height="48"
        style={{ borderRadius: "50%" }}
      />


      <div>
        <div className="d-flex gap-2 align-items-center">
          <strong>{comment.name}</strong>
          <span className="text-secondary small">
            {comment.time}
          </span>
        </div>

        <p className="mb-0">{comment.text}</p>
      </div>

    </div>
  </div>
))}
    </div>
  );
};

export default Comments;