
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

type CommissionType = "percentage" | "fixed";

type CommissionSetting = {
  type: CommissionType;
  value: number;
  minAmount: number;
  maxAmount: number;
};

type ServiceCommission = {
  [key: string]: CommissionSetting;
};

export const CommissionSettings = () => {
  const [commissions, setCommissions] = useState<ServiceCommission>({
    hotel: { type: "percentage", value: 10, minAmount: 50, maxAmount: 1000 },
    bus: { type: "percentage", value: 8, minAmount: 20, maxAmount: 500 },
    taxi: { type: "percentage", value: 12, minAmount: 30, maxAmount: 300 },
    bike: { type: "fixed", value: 50, minAmount: 0, maxAmount: 0 },
  });

  const handleValueChange = (
    service: string,
    field: keyof CommissionSetting,
    value: number | string
  ) => {
    setCommissions((prev) => ({
      ...prev,
      [service]: {
        ...prev[service],
        [field]: field === "type" ? value : Number(value),
      },
    }));
  };

  const handleSaveChanges = (service: string) => {
    toast.success("Commission updated", {
      description: `${service.charAt(0).toUpperCase() + service.slice(1)} commission settings have been updated.`,
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Commission Settings</h2>
        <p className="text-muted-foreground">
          Configure commission rates for different services.
        </p>
      </div>

      <Tabs defaultValue="hotel" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="hotel">Hotel</TabsTrigger>
          <TabsTrigger value="bus">Bus</TabsTrigger>
          <TabsTrigger value="taxi">Taxi</TabsTrigger>
          <TabsTrigger value="bike">Bike</TabsTrigger>
        </TabsList>
        
        {(["hotel", "bus", "taxi", "bike"] as const).map((service) => (
          <TabsContent key={service} value={service}>
            <Card>
              <CardHeader>
                <CardTitle className="capitalize">{service} Commission</CardTitle>
                <CardDescription>
                  Configure how commission is calculated for {service} bookings.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Commission Type</Label>
                  <Select
                    value={commissions[service].type}
                    onValueChange={(value) =>
                      handleValueChange(service, "type", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="percentage">Percentage (%)</SelectItem>
                      <SelectItem value="fixed">Fixed Amount (₹)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between">
                      <Label>
                        {commissions[service].type === "percentage"
                          ? "Commission Rate (%)"
                          : "Fixed Commission Amount (₹)"}
                      </Label>
                      <span className="text-sm font-medium">
                        {commissions[service].value}
                        {commissions[service].type === "percentage" ? "%" : "₹"}
                      </span>
                    </div>
                    <Slider
                      value={[commissions[service].value]}
                      min={commissions[service].type === "percentage" ? 0 : 10}
                      max={commissions[service].type === "percentage" ? 30 : 500}
                      step={commissions[service].type === "percentage" ? 0.5 : 10}
                      className="mt-2"
                      onValueChange={(values) =>
                        handleValueChange(service, "value", values[0])
                      }
                    />
                  </div>
                  
                  {commissions[service].type === "percentage" && (
                    <>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Minimum Commission (₹)</Label>
                          <Input
                            type="number"
                            value={commissions[service].minAmount}
                            onChange={(e) =>
                              handleValueChange(service, "minAmount", e.target.value)
                            }
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Maximum Commission (₹)</Label>
                          <Input
                            type="number"
                            value={commissions[service].maxAmount}
                            onChange={(e) =>
                              handleValueChange(service, "maxAmount", e.target.value)
                            }
                          />
                        </div>
                      </div>
                    </>
                  )}
                </div>
                
                <div className="rounded-md bg-muted p-4">
                  <h4 className="text-sm font-medium mb-2">Example Calculation</h4>
                  <p className="text-sm text-muted-foreground">
                    {commissions[service].type === "percentage"
                      ? `For a ₹1,000 ${service} booking, the commission would be ₹${(commissions[service].value / 100 * 1000).toFixed(2)} (${commissions[service].value}%).`
                      : `For each ${service} booking, the fixed commission is ₹${commissions[service].value}.`}
                  </p>
                  {commissions[service].type === "percentage" &&
                    commissions[service].minAmount > 0 && (
                      <p className="text-sm text-muted-foreground mt-1">
                        Minimum commission amount: ₹{commissions[service].minAmount}
                      </p>
                    )}
                  {commissions[service].type === "percentage" &&
                    commissions[service].maxAmount > 0 && (
                      <p className="text-sm text-muted-foreground mt-1">
                        Maximum commission amount: ₹{commissions[service].maxAmount}
                      </p>
                    )}
                </div>
              </CardContent>
              <CardFooter className="flex justify-end space-x-2">
                <Button
                  variant="outline"
                  onClick={() => {
                    setCommissions((prev) => ({
                      ...prev,
                      [service]: {
                        type: "percentage",
                        value: service === "bike" ? 50 : 10,
                        minAmount: 0,
                        maxAmount: 0,
                      },
                    }));
                    toast.info("Settings reset", {
                      description: "Commission settings have been reset to default values.",
                    });
                  }}
                >
                  Reset to Default
                </Button>
                <Button onClick={() => handleSaveChanges(service)}>Save Changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};
