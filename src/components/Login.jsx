import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ReloadIcon } from "@radix-ui/react-icons";

const Login = () => {
  return (
    <Card id="login" className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Inserisci nome utente e password per accedere.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="username">Username</Label>
          <Input id="username" type="text" name="username" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" name="password" required />
        </div>
      </CardContent>
      <CardFooter>
        <Button id="loginButton" className="flex w-full">
          Accedi
        </Button>
        <Button disabled id="spinnerButton" className="hidden w-full">
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          {/* Carico... */}
        </Button>
      </CardFooter>
    </Card>
  );
};

const refreshPage = () => {
  window.location.reload(false);
};

export const ErrorForm = () => {
  return (
    <Card className="w-full max-w-md">
      <CardContent className="p-0">
        <div className="flex items-center space-x-4 rounded-md p-4">
          <div className="rounded-full bg-red-100 p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
            >
              <path
                fill="#ef4444"
                d="M12 17q.425 0 .713-.288T13 16t-.288-.712T12 15t-.712.288T11 16t.288.713T12 17m-1-4h2V7h-2zm1 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
              />
            </svg>
          </div>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0">
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none text-red-500">
                Errore login
              </p>
              <p className="mr-0 text-sm text-muted-foreground sm:mr-6">
                Nome utente o password errata
              </p>
            </div>
            <Button variant="destructive" onClick={refreshPage}>
              Riprova
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Login;