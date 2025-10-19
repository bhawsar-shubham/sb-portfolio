// Reusable textarea component
const TextAreaField = ({ label, name, value, onChange, register, required, errors, placeholder }) => (
    <div className="w-full md:w-1/2 flex flex-col gap-2">
      <textarea
        {...register(name, { required })}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full h-[140px] rounded-md border border-black py-2 px-4 dark:bg-[#1c1b23]"
        placeholder={placeholder}
      />
      {errors[name] && <span className="text-red-300 mx-4">This field is required</span>}
    </div>
  );

export default TextAreaField;