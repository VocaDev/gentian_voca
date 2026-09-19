'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { IconType } from 'react-icons';

interface SkillIconProps {
  name: string;
  icon: LucideIcon | IconType;
  index?: number;
}

export function SkillIcon({ name, icon: Icon, index = 0 }: SkillIconProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.03 }}
      whileHover={{ y: -2 }}
      className="flex items-center gap-2.5 px-3 py-2 rounded-lg border border-border bg-card hover:border-accent/40 hover:bg-accent/[0.03] transition-all duration-300 group cursor-default"
    >
      <Icon className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors duration-300 flex-shrink-0" />
      <span className="text-sm text-foreground/90 font-medium">{name}</span>
    </motion.div>
  );
}
