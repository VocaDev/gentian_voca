'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { IconType } from 'react-icons';

interface SkillIconProps {
  name: string;
  icon: LucideIcon | IconType;
  index?: number;
  level?: number;
}

export function SkillIcon({ name, icon: Icon, index = 0, level = 0 }: SkillIconProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -4 }}
      className="flex flex-col items-center justify-center p-4 md:p-5 rounded-xl border border-zinc-800 bg-zinc-900/30 backdrop-blur-sm hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all duration-300 group cursor-pointer"
    >
      <Icon className="w-6 h-6 md:w-7 md:h-7 text-zinc-400 group-hover:text-emerald-400 mb-3 transition-colors duration-300" />
      <span className="text-xs md:text-sm text-zinc-400 group-hover:text-zinc-200 text-center font-medium transition-colors mb-3">
        {name}
      </span>
      {/* Proficiency bar */}
      {level > 0 && (
        <div className="w-full bg-zinc-800 rounded-full h-1 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
            className="bg-gradient-to-r from-emerald-500 to-emerald-400 h-full rounded-full"
          />
        </div>
      )}
    </motion.div>
  );
}
