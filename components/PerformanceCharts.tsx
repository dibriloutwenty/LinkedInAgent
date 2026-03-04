"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function PerformanceCharts() {
  const growthData = [
    { day: "Day 1", qualified: 5, sent: 10 },
    { day: "Day 5", qualified: 35, sent: 50 },
    { day: "Day 10", qualified: 75, sent: 100 },
    { day: "Day 15", qualified: 110, sent: 140 },
    { day: "Day 20", qualified: 145, sent: 180 },
    { day: "Day 25", qualified: 165, sent: 195 },
    { day: "Day 30", qualified: 178, sent: 200 },
  ];

  const funnelData = [
    { stage: "Identified", count: 250 },
    { stage: "Connected", count: 180 },
    { stage: "Replied", count: 95 },
    { stage: "Clicked", count: 42 },
    { stage: "Converted", count: 12 },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Croissance sur 30 jours</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={growthData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="qualified" stroke="#10b981" strokeWidth={2} name="Leads Qualifiés" />
              <Line type="monotone" dataKey="sent" stroke="#6366f1" strokeWidth={2} name="Invitations Envoyées" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Funnel de Conversion</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={funnelData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="stage" type="category" width={100} />
              <Tooltip />
              <Bar dataKey="count" fill="#3b82f6" name="Prospects" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
