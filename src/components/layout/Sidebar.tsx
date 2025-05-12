
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
  Percent,
  CarFront, // Replace LicensePlate with CarFront
  ChevronDown
} from "lucide-react";
import { useState } from "react";

type SidebarProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

type NavItem = {
  title: string;
  href: string;
  icon: React.ElementType;
  children?: NavSubItem[];
};

type NavSubItem = {
  title: string;
  href: string;
};

const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Bus Management",
    href: "#",
    icon: Bus,
    children: [
      {
        title: "Bus Operator",
        href: "/bus-operators",
      },
      {
        title: "Bus Booking",
        href: "/bus-bookings",
      }
    ]
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
    title: "Driver Management",
    href: "/driver-management",
    icon: CarFront, // Use CarFront icon instead
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
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const toggleSubmenu = (title: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

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
              <li key={item.href} className="relative">
                {item.children ? (
                  <div className="space-y-1">
                    <button
                      onClick={() => toggleSubmenu(item.title)}
                      className={cn(
                        "flex items-center w-full py-2 px-3 rounded-md transition-all",
                        "text-blue-100 hover:bg-white/10 hover:text-white"
                      )}
                    >
                      <item.icon className={cn("h-5 w-5", open ? "mr-3" : "mx-auto")} />
                      {open && (
                        <div className="flex items-center justify-between w-full">
                          <span>{item.title}</span>
                          <ChevronDown 
                            className={cn(
                              "h-4 w-4 transition-transform", 
                              expandedItems[item.title] ? "transform rotate-180" : ""
                            )} 
                          />
                        </div>
                      )}
                    </button>
                    {open && expandedItems[item.title] && (
                      <ul className="pl-9 space-y-1">
                        {item.children.map((subItem) => (
                          <li key={subItem.href}>
                            <NavLink
                              to={subItem.href}
                              className={({ isActive }) =>
                                cn(
                                  "block py-1.5 px-3 rounded-md transition-all text-sm",
                                  isActive
                                    ? "bg-white/10 text-white"
                                    : "text-blue-100 hover:bg-white/10 hover:text-white"
                                )
                              }
                            >
                              {subItem.title}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
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
                )}
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
