import Navbar from '../components/NavBar';
import ProbStatement from '../components/ProbStatement';
import Idea from '../components/Idea';
import Footer from '../components/footer';
import HumidityModule from '../components/HumidityModule';
import ImageCarousel from '../components/ImageCarousel';
import TeamMembers from '../components/TeamMembers';
function HomePage() {
    return (
        <div>
            <ImageCarousel/>
            <ProbStatement/>
            <Idea/>
            <TeamMembers/>
        </div>
    );
}
export default HomePage;