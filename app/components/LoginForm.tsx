const LoginForm = () => {
  return (
    <div className="flex h-screen w-screen">
      {/* Div Esquerda */}
      <div className="w-1/2 h-full bg-white text-black p-[40px]">
        <form className="justify-center gap-5 w-full h-full border border-black flex flex-col items-center ">
          LOGO
          <label className="flex flex-col">
            Email
            <input
              type="email"
              className="border border-black rounded-lg px-4 py-2 w-lg"
            />
          </label>
          <label className="flex flex-col">
            Password
            <input
              type="password"
              className="border border-black rounded-lg px-4 py-2 w-lg"
            />
          </label>
          <button className="p-2 border w-1/2 rounded-sm">OPA</button>
          <p>OR</p>
          <button className="p-2 border w-1/2 rounded-sm">OPA</button>
        </form>
      </div>

      {/* Div Direita */}
      <div className="w-1/2 h-full bg-amber-800"></div>
    </div>
  );
};

export default LoginForm;
