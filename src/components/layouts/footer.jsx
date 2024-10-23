import footer from "@data/footer.json";

export default function Footer() {
  return (
    <footer className="bg-blue py-[50px]">
      <div
        className="max-container flex flex-col lg:flex-row items-start justify-between gap-[25px] md:gap-[50px] w-full"
      >
        <div
          className="flex flex-col lg:flex-row items-start gap-[25px] md:gap-10 lg:gap-[90px] w-full"
        >
          <div>
            <img
              src={footer?.logo?.src}
              alt={footer?.logo?.alt}
              width={footer?.logo?.width}
              height={footer?.logo?.height}
            />
          </div>
          <div
            className="flex flex-col sm:flex-row items-start justify-between lg:justify-start w-full gap-[25px] md:gap-10 lg:gap-[90px] p3 leading-9"
          >
            <div className="flex flex-col w-full">
              <p className="text-green font-bold">{footer?.colOneTitle}</p>
              {
                footer?.colOneLinks?.map((item) => {
                  return (
                    <a href={item?.link} target={item?.target} className="text-white hover:text-green">
                      {item?.text}
                    </a>
                  );
                })
              }
            </div>
            <div className="flex flex-col w-full">
              <p className="text-green font-bold">{footer?.colTwoTitle}</p>
              {
                footer?.colTwoLinks?.map((item) => {
                  return (
                    <a href={item?.link} target={item?.target} className="text-white hover:text-green">
                      {item?.text}
                    </a>
                  );
                })
              }
            </div>
            <div className="flex flex-col w-full">
              <p className="text-green font-bold">{footer?.colThreeTitle}</p>
              {
                footer?.colThreeLinks?.map((item) => {
                  return (
                    <a href={item?.link} target={item?.target} className="text-white hover:text-green">
                      {item?.text}
                    </a>
                  );
                })
              }
            </div>
            <div className="flex flex-col w-full">
              <p className="text-green font-bold">{footer?.colFourTitle}</p>
              {
                footer?.colFourLinks?.map((item) => {
                  return (
                    <a href={item?.link} target={item?.target} className="text-white hover:text-green">
                      {item?.text}
                    </a>
                  );
                })
              }
            </div>
          </div>
        </div>
      </div>
    </footer>

  );
}
