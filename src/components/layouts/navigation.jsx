import { useEffect, useState } from "react";
import navigation from "@data/navigation.json";

export default function Navigation({ n_type }) {

  const topBarData = navigation?.topBar;
  const navBarData = navigation?.navBar;
  const mobileNumberText = topBarData?.mobileNumber?.text || "No Number available";

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelectorAll(".nav-link");
    const logo = document.querySelector(".logo");
    const menu = document.querySelector(".menu");
    const menuBody = document.querySelector(".menu-body");

    const menuOpenFun = () => {
      menu.style.display = "block";
      document.body.style.overflow = "hidden";
      setIsMenuOpen(true);
    };

    const menuCloseFun = () => {
      menu.style.display = "none";
      document.body.style.overflow = "unset";
      setIsMenuOpen(false);
    };

    const handleMenuOpen = () => {
      menuOpenFun();
    };

    const handleMenuClose = (e) => {
      e.stopPropagation();
      menuCloseFun();
    };

    const handleMenuBodyClick = (e) => {
      e.stopPropagation();
    };

    const invokeFunctionOnScrollDown = () => {
      navbar.style.backgroundColor = "white";
      if (navBarData?.logo2?.src) {
        logo.src = navBarData.logo2.src;
      }
      navLinks.forEach((link) => {
        link.style.color = "#0183B3";
      });
    };

    const invokeFunctionOnScrollTop = () => {
      navbar.style.backgroundColor = "transparent";
      if (navBarData?.logo?.src) {
        logo.src = navBarData.logo.src;
      }
      navLinks.forEach((link) => {
        link.style.color = "white";
      });
    };

    if (n_type == '1') {
      const updateNavbarBackground = () => {
        if (window.scrollY > 100) {
          invokeFunctionOnScrollDown();
        } else {
          invokeFunctionOnScrollTop();
        }
      };

      window.addEventListener("scroll", updateNavbarBackground);
      return () => {
        window.removeEventListener("scroll", updateNavbarBackground);
      };
    } else if (n_type == '2') {
      const updateNavbarBackground = () => {
        if (window.scrollY > 100) {
          invokeFunctionOnScrollDown();
        } else {
          invokeFunctionOnScrollDown();
        }
      };

      invokeFunctionOnScrollDown();

      window.addEventListener("scroll", updateNavbarBackground);

      return () => {
        window.removeEventListener("scroll", updateNavbarBackground);
      };
    }

  }, [navBarData]);

  return (
    <>
      <nav className="fixed top-0 w-full z-[100]">
        <div className="bg-green py-[10px]">
          <div
            className="flex items-center justify-end gap-[30px] max-container mx-auto font-[500] text-[15px]"
          >
            <a
              href='#'
              className="flex items-center gap-1 text-white hover:text-blue"
            >
              <i className="fa-solid fa-phone" aria-hidden="true"></i>{mobileNumberText}
            </a>
            {
              topBarData?.links?.map((item, index) => {
                return (
                  <a
                    key={'n1_' + index}
                    href={item?.link}
                    target={item?.target}
                    className="text-white hover:text-blue hidden lg:block"
                  >
                    {item?.text}
                  </a>
                );
              })
            }
          </div>
        </div>
        <div className="navbar py-[16px]">
          <div
            className="flex items-center justify-between gap-[20px] max-container mx-auto"
          >
            <div>
              <img
                src={navBarData?.logo.src}
                alt={navBarData?.logo?.alt}
                width={navBarData?.logo?.width}
                height={navBarData?.logo?.height}
                className="logo"
              />
            </div>

            <div className="items-center gap-5 text-[17px] font-[500] hidden lg:flex">
              {
                navBarData?.links?.map((item, index) => {
                  return (
                    <div className="flex nav-submenu-container" key={'na-m-' + index}>
                      <a
                        key={"n2_" + index}
                        href={item?.link}
                        target={item?.target} className="nav-link">
                        {item?.text}
                      </a>
                      {
                        item?.submenu &&
                        <div style={{ margin: '7px 10px' }}>
                          <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.52868 7.82886L1.21618 2.51636C0.784534 2.11792 0.784534 1.42065 1.21618 1.02222C1.61461 0.590576 2.31188 0.590576 2.71032 1.02222L7.29235 5.57104L11.8412 1.02222C12.2396 0.590576 12.9369 0.590576 13.3353 1.02222C13.767 1.42065 13.767 2.11792 13.3353 2.51636L8.02282 7.82886C7.62438 8.2605 6.92711 8.2605 6.52868 7.82886Z" fill="white" />
                          </svg>
                        </div>
                      }
                      {
                        item?.submenu && item?.submenu.length > 0 &&
                        <div className="nav-submenu" style={{ position: 'relative' }}>
                          <ul>
                            {
                              item.submenu.map((item2, index2) => {
                                return (
                                  <li key={'submenu_' + index + '_' + index2}
                                    className={item2.align == 'left' ? 'nav-submenu-item na-left' : 'nav-submenu-item na-right'}
                                  >{item2.text}</li>
                                )
                              })
                            }
                          </ul>
                        </div>
                      }
                    </div>
                  );
                })
              }
            </div>

            <button className="lg:hidden text-white text-[24px] menu-open" >
              <i className="fa-solid fa-bars" aria-hidden="true"></i>
            </button>

            <div className="menu hidden bg-[rgba(0,0,0,0.7)] fixed top-0 right-0 max-h-screen h-screen w-full">
              <div className="menu-body bg-white absolute top-0 right-0 z-10 h-full w-3/4 p-5 overflow-y-auto hide-scrollbar flex flex-col gap-3 md:gap-5 p4 font-[500]">
                <button className="w-max ml-auto text-[24px] md:text-[30px] menu-close">
                  <i className="fa-solid fa-xmark" aria-hidden="true"></i>
                </button>
                {
                  navBarData?.links?.map((item, index) => {
                    return (
                      <a
                        key={'n3_' + index}
                        href={item?.link}
                        target={item?.target}
                        className="text-blue hover:text-highlight-green"
                      >
                        {item?.text}
                      </a>
                    );
                  })
                }
                {
                  topBarData?.links?.map((item, index) => {
                    return (
                      <a
                        key={'n4_' + index}
                        href={item?.link}
                        target={item?.target}
                        className="text-blue hover:text-highlight-green"
                      >
                        {item?.text}
                      </a>
                    );
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
