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
import { ReloadIcon, Cross1Icon } from "@radix-ui/react-icons";

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
    <Card className="w-full max-w-sm">
      <CardContent className="p-0">
        <div className="flex items-center space-x-4 rounded-md p-4">
          <Cross1Icon color="red" />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none text-red-500">
              Errore login
            </p>
            <p className="text-sm text-muted-foreground">
              Nome utente o password errata.
            </p>
          </div>
          <Button variant="destructive" className="flex" onClick={refreshPage}>
            Riprova
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Login;