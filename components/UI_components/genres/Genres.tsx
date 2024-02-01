import { useAppSelector } from "@/redux/hooks";
import { usePathname } from "next/navigation";

const Genres = ({ data }: any) => {
  const { genres } = useAppSelector((state) => state.home);
  const path = usePathname();

  return (
    <div
      className={`flex flex-wrap justify-end items-center gap-1 absolute mr-4   ${
        path.startsWith("/movie") || path.startsWith("/tv")
          ? " mt-2    "
          : "right-0 bottom-5"
      }`}
    >
      {data?.map((g: any) => {
        if (!genres[g]?.name) return;
        return (
          <div
            key={g}
            className="bg-blue-500 px-1 py-1 text-[12px] rounded-md text-white whitespace-nowrap"
          >
            {genres[g]?.name}
          </div>
        );
      })}
    </div>
  );
};

export default Genres;
