(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  if (!(menuBtnRef && mobileMenuRef)) return;

  menuBtnRef.addEventListener('click', () => {
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;
    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);
    mobileMenuRef.classList.toggle('is-open');
  });
})();

(() => {
  const refs = {
    openModalBtns: document.querySelectorAll('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };
  refs.openModalBtns.forEach(btn => btn.addEventListener('click', toggleModal));
  refs.closeModalBtn?.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.modal?.classList.toggle('backdrop--hidden');
  }
})();

(() => {
  const sliderRef = $('.slider');
  const getHTML = (type = 'prev') => (`
    <button type='button' class='slick-${type} btn btn--slider${type === 'prev' ? '' : ' btn--rev-icon'}'>
      <svg class='btn__icon btn__icon--small' width='17' height='30' viewBox="0 0 17 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M.45 15.905 14.383 29.18a1.25 1.25 0 0 0 1.725 0l.015-.015a1.15 1.15 0 0 0 0-1.668l-13.12-12.5 13.12-12.494a1.15 1.15 0 0 0 0-1.668L16.108.82a1.25 1.25 0 0 0-1.725 0L.45 14.095a1.251 1.251 0 0 0 0 1.81Z"/>
      </svg>
    </button>
  `)
  sliderRef.slick({
    prevArrow: getHTML('prev'),
    nextArrow: getHTML('next'),
  });
  setTimeout(() => sliderRef.removeAttr('style'));
})();
