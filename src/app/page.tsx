import Link from "next/link";

export default function Homepage() {
  return (
    <div className="p-20 text-2xl space-x-4">
      <Link
        href="/portfolio"
        className="underline text-primary bg-color-900 p-4 rounded"
      >
        Task-01 Portfolio
      </Link>
      <Link
        href="/task-02"
        className="underline text-primary bg-color-900 p-4 rounded"
      >
        Task-03 Infinite Scroll
      </Link>
    </div>
  );
}
