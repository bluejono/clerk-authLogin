"use client";
import Input from "../../components/Input";
import FormButtonGoogle from "@/components/FormButtonsGoogle";
import FormButtonContinue from "@/components/FormButtonContinue";

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
          <FormButtonContinue />
          <p>OR</p>
          <FormButtonGoogle />
        </form>
      </div>

      {/* design mobile inteiro + div da imagem desktop "*/}
      <div className="bg-[url('/flower.png')] bg-center bg-cover w-screen h-screen flex items-center justify-center p-5 lg:w-1/2">
        <div className="w-full h-full flex flex-col rounded-2xl border border-white/20 bg-white/10 shadow-lg backdrop-filter backdrop-blur-md gap-5 justify-center text-center lg:hidden p-5">
          <h2>LOGO</h2>
          <h1 className="text-2xl font-medium">Get started with GameTime</h1>
          <label className="text-left">
            Email
            <input type="text" className="border w-full border-black" />
          </label>
          <label className="text-left">
            Password
            <input type="password" className="border w-full border-black" />
          </label>
          <button type="submit" className="border border-black">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
