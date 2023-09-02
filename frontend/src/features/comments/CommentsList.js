import { Col, Row } from "reactstrap";
import Comment from "./Comment";
//import { selectCommentsByProductId } from "./commentsSlice";
/*line 4 and 5 added because the comments won't show up */
import { useGetAllCommentsQuery } from "../commentsApi";
import CommentForm from "./CommentForm";
//import { useSelector } from "react-redux";
//import Error from "../../components/Error";
import Loading from "../../components/Loading";

const CommentsList = ({ productId }) => {
  const { comments, error, isLoading } = useGetAllCommentsQuery();

  // const isLoading = useSelector((state) => state.comments.isLoading);
  //const errMsg = useSelector((state) => state.comments.errMsg);

  if (isLoading) {
    return (
      <Row>
        <Loading />
      </Row>
    );
  }
  if (error) {
    return (
      <Row>
        <p>An error occurred...</p>
      </Row>
    );
  }

  if (comments && comments.length > 0) {
    return (
      <Col md="5" className="m-1">
        <h4>Comments</h4>
        {comments.map((comment) => {
          return <Comment key={comment.id} comment={comment} />;
        })}
        <CommentForm productId={productId} />;
      </Col>
    );
  }

  return (
    <Col md="5" className="m-1">
      There are no comments for this roll.
    </Col>
  );
};

export default CommentsList;
