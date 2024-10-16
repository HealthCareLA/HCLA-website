import React, { useEffect, useRef } from 'react';

const CounterSection = ({ title, gridCols = 3, counters }) => {
  const counterRefs = useRef([]);

  // Helper function to get the grid class based on the number of columns
  const getGridClass = (gridCols) => {
    switch (gridCols) {
      case 1:
        return 'lg:grid-cols-1';
      case 2:
        return 'lg:grid-cols-2';
      case 3:
        return 'lg:grid-cols-3';
      case 4:
        return 'lg:grid-cols-4';
      default:
        return 'lg:grid-cols-3';
    }
  };

  const gridClass = getGridClass(gridCols);

  useEffect(() => {
    const counters = counterRefs.current;
    const options = {
      root: null,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const targetNumber = parseInt(counter.getAttribute('data-target').replace(/\D/g, ''), 10);
          let start = 0;
          const duration = 2000;
          const increment = targetNumber / (duration / 16);

          const updateCounter = () => {
            const numberElement = counter.querySelector('.number');
            start += increment;
            console.log('start: ' + start);
            if (start < targetNumber) {
              if (numberElement) {
                numberElement.innerText = Math.ceil(start).toLocaleString();
              } else {
                console.log('error: Number Element NULL -----');
              }
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

    counters.forEach((counter) => {
      observer.observe(counter);
    });

    // Cleanup observer when the component is unmounted
    return () => observer.disconnect();
  }, []);

  return (
    <section id="Finding_Care" suppressHydrationWarning>
      <div className="relative pt-[50px] pb-[50px] md:pb-20 lg:pb-[100px] lg:pt-20">
        <div className="absolute left-1/2 -translate-x-1/2 w-full top-[-125px] hidden lg:block">
          <svg className="w-full h-[447px]" viewBox="0 0 1440 447" preserveAspectRatio='none' fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1440 123.895C1216.36 44.4551 973.9 0.975098 720.63 0.975098C467.36 0.975098 223.99 44.6251 0 124.345V446.065H1440V123.895Z" fill="white"/>
          </svg>
        </div>

        <div className="max-container relative z-[2]">
          <div className="counter-section" id="counterSection">
            <h2 className="font-[500] leading-10 md:leading-[54px] text-blue text-center mb-[30px] lg:mb-[50px] xl:mb-20">
              {title}
            </h2>
            <div className={`grid grid-cols-1 sm:grid-cols-2 ${gridClass} gap-5 lg:gap-[30px]`}>
              {counters?.map((counter, index) => (
                <div
                  className="counter p-[25px] lg:p-[35px] rounded-[18px] shadow-md"
                  data-target={counter.number}
                  style={{ backgroundColor: counter.backgroundColor || '#ffffff' }}
                  key={index}
                  ref={(el) => (counterRefs.current[index] = el)} // Store the ref for each counter
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
      </div>
    </section>
  );
};

export default CounterSection;