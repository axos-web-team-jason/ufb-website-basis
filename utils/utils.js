/* ext-link Functionality */
export const extLinkAppend = (link) => {
  if (!link.match(/ufb/gim)) {
    return `ext-link`;
  } else {
    return "";
  }
};

export const speedBumpFunction = () => {
  /* Speedbump Functionality */
  if (typeof window === "object") {
    // variables:
    const extLinks = document.querySelectorAll(".ext-link");
    const speedbump = document.getElementById("speedbump");
    const close = document.getElementById("close");

    // pull only hostname of url:
    function extractHostname(url) {
      var hostname;
      if (url.indexOf("//") > -1) {
        hostname = url.split("/")[2];
      } else {
        hostname = url.split("/")[0];
      }
      hostname = hostname.split(":")[0];
      hostname = hostname.split("?")[0];
      return hostname;
    }

    // add visibility to modal:
    extLinks.forEach(function (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        speedbump.classList.add("is-visible");
        speedbump.focus();
        let url = this.getAttribute("href");
        let host = extractHostname(url);
        document.getElementById("insert-url").innerText = host;
        document.getElementById("continue").setAttribute("href", url);
      });
    });

    // remove visibility:
    close.addEventListener("click", function (e) {
      e.preventDefault();
      speedbump.classList.remove("is-visible");
      speedbump.blur();
    });
  }
};
