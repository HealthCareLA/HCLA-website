import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

export default function ResourceHero(block) {


  return (

    <section
      className="bg-blue text-white py-[50px] md:py-[80px] lg:pt-[120px] lg:pb-[25px] min-h-[350px]"
      suppressHydrationWarning
    >
      <div
        className="max-container flex flex-col items-start justify-between gap-x-5 gap-y-10"
      >
        <h1 className="font-[500] mt-[40px] w-full text-center">
          {block?.title}
        </h1>
      </div>
    </section>

  );
}
