import * as React from 'react';
import { Checkbox as CheckboxPrimitive } from 'radix-ui';
import { cn } from '~/lib/utils';
import { CheckIcon } from 'lucide-react';

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        'peer relative flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 transition-colors outline-none cursor-pointer',
        'focus-visible:ring-2 focus-visible:ring-[#FF6347] focus-visible:ring-offset-2 focus-visible:outline-none',
        'disabled:cursor-not-allowed disabled:opacity-50 group-has-disabled/field:opacity-50',
        'data-[state=checked]:border-[#FF6347] data-[state=checked]:bg-[#FF6347] data-[state=checked]:text-white',
        'dark:border-gray-600 dark:focus-visible:ring-[#FF6347]',
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid place-content-center text-current transition-none [&>svg]:size-3.5"
      >
        <CheckIcon strokeWidth={3} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
