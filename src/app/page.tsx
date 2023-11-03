export default function Home() {
  return (
    <div className="p-8 bg-slate-900 text-slate-100 h-screen">
      <h1
        className="
        font-bold 
        text-3xl sm:text-5xl lg:text-6xl 
        flex items-center gap-3 
        before:w-0.5 before:h-8 before:bg-sky-500"
      >
        Hello Tailwind
      </h1>
      <h2 className="">Hello H2</h2>
      <p className="">Paragraph</p>
      <button
        disabled
        className="
          bg-sky-500 
          px-4 py-2 
          rounded-md 
          font-medium mt-4 
          enabled:hover:bg-sky-600 
          disabled:opacity-60 
          cursor-not-allowed
        "
      >
        Sign in
      </button>
    </div>
  )
}
