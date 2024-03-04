
import { Wrapper } from "../../shared/ui/Wrapper";
import { CatAnimation } from "../../features/cat-animation/ui";
import { useEffect, useState } from "react";
import { Header } from "../../widgets";
import { ContactsList } from "../../shared";
export const Home = (): React.ReactNode => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const delay = setTimeout(() => {
      setIsVisible(true);
    }, 700);

    return () => clearTimeout(delay);
  });
  return (
    <Wrapper>
      <div
        className={`w-full h-full flex flex-col opacity-0 transition-opacity duration-700 ${
          isVisible ? "opacity-100" : ""
        }`}
      >
        <div className="w-full h-full gap-12 flex flex-col flex-wrap justify-around text-white">
          <div className="w-4/5 mx-auto my-0" id="container">
            <div className="">
              <Header />
              <main className="flex flex-1 justify-center">
                <div className="mt-48 flex flex-col gap-6">
                  <h2>
                    Hello, I'm Yevgen Kotyk, a hard-working and creative
                    <span className="opacity-30">?</span> web developer. With
                    experience in JS, React, PHP, and Laravel.
                  </h2>
                  <ContactsList />
                </div>
              </main>
            </div>

            <section className="relative my-48 flex items-center">
              <CatAnimation />
            </section>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
