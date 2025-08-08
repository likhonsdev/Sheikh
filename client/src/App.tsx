import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ClerkProvider } from "@clerk/clerk-react";
import Home from "@/pages/home";
import Docs from "@/pages/docs";
import ApiDocs from "@/pages/api-docs";
import Chat from "./pages/chat";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/docs" component={Docs} />
      <Route path="/api" component={ApiDocs} />
      <Route path="/chat" component={Chat} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ClerkProvider 
      publishableKey="pk_test_dXAtZ2FyZmlzaC0yLmNsZXJrLmFjY291bnRzLmRldiQ"
      appearance={{
        variables: {
          colorPrimary: "hsl(213.8, 100%, 48%)",
          colorBackground: "hsl(0, 0%, 100%)",
          colorInputBackground: "hsl(0, 0%, 100%)",
          colorInputText: "hsl(224, 71.4%, 4.1%)"
        }
      }}
    >
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </ClerkProvider>
  );
}

export default App;
