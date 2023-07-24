(function ($) {
    $(document).ready(function() {
      // Muestra la ventana emergente si el usuario no ha dado su consentimiento.
      if (!Drupal.settings.cookies_analytics_consent) {
        // Agrega efecto Fade in
        $('#cookie_analytics_popup').fadeIn();
        // Captura el clic Aceptar
        $('#cookie_analytics_aceptar_btn').click(function() {
          // Al aceptar, se oculta la ventana emergente
          $('#cookie_analytics_popup').fadeOut();
          // Realiza una llamada Ajax para almacenar el consentimiento.
          $.ajax({
            url: '/cookies-analytics/aceptar',
            success: function() {
              // Recarga la página web
              location.reload();
            }
          });
        });
      }
    });
})(jQuery);
  