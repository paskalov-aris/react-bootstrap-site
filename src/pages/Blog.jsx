import { Card, Col, ListGroup, Row } from "react-bootstrap";
import { BLOG_POSTS } from "../constants/mockData";
import { BlogPostCard } from "../components/BlogPostCard";

export const Blog = () => {
  return (
    <Row>
      <Col md="6">
        {BLOG_POSTS.map((post) => (
          <BlogPostCard
            key={post.id}
            id={post.id}
            coverUrl={post.coverUrl}
            title={post.title}
            text={post.text}
          />
        ))}
      </Col>
      <Col md="6">
        <h5 className="text-center mt-5">Категорії</h5>

        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>Штучний інтелект</ListGroup.Item>
            <ListGroup.Item>Наукові дослідження</ListGroup.Item>
            <ListGroup.Item>Освітні технології</ListGroup.Item>
            <ListGroup.Item>Академічна співпраця</ListGroup.Item>
            <ListGroup.Item>Інновації в науці</ListGroup.Item>
          </ListGroup>
        </Card>

        <Card className="mt-3 bg-light">
          <Card.Body>
            <Card.Title>Slide widget</Card.Title>
            <Card.Text>Lorem</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};
