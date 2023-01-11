import Head from "next/head";
import { FcGoogle } from 'react-icons/fc';
// import { signIn, signOut } from 'next-auth/react';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex items-center justify-center w-screen h-screen bg-slate-50">
        <button className="flex justify-center items-center w-64 h-auto px-4 py-2 border rounded-md border-gray-300">
          <FcGoogle fontSize={30}/>
          <span className="ml-4">Sign in with Google</span>
        </button>
      </div>
    </div>
  );
}
