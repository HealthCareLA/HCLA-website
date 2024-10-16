import MarkdownIt from "markdown-it";
export default function HelpfulResourceCall911(block) {

    return (
        <section className="relative" suppressHydrationWarning>
            <div className="absolute left-0 w-full top-[-164px] hidden lg:block">
                <svg className='w-full h-[446px]' viewBox="0 0 1440 446" preserveAspectRatio='none' fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1440.92 122.92C1217.28 43.48 974.816 0 721.546 0C468.276 0 224.906 43.65 0.915527 123.37V445.09H1440.92V122.92Z" fill="#eefcff"/>
                </svg>
            </div>
            <div className="bg-trans-blue relative pt-[50px]">
                <div className="max-container relative">
                    <div className="bg-white p-5 lg:p-[30px] rounded-[10px] flex items-center justify-center relative shadow-[0px_0px_10px_0px_#0183B31A]">
                        <div>
                            <img src={block.icon} alt="911 icon" className="w-65px h-[55px] lg:h-[65px]" />
                        </div>
                        <p className="text-blue font-medium pl-5 lg:pl-10 p5" style={{ 'fontSize': '28px' }}>{block.text}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
