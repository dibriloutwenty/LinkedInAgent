"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import StatsCards from "./StatsCards";
import PerformanceCharts from "./PerformanceCharts";
import ProspectsPipeline from "./ProspectsPipeline";
import RecentActivity from "./RecentActivity";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-6">
          {activeTab === "dashboard" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-gray-600 mt-1">Vue d'ensemble de votre prospection LinkedIn</p>
              </div>
              
              <StatsCards />
              <PerformanceCharts />
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <ProspectsPipeline />
                <RecentActivity />
              </div>
            </div>
          )}
          
          {activeTab === "prospects" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Prospects</h1>
                <p className="text-gray-600 mt-1">Gérez vos prospects et votre pipeline</p>
              </div>
              <ProspectsPipeline fullView />
            </div>
          )}
          
          {activeTab === "campaigns" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Campagnes</h1>
                <p className="text-gray-600 mt-1">Gérez vos campagnes de prospection</p>
              </div>
              <div className="bg-white rounded-lg shadow p-8 text-center text-gray-500">
                Fonctionnalité en développement
              </div>
            </div>
          )}
          
          {activeTab === "messages" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Messages</h1>
                <p className="text-gray-600 mt-1">Templates et historique des messages</p>
              </div>
              <div className="bg-white rounded-lg shadow p-8 text-center text-gray-500">
                Fonctionnalité en développement
              </div>
            </div>
          )}
          
          {activeTab === "settings" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Paramètres</h1>
                <p className="text-gray-600 mt-1">Configuration de votre agent LinkedIn</p>
              </div>
              <div className="bg-white rounded-lg shadow p-8 text-center text-gray-500">
                Fonctionnalité en développement
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
