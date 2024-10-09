import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

export default function ProviderSecureMeeting(block) {
    return (
        <section suppressHydrationWarning>
            <div className="bg-white lg:py-[50px]">
                <div className="max-container pt-[50px] pb-[50px]">
                    <h2
                        className="text-blue font-medium leading-10 md:leading-[64px] mb-[33px] text-center max-w-[900px] mx-auto"
                    >
                        {block?.title}
                    </h2>
                    <p
                        className="p1 text-dark-blue font-normal mb-[25px] md:mb-[50px] text-center whitespace-pre-line max-w-[982px] mx-auto"
                    >
                        {block?.description}
                    </p>
                </div>
            </div>
        </section>
    );
}
