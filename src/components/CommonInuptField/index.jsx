// Reusable input field component
const InputField = ({ label, name, value, onChange, register, required, errors, type = "text", placeholder }) => (
    <div className="w-full md:w-1/2 flex flex-col gap-2">
      <input
        {...register(name, { required })}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full h-[50px] rounded-full leading-tight border border-black py-2 px-4 dark:bg-[#1c1b23]"
        type={type}
        placeholder={placeholder}
      />
      {errors[name] && <span className="text-red-300 mx-4">This field is required</span>}
    </div>
  );

  export default InputField;