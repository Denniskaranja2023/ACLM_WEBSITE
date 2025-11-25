import clsx from "clsx";

export function Card({ className, children, ...props }) {
  return (
    <div
        className={clsx(
        "bg-white text-gray-900 flex flex-col gap-6 rounded-xl border",
        className,
      )}
      {...props}
    >
     {children}
    </div>
  );
}