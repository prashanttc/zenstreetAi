import Image from "next/image";

interface TestimonialCardProps {
  quote: string;
  author: string;
}

const TestimonialCard = ({ quote, author }: TestimonialCardProps) => {
  return (
    <div className="w-[315px] h-[306px] rounded-[18px] shadow-custom px-[17px] py-[10px] flex justify-center items-center">
      <div className="flex flex-col gap-[23px]">
        <div className="flex flex-col gap-[10px]">
          <div className="w-fit flex gap-[-10px] relative">
            <Image src="/assets/comma.png" height={44} width={44} alt="comma" className="absolute -right-7 top-0" />
            <Image src="/assets/comma.png" height={44} width={44} alt="comma" />
          </div>
          <h2 className="text-[16px] font-[500] w-[91%] text-center">&quot;{quote}&quot;</h2>
        </div>
        <h1 className="text-[16px] font-[500]">{author}</h1>
      </div>
    </div>
  );
};

export default TestimonialCard;
