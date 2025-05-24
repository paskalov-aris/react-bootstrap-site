import { BLOG_POSTS } from "../constants/mockData";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

export const BlogPost = () => {
  const { postId } = useParams();

  const post = BLOG_POSTS.find((post) => post.id === Number(postId));

  return (
    <Container>
      <Row className="w-100 d-flex justify-content-center">
        <Col md={9} className="d-flex flex-column align-items-center">
          <img
            src={post.coverUrl}
            alt={post.title}
            width={300}
            height={300}
            className="mb-3"
          />
          <h2 className="mb-3">{post.title}</h2>
          <p className="text-left">{post.text}</p>
        </Col>
      </Row>
    </Container>
  );
};
