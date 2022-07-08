import { Col } from 'reactstrap';
import Comment from './Comment';
import { selectCommentsByRollId } from './commentsSlice';
import CommentForm from './CommentForm';
import { useSelector } from 'react-redux';


const CommentsList = ({rollId}) => {
   const comments = useSelector(selectCommentsByRollId(rollId));

   if (comments && comments.length > 0) {
    return (
        <Col md='5' className='m-1'>
            <h4>Comments</h4>
            {comments.map((comment) => {
                return <Comment key={comment.id} comment={comment} />;
                        
            })}
            <CommentForm rollId={rollId} />;

        </Col>
    );
   }

   return (
    <Col md='5' className='m-1'>
        There are no comments for this roll.
    </Col>
   )
}; 

export default CommentsList;