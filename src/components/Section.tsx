import { ReactNode } from "react";

type SectionProps = {
  title?: string;
  children: ReactNode;
};

const Section = ({ children, title = "GOAL" }: SectionProps) => {
  return (
    <section>
      {children}
      <h2>{title}</h2>
    </section>
  );
};

export default Section;
