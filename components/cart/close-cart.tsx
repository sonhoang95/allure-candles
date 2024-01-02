import { XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function CloseCart({ className }: { className?: string }) {
  return (
    <div className="relative flex h-12 w-12 items-center justify-center font-semibold text-neutral-50 transition-colors">
      <XMarkIcon className={clsx('h-4 stroke-[4px]', className)} />
    </div>
  );
}
