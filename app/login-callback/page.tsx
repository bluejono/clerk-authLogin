import { AuthenticateWithRedirectCallback } from "@clerk/nextjs";

const LoginCallback = () => {
  return (
    <>
      <AuthenticateWithRedirectCallback />
    </>
  );
};

export default LoginCallback;
