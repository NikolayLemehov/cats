(()=>{const t=document.querySelector("[data-menu-button]"),e=document.querySelector("[data-menu]");t&&e&&t.addEventListener("click",(()=>{const n="true"===t.getAttribute("aria-expanded")||!1;t.classList.toggle("is-open"),t.setAttribute("aria-expanded",!n),e.classList.toggle("is-open")}))})(),(()=>{var t;const e={openModalBtns:document.querySelectorAll("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function n(){var t;null===(t=e.modal)||void 0===t||t.classList.toggle("backdrop--hidden")}e.openModalBtns.forEach((t=>t.addEventListener("click",n))),null===(t=e.closeModalBtn)||void 0===t||t.addEventListener("click",n)})(),(()=>{const t=$(".slider"),e=(t="prev")=>`\n    <button type='button' class='slick-${t} btn btn--slider${"prev"===t?"":" btn--rev-icon"}'>\n      <svg class='btn__icon btn__icon--small' width='17' height='30' viewBox="0 0 17 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n        <path d="M.45 15.905 14.383 29.18a1.25 1.25 0 0 0 1.725 0l.015-.015a1.15 1.15 0 0 0 0-1.668l-13.12-12.5 13.12-12.494a1.15 1.15 0 0 0 0-1.668L16.108.82a1.25 1.25 0 0 0-1.725 0L.45 14.095a1.251 1.251 0 0 0 0 1.81Z"/>\n      </svg>\n    </button>\n  `;t.slick({prevArrow:e("prev"),nextArrow:e("next")}),setTimeout((()=>t.removeAttr("style")))})();
//# sourceMappingURL=index.0e02a6db.js.map
