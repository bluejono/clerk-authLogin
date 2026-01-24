import Image from "next/image";
import Input from "../../components/Input";
import FormButtonContinue from "@/components/FormButtonContinue";
import FormButtonGoogle from "@/components/FormButtonsGoogle";

const SignIn = () => {
  return (
    <>
      <div className="flex h-screen w-screen">
        {/* Div Esquerda */}
        <div className="lg:w-1/2 h-full bg-white text-black p-10">
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

        {/* Div Direita */}
        <div className="relative w-full min-h-screen lg:min-h-full lg:w-1/2 bg-cover">
          <Image src="/flower.png" alt="Pixels" fill className="object-cover" />
        </div>
      </div>
    </>
  );
};

export default SignIn;
