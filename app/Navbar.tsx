import type { FC } from 'react';
import { Lato } from '@next/font/google';

const lato = Lato({
  weight: '900',
});

const Navbar: FC = () => {
  return (
    <nav className="flex justify-between z-50 xl:container m-auto items-center">
      <div>
        <h1
          className={`${lato.className} text-[#7C2AE8] font-[900] text-[48px]`}
        >
          Реверс-контакт
        </h1>
        <h2
          className={`${lato.className} text-[#464646] font-[900] text-[20px]`}
        >
          ГБОУ Лицей №40
        </h2>
      </div>
      <div className="flex text-[#464646] items-center text-center gap-20">
        <div className="text-[24px] font-semibold bg-[#EFDEC9] w-[620px] rounded-full shadow-md">
          Новости бегущей строкой
        </div>
        <div className="cursor-pointer hover:shadow-xl transition-shadow shadow-md relative bg-[#EFDEC9] w-[75px] aspect-square rounded-full flex items-center justify-center">
          <div className="absolute flex w-full h-full bg-[url(/assets/menu.png)] bg-no-repeat bg-center"></div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
