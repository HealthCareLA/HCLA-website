import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

export default function MainQuicklink(block) {

    return (
        <section suppressHydrationWarning>
            <div className="bg-sky-blue relative py-[50px] md:py-[100px] lg:pt-10 lg:pb-40">
                <div className="absolute left-1/2 -translate-x-1/2 w-full top-[-270px] hidden lg:block">
                    <svg className="w-full h-full" width="1440" height="360" viewBox="0 0 1440 360" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1033.77 0.777344C725.72 0.777344 674.08 190.046 373.99 197.96C205.43 197.96 117.5 162.062 0 134.344V359.03H1440V172.431C1294.84 98.5833 1165.95 0.777344 1033.77 0.777344Z" fill="#e1f9ff"/>
                    </svg>
                </div>
                <div className="max-container relative z-[1] pb-20">
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
