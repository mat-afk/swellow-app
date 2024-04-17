const GenderCheckbox = ({ selectedGender, onCheckboxChange, children }) => {
  const gender = children.toLowerCase().replace(" ", "-");

  return (
    <div className="form-control">
      <label
        className={`label gap-2 cursor-pointer ${
          selectedGender === gender ? "selected" : ""
        }`}
      >
        <span className="label-text">{children}</span>
        <input
          type="checkbox"
          className="checkbox border-slate-900"
          checked={selectedGender === gender}
          onChange={() => onCheckboxChange(gender)}
        />
      </label>
    </div>
  );
};

export default GenderCheckbox;
