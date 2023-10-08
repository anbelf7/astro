document.getElementById("hamburger").addEventListener("click", () => {
  // per usare multipli toggle
  ["-space-y-1", "space-y-1", "py-4"].map((e) =>
    document.getElementById("hamburger").classList.toggle(e),
  );
  document.getElementById("ham1").classList.toggle("rotate-45");
  document.getElementById("ham2").classList.toggle("hidden");
  document.getElementById("ham3").classList.toggle("-rotate-45");

  ["hidden", "flex", "flex-col", "gap-y-5", "mt-6"].map((e) =>
    document.getElementById("menu").classList.toggle(e),
  );
});
