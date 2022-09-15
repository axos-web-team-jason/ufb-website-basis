export default function Carousel() {
  $(document).ready(function () {
    // Set carousel interval (9 seconds):
    $("#axos-carousel").carousel({
      interval: 9000,
    });

    // Make entire subnav divs clickable:
    $(".nav__item").click(function () {
      window.location = $(this).find("a").attr("href");
      return false;
    });
  });

  $(document).ready(function () {
    function removeAccessibility() {
      const isExpanded = $("#nav-toggle").attr("aria-expanded");
      if (isExpanded === "false") {
        $("#nav-toggle").removeAttr("data-mobilemenu");
        $("body").off("click", removeAccessibility);
      }
    }

    $("#nav-toggle").click(function () {
      const isExpanded = $("#nav-toggle").attr("aria-expanded");
      if (isExpanded === "true") {
        $("#nav-toggle").attr({ "data-mobilemenu": true });
        $("body").click(removeAccessibility);
      }
    });
  });

  return (
    <section class="carousel-section">
      <div class="carousel__container">
        <div
          class="carousel slide carousel-fade"
          data-ride="carousel"
          id="axos-carousel"
        >
          <div class="carousel__stage">
            <div class="carousel__quote-mark text-center">
              <img
                src="-/media/Axos/Images/Axos-2021/quote-mark-gradient"
                alt=""
                width="64"
                height="56"
              />
            </div>
            <div class="carousel__slides carousel-inner" role="listbox">
              <div class="item" id="slide-1">
                <p class="carousel__quote">
                  Very short wait after put on hold. Great security checks [to
                  confirm my identity]. Great assistance in reactivation my
                  dormant account. And great help in establishing and navigating
                  your website. Thank you for all the help that I needed.
                </p>
                <p class="carousel__reviewer">
                  {" "}
                  — <strong>Hepolito F.</strong>
                </p>
              </div>

              <div class="item active" id="slide-2">
                <p class="carousel__quote">
                  Excellent customer service, good mobile app experience
                  (especially impressed with mobile deposit), good website
                  experience, understandable services and setup.
                </p>
                <p class="carousel__reviewer">
                  {" "}
                  — <strong>Dana L.</strong>
                </p>
              </div>

              <div class="item" id="slide-3">
                <p class="carousel__quote">
                  Very friendly… Willing to answer all my questions in a timely
                  manner. I felt like [the customer service rep] was actually
                  there to assist me, and [I wasn’t] just a job for her! Thank
                  you.
                </p>
                <p class="carousel__reviewer">
                  {" "}
                  — <strong>Donna E.</strong>
                </p>
              </div>
            </div>
          </div>
          <ul class="carousel-indicators text-center ">
            <li data-target="#axos-carousel" data-slide-to="0" class=""></li>
            <li
              data-target="#axos-carousel"
              data-slide-to="1"
              class="active"
            ></li>
            <li data-target="#axos-carousel" data-slide-to="2" class=""></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
