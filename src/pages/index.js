import FloatingSocialMediaIcons from "@/components/stateless/FloatingSocialMediaIcons";
import Header from "@/components/stateless/Header";
import Introduction from "@/components/stateless/Introduction";
import ScrollDownIcon from "@/components/stateless/ScrollDownIcon";

export default function Home() {
  return (
    <>
      <div className="firstPage">
        <Header />
        <FloatingSocialMediaIcons />
        <Introduction />
        <ScrollDownIcon />
      </div>
    </>
  );
}
