import { Metadata } from "next";
import { ReactNode } from "react";

const metadata: Metadata = {
  title: "Franco Pregunta / Dashboard",
  description: "Dashboard de Franco Pregunta",
};

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <h1>Dashboard</h1>
      {children}
    </div>
  );
}
