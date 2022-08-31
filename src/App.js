import logo from "./logo.svg";
import "./App.css";

function App() {
  return <div>
    <nav class="nav" id="navbar">
      <h1 class="name-nav"> Montain Help</h1>

      <ul class="nav__links">
        <li class="nav__item">
          <a class="nav__link" href="#section--1">
            Mountain education</a>
        </li>
        <li class="nav__item">
          <a class="nav__link" href="#section--2">Ski Echiapament</a>
        </li>
        <li class="nav__item">
          <a class="nav__link" href="#section--3">Risk and Fun</a>
        </li>
      </ul>
    </nav>
    <header class="header">

      <div class="header__title">

        <h1 class="first-h1">
          When
          {/* <!-- Green highlight effect --> */}
          <span class="highlight">Montain HELP</span>
          meets<br />
          <span class="highlight"></span>
        </h1>
        <img
          src="https://img.freepik.com/premium-photo/team-climbers-man-woman-hiker-holding-hands-help-each-other-up-hill-with-red-flags-hiking-mountain-climbing-success-hiking-hikers-team-mountain-climb-activity-concept_532405-1655.jpg?w=1800"
          data-src="img/digital.jpg" alt="Computer" class="features__img lazy-img" />
      </div>
    </header>
    <div class="line">
      <span class="highlight"></span>
    </div>
    {/* <!-- section--1  --> */}
    <section class="section" id="section--1">
      <div class="section-title">
        <h1> Mountain <span class="highlight">education </span></h1>
        <div class="imagemove">
          <img
            src="https://thumbs.dreamstime.com/b/businessman-helping-each-other-hike-up-mountain-vector-illustration-black-lines-isolated-white-background-business-142552258.jpg"
            data-src="img/digital.jpg" alt="Compute" class="image-education" />
          <p class="section1-paragaf">On the mountain it's <span class="highlight">beautiful </span> you start with an
            amazing view, but
            you can't go
            on your own, you can't deviate from the route, you can't dare to climb the rocks yourself, on the mountain you
            can admire the beauty, the clean air, the complete silence, meeting people
            , and above all the moment when you reach the top and you see everything
            below you, practically everything is at your feet</p>
        </div>
      </div>
      <div class="buttonlearn">
        <a class="btn--text botton" href="apps/MONTAIN_education/Montain-Education_Button.html">learn more</a>
      </div>
    </section>
    <div class="line"></div>
    {/* <!-- sectiunea a 2 a ---------------> */}
    <section class="section" id="section--2">
      <h1>Ski <span class="highlights">equipment </span></h1>
      <div class="imgagne">
        <div class="linecenters">
          <div class="linecenter">
            <img src="img/" data-src="img/digital.jpg" alt="Computer" class="image-education1 " />
            <p class="H1Img">All that is, you have to have them with you so that you don't die 🤗</p>
          </div>
        </div>
      </div>
      <div class="section__title">
      </div>
      <div class="operations">
        <div class="operations__tab-container">
          <button class="btn operations__tab operations__tab--1 operations__tab--active" data-tab="1">Ski
          </button>
          <button class="btn operations__tab operations__tab--2" data-tab="2">Ski
          </button>
        </div>
        <div class="operation-container">
          <div class="operations__content operations__content--1 operations__content--active">
            <div class="operations__icon operations__icon--1 ">
            </div>
            <h5 class="operations__header">
              Tranfser money to anyone, instantly! No fees, no BS.
            </h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
          </div>
          <div class="operations__content operations__content--2">
            <div class="operations__icon operations__icon--2">
              <p>
                montain is my life Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* <!-- sectiunea a 3 a ---------------> */}
    <section class="section sectionthree" id="section--3">
      <div class="toObject">

        <h1 class="hederRisc">
          <span class="highlightred">Risk</span>
          and
          <span class="highlight">Fun</span>
        </h1>

        <div class="sectionthree-riskandfun">
          <div class="Risc">
            <h1 class="Risc__h1and1">
              <span class="highlightre">Risk</span>
            </h1>
            <p> vorbind desore risc. Aicia avem o situatie ma delicata deoarece la munte nu te poti juca
              In primul rand atentia la semen ,. nu ne abatem de la traseu
              , nu arucam mizeri nu ,campam unde nu este voi . Oameni de la
              munte sun educati asta inseamna ca si tu trebuie ... Mai multe despre aceasta va las un link
            </p>
          </div>

          <div class="Distractie">
            <h1 class="Risc__h1and1">
              <span class="highlights">Fun</span>

            </h1>
            <p>la munte nu prea ai cu ce sa te distrezi deoarece
              admiri pesiajul miraculos din jurul dau dar, ajungand
              in varf ai un setiment de erou ... ,ajung in refugiu sau in cort ai un setiment
              de oboseala dar in acelasi timp ai si bucuria de a te odihni </p>
          </div>
        </div>
      </div>
    </section>




    {/* <!-- footer --> */}
    <footer class="footer">
      <ul class="footer__nav">
        <li class="footer__item">
          <a class="footer__link" href="https://www.linkedin.com/in/dani-luntras-13795b19a/">About</a>
        </li>
        <li class="footer__item">
          <a class="footer__link" href="https://github.com/DANIELluntras">Pricing</a>
        </li>
        <li class="footer__item">
          <a class="footer__link" href="https://github.com/DANIELluntras/Montain-hel">GitHUB</a>
        </li>
        <li class="footer__item">
          <a class="footer__link" href="#">Privacy Policy</a>
        </li>
        <li class="footer__item">
          <a class="footer__link" href="#">Careers</a>
        </li>
        <li class="footer__item">
          <a class="footer__link" href="#">Blog</a>
        </li>
        <li class="footer__item">
          <a class="footer__link" href="#">Contact Us</a>
        </li>
      </ul>
      <img
        src="https://image.shutterstock.com/shutterstock/photos/461682028/display_1500/stock-vector-mountains-vector-icon-461682028.jpg"
        alt="Logo" class="footer__logo" />
      <p class="footer__copyright">
        &copy; Copyright by
        <a class="footer__link twitter-link" target="_blank" href="https://www.instagram.com/luntrasdaniel_dlo/">LUNTRAS
          DANIEL</a>. Use for learning or your portfolio. Don't use to teach. Don't claim
        as your own product.
      </p>
    </footer>



  </div>;
}

export default App;
