"use client";
import Input from "../../components/Input";
import FormButtonGoogle from "@/components/FormButtonsGoogle";
import FormButtonContinue from "@/components/FormButtonContinue";
import Image from "next/image";

const SignUp = () => {
  return (
    // container principal
    <div className="flex text-black tracking-[-0.8px]">
      {/* div esquerda (form) para desktop */}
      <div className="hidden lg:w-1/2 lg:flex bg-white text-black p-10 ">
        <form className="justify-center gap-5 w-full h-full border border-gray-500/25 flex flex-col items-center">
          Logo
          <h1 className="text-3xl font-medium">Get started with GameTime</h1>
          <p className="text-gray-600">
            Already have an Account?
            <a className="underline cursor-pointer">Log In</a>
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
          <FormButtonContinue />
          <p>OR</p>
          <FormButtonGoogle />
        </form>
      </div>

      {/* design mobile inteiro + div da imagem desktop "*/}
      <div className="bg-[url('/flower.png')] bg-center bg-cover w-screen h-screen flex items-center justify-center p-5 lg:w-1/2">
        <div className="w-full max-w-md h-fill flex flex-col rounded-2xl border border-white/20 bg-white/10 shadow-lg backdrop-filter backdrop-blur-md gap-2 justify-center text-center lg:hidden p-5">
          <h2>LOGO</h2>
          <h1 className="text-2xl font-medium">Get started with GameTime</h1>
          <p className="text-black">
            Already have an Account?
            <a className="underline cursor-pointer">Log In</a>
          </p>
          <label className="text-left ">
            Email
            <input
              type="text"
              className="bg-white p-2 border border-transparent rounded-md w-full mt-2"
            />
          </label>
          <label className="text-left">
            Password
            <input
              type="text"
              className="bg-white p-2 border border-transparent rounded-md w-full mt-2"
            />
          </label>
          <hr className="my-4" />
          <button
            type="submit"
            className=" border border-transparent bg-black rounded-md text-white p-2"
          >
            Continue
          </button>
          <p className="text-white">OR</p>
          <button
            type="submit"
            className=" border border-transparent bg-white rounded-md p-2 flex items-center justify-center gap-3"
          >
            Sign in with Google
            <Image
              src={"/google.png"}
              alt="google symbol"
              width={20}
              height={20}
            ></Image>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
