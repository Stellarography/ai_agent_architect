import { cn } from "@/lib/utils";

interface StatusIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
  status: 'online' | 'offline' | 'error' | 'loading';
}

const statusColors = {
  online: 'bg-green-500',
  offline: 'bg-gray-400',
  error: 'bg-red-500',
  loading: 'bg-yellow-500 animate-pulse'
};

export function StatusIndicator({ status, className, ...props }: StatusIndicatorProps) {
  return (
    <div 
      className={cn(
        "h-2 w-2 rounded-full",
        statusColors[status],
        className
      )}
      {...props}
    />
  );
}
