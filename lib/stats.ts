import { Users, Rocket, CalendarDays, Tag, type LucideIcon } from "lucide-react";

export type StatItem = {
  icon: LucideIcon;
  eyebrow?: string;
  big: string;
  suffix?: string;
  label?: string;
};

export const leftStats: StatItem[] = [
  { icon: Users, eyebrow: "Only", big: "15", label: "Seats Available" },
  { icon: CalendarDays, big: "2-Weeks", label: "Live Training" },
];

export const rightStats: StatItem[] = [
  { icon: Rocket, eyebrow: "Starts", big: "24th", suffix: "August" },
  { icon: Tag, eyebrow: "Just", big: "15,000", suffix: "FCFA" },
];
