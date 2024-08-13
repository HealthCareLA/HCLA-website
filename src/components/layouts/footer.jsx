import footer from "@data/footer.json";

export default function Footer() {
  return (
    <footer className="bg-blue py-[50px]">
      <div
        className="max-container flex flex-col lg:flex-row items-start justify-between gap-[25px] md:gap-[50px] w-full"
      >
        <div
          className="flex flex-col lg:flex-row items-start gap-[25px] md:gap-[40px] lg:gap-[90px] w-full"
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
            className="flex flex-col md:flex-row items-start justify-between lg:justify-start w-full gap-[25px] md:gap-[40px] lg:gap-[90px] p3 leading-[36px]"
          >
            <div className="flex flex-col w-full">
              <p className="text-green font-[700]">{footer?.sitemapTitle}</p>
              {
                footer?.sitemaplinks?.map((item) => {
                  return (
                    <a href={item?.link} target={item?.target} className="text-white">
                      {item?.text}
                    </a>
                  );
                })
              }
            </div>
            <div className="flex flex-col w-full">
              <p className="text-green font-[700]">{footer?.quicklinksTitle}</p>
              {
                footer?.quicklinks?.map((item) => {
                  return (
                    <a href={item?.link} target={item?.target} className="text-white">
                      {item?.text}
                    </a>
                  );
                })
              }
            </div>
          </div>
        </div>
        <div
          className="bg-transparent border-[1px] border-white rounded-[4px] py-[7px] px-[15px] flex items-center gap-[5px]"
        >
          <input
            type="text"
            className="bg-transparent border-none outline-none text-white footer-input"
            placeholder="Search"
          /><button
            ><i className="fa-solid fa-circle-chevron-right text-green"></i></button>
        </div>
      </div>
    </footer>

  );
}
