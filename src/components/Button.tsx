"use client";

import { cn } from "@/libs/utils";
import { cva, VariantProps } from "class-variance-authority";
import * as React from "react";
import { IconType } from "react-icons";

const buttonVariants = cva(
  "relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full",
  {
    variants: {
      variant: {
        default: "bg-rose-500 border-rose-500 text-white",
        outline: "bg-white border-black text-black",
      },
      size: {
        default: "py-3 text-base font-semibold border-2",
        sm: "py-1 text-sm font-light border",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  label: string;
  disabled?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  icon?: IconType;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      variant,
      isLoading,
      size,
      label,
      disabled,
      onClick,
      icon: Icon,
      ...props
    },
    ref
  ) => {
    return (
      <button
        onClick={onClick}
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isLoading && disabled}
        {...props}
      >
        {Icon ? (
          <>
            {isLoading ? (
              "carregando"
            ) : (
              <Icon size={24} className="absolute left-4 top-3" />
            )}
          </>
        ) : (
          <>{isLoading ? "carregando" : null}</>
        )}

        {label}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
