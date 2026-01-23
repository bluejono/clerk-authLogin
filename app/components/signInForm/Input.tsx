interface InputProps {
  label: string;
  placeholder: string;
  type: string;
}

const Input = ({ label, placeholder, type }: InputProps) => {
  return (
    <label className="flex flex-col">
      <h2 className="mb-3">{label}</h2>
      <input
        type={type}
        className="border border-gray-300 rounded-lg px-4 py-2 w-md"
        placeholder={placeholder}
      />
    </label>
  );
};

export default Input;
