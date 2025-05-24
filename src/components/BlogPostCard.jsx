import { Link } from "react-router-dom";

const truncateText = (text, maxLength = 100) => {
  if (!text || text.length <= maxLength) return text;

  const truncated = text.substring(0, maxLength);
  const lastSpaceIndex = truncated.lastIndexOf(" ");

  return lastSpaceIndex > 0
    ? truncated.substring(0, lastSpaceIndex) + "..."
    : truncated + "...";
};

export const BlogPostCard = ({ id, coverUrl, title, text }) => {
  return (
    <div className="d-flex align-items-center me-5">
      <div className="flex-shrink-0">
        <Link to={`/blog/${id}`}>
          <img
            width={150}
            height={150}
            className="mr-3"
            src={coverUrl}
            alt="photo"
            style={{ cursor: 'pointer' }}
          />
        </Link>
      </div>
      <div className="flex-grow-1 ms-3">
        <Link to={`/blog/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <h5 style={{ cursor: 'pointer' }}>
            {title}
          </h5>
        </Link>
        <p>{truncateText(text, 40)}</p>
      </div>
    </div>
  );
};
