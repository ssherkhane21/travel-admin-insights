
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, BarChart, Bar } from "recharts";

// Sample data
const dailyData = [
  { name: "Mon", hotel: 12, bus: 19, taxi: 8, bike: 5 },
  { name: "Tue", hotel: 15, bus: 21, taxi: 10, bike: 7 },
  { name: "Wed", hotel: 18, bus: 25, taxi: 12, bike: 9 },
  { name: "Thu", hotel: 17, bus: 23, taxi: 14, bike: 8 },
  { name: "Fri", hotel: 20, bus: 28, taxi: 16, bike: 10 },
  { name: "Sat", hotel: 24, bus: 30, taxi: 18, bike: 12 },
  { name: "Sun", hotel: 22, bus: 26, taxi: 15, bike: 11 },
];

const weeklyData = [
  { name: "Week 1", hotel: 80, bus: 120, taxi: 60, bike: 40 },
  { name: "Week 2", hotel: 90, bus: 140, taxi: 70, bike: 45 },
  { name: "Week 3", hotel: 100, bus: 150, taxi: 75, bike: 50 },
  { name: "Week 4", hotel: 110, bus: 160, taxi: 80, bike: 55 },
];

const monthlyData = [
  { name: "Jan", hotel: 320, bus: 480, taxi: 240, bike: 160 },
  { name: "Feb", hotel: 300, bus: 450, taxi: 230, bike: 150 },
  { name: "Mar", hotel: 340, bus: 500, taxi: 250, bike: 170 },
  { name: "Apr", hotel: 360, bus: 520, taxi: 260, bike: 180 },
  { name: "May", hotel: 380, bus: 540, taxi: 270, bike: 190 },
  { name: "Jun", hotel: 400, bus: 560, taxi: 280, bike: 200 },
];

type ChartType = "line" | "bar";

export const BookingChart = () => {
  const [period, setPeriod] = useState<"daily" | "weekly" | "monthly">("daily");
  const [chartType, setChartType] = useState<ChartType>("line");

  const data = period === "daily" ? dailyData : period === "weekly" ? weeklyData : monthlyData;

  const colors = {
    hotel: "#1a73e8",
    bus: "#34a853",
    taxi: "#fbbc04",
    bike: "#ea4335",
  };

  return (
    <Card className="col-span-4">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Booking Overview</CardTitle>
            <CardDescription>Booking statistics across all services</CardDescription>
          </div>
          <div className="flex items-center space-x-2">
            <Tabs defaultValue="line" className="w-[120px]">
              <TabsList>
                <TabsTrigger value="line" onClick={() => setChartType("line")}>Line</TabsTrigger>
                <TabsTrigger value="bar" onClick={() => setChartType("bar")}>Bar</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Tabs defaultValue="daily" className="w-[300px]">
            <TabsList>
              <TabsTrigger value="daily" onClick={() => setPeriod("daily")}>Daily</TabsTrigger>
              <TabsTrigger value="weekly" onClick={() => setPeriod("weekly")}>Weekly</TabsTrigger>
              <TabsTrigger value="monthly" onClick={() => setPeriod("monthly")}>Monthly</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="h-[300px] mt-4">
          <ResponsiveContainer width="100%" height="100%">
            {chartType === "line" ? (
              <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="hotel" stroke={colors.hotel} name="Hotel" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="bus" stroke={colors.bus} name="Bus" />
                <Line type="monotone" dataKey="taxi" stroke={colors.taxi} name="Taxi" />
                <Line type="monotone" dataKey="bike" stroke={colors.bike} name="Bike" />
              </LineChart>
            ) : (
              <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="hotel" fill={colors.hotel} name="Hotel" />
                <Bar dataKey="bus" fill={colors.bus} name="Bus" />
                <Bar dataKey="taxi" fill={colors.taxi} name="Taxi" />
                <Bar dataKey="bike" fill={colors.bike} name="Bike" />
              </BarChart>
            )}
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};
