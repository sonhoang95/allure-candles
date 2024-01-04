import clsx from 'clsx';
import Price from 'components/price';
import Image from 'next/image';

export function GridTileImage({
  isInteractive = true,
  active,
  label,
  ...props
}: {
  isInteractive?: boolean;
  active?: boolean;
  label?: {
    title: string;
    amount: string;
    currencyCode: string;
    position?: 'bottom' | 'center';
  };
} & React.ComponentProps<typeof Image>) {
  return (
    <div
      className={clsx(
        'group flex h-full w-full flex-col items-center justify-center gap-6 overflow-hidden bg-white font-light',
        {
          relative: label,
          'border-2 border-blue-600': active,
          'border-neutral-200 dark:border-neutral-800': !active
        }
      )}
    >
      <div className="relative h-full w-full">
        {props.src ? (
          // eslint-disable-next-line jsx-a11y/alt-text -- `alt` is inherited from `props`, which is being enforced with TypeScript
          <Image
            className={clsx('relative h-full w-full object-fill', {
              'transition duration-300 ease-in-out group-hover:scale-105': isInteractive
            })}
            {...props}
          />
        ) : null}
      </div>
      <div>
        <h3>{label?.title}</h3>
        <Price
          className="p-2 text-gray-800"
          amount={label?.amount || '0'}
          currencyCode={label?.currencyCode || '$'}
          currencyCodeClassName="hidden @[275px]/label:inline"
        />
      </div>
    </div>
  );
}
