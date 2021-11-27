const input = document.getElementById("search");
      input.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
          event.preventDefault();
          document.getElementById("searchBtn").click();
        }
      });
      if (screen.width >= 820) {
        document.querySelector("#footer-left").innerHTML =
          '<li><a href="https://www.google.com/search/howsearchworks">Como funciona a busca</a></li><li><a href="https://about.google/">Sobre o Google</a></li><li><a href="https://ads.google.com">Publicidade</a></li><li><a href="https://smallbusiness.withgoogle.com/">Negócios</a></li>';
      }