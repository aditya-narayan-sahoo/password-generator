import PropTypes from "prop-types";

const Checkbox = ({ label, checked, onChange }) => (
  <div className="flex items-center gap-x-1 group">
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="opacity-50 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
    />
    <label className="group-hover:text-white transition-colors duration-300 cursor-pointer">
      {label}
    </label>
  </div>
);

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;
