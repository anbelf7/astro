document.getElementById("hamburger").addEventListener("click", () => {
  // animazione menu
  // per usare multipli toggle
  ["-space-y-1", "space-y-1", "py-4"].map((e) =>
    document.getElementById("hamburger").classList.toggle(e),
  );
  document.getElementById("ham1").classList.toggle("rotate-45");
  document.getElementById("ham2").classList.toggle("hidden");
  document.getElementById("ham3").classList.toggle("-rotate-45");

  // menu mobile
  ["hidden", "flex", "flex-col", "gap-y-5", "mt-6"].map((e) =>
    document.getElementById("menu").classList.toggle(e),
  );
  // document.getElementById("ricerca").classList.toggle("hidden");
});
