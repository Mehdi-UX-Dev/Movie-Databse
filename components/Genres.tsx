import { useAppSelector } from "@/redux/hooks";
import { usePathname } from "next/navigation";

const Genres = ({ data }: any) => {
  const { genres } = useAppSelector((state) => state.home);
  const path = usePathname();

  return (
    <div
      className={`flex flex-wrap justify-end items-center gap-1 absolute mr-4 bottom-5 ${
        path.startsWith("/movie") || path.startsWith("/tv")
          ? "right-8"
          : "right-0"
      }`}
    >
      {data?.map((g: any) => {
        const genre =
          Array.isArray(genres) &&
          genres?.find((obj: { id: number; name: string }) => obj.id === g);

        return (
          <div
            key={g}
            className="bg-blue-500 font-semibold  px-2 py-2 text-[14px] rounded-md text-white whitespace-nowrap"
          >
            {genre?.name}
          </div>
        );
      })}
    </div>
  );
};

export default Genres;
