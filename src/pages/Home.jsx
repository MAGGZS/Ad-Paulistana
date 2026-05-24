import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ChurchGallery from '../components/ChurchGallery';
import WorshipSection from '../components/WorshipSection';
import PrayerForm from '../components/PrayerForm';
import LeadersCarousel from '../components/LeadersCarousel';
import TestimonialCarousel from '../components/TestimonialCarousel';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';

const Home = () => (
  <div>
    <Navbar />
    <HeroSection />
    <Reveal direction="up"><ChurchGallery /></Reveal>
    <Reveal direction="up"><WorshipSection /></Reveal>
    <Reveal direction="up"><PrayerForm /></Reveal>
    <Reveal direction="up"><LeadersCarousel /></Reveal>
    <Reveal direction="up"><TestimonialCarousel /></Reveal>
    <Reveal direction="up"><Footer /></Reveal>
  </div>
);

export default Home;
