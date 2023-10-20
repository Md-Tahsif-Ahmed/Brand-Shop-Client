import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css'; // Import the CSS for the slider

const Sliders = () => {
  return (
    <div>
      <AwesomeSlider>
        <div data-src="https://i.ibb.co/JtGq9DV/spotify.jpg" />
        <div data-src="https://i.ibb.co/f9L4XDB/wb.webp" />
        <div data-src="https://i.ibb.co/hyP0mv3/netflix.jpg" />
      </AwesomeSlider>
    </div>
  );
};

export default Sliders;
