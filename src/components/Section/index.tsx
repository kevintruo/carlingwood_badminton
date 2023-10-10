import * as React from "react";
import { EmptyNavbar } from "../Navbar";

export default function Container({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  const sectionRef = React.useRef<HTMLElement | null>(null);

  return (
    <section
      ref={sectionRef}
      id={id}
      className='snap-start w-screen h-screen flex flex-col bg-white text-black dark:bg-black dark:text-white overflow-hidden items-center'>
      <EmptyNavbar />
      <div
        className={`p-3 flex flex-col w-full text-sm md:w-4/6 md:text-base lg:w-3/6 ${className}`}>
        {children}
      </div>
    </section>
  );
}
