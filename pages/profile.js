import { getSession } from "next-auth/react";
import Link from "next/link";

export default () => {
  return (
    <section className="container mx-auto text-center">
      <h3 className="text-4xl font-bold">Profile Page</h3>
      <Link href={"/"}>Homepage</Link>
    </section>
  );
};

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {session}
  }
}
