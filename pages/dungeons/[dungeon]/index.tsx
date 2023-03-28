import DungeonFloor from "@/components/dungeon/DungeonFloor";
import Link from "next/link";

interface Props {}

const Dungeon = ({}: Props) => {
  return (
    <div className="relative py-32">
      <Link className="absolute underline top-8 left-8 " href="/dungeons">
        Back to dungeons
      </Link>
      <h1 className="text-4xl font-bold text-center">HTML</h1>

      <div className="container flex flex-col mx-auto mt-8">
        {[...new Array(4)].map((_, i) => (
          <DungeonFloor key={i} />
        ))}
      </div>
    </div>
  );
};

export default Dungeon;
