// Se si usa View Transitions aggiungere addEventListner che ascolta l'evento astro:page-load che viene eseguito
// alla fine della navigazione della pagina e, in risposta, esegue lo script esistente per rendere la funzione del menu
// hamburger quando viene cliccato altrimenti il menu hamburger non funziona:
document.addEventListener("astro:page-load", () => {
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
});
