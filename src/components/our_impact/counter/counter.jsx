import MarkdownIt from "markdown-it";
import { useEffect, useState } from "react";

const md = new MarkdownIt({ html: true });
const isMatch = true;

export default function OurImpactCounter(block) {

  useEffect(() => {
    const counters = document.querySelectorAll('.counter');
    const options = {
      root: null,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const targetNumber = parseInt(counter.getAttribute('data-target').replace(/\D/g, ''), 10);
          const numberElement = counter.querySelector('.number');
          let start = 0;
          const duration = 2000;
          const increment = targetNumber / (duration / 16);

          const updateCounter = () => {
            start += increment;
            if (start < targetNumber) {
              numberElement.innerText = Math.ceil(start).toLocaleString();
              requestAnimationFrame(updateCounter);
            } else {
              numberElement.innerText = targetNumber.toLocaleString();
            }
          };

          updateCounter();
          observer.unobserve(counter);
        }
      });
    }, options);

    counters.forEach(counter => {
      observer.observe(counter);
    });
  }, []);

  return (
    <section className={isMatch ? "bg-sky-blue text-blue py-20 md:py-20 lg:pt-[120px] lg:pb-[25px]" : "bg-blue text-white py-20 md:py-20 lg:pt-[120px] lg:pb-[25px]"} suppressHydrationWarning>
      <div className="max-container flex flex-col justify-between gap-x-5 gap-y-10 relative">
        <div className="counter-section" id="counterSection">
          <h2 className="font-medium leading-10 md:leading-[54px] text-blue text-center mb-[30px] lg:mb-[50px] xl:mb-20">
            {block?.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px]">
            {block?.counters?.map((counter, index) => (
              <div
                className="counter bg-white p-[25px] lg:p-[35px] rounded-[18px] shadow-md"
                data-target={counter.number}
                key={'impact-counter-' + index}
              >
                <div className="flex">
                  <h3 className="number font-medium text-green" id={`counter-${index}`}>0</h3>
                  {counter.sign && (
                    <span className="font-medium text-green h3">{counter.sign}</span>
                  )}
                  {counter.signLetter && (
                    <span className="font-medium text-green h3">{counter?.signLetter}</span>
                  )}
                </div>
                <p className="label p2 text-common-clr font-medium mt-1">{counter.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

  );
}
