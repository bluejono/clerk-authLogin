import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <ul>
        <li>
          <Link href={"/sign-in"}>SignIn</Link>
        </li>
        <li>
          <Link href={"/sign-up"}>SignUp</Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
