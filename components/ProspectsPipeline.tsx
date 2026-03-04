"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { User, Building2, MapPin, Star } from "lucide-react";

interface ProspectsPipelineProps {
  fullView?: boolean;
}

export default function ProspectsPipeline({ fullView = false }: ProspectsPipelineProps) {
  const pipeline = [
    {
      status: "Identified",
      count: 50,
      color: "bg-gray-100 text-gray-800",
      prospects: [
        { name: "Alex D.", role: "CTO", company: "TechFlow", score: 50, location: "Paris" },
        { name: "Sarah M.", role: "CEO", company: "DataCorp", score: 55, location: "Lyon" },
      ]
    },
    {
      status: "Connected",
      count: 35,
      color: "bg-blue-100 text-blue-800",
      prospects: [
        { name: "Ben F.", role: "Marketing Dir.", company: "GrowthLab", score: 65, location: "Marseille" },
        { name: "Clara S.", role: "Sales VP", company: "Innovate AI", score: 68, location: "Toulouse" },
      ]
    },
    {
      status: "Replied",
      count: 22,
      color: "bg-purple-100 text-purple-800",
      prospects: [
        { name: "David K.", role: "CEO", company: "CloudScale", score: 75, location: "Bordeaux" },
        { name: "Emma L.", role: "Founder", company: "StartupX", score: 78, location: "Nantes" },
      ]
    },
    {
      status: "Clicked Link",
      count: 15,
      color: "bg-cyan-100 text-cyan-800",
      prospects: [
        { name: "Frank H.", role: "CTO", company: "DevOps Pro", score: 85, location: "Lille" },
        { name: "Grace W.", role: "VP Eng", company: "TechVision", score: 87, location: "Strasbourg" },
      ]
    },
    {
      status: "Converted",
      count: 8,
      color: "bg-green-100 text-green-800",
      prospects: [
        { name: "Henry P.", role: "CEO", company: "SaaS Master", score: 95, location: "Nice" },
        { name: "Iris T.", role: "Founder", company: "AI Solutions", score: 98, location: "Rennes" },
      ]
    },
  ];

  return (
    <Card className={fullView ? "col-span-full" : ""}>
      <CardHeader>
        <CardTitle>Pipeline CRM</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {pipeline.map((stage) => (
            <div key={stage.status} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-gray-900">{stage.status}</h3>
                  <Badge className={stage.color}>{stage.count}</Badge>
                </div>
              </div>
              
              <div className="space-y-2">
                {stage.prospects.slice(0, fullView ? 10 : 2).map((prospect, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{prospect.name}</p>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <span>{prospect.role}</span>
                          <span>•</span>
                          <Building2 className="w-3 h-3" />
                          <span>{prospect.company}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <MapPin className="w-3 h-3" />
                        {prospect.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span className="text-sm font-medium">{prospect.score}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
