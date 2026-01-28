import { useEffect, useState } from "react";
import { getRandomComments } from "../data/comments";

const Comments = ({ id }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // cada vez que cambia la canción, genera nuevos comentarios
    setComments(getRandomComments(24));
  }, [id]);

  return (
    <div className="container mt-4">
      <h5 className="text-light mb-3">Comentarios</h5>

      {comments.map((comment, index) => (
  <div
    key={index}
    className="card bg-dark text-light mb-2 rounded-4"
    
  >
    <div className="card-body py-2 text-start"  >
      <h6 className="card-subtitle mb-1 text-secondary">
        Usuario{index + 1}
      </h6>
      <p className="card-text mb-0">
        {comment}
      </p>
    </div>
  </div>
))}
</div>
  );
};

export default Comments;
