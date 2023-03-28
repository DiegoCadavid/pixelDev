import Link from "next/link";

interface Props {}

const Header = ({}: Props) => {
  return (
    <div className="container flex items-center justify-between mx-auto mt-4">
      <div className="w-12 h-12 rounded-lg bg-slate-200" />

      <div className="flex gap-2">
        <Link className="px-4 py-2 rounded-full bg-slate-200" href="/">
          {" "}
          Home{" "}
        </Link>
        <Link className="px-4 py-2 rounded-full bg-slate-200" href="/dungeons">
          {" "}
          Dungeons{" "}
        </Link>
      </div>

      <div className="px-4 py-2 text-white rounded-full bg-rose-500">
        Patreon
      </div>
    </div>
  );
};

export default Header;
