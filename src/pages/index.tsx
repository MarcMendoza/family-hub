import { useSession } from "next-auth/react";
import Head from "next/head";
import { AccountMenu } from "~/components";
import { api } from "~/utils/api";
import Dashboard from "./Dashboard";
import LandingPage from "./LandingPage";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const { data: sessionData } = useSession();

  const getContent = () => {
    return sessionData ? <Dashboard /> : <LandingPage />;
  };

  return (
    <>
      <Head>
        <title>Family Hub</title>
        <meta
          name="description"
          content="Family Hub is an application to give information about a family's calendar, todo list, and more."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {sessionData ? <AccountMenu /> : null}
      {getContent()}
    </>
  );
}

// TODO Remove, keeping until I start working on the api stuff
function AuthShowcase() {
  const { data: sessionData } = useSession();
  sessionData?.user.image;

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
    </div>
  );
}
