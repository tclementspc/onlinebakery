import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectRollById } from '../features/rolls/rollsSlice';
import RollsDetail from '../features/rolls/RollsDetail';
import CommentsList from '../features/comments/CommentsList';
// import SubHeader from '../components/SubHeader';
import  { useSelector } from 'react-redux';


const RollsDetailPage = () => {
    const { rollId } = useParams();
    const roll = useSelector(selectRollById(rollId));
    console.log('roll:', roll);


    return (
        <Container>
            <Row>
                <RollsDetail roll={roll} />
                <CommentsList className='textcolor' rollId={rollId} />
            </Row>
        </Container>
    )

};

export default RollsDetailPage;
