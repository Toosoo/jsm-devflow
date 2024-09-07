import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div>
      <h1 className="bg-blue-500">home</h1>

      <Link href="/ask-question">ask-question</Link>
    </div>
  );
};

export default Home;
