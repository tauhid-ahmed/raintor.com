export default function StyledWord({ children }: React.PropsWithChildren) {
  return (
    <span className="relative inline-flex items-center z-10">
      <span className="relative z-10 px-2 text-color-100 pt-5 pb-2 leading-none">
        {children}
      </span>
      <span
        aria-hidden
        className="absolute left-0 top-1/2 -translate-y-1/2 size-full -z-10 bg-color-900 rounded-xl"
      />
    </span>
  );
}
