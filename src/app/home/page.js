"use client";
import "../styles/bg.css";
import Footer from "../components/footer";

const Page = () => {
  return (
    <div className="app-frame archer-book-pro font-light overflow-hidden relative my-6 rounded-xl bg-[#5a6e5c] bg-[url('/list-background.png')] bg-cover bg-center bg-no-repeat  m-auto">
      {/* Background waves are handled in bg.css */}
      <div className="z-10 flex flex-col items-center mt-16">
        <h1
          className="text-3xl font-medium text-white text-center mb-6 "
          style={{ fontFamily: "serif" }}
        >
          Il viaggio di Go
          <br />
          nella Laguna incantata
        </h1>
        <button className="px-8 py-3 rounded-xl border-2 border-purple-300 text-purple-700 font-medium bg-purple-200/10 backdrop-blur-sm hover:bg-purple-200/20 transition">
          iniza a leggere
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Page;