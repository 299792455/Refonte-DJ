"use client";

import { useEffect } from "react";
import { useState } from 'react';
//import Image from "next/image";
import "../../styles/HeroTest.css";
import ContactForm from "../Contact";

export default function HeroTest() {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const burgerMenu = document.getElementById("burger");
    const navbarMenu = document.getElementById("menu");
    const headerMenu = document.getElementById("header");

    function toggleMenu() {
      burgerMenu?.classList.toggle("is-active");
      navbarMenu?.classList.toggle("is-active");
    }

    function closeMenu() {
      burgerMenu?.classList.remove("is-active");
      navbarMenu?.classList.remove("is-active");
    }

    function handleScroll() {
      if (window.scrollY >= 85) {
        headerMenu?.classList.add("on-scroll");
      } else {
        headerMenu?.classList.remove("on-scroll");
      }
    }

    function handleResize() {
      if (window.innerWidth > 768) {
        navbarMenu?.classList.remove("is-active");
      }
    }

    burgerMenu?.addEventListener("click", toggleMenu);
    document.querySelectorAll(".menu-link").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      burgerMenu?.removeEventListener("click", toggleMenu);
      document.querySelectorAll(".menu-link").forEach((link) => {
        link.removeEventListener("click", closeMenu);
      });
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      

      {/* Hero Section */}
      <main className="main">
        <section className="section banner banner-section">
          <div className="container banner-column">
           <img src="https://i.postimg.cc/3N0Hmxxm/49abbef5-e818-46fd-8b4d-ce1b7729253b.png" alt="banner" className="banner-image" />

            <div className="banner-inner">
              <h1 className="hero-title">
                <span className="sergio" data-text="SERGIO">SERGIO</span>
                <span className="telmo" data-text="Telmo">Telmo</span>
              </h1>
              <div className="bio-block">
                <p className="line">DJ desde los <strong>14 años</strong>, ahora <strong>22</strong>.</p>
                <p className="line">Residente en <strong>Sky Pub</strong> — A Estrada.</p>
                <p className="line">Shows: <strong>Santiago, Pontevedra, Ourense</strong>.</p>
                <p className="line">Producción en <strong>FL Studio</strong> — mashups & edits.</p>
                
              </div>
              <button className="btn btn-darken btn-inline" onClick={() => setShowModal(true)}>Contactar<i className="bx bx-right-arrow-alt"></i></button>
            </div>
            <div className="banner-links">
              <a href="#"><i className="bx bxl-facebook"></i></a>
              <a href="#"><i className="bx bxl-instagram"></i></a>
              <a href="#"><i className="bx bxl-twitter"></i></a>
              <a href="#"><i className="bx bxl-youtube"></i></a>
            </div>
          </div>
          {showModal && (
                  <div className="bio-modal-overlay" onClick={() => setShowModal(false)}>
                    <div className="bio-modal" onClick={(e) => e.stopPropagation()}>
                      <button className="bio-modal-close" onClick={() => setShowModal(false)}>✕</button>
                      <ContactForm />
                    </div>
                  </div>
                )}
        </section>
      </main>
    </>
  );
}
