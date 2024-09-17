import PropTypes from "prop-types";

const LengthSlider = ({ length, setLength }) => (
  <div className="flex items-center gap-x-1">
    <input
      type="range"
      min={7}
      max={49}
      value={length}
      className="cursor-pointer"
      onChange={(e) => setLength(Number(e.target.value))}
    />
    <label>Length: {length}</label>
  </div>
);

LengthSlider.propTypes = {
  length: PropTypes.number.isRequired,
  setLength: PropTypes.func.isRequired,
};

export default LengthSlider;
