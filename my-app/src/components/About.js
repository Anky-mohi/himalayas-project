import React from "react";

const About = () => {
  return (
    <>
      <header>
        <div class="container">
          <div class="header">
            <div class="header__brandLogo">
              <a href="#">
                <img src="./brand__logo.png" alt="Brand Logo" />
              </a>
            </div>
            <div class="header__brandnav">
              <nav>
                <ul class="header__navigations">
                  <li class="header__list--items">
                    <a href="/">Home</a>
                  </li>
                  <li class="header__list--items">
                    <a href="/About">About</a>
                  </li>
                  <li class="header__list--items">
                    <a href="/services.html">Services</a>
                  </li>
                  <a href="#" className="abc">
                    Our Vision
                  </a>
                </ul>
              </nav>
            </div>
            <i class="fa-solid fa-bars"></i>
          </div>
        </div>
      </header>

      <main>
        <section class="banner">
          <img src="./about__banner.jpeg" alt="About us banner image" />
          <div class="banner__content--wrapper">
            <div class="container">
              <div class="banner__content">
                <h1 class="banner__content--heading">Himalayas Tech</h1>
                <p class="banner__content--supportText">
                Simples, Intuitivo e Perfeitamente Elaborado!
                </p>
                <a href="#" class="abc">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </section>

        <section class="vision">
          <div class="container">
            <div class="vision__wrapper">
              <div class="vision__heading">
                <p class="like-text popup-text">
                  <span class="text-effect">V</span>
                  <span class="text-effect">I</span>
                  <span class="text-effect">S</span>
                  <span class="text-effect">I</span>
                  <span class="text-effect">O</span>
                  <span class="text-effect">N</span>
                </p>
              </div>
              <div class="vision__supportContent">
                <p class="main--text">
                Visão 
Criamos soluções de aplicativos para web e dispositivos móveis que irão encantar seus clientes Na himalayas tech, nossa equipe se dedica a construir e projetar marcas por meio do desenvolvimento de aplicativos para dispositivos móveis e web. Colaboramos estreitamente com nossos clientes para desenvolver um plano detalhado para a criação de seu site ou aplicativo móvel, garantindo a entrega dos resultados desejados que eles procuram. Trabalhamos remotamente ou pessoalmente. Colaboramos com pessoas e computadores, mas geralmente não ao mesmo tempo. A transição entre eles pode ser desafiadora, confusa ou impossível. Isso tudo está mudando. A próxima onda de transformação dos negócios passará da construção de capacidades digitais isoladas para a criação das bases de uma nova realidade – uma realidade compartilhada que combina perfeitamente nossas vidas físicas de átomos e nossas vidas digitais de bits. O objetivo não é uma melhoria incremental, mas uma mudança radical. O verdadeiro valor dessa convergência está na criação de algo fundamentalmente novo. Veja a IA generativa – muitas pessoas a estão usando para gerar imagens e conteúdo puramente digitais, mas já vemos como ela moldará o futuro da ciência
                </p>
              </div>
            </div>
          </div>
        </section>
        <section class="whatwedo">
          <div class="container">
            <div class="whatwedo__wrapper">
              <div class="whatwedo__heading">
                <p class="like-text popup-text">
                  <span class="text-effect">O</span>

                  <span class="text-effect">Q</span>
                  <span class="text-effect">U</span>
                  <span class="text-effect">E</span>

                  <span class="text-effect">N</span>
                  <span class="text-effect">O</span>
                  <span class="text-effect">S</span>

                  <span class="text-effect">F</span>
                  <span class="text-effect">A</span>
                  <span class="text-effect">Z</span>
                  <span class="text-effect">E</span>
                  <span class="text-effect">M</span>
                  <span class="text-effect">O</span>
                  <span class="text-effect">S</span>
                  <span class="text-effect">?</span>
                </p>
              </div>
              <div class="whatwedo__supportContent">
                <p class="main--text">
                  Quando os átomos encontram os bits: os fundamentos da nossa
                  nova realidade Quando os átomos encontram os bits Os
                  fundamentos da nossa nova realidade Vivemos em duas realidades
                  paralelas, uma de átomos e outra de bits. Quando compramos,
                  entramos em uma loja ou acessamos uma página da web.
                  Trabalhamos remotamente ou presencialmente. Colaboramos com
                  pessoas e computadores, mas geralmente não ao mesmo tempo. A
                  transição entre eles pode ser desafiadora, confusa ou
                  impossível. Tudo isso está mudando. A próxima onda de
                  transformação dos negócios passará da construção de
                  capacidades digitais isoladas para a criação das bases de uma
                  nova realidade – uma realidade compartilhada que combina
                  perfeitamente nossas vidas físicas de átomos e nossas vidas
                  digitais de bits. O objetivo não é uma melhoria incremental,
                  mas uma mudança radical. O verdadeiro valor dessa convergência
                  está na criação de algo fundamentalmente novo. Veja a IA
                  generativa - muitas pessoas a estão usando para gerar imagens
                  e conteúdo puramente digitais, mas já vemos como ela moldará o
                  futuro da ciência, dos dados corporativos, como projetamos e
                  fabricamos produtos e muito mais.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div class="container">
          <div class="footer">
            <div class="footer__social--icons">
              <ul>
                <li>
                  <a href="https://www.facebook.com/" target="_blank">
                    <i class="fa-brands fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com/" target="_blank">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/himalayastechies?igshid=OTJhZDVkZWE="
                    target="_blank"
                  >
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div class="footer__monospace">
              <p>2023 © Himalayas Techies. All rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default About;
