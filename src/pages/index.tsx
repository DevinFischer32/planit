import type { NextPage } from "next";
import Head from "next/head";
// import { trpc } from "../utils/trpc";

// type TechnologyCardProps = {
//   name: string;
//   description: string;
//   documentation: string;
// };

const Home: NextPage = () => {
  // const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <>
      <Head>
        <title>Planit</title>
        <meta name="description" content="Plan it. A planner." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section>
          <h1>Planit</h1>
        </section>
      </main>
    </>
  );
};

// const TechnologyCard = ({
//   name,
//   description,
//   documentation,
// }: TechnologyCardProps) => {
//   return (
//     <section className="flex flex-col justify-center p-6 duration-500 border-2 border-gray-500 rounded shadow-xl motion-safe:hover:scale-105">
//       <h2 className="text-lg text-gray-700">{name}</h2>
//       <p className="text-sm text-gray-600">{description}</p>
//       <a
//         className="mt-3 text-sm underline text-violet-500 decoration-dotted underline-offset-2"
//         href={documentation}
//         target="_blank"
//         rel="noreferrer"
//       >
//         Documentation
//       </a>
//     </section>
//   );
// };

export default Home;
