import { Container } from 'reactstrap';
// import DisplayList from '../features/display/DisplayList';
// import SubHeader from '../components/SubHeader';
import ImageSlider from '../components/Carousel';
import Header from '../components/Header';


const HomePage = () => {
    return (
        <Container>
            <Header current='Home' />
            <Carousel />
            {/* <DisplayList /> */}
        </Container>
    );

};

export default HomePage;
