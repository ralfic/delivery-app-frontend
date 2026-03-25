import * as React from 'react';
import { cn } from '~/lib/utils';

export interface InputProps extends React.ComponentProps<'input'> {
  icon?: React.ReactNode;
}

function Input({ className, type, icon, ...props }: InputProps) {
  return (
    <div className="relative w-full">
      {icon && (
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none flex items-center justify-center">
          {icon}
        </div>
      )}

      <input
        type={type}
        data-slot="input"
        className={cn(
          'w-full pr-4 py-3.5 bg-gray-100 border-transparent rounded-xl focus:bg-white focus:border-[#FF6347] focus:ring-2 focus:ring-[#FF6347]/20 transition-all duration-300 outline-none disabled:cursor-not-allowed disabled:opacity-50',
          icon ? 'pl-12' : 'pl-4',
          className,
        )}
        {...props}
      />
    </div>
  );
}

export { Input };
