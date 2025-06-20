type InputProps = {} & React.ComponentProps<"input">;

export default function Input({ ...props }: InputProps) {
  return (
    <input
      className="border-b border-border focus:border-primary placeholder:text-gray-400 outline-none w-full"
      {...props}
    />
  );
}
