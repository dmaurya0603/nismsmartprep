import { ComponentProps } from 'react';

export function PageLoader({ className, ...props }: ComponentProps<'div'>) {
    return (
        <div
            className={`min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 ${className}`}
            {...props}
        >
            <div className="flex flex-col items-center">
                <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-gray-600 dark:text-gray-400 font-medium text-lg animate-pulse">
                    Loading...
                </p>
            </div>
        </div>
    );
}
