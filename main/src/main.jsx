import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".dx-fixed-background__media-wrapper", {
      scale: 0.55,
      scrollTrigger: {
        trigger: ".dx-fixed-background__media-wrapper",
        start: "top bottom",
        end: "center 75%",
        scrub: true
      }
    });

    gsap.from(".dx-fixed-background__media", {
      borderRadius: "300px",
      scrollTrigger: {
        trigger: ".dx-fixed-background__media-wrapper",
        start: "top bottom",
        end: "center 75%",
        scrub: true
      }
    });

    const header = document.getElementById('myHeader');
    const page = document.getElementById('page');
    const openMenuButton = document.getElementById('openmenu');
    const slider = document.querySelector('.slider');

    function activate(e) {
      const items = document.querySelectorAll('.item');
      e.target.matches('.next') && slider.append(items[0])
      e.target.matches('.prev') && slider.prepend(items[items.length - 1]);
    }

    document.addEventListener('click', activate, false);

    window.addEventListener('scroll', function () {
      page.classList.remove('menuopen');
      if (window.scrollY >= 100) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    });

    openMenuButton.addEventListener('click', function () {
      header.classList.remove('sticky');
      page.classList.add('menuopen');
    });

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function (link) {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });

          const targetUrl = this.getAttribute('href');

          if (targetUrl === targetUrl) {
            page.classList.remove('menuopen');
            header.classList.add('sticky');
          }
        }
      });
    });

    // Cleanup function
    return () => {
      document.removeEventListener('click', activate, false);
      window.removeEventListener('scroll', () => { });
      openMenuButton.removeEventListener('click', () => { });
      links.forEach(function (link) {
        link.removeEventListener('click', () => { });
      });
    };
  }, []);

  return (
    <div>
      {/* Your React JSX content here */}
    </div>
  );
}

export default App;
