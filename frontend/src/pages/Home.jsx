import Trajectory from '../components/Trajectory';
import Directions from '../components/Directions';
import Universities from '../components/Universities';
import Olympiads from '../components/Olympiads';
import Services from '../components/Services';
import Journal from '../components/Journal';
import Statistics from '../components/Statistics';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Trajectory />
      <Directions />
      <Universities />
      <Olympiads />
      <Services />
      <Journal />
      <Statistics />
      <Footer />
    </div>
  );
}
