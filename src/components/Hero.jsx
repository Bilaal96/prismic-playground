import NavLink from './NavLink';

export default function Hero() {
  return (
    <section className="min-h-[70vh] bg-sky-800 w-full py-32">
      <div className="w-container flex flex-col gap-8">
        <h1 className="text-5xl text-slate-100 font-bold uppercase max-w-md">
          Top deals all year round
        </h1>
        <p className="text-slate-100 font-semibold text-lg max-w-md min-wi">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus
          dolores nobis ducimus odio labore omnis quidem magnam sint quis
          repudiandae?
        </p>
        <NavLink href="/shop" width="max-w-max">
          Shop Now
        </NavLink>
      </div>
    </section>
  );
}
