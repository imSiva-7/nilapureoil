export default function TailWind() {
  return (
    <div className="m-5 flex justify-center">
      <button
        className="
          group relative cursor-pointer overflow-hidden rounded-2xl
          bg-green-900 p-5 font-bold uppercase text-white 
          transition-transform duration-300
    hover:-translate-y-1 hover:scale-105
        "
      >
        <span
          className="
            pointer-events-none absolute inset-0 -translate-x-full
            bg-gradient-to-r from-transparent via-white/60 to-transparent
            transition-transform duration-700 ease-out
            group-hover:translate-x-full
          "
        />
        <span className="relative z-10">hit the damn button</span>
      </button>
    </div>
  );
}
