import Header from "@/components/stateless/Header/Header";
import Introduction from "@/components/stateless/Introduction/Introduction";

export default function Home() {
  return (
    <>
      <div className="firstPage">
        <Header />
        <Introduction />
      </div>
      <div className="secondPage"></div>
    </>
  );
}
