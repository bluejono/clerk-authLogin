/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Input from "../../components/Input";
import FormButtonGoogle from "@/components/FormButtonsGoogle";
import FormButtonContinue from "@/components/FormButtonContinue";

const SignUp = () => {
  return (
    <>
      {/* div esquerda */}
      <div className="flex h-screen w-screen">
        <div className="w-1/2 h-full relative">
          <Image src="/newBg2.jpg" alt="Pixels" fill className="object-cover" />
        </div>

        {/* div direita */}

        <div className="w-1/2 h-full bg-white text-black p-[40px]">
          <form className="justify-center gap-5 w-full h-full border border-gray-500/25 flex flex-col items-center">
            Logo
            <h1 className="text-3xl font-medium">Get started with GameTime</h1>
            <p className="text-gray-600">
              Don&apos;t have an Account?
              <a className="underline cursor-pointer">Sign up</a>
            </p>
            <Input
              label="Enter your Email"
              placeholder="name@example.com"
              type="email"
            />
            <Input
              label="Enter your Password"
              placeholder="Password"
              type="password"
            />
            <FormButtonContinue/>
            <p>OR</p>
            <FormButtonGoogle/>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
