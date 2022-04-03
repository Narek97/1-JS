import React, { useEffect, useState } from "react";
import { useSession, getSession, signIn } from "next-auth/react";
import Image from "next/image";

const Dashboard = () => {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(true);
  console.log(session, "session");
  useEffect(() => {
    const securePage = async () => {
      const session = await getSession();
      console.log({ session });
      if (!session) {
        signIn();
      } else {
        setLoading(false);
      }
    };

    securePage();
  }, []);
  if (loading || !session) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <h2>{session.user.email}</h2>
      <h3>{session.user.name}</h3>
      <img src={session.user.image} alt="Vercel Logo" width={80} height={80} />
    </div>
  );
};

export default Dashboard;
