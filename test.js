(function (googleTagManagerId) {
  console.log(googleTagManagerId);
(function (googleTagManagerId) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js'
  });

  const gtm = document.createElement('script');
  gtm.type = 'text/javascript';
  gtm.async = true;
  gtm.id = 'gtm';
  gtm.src = `https://www.googletagmanager.com/gtm.js?id=${googleTagManagerId}`;

  const s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(gtm, s);
})(googleTagManagerId);
})();
