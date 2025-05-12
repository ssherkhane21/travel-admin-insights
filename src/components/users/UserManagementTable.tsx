
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MoreHorizontal, Search, Plus, UserPlus } from "lucide-react";
import { toast } from "sonner";

type UserRole = "admin" | "subadmin" | "manager";

type User = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: "active" | "inactive";
  dateAdded: string;
};

const mockUsers: User[] = [
  {
    id: "USR-001",
    name: "John Admin",
    email: "john.admin@example.com",
    role: "admin",
    status: "active",
    dateAdded: "2025-01-05",
  },
  {
    id: "USR-002",
    name: "Sarah Manager",
    email: "sarah.manager@example.com",
    role: "manager",
    status: "active",
    dateAdded: "2025-02-14",
  },
  {
    id: "USR-003",
    name: "Mike Subadmin",
    email: "mike.subadmin@example.com",
    role: "subadmin",
    status: "active",
    dateAdded: "2025-03-22",
  },
  {
    id: "USR-004",
    name: "Lisa Manager",
    email: "lisa.manager@example.com",
    role: "manager",
    status: "inactive",
    dateAdded: "2025-04-10",
  },
];

export const UserManagementTable = () => {
  const [users, setUsers] = useState<User[]>(mockUsers);
  const [searchTerm, setSearchTerm] = useState("");
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    role: "manager" as UserRole,
    password: "",
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddUser = () => {
    const id = `USR-${(users.length + 1).toString().padStart(3, '0')}`;
    const newUserData: User = {
      id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
      status: "active",
      dateAdded: new Date().toISOString().split('T')[0],
    };

    setUsers([...users, newUserData]);
    setNewUser({
      name: "",
      email: "",
      role: "manager",
      password: "",
    });
    setIsDialogOpen(false);

    toast.success("New user added successfully", {
      description: `${newUser.name} has been added as ${newUser.role}`,
    });
  };

  const handleUpdateUserStatus = (id: string, status: "active" | "inactive") => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, status } : user
      )
    );

    const user = users.find(u => u.id === id);
    toast.success(`User status updated`, {
      description: `${user?.name}'s status is now ${status}`,
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h2 className="text-2xl font-bold tracking-tight">User Management</h2>
        
        <div className="flex flex-col md:flex-row gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search users..."
              className="w-full md:w-[250px] pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="gap-2">
                <UserPlus className="h-4 w-4" />
                Add User
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New User</DialogTitle>
                <DialogDescription>
                  Create a new user account with specific role permissions.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter full name"
                    value={newUser.name}
                    onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter email address"
                    value={newUser.email}
                    onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <Select
                    value={newUser.role}
                    onValueChange={(value) => setNewUser({ ...newUser, role: value as UserRole })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="subadmin">Subadmin</SelectItem>
                      <SelectItem value="manager">Manager</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Create password"
                    value={newUser.password}
                    onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                <Button onClick={handleAddUser}>Add User</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date Added</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                  No users found
                </TableCell>
              </TableRow>
            ) : (
              filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={`https://ui-avatars.com/api/?name=${user.name.replace(' ', '+')}`} />
                        <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={
                        user.role === "admin"
                          ? "border-admin-blue text-admin-blue"
                          : user.role === "subadmin"
                          ? "border-admin-yellow text-admin-yellow"
                          : "border-admin-green text-admin-green"
                      }
                    >
                      {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={user.status === "active" ? "default" : "secondary"}
                      className={
                        user.status === "active"
                          ? "bg-admin-green"
                          : "bg-admin-dark-gray"
                      }
                    >
                      {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell>{user.dateAdded}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => 
                          toast.info("View profile", { description: `View ${user.name}'s profile` })
                        }>
                          View profile
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => 
                          toast.info("Edit user", { description: `Edit ${user.name}'s details` })
                        }>
                          Edit user
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => 
                          toast.info("Reset password", { description: `Password reset email sent to ${user.name}` })
                        }>
                          Reset password
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        {user.status === "active" ? (
                          <DropdownMenuItem onClick={() => handleUpdateUserStatus(user.id, "inactive")}>
                            Deactivate user
                          </DropdownMenuItem>
                        ) : (
                          <DropdownMenuItem onClick={() => handleUpdateUserStatus(user.id, "active")}>
                            Activate user
                          </DropdownMenuItem>
                        )}
                        <DropdownMenuItem className="text-admin-red" onClick={() => 
                          toast.warning("Delete user?", { 
                            description: `This action cannot be undone. Delete ${user.name}?`,
                            action: {
                              label: "Delete",
                              onClick: () => toast.success("User deleted", { description: `${user.name} has been deleted` })
                            }
                          })
                        }>
                          Delete user
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
