document.addEventListener("DOMContentLoaded", () => {
  new IntersectionObserver(
    (e) => e.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
    { threshold: 0.1 },
  ).observe(document.querySelector(".fadeIn") || document.body);
  document.querySelectorAll(".fadeIn").forEach((e) =>
    new IntersectionObserver(
      (e) => {
        e.forEach((e) => e.isIntersecting && e.target.classList.add("visible"));
      },
      { threshold: 0.1 },
    ).observe(e),
  );
  let lightBox = document.getElementById("lightBox");
  if (lightBox) {
    let lightBoxImg = document.getElementById("lightBoxImg"),
      lightBoxCaption = document.getElementById("lightBoxCaption"),
      lightBoxClose = document.getElementById("lightBoxClose");
    document.querySelectorAll(".galleryItem").forEach(
      (e) =>
        (e.onclick = () => {
          let i = e.querySelector("img");
          ((lightBoxImg.src = i.src),
            (lightBoxImg.alt = i.alt),
            (lightBoxCaption.textContent = e.dataset.caption),
            lightBox.classList.add("active"),
            (document.body.style.overflow = "hidden"));
        }),
    );
    let closeLightBox = () => {
      (lightBox.classList.remove("active"), (document.body.style.overflow = ""));
    };
    ((lightBoxClose.onclick = closeLightBox),
      (lightBox.onclick = (e) => e.target == lightBox && closeLightBox()),
      (document.onkeydown = (e) => e.key == "Escape" && closeLightBox()));
  }
});
