import { DiscordLogoIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Target } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="border-t py-10">
      <div className="max-w-7xl py-10 px-5 md:p-0 space-y-5 mx-auto flex justify-between md:items-end flex-col md:flex-row">
        <div className="space-y-10">
          <div className="space-y-2 w-full sm:w-96">
            <h1 className="text-3xl font-bold">Msibii blog</h1>
            <p>
              {
                "Discover tutorials, advice and news on web development by Paul Msibii Gomis. Learn HTML, CSS, JavaScript, ReactJS and more with how-to guides and helpful resources"
              }
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Link target="_blank" href={"https://github.com/Papaul-msibiii/"}>
                <GitHubLogoIcon className="w-5 h-5" />
            </Link>
            <Link target="_blank" href={"https://www.linkedin.com/in/paul-gomis/"}>
                <LinkedInLogoIcon className="w-5 h-5" />
            </Link>
            {/* <DiscordLogoIcon className="w-5 h-5" /> */}
          </div>
        </div>
        <h1>
            &copy; 2024 Paul Msibii. All right reserved
        </h1>
      </div>
    </footer>
  );
}
