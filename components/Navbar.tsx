import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-green-600 text-white py-4 px-8 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-lg font-bold">Water Usage Project</h1>
        <div className="flex gap-4">
          <Link href="/" className="hover:text-gray-200 transition-colors">
            Home
          </Link>
          <Link
            href="/wrangling-data"
            className="hover:text-gray-200 transition-colors"
          >
            Part 1: Wrangling Data
          </Link>
          <Link
            href="/visualizations"
            className="hover:text-gray-200 transition-colors"
          >
            Part 2: Visualizations
          </Link>
          <Link
            href="/summary"
            className="hover:text-gray-200 transition-colors"
          >
            Part 3: Summary Statistics
          </Link>

          <Link
            href="/advanced"
            className="hover:text-gray-200 transition-colors"
          >
            Part 4: Advanced Visualizations
          </Link>
          <Link
            href="/conclusion"
            className="hover:text-gray-200 transition-colors"
          >
            Our conclusion
          </Link>
        </div>
      </div>
    </nav>
  );
}
