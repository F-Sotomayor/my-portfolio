import FloatingSocialMediaIcons from "@/components/stateless/FloatingSocialMediaIcons/FloatingSocialMediaIcons";
import Header from "@/components/stateless/Header/Header";
import Introduction from "@/components/stateless/Introduction/Introduction";
import ScrollDownIcon from "@/components/stateless/ScrollDownIcon/ScrollDownIcon";

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
