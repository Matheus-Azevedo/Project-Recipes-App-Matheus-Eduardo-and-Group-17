import PropTypes from 'prop-types';

function RecipeVideo({ videoCode }) {
  return (
    <iframe
      width="100%"
      height="315"
      src={ `https://www.youtube.com/embed/${videoCode}` }
      title="YouTube video player"
      frameBorder="0"
      allow="
            accelerometer;
            autoplay;
            clipboard-write;
            encrypted-media;
            gyroscope;
            picture-in-picture
          "
      data-testid="video"
      allowFullScreen
    />
  );
}

RecipeVideo.propTypes = {
  videoCode: PropTypes.string.isRequired,
};

export default RecipeVideo;
