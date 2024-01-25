import React from "react";
import Navbar from "../../utils/navbar";
import Search from "../../components/Search";
import Cards from "../../components/cards";

function Main({ posts }) {
  return (
    <div>
      <Navbar />
      <Search />
      {/* <Cards posts={posts} text={"Trending"} hidingTheValue={true} /> */}
    </div>
  );
}

export default Main;

export async function getStaticProps() {
  let posts = null;
  try {
    const api = process.env.NEXT_PUBLIC_APIV3;
    const response = await fetch(`
          https://api.themoviedb.org/3/trending/all/day?api_key=${api}&language=en-US`);
    posts = await response.json();
  } catch (err) {
    posts = err.code;
  }

  return {
    props: {
      posts,
    },
  };
}
