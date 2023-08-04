(function ($) {
  $(document).ready(function () {
    // Muestra la ventana emergente si el usuario no ha dado su consentimiento.
    if (!Drupal.settings.cookies_analytics_consent) {
      // Agrega efecto Fade in
      $("#cookie_analytics_popup").fadeIn();
      // Captura el clic Aceptar
      $("#cookie_analytics_aceptar_btn").click(function () {
        // Al aceptar, se oculta la ventana emergente
        $("#cookie_analytics_popup").fadeOut();
        // Realiza una llamada Ajax para almacenar el consentimiento.
        $.ajax({
          url: "/cookies-analytics/aceptar",
          success: function () {
            // Recarga la página web
            location.reload();
          },
        });
      });
    }

    //Codigo para el modal
    var modal = document.querySelector(".modal-container");
    modal.style.display = "block";

    var closeButton = document.querySelector(".cookiesjsr-layer--close"); // Corregir la clase aquí
    closeButton.onclick = function () {
      modal.style.display = "none";
    };

    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };

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
