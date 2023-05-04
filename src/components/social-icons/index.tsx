import React from "react";
import MediumSVG from "./medium";
import GithubSVG from "./github";
import LinkedInSVG from "./linked-in";
import EmailSVG from "./email";
import CodeSandboxSVG from "./code-sandbox";
import DevToSVG from "./dev-to";
import NotionSVG from "./notion";

const SocialLink: React.FC<{
  href: string;
}> = ({ href, children }) => (
  <div className="flex items-center justify-center p-4">
    <a
      className="w-1/3 flex items-center justify-center hover:skew-y-12 transform transition-transform duration-500"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  </div>
);

export const Github = () => (
  <SocialLink href="https://github.com/tmikeschu">
    <GithubSVG className="w-full" />
  </SocialLink>
);

export const CodeSandbox = () => (
  <SocialLink href="https://codesandbox.io/u/tmikeschu">
    <CodeSandboxSVG className="w-full" />
  </SocialLink>
);

export const Medium = () => (
  <SocialLink href="https://medium.com/@tmikeschu">
    <MediumSVG className="w-full" />
  </SocialLink>
);

export const LinkedIn = () => (
  <SocialLink href="https://www.linkedin.com/in/tmikeschu">
    <LinkedInSVG className="w-full" />
  </SocialLink>
);

export const Email = () => (
  <SocialLink href="mailto:tmikeschutte@gmail.com">
    <EmailSVG className="w-full" />
  </SocialLink>
);

export const DevTo = () => (
  <SocialLink href="https://dev.to/tmikeschu">
    <DevToSVG className="w-full" />
  </SocialLink>
);

export const Notion = () => (
  <SocialLink href="https://tmikeschu.notion.site/Mike-Schutte-5add0a66d873429c8dc0fc84b4e3cf96">
    <NotionSVG className="w-full" />
  </SocialLink>
);
