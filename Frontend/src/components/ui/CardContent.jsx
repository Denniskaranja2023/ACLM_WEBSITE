import clsx from "clsx";

export function CardContent({ className, children, ...props }) {
  return <div className={clsx("px-6 [&:last-child]:pb-6", className)} {...props}>{children}</div>;
}               