import type {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextPage,
} from "next";
import Head from "next/head";
import Image from "next/image";
import React, { HTMLAttributes, Dispatch, SetStateAction } from "react";
import avatar from "../public/avatar.png";
import { Projects, showRepo } from "../src/components/projects";
import { Repo } from "../src/components/projects/types";
import {
  CodeSandbox,
  Github,
  LinkedIn,
  Medium,
  Email,
  DevTo,
  Notion,
} from "../src/components/social-icons";
import { ColorSwatchIcon } from "@heroicons/react/solid";
import { useColor } from "../src/components/color-context";

const Panel: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => (
  <section
    className={`w-full md:w-1/2 min-h-screen-1/2 p-4 md:h-screen flex items-center justify-center ${className}`}
    {...props}
  />
);

const Heading: React.FC<HTMLAttributes<HTMLSpanElement>> = ({
  className,
  ...props
}) => (
  <span
    className={`block text-4xl md:text-6xl lg:text-8xl ${className}`}
    {...props}
  />
);

const Home: NextPage<{ repos: Repo[] }> = ({ repos }) => {
  const { color, nextColor } = useColor();
  return (
    <div className="flex">
      <Head>
        <title>tmikeschu</title>
        <meta name="description" content="Software developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-wrap items-center dark:bg-gray-800 w-screen h-screen">
        <div
          className={`fixed top-4 right-4 text-${color}-700 bg-${color}-200 rounded-md hover:-rotate-45 hover:text-${color}-800 transform transition-transform duration-500`}
          role="button"
          onClick={nextColor}
        >
          <ColorSwatchIcon className="w-8 h-8" />
        </div>

        <Panel className={`bg-${color}-100`}>
          <h1>
            <Heading className={`text-${color}-600`}>t.</Heading>
            <Heading className={`text-${color}-600`}>mike</Heading>
            <Heading className={`text-${color}-600`}>schutte</Heading>
            <Heading className={`text-${color}-400`}>software</Heading>
            <Heading className={`text-${color}-400`}>developer</Heading>
          </h1>
        </Panel>

        <Panel className={`bg-${color}-200`}>
          <div className="w-3/4 h-auto rounded-full overflow-hidden flex">
            <Image
              src={avatar}
              alt="Mike Schutte"
              placeholder="blur"
              priority
            />
          </div>
        </Panel>

        <Panel className={`bg-${color}-300`}>
          <Projects repos={repos} />
        </Panel>

        <Panel className={`bg-${color}-400 text-${color}-100 flex-col p-4`}>
          <Info />
        </Panel>

        <Panel className={`bg-${color}-500`}>
          <Notion />
        </Panel>

        <Panel className={`bg-${color}-600`}>
          <DevTo />
        </Panel>

        <Panel className={`bg-${color}-700`}>
          <Github />
        </Panel>

        <Panel className={`bg-${color}-800`}>
          <CodeSandbox />
        </Panel>

        <Panel className={`bg-${color}-900`}>
          <Medium />
        </Panel>

        <Panel className={`bg-${color}-200`}>
          <LinkedIn />
        </Panel>

        <Panel className={`bg-${color}-300`}>
          <Email />
        </Panel>

        <Panel className={`bg-${color}-400`}>
          <iframe
            className="w-full h-full"
            src="https://player.vimeo.com/video/202161614?color=ffffff"
            frameBorder="0"
            title="Passionate Program"
            allowFullScreen={true}
          />
        </Panel>
      </main>
    </div>
  );
};

export default Home;

export async function getServerSideProps(
  _context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<{ repos: Repo[] }>> {
  async function fetchProjects({ page }: { page: number }): Promise<Repo[]> {
    return fetch(`https://api.github.com/users/tmikeschu/repos?page=${page}`)
      .then((res) => res.json() as Promise<Repo[]>)
      .then(async (projects) => {
        if (projects.length === 0 || !Array.isArray(projects)) {
          return [];
        }

        return projects.concat(await fetchProjects({ page: page + 1 }));
      });
  }

  const repos = (await fetchProjects({ page: 1 })).filter(showRepo);

  return {
    props: { repos },
  };
}

const Info = () => (
  <article className="max-w-lg text-lg">
    <h2 className="font-bold tracking-wider">me</h2>
    <p className="mb-2">
      Cambridge based. Roots all over the West and Detroit. Finding my kicks in
      software development, running, cooking, and art.
    </p>

    <p className="mb-4 max-w-prose">
      Our world runs on structured information systems, but we are fundamentally
      creative beings. I love building and using software that frees us from
      mundanity and allows us to focus on more challenging and fulfilling work.
    </p>

    <h2 className="font-bold">this site</h2>
    <p className="mb-4 max-w-prose">
      I built this site with{" "}
      <a
        className="underline hover:skew-y-2 inline-block transform transition-transform duration-300"
        href="https://nextjs.org/"
      >
        Next.js
      </a>{" "}
      and{" "}
      <a
        className="underline hover:skew-y-2 inline-block transform transition-transform duration-300"
        href="https://tailwindcss.com/"
      >
        Tailwind CSS
      </a>
      .
    </p>
  </article>
);
