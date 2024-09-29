import { Button } from "@/components/ui/button";
import { ExitIcon } from "@radix-ui/react-icons";

const Logout = () => {
  const handleLogout = async () => {
    // Effettua una richiesta fetch per il logout
    const response = await fetch("/logout", {
      method: "POST",
    });

    if (response.ok) {
      // Se il logout è andato a buon fine, reindirizza alla pagina di login
      window.location.href = "/login";
    } else {
      console.error("Errore durante il logout");
    }
  };
  return (
    <Button onClick={handleLogout}>
      <ExitIcon className="mr-2 h-4 w-4" />
      Logout
    </Button>
  );
};
export default Logout;
