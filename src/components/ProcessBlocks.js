import { Link } from 'react-router-dom';

const BLOCKS = [
  {
    title: 'Technology',
    description: 'Look at ways SnapRISK can help your business maintain and improve risk posture',
    img: '/img/home/technology.png',
    link: '/technology'
  },
  {
    title: 'Solutions',
    description: 'Find different ways SnapRISK can take your business to the next level',
    img: '/img/home/solutions.png',
    link: '/solutions'
  },
  {
    title: 'About Us',
    description: 'Learn more about SnapRISK and how we can help your business',
    img: '/img/home/about_us.png',
    link: '/about'
  },
];

function ProcessBlock({ block }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-gray-200/80 bg-white shadow-sm transition-shadow hover:shadow-xl">
      <div className="relative h-64 w-full overflow-hidden md:h-72">
        <img
          src={block.img}
          alt=""
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/10"
        />
        <div className="relative flex h-full flex-col justify-end p-6 text-left">
          <h3 className="m-0 text-xl font-bold text-white md:text-2xl">{block.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-white/90 md:text-base">{block.description}</p>
          <Link to={block.link} className="mt-2 text-sm leading-relaxed text-white/90 md:text-base">Learn more</Link>
        </div>
      </div>
    </article>
  );
}

function ProcessBlocks() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
      {BLOCKS.map((block) => (
        <ProcessBlock key={block.title} block={block} />
      ))}
    </div>
  );
}

export default ProcessBlocks;
