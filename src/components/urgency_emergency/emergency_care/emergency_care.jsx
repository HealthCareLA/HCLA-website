import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

export default function UrgencyEmergencyCare(block) {
    return (
        <div className="bg-white relative py-[50px] md:py-[120px] lg:pt-0">

            <div className="max-container text-center relative z-[1]">
                <h3 className="font-[500] font-outfit text-blue mt-20">
                <i className="fa-solid fa-phone"></i> {block?.title}
                </h3>
                <p className="p1 text-dark-blue my-[22px] text-center whitespace-pre-line" dangerouslySetInnerHTML={{ __html: block?.description }}>{ }</p>
                <div className="bg-trans-blue p-[50px]">
                    <p className="p1 text-dark-blue my-[22px] text-left md:text-left whitespace-pre-line" dangerouslySetInnerHTML={{ __html: block?.detailSection1?.detailed_title + ':' }}>{ }</p>

                    <div className="flex flex-wrap text-left gap-[10px] md:gap-0">
                        {
                            block?.points?.map((point, index) => {
                                return (
                                    <div key={"clinical_" + index} className="w-full lg:w-1/2 flex gap-2">
                                        <i className="fa-solid fa-circle-chevron-right text-green text-lg md:text-xl mt-[6px] md:mt-3" />
                                        <p className="text-blue font-[500] p2 leading-7 md:leading-[42px]">
                                            {point}
                                        </p>
                                    </div>
                                );
                            })
                        }
                    </div>
                    <div
                        className="mt-[25px] md:mt-[47px] flex flex-col lg:flex-row items-stretch gap-[25px] md:gap-[35px] justify-between"
                    >
                        <div
                            className="w-full bg-white drop-shadow-[0_0_10px_0_rgba(1,131,179,0.10)] rounded-lg md:rounded-[18px]"
                        >
                            <p className="p1 text-dark-blue my-5 whitespace-pre-line">
                            <i className="fa-solid fa-phone"></i> {block?.detailSection1?.detailed_call}
                            </p>
                            {
                                block?.detailSection1?.buttonText && (
                                    <button className="bg-blue hover:bg-med-blue text-white mx-auto p3 btn1">
                                        {block?.detailSection1?.buttonText}{" "}
                                        <i className="fa-solid fa-circle-chevron-right text-green ml-1" />
                                    </button>
                                )
                            }
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-[30px] lg:gap-10 xl:gap-[70px] mt-20">
                        {block?.points2?.map((point, index) => (
                            <div key={index} className="text-common-clr text-left flex gap-3">
                                {point.icon && (
                                    <div
                                        className={`min-w-10 ${point.icon.hasBackground
                                            ? 'mb-[10px] bg-[#EEFCFF] w-[90px] h-[90px] p-[15px] rounded-full flex justify-center items-center'
                                            : ''
                                            }`}
                                    >
                                        <img
                                            src={point.icon.src}
                                            alt={point.icon.alt}
                                            width={point.icon.width}
                                            height={point.icon.height}
                                            className={point.icon.hasBackground ? 'w-auto h-10' : ''}
                                        />
                                    </div>
                                )}
                                {point.title && (
                                    <h3 className="font-medium mb-[10px] leading-normal text-[22px] lg:text-2xl xl:text-[28px] text-blue">
                                        {point.title}
                                    </h3>
                                )}
                                <p className="p2" dangerouslySetInnerHTML={{ __html: point.description }}>{ }</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
