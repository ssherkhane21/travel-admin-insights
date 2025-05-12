
import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";
import { 
  LayoutDashboard, 
  Bus, 
  Building, 
  Car, 
  Bike, 
  Users, 
  Settings, 
  Percent
} from "lucide-react";

type SidebarProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

type NavItem = {
  title: string;
  href: string;
  icon: React.ElementType;
};

const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Bus Bookings",
    href: "/bus-bookings",
    icon: Bus,
  },
  {
    title: "Hotel Bookings",
    href: "/hotel-bookings",
    icon: Building,
  },
  {
    title: "Taxi Bookings",
    href: "/taxi-bookings",
    icon: Car,
  },
  {
    title: "Bike Bookings",
    href: "/bike-bookings",
    icon: Bike,
  },
  {
    title: "User Management",
    href: "/users",
    icon: Users,
  },
  {
    title: "Commission",
    href: "/commission",
    icon: Percent,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export const Sidebar = ({ open, setOpen }: SidebarProps) => {
  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 z-50 bg-admin-blue text-white transform transition-all duration-300 ease-in-out",
        open ? "w-64" : "w-20"
      )}
    >
      <div className="flex flex-col h-full">
        <div className="h-16 flex items-center justify-center border-b border-blue-700">
          {open ? (
            <h2 className="text-xl font-bold">Admin Panel</h2>
          ) : (
            <h2 className="text-xl font-bold">AP</h2>
          )}
        </div>
        <nav className="flex-1 py-4 overflow-y-auto">
          <ul className="space-y-1 px-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center py-2 px-3 rounded-md transition-all",
                      isActive
                        ? "bg-white/10 text-white"
                        : "text-blue-100 hover:bg-white/10 hover:text-white"
                    )
                  }
                >
                  <item.icon className={cn("h-5 w-5", open ? "mr-3" : "mx-auto")} />
                  {open && <span>{item.title}</span>}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4 border-t border-blue-700">
          <div className="flex items-center">
            {open && <span className="text-xs opacity-75">© 2025 Travel Admin</span>}
          </div>
        </div>
      </div>
    </aside>
  );
};
