import React from "react";
import { calsans } from "@/fonts/calsans";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";
import styled from "styled-components"
import { Cover } from "@/components/ui/cover";

const Section = styled.div`
  min-height: 100vh;
  position: relative;
  padding: 4rem 0;
  margin-bottom: 2rem;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 150px;
    background: linear-gradient(to bottom, rgb(250,250,250) 0%, transparent 100%);
    pointer-events: none;
    z-index: 10;
  }

  &::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    background: radial-gradient(#2EB9DF 1px, transparent 1px);
    background-size: 16px 16px;
    mask-image: radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%);
    -webkit-mask-image: radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%);
    pointer-events: none;
    opacity: 0.2;
  }
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem 0;
`
const Compo = styled.div`
  display: flex;
  max-width: 100%;
  padding: 0 1rem;
  margin-bottom: 2rem;
`


export default function Who() {
  const dummyContent = [
    {
      title: "Lorem Ipsum Dolor Sit Amet",
      description: (
        <>
          <p>
            Sit duis est minim proident non nisi velit non consectetur. Esse
            adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt
            Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat incididunt
            incididunt enim magna id est qui sunt fugiat. Laboris do duis pariatur
            fugiat Lorem aute sit ullamco. Qui deserunt non reprehenderit dolore
            nisi velit exercitation Lorem qui do enim culpa. Aliqua eiusmod in
            occaecat reprehenderit laborum nostrud fugiat voluptate do Lorem culpa
            officia sint labore. Tempor consectetur excepteur ut fugiat veniam
            commodo et labore dolore commodo pariatur.
          </p>
          <p>
            Dolor minim irure ut Lorem proident. Ipsum do pariatur est ad ad
            veniam in commodo id reprehenderit adipisicing. Proident duis
            exercitation ad quis ex cupidatat cupidatat occaecat adipisicing.
          </p>
          <p>
            Tempor quis dolor veniam quis dolor. Sit reprehenderit eiusmod
            reprehenderit deserunt amet laborum consequat adipisicing officia qui
            irure id sint adipisicing. Adipisicing fugiat aliqua nulla nostrud.
            Amet culpa officia aliquip deserunt veniam deserunt officia
            adipisicing aliquip proident officia sunt.
          </p>
        </>
      ),
      badge: "React",
      image: "/globe.svg",
    },
    {
      title: "Lorem Ipsum Dolor Sit Amet",
      description: (
        <>
          <p>
            Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
            deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
            non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
            sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
            velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
            commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
          </p>
          <p>
            In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse
            veniam fugiat esse qui sint ad sunt reprehenderit do qui proident
            reprehenderit. Laborum exercitation aliqua reprehenderit ea sint
            cillum ut mollit.
          </p>
        </>
      ),
      badge: "Changelog",
      image: "/file.svg",
    },
    {
      title: "Lorem Ipsum Dolor Sit Amet",
      description: (
        <>
          <p>
            Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
            deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
            non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
            sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
            velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
            commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
          </p>
        </>
      ),
      badge: "Launch Week",
      image: "/logo.svg",
    },
  ];

  return (
    <Section>   
      <Container>
        <div className="flex flex-col items-center pt-[10vh]">
          <h3 className="text-1xl md:text-2xl lg:text-3xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white ">
            Who are we?
          </h3>
          <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white ">
            <Cover> Build amazing websites <br /> at warp speed</Cover>
          </h1>
        </div>
      </Container><br/><br/>
      <Compo>
        <TracingBeam className="px-6">
          <div className="max-w-2xl mx-auto antialiased pt-4 relative">
            {dummyContent.map((item, index) => (
              <div key={`content-${index}`} className="mb-10">
                <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                  {item.badge}
                </h2>

                <p className={twMerge(calsans.className, "text-xl mb-4")}>
                  {item.title}
                </p>

                <div className="text-sm  prose prose-sm dark:prose-invert">
                  {item?.image && (
                    <Image
                      src={item.image}
                      alt="blog thumbnail"
                      height="1000"
                      width="1000"
                      className="rounded-lg mb-10 object-cover"
                    />
                  )}
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </TracingBeam>
      </Compo>
    </Section>
  );
}
