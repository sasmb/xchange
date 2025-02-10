import React from 'react';

interface AnimationSectionProps {
  title: string;
}

export default function AnimationSection({ title }: AnimationSectionProps) {
  return (
    <div className="flex items-center justify-center h-full">
      <h1 className="text-4xl font-bold text-black">{title}</h1>
    </div>
  );
} 