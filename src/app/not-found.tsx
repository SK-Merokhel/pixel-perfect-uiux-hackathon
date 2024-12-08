import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Error Message Section */}
      <section className="p-10 relative bg-black pt-36 flex flex-col items-center">
        <div className="w-full max-w-[630px] text-center">
          <h3 className="text-[96px] sm:text-[120px] font-bold text-[#FF9F0D] mb-6">
            404
          </h3>
          <p className="font-bold text-[32px] sm:text-[36px] md:text-[40px] mb-6">
            Oops! Something went wrong.
          </p>
          <p className="text-[18px] sm:text-[20px] mb-4">
            The page you are looking for cannot be found.
          </p>
          <p className="text-[18px] sm:text-[20px] mb-6">
            But don&apos;t worry, we&apos;ll get it figured out in no time.
          </p>
          <p className="text-[18px] sm:text-[20px] mb-8">
            In the meantime, check out these fresh ideas:
          </p>

          {/* Go back button */}
          <Link href="/">
            <button className="bg-[#FF9F0D] text-white text-[18px] sm:text-[20px] font-bold px-8 py-3 rounded-lg hover:bg-[#e8890b] transition duration-300 ease-in-out">
              Go Back to Home
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
