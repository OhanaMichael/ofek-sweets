/* Ofek's Sweets — סקריפט אתר: תפריט, קטלוג, גלריה, לייטבוקס */
(function () {
  "use strict";

  /* ---------- תפריט נייד ---------- */
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  /* ---------- מילוי שם/מחיר מהקטלוג + קישורי הזמנה ---------- */
  if (typeof CAKES !== "undefined") {
    document.querySelectorAll("[data-cake]").forEach(function (card) {
      const id = card.getAttribute("data-cake");
      const cake = CAKES[id];
      if (!cake) return;

      const displayName = cake.name && cake.name.trim() ? cake.name.trim() : cake.temp;
      const nameEl = card.querySelector(".cake-name");
      if (nameEl) nameEl.textContent = displayName;

      const priceEl = card.querySelector(".cake-price");
      if (priceEl) {
        if (cake.price) {
          priceEl.textContent = "₪" + cake.price;
          priceEl.classList.remove("tbd");
        } else {
          priceEl.textContent = "מחיר בתיאום אישי";
          priceEl.classList.add("tbd");
        }
      }

      const orderEl = card.querySelector(".cake-order");
      if (orderEl && typeof WHATSAPP_NUMBER !== "undefined") {
        const msg = "היי אופק! אשמח להזמין: " + displayName + " (קוד " + id.toUpperCase() + ")";
        orderEl.href = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(msg);
      }
    });
  }

  /* ---------- סינון גלריה ---------- */
  const filterBtns = document.querySelectorAll(".filter-btn");
  if (filterBtns.length) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        filterBtns.forEach(function (b) { b.setAttribute("aria-pressed", "false"); });
        btn.setAttribute("aria-pressed", "true");
        const cat = btn.getAttribute("data-filter");
        document.querySelectorAll(".gallery-grid .cake-card").forEach(function (card) {
          const show = cat === "all" || card.getAttribute("data-category") === cat;
          card.style.display = show ? "" : "none";
        });
      });
    });
  }

  /* ---------- לייטבוקס ---------- */
  const lightbox = document.getElementById("lightbox");
  if (lightbox) {
    const lbImg = lightbox.querySelector("img");
    const lbCaption = lightbox.querySelector(".lightbox-caption");
    const lbClose = lightbox.querySelector(".lightbox-close");
    let lastFocus = null;

    document.querySelectorAll(".cake-card img, .js-zoom").forEach(function (img) {
      img.addEventListener("click", function () {
        lastFocus = document.activeElement;
        lbImg.src = img.dataset.full || img.src;
        lbImg.alt = img.alt;
        if (lbCaption) lbCaption.textContent = img.alt;
        lightbox.classList.add("open");
        document.body.style.overflow = "hidden";
        lbClose.focus();
      });
    });

    function closeLb() {
      lightbox.classList.remove("open");
      document.body.style.overflow = "";
      if (lastFocus) lastFocus.focus();
    }
    lbClose.addEventListener("click", closeLb);
    lightbox.addEventListener("click", function (e) { if (e.target === lightbox) closeLb(); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && lightbox.classList.contains("open")) closeLb();
    });
  }

  /* ---------- שנה נוכחית בפוטר ---------- */
  document.querySelectorAll(".js-year").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
