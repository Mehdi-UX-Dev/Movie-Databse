import HeroBanner from "@/components/home/banner";
import Popular from "@/components/home/popular";
import TopRated from "@/components/home/topRated";
import Trending from "@/components/home/trending";

export default function Home() {
  return (
    <main className="homePage">
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
    </main>
  );
}
