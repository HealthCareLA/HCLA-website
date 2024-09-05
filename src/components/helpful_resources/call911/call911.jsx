import MarkdownIt from "markdown-it";
export default function HelpfulResourceCall911(block) {

    return (
        <section suppressHydrationWarning>
            <div className="bg-trans-blue relative pt-[50px] lg:pt-[100px] xl:pt-[120px]">
                <img
                    src="/images/heroshape-trans-blue.png"
                    alt="shape"
                    className="absolute left-1/2 -translate-x-1/2 top-[-110%] w-full hidden lg:block"
                />
                <div className="max-container relative">
                    <div className="bg-white p-[20px] lg:p-[30px] rounded-[10px] flex items-center justify-center relative shadow-[0px_0px_10px_0px_#0183B31A]">
                        <div>
                            <img src={block.icon} alt="911 icon" className="w-65px h-[55px] lg:h-[65px]" />
                        </div>
                        <p className="text-blue font-[500] pl-[20px] lg:pl-[40px] p5" style={{ 'fontSize': '28px' }}>{block.text}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
