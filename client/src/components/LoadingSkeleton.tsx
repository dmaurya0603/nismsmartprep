interface LoadingSkeletonProps {
  count?: number;
  height?: string;
  className?: string;
}

export function LoadingSkeleton({ count = 1, height = 'h-16', className = '' }: LoadingSkeletonProps) {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className={`skeleton ${height} rounded-xl ${className}`}
          style={{ animationDelay: `${index * 0.1}s` }}
        />
      ))}
    </>
  );
}

export function FormLoadingSkeleton() {
  return (
    <div className="space-y-4 p-6">
      <div className="skeleton h-12 w-3/4 rounded-lg" />
      <div className="skeleton h-32 w-full rounded-xl" />
      <div className="grid grid-cols-1 gap-4">
        <LoadingSkeleton count={3} height="h-16" />
      </div>
      <div className="skeleton h-12 w-full rounded-lg" />
      <div className="flex gap-3 justify-end">
        <div className="skeleton h-10 w-32 rounded-lg" />
        <div className="skeleton h-10 w-32 rounded-lg" />
      </div>
    </div>
  );
}

export function CardLoadingSkeleton() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 space-y-3">
      <div className="skeleton h-6 w-1/2 rounded" />
      <div className="skeleton h-4 w-3/4 rounded" />
      <div className="skeleton h-4 w-full rounded" />
      <div className="skeleton h-20 w-full rounded-lg" />
    </div>
  );
}
