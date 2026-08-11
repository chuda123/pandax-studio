// ---------- i18n ----------
const STORAGE_KEY = "pandax-lang";
const rootHtml = document.documentElement;

function applyLang(lang) {
  rootHtml.setAttribute("lang", lang === "en" ? "en" : "zh-CN");
  document.querySelectorAll("[data-zh], [data-en]").forEach((el) => {
    const val = el.getAttribute(lang === "en" ? "data-en" : "data-zh");
    if (val === null) return;
    // Only replace direct text nodes if no child elements, otherwise skip (preserve structure)
    if (el.children.length === 0) {
      el.textContent = val;
    } else {
      // For elements with children (like hero__title with spans), skip — spans handle themselves
    }
  });
  // Update meta description
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", meta.getAttribute(lang === "en" ? "data-en" : "data-zh"));
  // Update <title>
  const title = document.querySelector("title");
  if (title) title.textContent = title.getAttribute(lang === "en" ? "data-en" : "data-zh");
  try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
}

const initialLang = (() => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "zh") return saved;
  } catch (e) {}
  return navigator.language && navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";
})();
applyLang(initialLang);

document.getElementById("langToggle").addEventListener("click", () => {
  const current = rootHtml.getAttribute("lang") === "en" ? "en" : "zh";
  applyLang(current === "en" ? "zh" : "en");
});

// ---------- Nav scroll state ----------
const nav = document.querySelector(".nav");
const onScroll = () => {
  if (window.scrollY > 30) nav.classList.add("is-scrolled");
  else nav.classList.remove("is-scrolled");
};
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// ---------- Reveal on scroll ----------
const revealTargets = document.querySelectorAll(
  ".section__head, .material, .craft__item, .compare__col, .door, .counter__feat, .cg, .care__col, .pill-list li"
);
revealTargets.forEach((el) => el.classList.add("reveal"));

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);
revealTargets.forEach((el) => io.observe(el));

// ---------- Footer year ----------
document.getElementById("year").textContent = new Date().getFullYear();
