import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from '@/components/RecentProjects';
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import { FloatingDock } from "@/components/ui/FloatingDock";

import {
  IconBriefcaseFilled,
  IconCode,
  IconHome,
  IconPhone,
  IconUserFilled,
} from "@tabler/icons-react";

export default function Home() {

  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: "About",
      icon: <IconUserFilled className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#about",
    },
    {
      title: "Experience",
      icon: <IconBriefcaseFilled className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#experience",
    },
    {
      title: "Projects",
      icon: <IconCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#projects",
    },
    {
      title: "Contact",
      icon: <IconPhone className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#contact",
    },
  ];

  return (
    <main className="relative bg-black-100 flex flex-col justify-center items-center mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <Hero />
        <Grid />
        <Experience />
        <RecentProjects />
        <Footer />
      </div>
      <FloatingDock
        items={links}
        desktopClassName="fixed bottom-8 left-1/2 -translate-x-1/2"
        mobileClassName="fixed bottom-8 right-8"
      />
    </main>
  );
}
