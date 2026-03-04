"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { UserPlus, MessageSquare, MousePointerClick, CheckCircle, Clock } from "lucide-react";

export default function RecentActivity() {
  const activities = [
    {
      type: "conversion",
      icon: CheckCircle,
      color: "text-green-600",
      bgColor: "bg-green-50",
      title: "Nouvelle conversion",
      description: "Emma L. a réservé une démo",
      time: "Il y a 5 min",
    },
    {
      type: "click",
      icon: MousePointerClick,
      color: "text-cyan-600",
      bgColor: "bg-cyan-50",
      title: "Clic sur le lien",
      description: "David K. a visité votre site",
      time: "Il y a 12 min",
    },
    {
      type: "reply",
      icon: MessageSquare,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      title: "Nouvelle réponse",
      description: "Sarah M. a répondu à votre message",
      time: "Il y a 23 min",
    },
    {
      type: "connection",
      icon: UserPlus,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      title: "Connexion acceptée",
      description: "Ben F. a accepté votre invitation",
      time: "Il y a 1h",
    },
    {
      type: "connection",
      icon: UserPlus,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      title: "Connexion acceptée",
      description: "Clara S. a accepté votre invitation",
      time: "Il y a 2h",
    },
    {
      type: "reply",
      icon: MessageSquare,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      title: "Nouvelle réponse",
      description: "Alex D. a répondu positivement",
      time: "Il y a 3h",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Activité Récente</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, idx) => {
            const Icon = activity.icon;
            
            return (
              <div key={idx} className="flex items-start gap-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${activity.bgColor}`}>
                  <Icon className={`w-5 h-5 ${activity.color}`} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                  <p className="text-sm text-gray-600">{activity.description}</p>
                  <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
                    <Clock className="w-3 h-3" />
                    {activity.time}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
