import type { FC } from 'react';
import Image from 'next/image';

type CardOptions = {
  imagePath?: string;
  size: 'normal' | 'small';
  gradient: {
    direction: 't' | 'tr' | 'r' | 'br' | 'b' | 'bl' | 'l' | 'tl';
    from: string;
    to: string;
  };
};

interface CardProps {
  title: string;
  options: CardOptions;
}

const Card: FC<CardProps> = (props) => {
  const { title, options } = props;

  return (
    <section
      className={`hover:shadow-xl transition-all cursor-pointer relative shadow-md items-center bg-gradient-to-t from-[#EFDEC9] to-[#B8FCFC] rounded-[60px] text-[#464646] font-bold ${
        options.size === 'normal'
          ? `text-[28px] w-[490px] aspect-[490/370]`
          : `text-[24px] w-[420px] aspect-[420/220]`
      } flex flex-col-reverse`}
    >
      <div className="z-10 bg-white rounded-full text-center bg-opacity-70 shadow-xl mb-[7%] w-[95%]">
        <div>{title}</div>
      </div>
      {options.imagePath ? (
        <Image
          className="absolute bottom-0 w-auto h-full bg-gradi"
          src={options.imagePath}
          alt="me"
          width={1000}
          height={1000}
        />
      ) : null}
    </section>
  );
};
export default Card;
