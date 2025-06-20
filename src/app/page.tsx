import Link from "next/link";

export default function Homepage() {
  return (
    <div className="p-20 text-2xl">
      <Link
        href="/portfolio"
        className="underline text-primary bg-color-900 p-4 rounded"
      >
        Task-01 Portfolio
      </Link>
    </div>
  );
}
