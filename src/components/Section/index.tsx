import * as React from "react";
import { EmptyNavbar } from "../Navbar";

export default function Container({ id, children }: { id?: string; children?: React.ReactNode }) {
  const sectionRef = React.useRef<HTMLElement | null>(null);

  return (
    <section
      ref={sectionRef}
      id={id}
      className='snap-start w-screen h-screen flex flex-col bg-white text-black dark:bg-black dark:text-white overflow-hidden'>
      <EmptyNavbar />
      {children}
    </section>
  );
}
