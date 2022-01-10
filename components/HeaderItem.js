export default function HeaderItem({ Icon, title }) {
  return (
    <div className="group flex flex-col text-center w-12 sm:w-20 cursor-pointer hover:text-black">
      <Icon className="h-8 group-hover:animate-bounce mb-2" />
      <p className="opacity-0 group-hover:opacity-100 text-black font-bold tracking-wider">
        {title}
      </p>
    </div>
  );
}
