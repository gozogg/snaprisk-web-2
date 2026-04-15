export default function TeamBlock({ teammate }) {
  return (
    <article className="group mx-auto w-full max-w-xs overflow-hidden rounded-3xl border border-white/10 bg-tertiary shadow-xl shadow-black/25">
      <div className="grid w-full grid-rows-[1fr] px-6 pb-3 pt-6 transition-[grid-template-rows,opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:grid-rows-[0fr] group-hover:translate-y-2 group-hover:opacity-0">
        <div className="h-full w-full overflow-hidden rounded-3xl">
          <img
            src={teammate.img}
            alt={`Portrait of ${teammate.firstName} ${teammate.lastName}`}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105 rounded-3xl aspect-[3/3]"
          />
        </div>
      </div>

      <div className="space-y-2 p-6 pt-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-2">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em]">{teammate.title}</p>
          <a
            href={teammate.linkedin}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary text-sm text-primary transition hover:border-primary/70 hover:text-white hover:bg-primary"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </div>

        <h3 className="text-2xl font-semibold leading-tight text-primary">
          {teammate.firstName} {teammate.lastName}
        </h3>
        <div className="relative h-28 transition-[height] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:h-96">
          <p className="text-sm leading-6 text-slate transition-all duration-400 ease-out group-hover:-translate-y-1 group-hover:opacity-0">
            {teammate.shortDescription}
          </p>
          <p className="absolute inset-0 translate-y-3 overflow-y-auto pr-1 text-sm leading-6 text-slate opacity-0 transition-all duration-500 delay-75 ease-out group-hover:translate-y-0 group-hover:opacity-100">
            {teammate.longDescription || teammate.shortDescription}
          </p>
        </div>
        <p className="text-sm leading-6 text-primary text-center gap-2">
          <i className="fa-solid fa-location-dot m-2"></i>
          {teammate.location}
        </p>
      </div>
    </article>
  );
}