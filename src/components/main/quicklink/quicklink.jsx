import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

export default function MainQuicklink(block) {

    return (
        <div className="bg-sky-blue relative py-[50px] md:py-[100px] lg:pt-[40px] lg:pb-[200px]">
            <img
                src="/images/quick-links-shape.png"
                alt="shape"
                className="absolute left-1/2 -translate-x-1/2 w-full quick-links-shape hidden lg:block"
            />
            <div className="max-container relative z-[1]">
                <p className="text-center text-blue p4 leading-[28px] md:leading-[40px] mb-[25px] md:mb-[35px] font-[500]">
                    {block?.title}
                </p>
                <div className="flex items-center justify-center gap-[20px] md:gap-[30px] flex-wrap">
                    {
                        block?.button1Text && (
                        <button className="btn2">
                            {block?.button1Text}
                            <i className="fa-solid fa-circle-chevron-right text-green ml-1" />
                        </button>
                        )
                    }
                    {
                        block?.button2Text && (
                        <button className="btn2">
                            {block?.button2Text}{" "}
                            <i className="fa-solid fa-circle-chevron-right text-green ml-1" />
                        </button>
                        )
                    }
                    {
                        block?.button3Text && (
                        <button className="btn2">
                            {block?.button3Text}{" "}
                            <i className="fa-solid fa-circle-chevron-right text-green ml-1" />
                        </button>
                        )
                    }
                </div>
                <p className="text-center text-blue p4 leading-[28px] md:leading-[34px] mt-[30px] md:mt-[66px] whitespace-pre-line">
                    {block?.description}
                </p>
                <a
                href={'tel:$'+ block?.mobileNumber?.text}
                target="_blank"
                className="flex items-center gap-1 text-blue w-max mx-auto p4 font-[700] leading-[28px] md:leading-[40px] my-2"
                ><i className="fa-solid fa-phone"></i>{
                    block?.mobileNumber?.text
                }<span className="hidden">0</span></a>
                <p className="text-center text-blue p1">
                {block?.timings}
                </p>
            </div>
        </div>
    );
}
