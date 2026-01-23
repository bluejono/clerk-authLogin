import Image from "next/image";
import Input from "../components/signInForm/Input";

const SignIn = () => {
  return (
    <>
      <div className="flex h-screen w-screen">
        {/* Div Esquerda */}
        <div className="w-1/2 h-full bg-white text-black p-[40px]">
          <form className="justify-center gap-5 w-full h-full border border-gray-500/25 flex flex-col items-center">
            Logo
            <h1 className="text-3xl font-medium">Get started with GameTime</h1>
            <p className="text-gray-600">
              Already have an Account?{" "}
              <a className="underline cursor-pointer">Log in</a>
            </p>
            <Input
              label="Enter your Email"
              placeholder="name@example.com"
              type="email"
            />
            <Input
              label="Enter your password"
              placeholder="Password"
              type="password"
            />
            <button className="p-2 w-md rounded-md bg-black text-gray-200 cursor-pointer">
              Continue
            </button>
            <p>OR</p>
            <button className="p-2 flex items-center justify-center gap-3 border border-gray-300 w-md rounded-sm cursor-pointer">
              <Image
                src="/google.png"
                alt="google symbol"
                width={20}
                height={20}
              ></Image>
              Continue with Google
            </button>
          </form>
        </div>

        {/* Div Direita */}
        <div className="w-1/2 h-full relative">
          <Image src="/newBg2.jpg" alt="Pixels" fill className="object-cover" />
        </div>
      </div>
    </>
  );
};

export default SignIn;
