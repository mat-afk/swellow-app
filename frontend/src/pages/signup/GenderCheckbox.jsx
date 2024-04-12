const GenderCheckbox = ({ gender }) => {
  return (
    <div className="form-control">
      <label className="label gap-2 cursor-pointer">
        <span className="label-text">{gender}</span>
        <input type="checkbox" className="checkbox border-slate-900" />
      </label>
    </div>
  );
};

export default GenderCheckbox;
