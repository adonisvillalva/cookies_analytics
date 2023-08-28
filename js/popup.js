(function ($) {
  $(document).ready(function () {
    // Variables
    var gaScript          = document.createElement('script');
    var cookieLocal       = localStorage.getItem('cookieConsent');
    var popup             = document.querySelector("#cookie_analytics_popup");
    var modal             = document.querySelector(".modal-container");
    var closeButton       = document.querySelector(".cookiesjsr-layer--close");
    var googleAnalyticsID = 'G-YVRL8S5KS5';
    var googleTrack       = localStorage.getItem('googleConsent');
    var btnGoogle         = document.getElementById('switch-google');
    var checkboxGoogle    = document.getElementById('checkbox-google');
    // Muestra la ventana emergente si el usuario no ha dado su consentimiento.
    if (!cookieLocal) {
      // Modal -->
      //Código para controlar la configuración de cookies
      checkboxGoogle.checked = true;
      $("#cookies_analytics_conf").click(function(){
        modal.style.display = "block";
        btnGoogle.classList.add('active');
      });
      closeButton.onclick = function () {
        modal.style.display = "none";
      };
      window.onclick = function (event) {
        if (event.target === modal) {
          modal.style.display = "none";
        }
      };
      // <-- Modal
      checkboxGoogle.addEventListener('change', function(){
        if(checkboxGoogle.checked){
          btnGoogle.classList.add('active');
        }else{
          btnGoogle.classList.remove('active');
        }
      });
      // Agrega efecto Fade in
      $("#cookie_analytics_popup").fadeIn();
      // Captura el clic Aceptar
      $("#cookie_analytics_rechazar_btn").click(function () {
        // Al aceptar, se oculta la ventana emergente
        $("#cookie_analytics_popup").fadeOut();
        popup.style.display = "none";
        modal.style.display = "none";
        localStorage.setItem('cookieConsent', 'true');
      });
      $("")
      // Para aceptar el rastreo
      $("#cookie_analytics_aceptar_btn").click(function () {
        // Al aceptar, se oculta la ventana emergente
        $("#cookie_analytics_popup").fadeOut();
        popup.style.display = "none";
        modal.style.display = "none";
        localStorage.setItem('cookieConsent', 'true');
        // Google Analytics tracking code
        if(checkboxGoogle.checked){
          gaScript.type = 'text/javascript';
          gaScript.async = true;
          gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + googleAnalyticsID;
        
          gaScript.onload = function() {
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', googleAnalyticsID);
          };
          document.head.appendChild(gaScript);
        }
        // End of Google Analytics tracking code
        localStorage.setItem('googleConsent', 'true');
      });
      
    }else{
      modal.style.display = "none";
      popup.style.display = "none";
      if(googleTrack){
        gaScript.type = 'text/javascript';
        gaScript.async = true;
        gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + googleAnalyticsID;
      
        gaScript.onload = function() {
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag('js', new Date());
          gtag('config', googleAnalyticsID);
        };
        document.head.appendChild(gaScript);
      }
    }
    var tabs = document.querySelectorAll(".cookiesjsr-service-group--tab");
    var contents = document.querySelectorAll(
      ".cookiesjsr-service-group--content"
    );

    // Función para mostrar el contenido seleccionado y ocultar los demás
    function showContent(tabId) {
      tabs.forEach(function (tab) {
        var isActive = tab.getAttribute("id") === tabId;
        tab.setAttribute("aria-selected", isActive);
        tab.setAttribute("tabindex", isActive ? "0" : "-1");
      });

      contents.forEach(function (content) {
        var contentId = content.getAttribute("aria-labelledby");
        var isContentActive = contentId === tabId;
        content.setAttribute("aria-hidden", !isContentActive);
      });

      // Cambiar la clase para la pestaña activa
      var activeTab = document.querySelector(
        ".cookiesjsr-service-group.active"
      );
      activeTab.classList.remove("active");
      var currentTab = document.getElementById(tabId).parentNode;
      currentTab.classList.add("active");
    }

    // Agregar evento click a cada pestaña
    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        var tabId = tab.getAttribute("id");
        showContent(tabId);
      });
    });

    var switches = document.querySelectorAll(
      ".cookiesjsr-switch input[type='checkbox']"
    );

    function updateSwitchState(switchInput) {
      var switchId = switchInput.getAttribute("aria-describedby");
      var isChecked = switchInput.checked;

      var switchContainer = switchInput.parentElement;
      if (isChecked) {
        switchContainer.classList.add("active");
      } else {
        switchContainer.classList.remove("active");
      }
    }
    // Agregar evento change a cada switch
    switches.forEach(function (switchInput) {
      switchInput.addEventListener("change", function () {
        updateSwitchState(switchInput);
      });
      updateSwitchState(switchInput);
    });
  });
})(jQuery);
