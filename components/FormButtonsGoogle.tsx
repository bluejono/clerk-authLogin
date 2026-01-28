import Image from "next/image";

interface GoogleButtonProps {
  onClick: () => void;
}

const FormButtonGoogle = ({ onClick }: GoogleButtonProps) => {
  return (
    <>
      <button
        onClick={onClick}
        className="p-2 flex items-center justify-center gap-3 border border-gray-300 w-md rounded-sm cursor-pointer"
        type="button"
      >
        <Image
          src={"/google.png"}
          alt="google symbol"
          width={20}
          height={20}
        ></Image>
        Continue with Google
      </button>
    </>
  );
};

export default FormButtonGoogle;
