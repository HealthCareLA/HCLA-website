import MarkdownIt from "markdown-it";
export default function HelpfulResourceCall911(block) {

    return (
        <section suppressHydrationWarning>
            <div className="bg-trans-blue relative pt-[50px]">
                <div className="bg-white relative h-[250px] -mt-[130px]">
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-[-0px] w-full hidden lg:block">
                        <svg className="w-full h-full" width="1440" height="360" viewBox="0 0 1440 360" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1033.77 0.777344C725.72 0.777344 674.08 190.046 373.99 197.96C205.43 197.96 117.5 162.062 0 134.344V359.03H1440V172.431C1294.84 98.5833 1165.95 0.777344 1033.77 0.777344Z" fill="rgb(238 252 255)"/>
                        </svg>
                    </div>
                </div>
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
