import { GetStaticProps } from "next";
import React from "react";
import { useColor } from "../color-context";
import { Repo } from "./types";

const JV = [
  "mogo-reporter",
  "the-shelf",
  "tmikeschu.github.io",
  "the-spoken-tour",
];

const SPECIAL = ["avett-rx"];

const hasPages = (x: Repo) => {
  return x.has_pages || SPECIAL.includes(x.name);
};

export const showRepo = (r: Repo) => {
  return hasPages(r) && !JV.includes(r.name);
};

export const Projects: React.FC<{ repos: Repo[] }> = ({
  repos = [],
  ...rest
}) => {
  const { color } = useColor();

  return (
    <div className={`text-${color}-700 w-full flex flex-col items-center`}>
      <h2 className="font-bold mb-4">Projects</h2>
      <div className="flex flex-col items-center space-y-2 lg:flex-row lg:space-y-0 lg:space-x-2">
        {repos.length > 0 ? (
          repos.map(({ name, has_pages, homepage }, i) => (
            <a
              className={`w-auto text-${color}-100 rounded-full px-4 py-2 bg-${color}-500 hover:bg-${color}-800`}
              href={
                has_pages
                  ? `https://tmikeschu.github.io/${name}`
                  : homepage ?? "#"
              }
              key={name}
              target="_blank"
              rel="noopener noreferrer"
            >
              {name}
            </a>
          ))
        ) : (
          <p>
            Looks like we hit the github API limit{" "}
            <span role="img" aria-label="grimace">
              😬
            </span>
            <br />
            Scroll up to the octocat for more info
          </p>
        )}
      </div>
    </div>
  );
};
