(function ($) {
  $(document).ready(function () {
    // Variables
    var gaScript          = document.createElement('script');
    var cookieLocal       = localStorage.getItem('cookieConsent');
    var popup             = document.querySelector("#cookie_analytics_popup");
    var modal             = document.querySelector(".modal-container");
    var closeButton       = document.querySelector(".cookiesjsr-layer--close");
    //Cambio tracking google analytics
    var googleAnalyticsID = 'DC-8877488';
    var googleTrack       = localStorage.getItem('googleConsent');
    var btnGoogle         = document.getElementById('switch-google');
    var checkboxGoogle    = document.getElementById('checkbox-google');
    var saveButton        = document.querySelector(".save-btn-cookie");
    var allowCookiesBtn   = document.getElementById("cookie_analytics_aceptar_btn");
    var denyCookiesBtn    = document.getElementById("cookie_analytics_rechazar_btn");
    var denyModalBtn      = document.querySelector(".denyAll-btn-cookie");
    var allowModalBtn      = document.querySelector(".allowAll-btn-cookie");
    // Muestra la ventana emergente si el usuario no ha dado su consentimiento.
    if (!cookieLocal) {
      // Se agrega todos los estilos y diseño que se inicia al visitar el sitio web
      $("#cookie_analytics_popup").fadeIn();
      popup.style.display = "flex";
      checkboxGoogle.checked = true;
      // Modal -->
      //Código para controlar la configuración de cookies
      $("#cookies_analytics_conf").click(function(){
        modal.style.display = "block";
        btnGoogle.classList.add('active');
	checkboxGoogle.classList.add('active');
      });
      allowCookiesBtn.addEventListener("click", allowCookiesAnalytics);
      denyCookiesBtn.addEventListener("click", denyCookiesAnalytics);
      // saveButton.addEventListener("click", closeModal);
      // Botones para el Modal
      allowModalBtn.onclick = function () {
        allowCookiesAnalytics();
      };
      denyModalBtn.onclick = function () {
        denyCookiesAnalytics();
      };
      saveButton.onclick = function () {
        closeModal();
      };
      closeButton.onclick = function () {
        closeModal();
      };
      window.onclick = function (event) {
        if (event.target === modal) {
          closeModal();
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
    function closeModal(){
      modal.style.display = "none";
    }
    function denyCookiesAnalytics(){
      $("#cookie_analytics_popup").fadeOut();
      popup.style.display = "none";
      modal.style.display = "none";
      localStorage.setItem('googleConsent', 'true');
    }
    function allowCookiesAnalytics(){
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
