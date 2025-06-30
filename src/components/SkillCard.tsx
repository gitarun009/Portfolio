import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Skill {
  name: string;
  icon: LucideIcon;
  description: string;
}

interface SkillCardProps {
  skill: Skill;
  index: number;
}

const SkillCard = ({ skill, index }: SkillCardProps) => {
  const Icon = skill.icon;

  return (
    <Card 
      className="group bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:bg-slate-800/70 h-64 flex flex-col animate-fade-in-up skill-card-scale"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <CardContent className="p-8 text-center flex flex-col justify-center h-full">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mb-6 transition-transform duration-300 mx-auto">
          <Icon className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
          {skill.name}
        </h3>
        <p className="text-gray-300 leading-relaxed flex-grow flex items-center justify-center">
          {skill.description}
        </p>
      </CardContent>
    </Card>
  );
};

export default SkillCard;
