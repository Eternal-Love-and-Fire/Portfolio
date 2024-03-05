import { CatAnimation } from "../../../features/cat-animation/ui";

import { ContactsList } from "../../../components";

export const Home = (): React.ReactNode => {
  return (
    <>
      <main className="flex flex-1 justify-center">
        <div className="mt-48 flex flex-col gap-6">
          <h2>
            Hello, I'm Yevgen Kotyk, a hard-working and creative
            <span className="opacity-30">?</span> web developer. With experience
            in JS, React, PHP, and Laravel.
          </h2>
          <ContactsList />
        </div>
      </main>

      <section className="relative my-48 flex items-center">
        <CatAnimation />
      </section>
    </>
  );
};
