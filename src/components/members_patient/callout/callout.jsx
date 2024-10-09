import MarkdownIt from "markdown-it";
export default function MemberPatientCallout(block) {

    return (
        <section suppressHydrationWarning>
            <div className="bg-trans-blue w-full relative z-1 pt-[50px] lg:pt-[85px]">
                <div className="max-container">

                    <div className="callout-section bg-white shadow-[0_0_10px_0_rgb(1 131 179 / 10%)] rounded-[18px] p-[30px] md:px-10 lg:px-20 py-10 flex flex-wrap">
                        <div className="icon bg-green-100 rounded-full pt-[5px] p-[10px] w-full sm:w-[68px]">
                            <img src={block.icon} alt="call-icon" className="mx-auto h-[48px] md:h-[58px]" />
                        </div>
                        <div className="text text-center w-full sm:w-[calc(100%-68px)] pt-[10px] sm:pt-0 pl-0 sm:pl-5 md:pl-10 text-blue font-medium">
                            <p className="p4">
                                {block.message} <a className="hover:text-green whitespace-nowrap" href={`tel:${block.contactLink}`}>{block.contactInfo}</a>
                            </p>
                            {block.operatingHours && (
                                <p className="p4">
                                    {block.operatingHours}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
