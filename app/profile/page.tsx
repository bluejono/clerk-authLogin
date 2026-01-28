import { SignOutButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";

const Profile = async () => {
  const user = await currentUser();
  console.log(user);

  return (
    <>
      <div>
        <SignOutButton>OPA</SignOutButton>
        <h2>Nome: {user?.firstName}</h2>
        {user?.imageUrl && (
          <Image src={user.imageUrl} alt="user pic" width={500} height={500} />
        )}
      </div>
    </>
  );
};

export default Profile;
