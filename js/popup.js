(function ($) {
    $(document).ready(function() {
      console.log("test");
      // Crea una ventana emergente con el botón aceptar.
      var popUpContent = '<div class="cookie_analytics_popup">' +
                         '<p>Este sitio funciona con cookies. ¿Deseas permitir?</p>' +
                         '<button id="cookie_analytics_btn">Aceptar</button></div>';
      $('body').append(popUpContent);
      // Agrega efecto Fade in
      $('.cookie_analytics_popup').fadeIn();
      // Captura el clic Aceptar
      $('#cookie_analytics_btn').click(function() {
        // Al aceptar, se oculta la ventana emergente
        $('.cookie_analytics_popup').fadeOut();
        // Realiza una llamada Ajax para almacenar el consentimiento.
        $.ajax({
          url: '/cookie_analytics/accept',
          success: function() {
            // Recarga la página
            location.reload();
          }
        });
      });
      // Muestra la ventana emergente si el usuario no ha dado su consentimiento.
      if (!Drupal.settings.cookies_analytics_consent) {
        console.log("test");
        // Crea una ventana emergente con el botón aceptar.
        var popUpContent = '<div class="cookie_analytics_popup">' +
                           '<p>Este sitio funciona con cookies. ¿Deseas permitir?</p>' +
                           '<button id="cookie_analytics_btn">Aceptar</button></div>';
        $('body').append(popUpContent);
        // Agrega efecto Fade in
        $('.cookie_analytics_popup').fadeIn();
        // Captura el clic Aceptar
        $('#cookie_analytics_btn').click(function() {
          // Al aceptar, se oculta la ventana emergente
          $('.cookie_analytics_popup').fadeOut();
          // Realiza una llamada Ajax para almacenar el consentimiento.
          $.ajax({
            url: '/cookie_analytics/accept',
            success: function() {
              // Recarga la página
              location.reload();
            }
          });
        });
      }
    });
})(jQuery);
  