import React from 'react';
import './style.css';
import './main.jsx';
import './main_login'
import './style_login.css'
import { useEffect } from 'react';
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
    <div className="App">
      <header id="myHeader">
        <img id="logo" src="rlLogo.png" alt="logo" />
        <nav>
          <a href="#vision">Крамниця</a>
          <a href="#knowledge">Бібліотека</a>
          <a href="#space">Спільнота</a>
          <a href="#future">"Аккаунт"</a>
          <button id="openmenu">
            <span></span>
            <span></span>
          </button>
        </nav>
      </header>
      <div id="page">
        <section id="vision">
          <ul className='slider'>
            <li className='item' style={{ backgroundImage: 'url(https://gadgetmates.com/wp-content/uploads/2024/03/helldivers-2-pc-game-cover-2048x1152.jpg)' }}>
              <div className='content'>
                <h2 className='title'>"HELLDIVERS 2"</h2>
                <p className='description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.</p>
                <button>Read More</button>
              </div>
            </li>
            <li className='item' style={{ backgroundImage: 'url(https://www.cyberpunk.net/build/images/pre-order/buy-b/keyart-ue-ru@2x-cd66fd0d.jpg)' }}>
              <div className='content'>
                <h2 className='title'>"Cyberpunk 2077"</h2>
                <p className='description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.</p>
                <button>Read More</button>
              </div>
            </li>
            <li className='item' style={{ backgroundImage: 'url(https://store-images.s-microsoft.com/image/apps.29727.67793643321489003.dd2aabd5-013d-491f-b85d-72606a4f8434.592bd1ae-48b0-4813-bfb4-00369a2e26e7?mode=scale&q=90&h=720&w=1280&background=%23FFFFFF)' }}>
              <div className='content'>
                <h2 className='title'>"Red Dead Redemption 2"</h2>
                <p className='description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.</p>
                <button>Read More</button>
              </div>
            </li>
            <li className='item' style={{ backgroundImage: 'url(https://helios-i.mashable.com/imagery/articles/0289uDJP2P4iXWdege2xIX1/hero-image.fill.size_1248x702.v1637435415.jpg)' }}>
              <div className='content'>
                <h2 className='title'>"Forza Horizon 5"</h2>
                <p className='description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.</p>
                <button>Read More</button>
              </div>
            </li>
            <li className='item' style={{ backgroundImage: 'url(https://image.api.playstation.com/vulcan/ap/rnd/202308/1519/95cce955dc59d04e2ea5ab624a823ace14e9c5f7e24dfb8f.png)' }}>
              <div className='content'>
                <h2 className='title'>"Baldur's Gates 3"</h2>
                <p className='description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.</p>
                <button>Read More</button>
              </div>
            </li>
            <li className='item' style={{ backgroundImage: 'url(https://cdn5.idcgames.com/storage/image/1343/game_home_bg_section_2/default.jpg)' }}>
              <div className='content'>
                <h2 className='title'>"Deep Rock Galactic"</h2>
                <p className='description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.</p>
                <button>Read More</button>
              </div>
            </li>
          </ul>
          <nav className='nav'>
            <button className='btn prev' name="arrow-back-outline"></button>
            <button className='btn next' name="arrow-forward-outline"></button>
          </nav>
        </section>
        <section id="knowledge" style={{ backgroundImage: 'url(https://cdn5.idcgames.com/storage/image/1343/game_home_bg_section_2/default.jpg)' }}>

        </section>
        <section id="space" style={{ backgroundImage: 'url(https://cdn5.idcgames.com/storage/image/1343/game_home_bg_section_2/default.jpg)' }}></section>
        <section id="future"
                 style={{backgroundImage: 'urlhttps://cdn5.idcgames.com/storage/image/1343/game_home_bg_section_2/default.jpg)'}}>
          <div className="container right-panel-active">

            <div className="container__form container--signup">
              <form action="#" className="form" id="form1">
                <h2 className="form__title">Sign Up</h2>
                <input type="text" placeholder="User" className="input"/>
                <input type="email" placeholder="Email" className="input"/>
                <input type="password" placeholder="Password" className="input"/>
                <button className="btn">Sign Up</button>
              </form>
            </div>


            <div className="container__form container--signin">
              <form action="#" className="form" id="form2">
                <h2 className="form__title">Sign In</h2>
                <input type="email" placeholder="Email" className="input"/>
                <input type="password" placeholder="Password" className="input"/>
                <a href="#" className="link">Forgot your password?</a>
                <button className="btn">Sign In</button>
              </form>
            </div>
            <div className="container__overlay">
              <div className="overlay">
                <div className="overlay__panel overlay--left">
                  <button className="btn" id="signIn">Sign In</button>
                </div>
                <div className="overlay__panel overlay--right">
                  <button className="btn" id="signUp">Sign Up</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
