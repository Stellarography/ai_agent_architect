import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

export function Loader({ size = 24, className, ...props }: LoaderProps) {
  return (
    <div 
      role="status" 
      className={cn("flex items-center justify-center", className)} 
      {...props}
    >
      <Loader2 
        className="animate-spin text-muted-foreground" 
        size={size} 
      />
    </div>
  );
}
