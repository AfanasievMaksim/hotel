$(document).ready(function() {
  const headerMenu = $('.header .header-burger');
  const headerTel = $('.header .header-info__tel');
  const headerInfoText = $('.header .header-info__text');
  const headerSocials = $('.header .header-social__item');
  const headerBtn = $('.header .header__btn');
  const formRecallHeaderBtn = $('#form-recall-header-btn');
  const formRecallGreenBtn = $('#form-recall-green-btn');
  const formRecallFooter = $('#form-recall-footer');
  const formIntro = $('#intro-form');
  const introFormBtn = $('#intro-form .btn');
  const introMapBtn = $('.intro .section-action');
  const firstSliderBtnNext = $('.block-slider .section-nav__next');
  const firstSliderBtnPrev = $('.block-slider .section-nav__prev');
  const sectionTags = $('.block-slider .section-tag');
  const presentationBtn = $('.presentation .btn');
  const formDownloadPdf = $('#form-download-pdf');
  const hypothecBtn = $('.hypothec .btn');
  const formHypothec = $('#form-credit');
  const installmentBtn = $('.installment .btn');
  const formInstallment = $('#form-vingroup');
  const mapBtn = $('.map .btn');
  const formMap = $('#form-toor');
  const footerTel = $('.footer .footer-contact__tel');
  const footerBtn = $('.footer .btn');

  //new
  const filterBtn = $('.filter .section-download-btn .btn');
  const formFilter = $('#form-filter');
  const filterModalBtn = $('#modal-filter .modal-expert__btn');
  const filterRecallForm = $('#form-recall');
  const ctaPhone = $('.cta-modal .cta-modal-tel');
  const ctaMessanger = $('.cta-modal .cta-modal-social__item');
  const menuPhone = $('.menu .menu-tel');
  const menuMessanger = $('.menu .menu-social__item');

  const addMetrick = (val, total) => {
    dataLayer.push({'event': val});

    if (total) {
      dataLayer.push({'event': 'totalConversion'});
    }
  };

  //addMetrick('headlineMenuClick', false, false, false); 1val
  //addMetrick('headlineMenuClick', true, false, false); +total
  //addMetrick('headlineMenuClick', true, true, false); total + lead
  //addMetrick('headlineMenuClick', true, false, true); total + contact

  headerMenu.on('click', () => addMetrick('headlineMenuClick', false));
  headerTel.on('click', () => addMetrick('headlinePhoneClick', true));
  headerInfoText.on('click', () => addMetrick('headlineActiveBtnClick', false));
  headerSocials.on('click', () => addMetrick('headlineMessengerClick', true));
  headerBtn.on('click', () => addMetrick('headlineCallbackBtnClick', false));
  formRecallHeaderBtn.on('submit', () => addMetrick('headlineCallbackLead', true));
  formRecallGreenBtn.on('submit', () => addMetrick('headlineActiveBtnLead', true));
  formRecallFooter.on('submit', () => addMetrick('footerLead', true));
  formIntro.on('submit', () => addMetrick('firstScreenProjectDownloadLead', true));
  introFormBtn.on('click', () => addMetrick('firstScreenProjectDownloadClick', false));
  introMapBtn.on('click', () => addMetrick('firstScreenMapClick', false));
  firstSliderBtnNext.on('click', () => addMetrick('upperSliderClick', false));
  firstSliderBtnPrev.on('click', () => addMetrick('upperSliderClick', false));
  sectionTags.on('click', () => addMetrick('upperSliderTagClick', false));
  $(document).on('click', '.reviews .slide', () => addMetrick('upperSliderReviewClick', false));
  presentationBtn.on('click', () => addMetrick('overviewBtnClick', false));
  formDownloadPdf.on('submit', () => addMetrick('overviewLead', true));
  $(document).on('click', '.gallery .flickity-button', () => addMetrick('bottomSliderClick', false));
  $(document).on('click', '.gallery .slider-nav .slide', () => addMetrick('bottomSliderTagClick', false));
  $(document).on('click', '.progres .flickity-button', () => addMetrick('progressSliderClick', false));
  hypothecBtn.on('click', () => addMetrick('bankBtnClick', false));
  formHypothec.on('submit', () => addMetrick('bankLead', true));
  installmentBtn.on('click', () => addMetrick('installmentBtnClick', false));
  formInstallment.on('submit', () => addMetrick('installmentLead', true));
  mapBtn.on('click', () => addMetrick('mapBtnClick', false));
  formMap.on('submit', () => addMetrick('mapLead', true));
  footerTel.on('click', () => addMetrick('footerPhoneClick', true));
  footerBtn.on('click', () => addMetrick('footerBtnClick', false));

  //new
  filterBtn.on('click', () => addMetrick('filterBtnClick', false));
  formFilter.on('submit', () => addMetrick('filterBtnLead', true));
  filterModalBtn.on('click', () => addMetrick('filterBookingClick', false));
  filterRecallForm.on('click', () => addMetrick('filterBookingLead', true));
  ctaPhone.on('click', () => addMetrick('popupPhoneClick', true));
  ctaMessanger.on('click', () => addMetrick('popupMessengerClick', true));
  menuPhone.on('click', () => addMetrick('menuPhoneClick', true));
  menuMessanger.on('click', () => addMetrick('menuMessengerClick', true));
});