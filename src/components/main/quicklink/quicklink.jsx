import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

export default function MainQuicklink(block) {

    return (
        <section suppressHydrationWarning>
            <div className="bg-sky-blue relative py-[50px] md:py-[100px] lg:pt-10 lg:pb-40">
                <img
                    src="/images/quick-links-shape.png"
                    alt="shape"
                    className="absolute left-1/2 -translate-x-1/2 w-full quick-links-shape hidden lg:block"
                />
                <div className="max-container relative z-[1]">
                    <p className="text-center text-blue p4 leading-7 md:leading-10 mb-[25px] md:mb-[35px] font-medium">
                        {block?.title}
                    </p>
                    <div className="flex items-center justify-center gap-5 md:gap-[30px] flex-wrap">
                        {
                            block?.button1Text && (
                                <a href={block?.button1Link}>
                                    <button className="btn2">
                                        {block?.button1Text}
                                        <i className="fa-solid fa-circle-chevron-right text-green ml-1" />
                                    </button>
                                </a>
                            )
                        }
                        {
                            block?.button2Text && (
                                <a href={block?.button2Link}>
                                    <button className="btn2">
                                        {block?.button2Text}{" "}
                                        <i className="fa-solid fa-circle-chevron-right text-green ml-1" />
                                    </button>
                                </a>
                            )
                        }
                        {
                            block?.button3Text && (
                                <a href={block?.button3Link}>
                                    <button className="btn2">
                                        {block?.button3Text}{" "}
                                        <i className="fa-solid fa-circle-chevron-right text-green ml-1" />
                                    </button>
                                </a>
                            )
                        }
                    </div>
                    <p className="text-center text-blue p4 leading-7 md:leading-[34px] mt-[30px] md:mt-[66px] whitespace-pre-line max-w-xl mx-auto">
                        {block?.description}
                    </p>
                    <a
                        href={'tel:$' + block?.mobileNumber?.text}
                        target="_blank"
                        className="flex items-center gap-1 text-blue w-max mx-auto p4 font-[700] leading-7 md:leading-10 my-2"
                    ><i className="fa-solid fa-phone"></i>{
                            block?.mobileNumber?.text
                        }<span className="hidden">0</span></a>
                    <p className="text-center text-blue p1">
                        {block?.timings}
                    </p>
                </div>
            </div>
        </section>
    );
}
