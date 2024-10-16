import MarkdownIt from "markdown-it";
import { useEffect, useState } from "react";
const md = new MarkdownIt({ html: true });

export default function ProvidersSecureQuicklink(block) {

    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const stickyLinks = document.getElementById('sticky-links');
        const stickyOffset = stickyLinks.getBoundingClientRect().top;

        const handleScroll = () => {
            const windowpos = window.scrollY || document.documentElement.scrollTop;
            if (windowpos+115 >= stickyOffset) {
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

    const moveToPage = (e, id) => {
        e.preventDefault();
        const targetRef = document.getElementById(id.substr(1, id.length));
        if (targetRef) {
            const top = targetRef.offsetTop;
            const idIsAuthorization = id === '#Authorizations';
            const fixedOffset = isFixed ? (idIsAuthorization ? 115 : 215) : (idIsAuthorization ? 215 : 315);
        
            window.scrollTo({
                top: top - fixedOffset,
                behavior: 'smooth',
            });
        }
    }

    return (
        <section id="sticky-links" suppressHydrationWarning>
            <div
                className={`bg-white py-9 overflow-auto ${isFixed ? 'fixed-impact-link top-0 w-full' : 'relative'}`} suppressHydrationWarning>
                <div className="w-[1050px] max-container">
                    <ul className="w-full flex justify-center gap-[30px] xl:gap-[50px] xxl:gap-[90px]">
                        {block.links?.map((item, index) => (
                            <li key={index} className="p2 text-blue font-medium hover:text-green whitespace-nowrap">
                                <a href={item.link} target={item.target} onClick={(e) => moveToPage(e, item.link)}>
                                    {item.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
