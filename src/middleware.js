export function onRequest(context, next) {
  // Controlla se l'utente ha il cookie di autenticazione
  const isLoggedIn = context.cookies.has("pbToken");

  // Reindirizza se non autenticato e tenta di accedere a una pagina protetta
  if (context.url.pathname !== "/login" && !isLoggedIn) {
    return context.redirect("/login", 302);
  }

  // Reindirizza se già autenticato e tenta di accedere alla pagina di login
  if (context.url.pathname == "/login" && isLoggedIn) {
    return context.redirect("/", 302);
  }
  return next();
}
