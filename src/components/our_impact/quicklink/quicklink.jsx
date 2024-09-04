import MarkdownIt from "markdown-it";
import { useEffect, useState } from "react";
const md = new MarkdownIt({ html: true });

export default function OurImpactQuicklink(block) {

    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const stickyLinks = document.getElementById('sticky-links');
        const stickyOffset = stickyLinks.getBoundingClientRect().top + window.pageYOffset;

        const handleScroll = () => {
            const windowpos = window.scrollY || document.documentElement.scrollTop;
            if (windowpos >= stickyOffset) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section suppressHydrationWarning>
            <div id="sticky-links" style={{ marginTop: (isFixed ? '' : '-20px') }}
                className={`bg-white py-9 overflow-auto ${isFixed ? 'fixed-impact-link top-0 w-full' : 'relative'}`} >
                <div className="w-[1050px] max-container">
                    <ul className="w-full flex justify-center gap-[30px] xl:gap-[50px] xxl:gap-[90px]">
                        {block.links?.map((item, index) => (
                            <li key={index} className="p2 text-blue font-medium hover:text-green whitespace-nowrap">
                                <a href={item.link} target={item.target}>
                                    {item.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section >
    );
}
