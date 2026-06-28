/* =========================================================
   Portfolio — Anis BOURMATTE
   Menu mobile · révélations au scroll · nav active
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* ---------- Menu burger ---------- */
    const toggle = document.getElementById("menuToggle");
    const nav = document.getElementById("nav");

    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            const open = nav.classList.toggle("show");
            toggle.setAttribute("aria-expanded", open ? "true" : "false");
        });
        nav.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                nav.classList.remove("show");
                toggle.setAttribute("aria-expanded", "false");
            });
        });
    }

    /* ---------- Révélations au scroll ---------- */
    const reveals = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window && reveals.length) {
        const io = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
        reveals.forEach(el => io.observe(el));
    } else {
        reveals.forEach(el => el.classList.add("is-visible"));
    }

    /* ---------- Mise en surbrillance du lien actif ---------- */
    const sections = document.querySelectorAll("main section[id]");
    const navLinks = nav ? nav.querySelectorAll("a") : [];

    if ("IntersectionObserver" in window && sections.length && navLinks.length) {
        const spy = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute("id");
                    navLinks.forEach(l => {
                        l.style.color = l.getAttribute("href") === "#" + id ? "var(--ink)" : "";
                        l.style.background = l.getAttribute("href") === "#" + id ? "rgba(14,124,123,0.09)" : "";
                    });
                }
            });
        }, { rootMargin: "-45% 0px -50% 0px" });
        sections.forEach(s => spy.observe(s));
    }
});
