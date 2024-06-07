import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./home.scss";
import Slider from '../../components/NetflixSlider/Slider'

const Home = () => {
  const movies = [
    {
      id: 1,
      image: '../public/images/slide1.jpg',
      imageBg: '/images/slide1b.webp',
      title: '1983'
    },
    {
      id: 2,
      image: '/images/slide2.jpg',
      imageBg: '/images/slide2b.webp',
      title: 'Russian doll'
    },
    {
      id: 3,
      image: '/images/slide3.jpg',
      imageBg: '/images/slide3b.webp',
      title: 'The rain',
    },
    {
      id: 4,
      image: '/images/slide4.jpg',
      imageBg: '/images/slide4b.webp',
      title: 'Sex education'
    },
    {
      id: 5,
      image: '/images/slide5.jpg',
      imageBg: '/images/slide5b.webp',
      title: 'Elite'
    },
    {
      id: 6,
      image: '/images/slide6.jpg',
      imageBg: '/images/slide6b.webp',
      title: 'Black mirror'
    }
  ];
  return (
    <div className="home">
      <Navbar />
      <Featured />
      <Slider>
        {movies.map(movie => (
          <Slider movie={movie} key={movie.id}>Seguir viendo</Slider>
        ))}
      </Slider>
    </div>
  );
};

export default Home;