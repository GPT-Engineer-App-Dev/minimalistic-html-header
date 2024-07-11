import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Home, Info, Mail, User } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils"; // Import cn utility function

const Index = () => {
  return (
    <div>
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 justify-between">
        <div className="flex items-center gap-2">
          <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-8 h-8" />
          <span className="font-semibold text-lg">Logo</span>
        </div>
        <nav className="hidden md:flex md:items-center md:gap-5 lg:gap-6 text-lg font-medium md:text-sm">
          <NavItem to="/" icon={<Home className="h-4 w-4" />}>Home</NavItem>
          <NavItem to="/about" icon={<Info className="h-4 w-4" />}>About</NavItem>
          <NavItem to="/contact" icon={<Mail className="h-4 w-4" />}>Contact</NavItem>
        </nav>
        <UserMenu />
      </header>
      <main className="flex-grow overflow-auto">
        <div className="text-center">
          <h1 className="text-3xl">Your Blank Canvas</h1>
          <p>Chat with the agent to start making edits.</p>
        </div>
      </main>
    </div>
  );
};

const NavItem = ({ to, icon, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        "flex items-center gap-2 transition-colors",
        isActive
          ? "text-foreground"
          : "text-muted-foreground hover:text-foreground",
      )
    }
  >
    {icon}
    {children}
  </NavLink>
);

const UserMenu = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="secondary" size="icon" className="rounded-full">
        <User className="h-5 w-5" />
        <span className="sr-only">Toggle user menu</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuItem>Settings</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Logout</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

export default Index;