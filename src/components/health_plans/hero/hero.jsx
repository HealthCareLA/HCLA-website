export default function HealthPlansHero(block) {

  return (

    <section
      className="bg-blue text-white py-20 md:pt-40 lg:pt-[120px] lg:pb-[250px]"
      suppressHydrationWarning
    >
      <div
        className="max-container flex flex-col items-start justify-between gap-x-5 gap-y-10"
      >
        <h1 className="font-medium mt-10 w-full text-center">
          {block?.title}
        </h1>
      </div>
    </section>

  );
}
