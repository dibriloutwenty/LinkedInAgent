"use client";

import { TrendingUp, TrendingDown, Users, MessageSquare, MousePointerClick, CheckCircle } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export default function StatsCards() {
  const stats = [
    {
      title: "Acceptance Rate",
      value: "32%",
      change: "+4%",
      trend: "up",
      icon: Users,
      color: "blue",
      subtitle: "AVG: 28%"
    },
    {
      title: "Reply Rate",
      value: "18%",
      change: "-2%",
      trend: "down",
      icon: MessageSquare,
      color: "purple",
      subtitle: "Target: 20%"
    },
    {
      title: "Click Rate",
      value: "8%",
      change: "+1%",
      trend: "up",
      icon: MousePointerClick,
      color: "green",
      subtitle: "North Star ⭐"
    },
    {
      title: "Conversions",
      value: "12",
      change: "+3",
      trend: "up",
      icon: CheckCircle,
      color: "orange",
      subtitle: "Ce mois"
    }
  ];

  const colorClasses = {
    blue: "bg-blue-50 text-blue-600",
    purple: "bg-purple-50 text-purple-600",
    green: "bg-green-50 text-green-600",
    orange: "bg-orange-50 text-orange-600"
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => {
        const Icon = stat.icon;
        const isPositive = stat.trend === "up";
        
        return (
          <Card key={stat.title}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${colorClasses[stat.color as keyof typeof colorClasses]}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className={`flex items-center gap-1 text-sm font-medium ${isPositive ? "text-green-600" : "text-red-600"}`}>
                  {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                  {stat.change}
                </div>
              </div>
              
              <div>
                <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-xs text-gray-500 mt-1">{stat.subtitle}</p>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
