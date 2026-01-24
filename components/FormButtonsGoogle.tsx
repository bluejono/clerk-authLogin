import Image from "next/image";

const FormButtonGoogle = () => {
  return (
    <>
      <button className="p-2 flex items-center justify-center gap-3 border border-gray-300 w-md rounded-sm cursor-pointer">
        <Image
          src={"/google.png"}
          alt="google symbol"
          width={20}
          height={20}
        ></Image>
          Continue with Google
      </button>
    </>
  )
}

export default FormButtonGoogle