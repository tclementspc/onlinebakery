import { Container } from "reactstrap";
import Header from '../components/Header';
import RollsList from "../features/rolls/RollsList";



const RollsDirectoryPage = () => {
  // const [campsiteId, setCampsiteId] = useState(0);
  // const selectedCampsite = selectCampsiteById(campsiteId);
  return (
    <Container>
        <Header current='Shop' />
        <RollsList />
    </Container>
  );
};

export default RollsDirectoryPage;
