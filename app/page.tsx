import Image from 'next/image';
import Card from './Card';

export default function Home() {
  return (
    <div className="relative flex lg:flex-row justify-center min-h-screen items-center gap-x-[90px] gap-y-[50px] flex-col">
      <div className="grid grid-cols-1 gap-[60px]">
        <Card
          title={'Внимание: новый проект, новые возможности для лицеистов'}
          options={{
            gradient: {
              direction: 'br',
              from: '#EFDEC9',
              to: '#000',
            },
            imagePath: '/assets/books.png',
            size: 'small',
          }}
        />
        <Card
          title={'Поздравляем победителей'}
          options={{
            gradient: {
              direction: 'br',
              from: '#EFDEC9',
              to: '#B8FCFC',
            },
            imagePath: '/assets/winners.png',
            size: 'small',
          }}
        />
        <Card
          title={'Золотая книга выпускников'}
          options={{
            gradient: {
              direction: 'br',
              from: '#EFDEC9',
              to: '#B8FCFC',
            },
            imagePath: '/assets/graduate.png',
            size: 'small',
          }}
        />
      </div>

      <div className="grid xl:grid-cols-2 grid-cols-1 gap-x-[100px] gap-y-[50px]">
        <Card
          title={'Электронная приёмная'}
          options={{
            gradient: {
              direction: 't',
              from: '#EFDEC9',
              to: '#C3B1F0',
            },
            imagePath: '/assets/el-card.svg',
            size: 'normal',
          }}
        />
        <Card
          title={'Гимн семье и родительству'}
          options={{
            gradient: {
              direction: 'br',
              from: '#EFDEC9',
              to: '#B8FCFC',
            },
            imagePath: '/assets/Parents-preparing-cute-daughter-to-school.png',
            size: 'normal',
          }}
        />
        <Card
          title={'Проект «Мы вместе»'}
          options={{
            gradient: {
              direction: 'br',
              from: '#EFDEC9',
              to: '#B8FCFC',
            },
            imagePath: '/assets/together.svg',
            size: 'normal',
          }}
        />
        <Card
          title={'В зоне особого внимания'}
          options={{
            gradient: {
              direction: 'br',
              from: '#EFDEC9',
              to: '#B8FCFC',
            },
            imagePath: '/assets/attention.png',
            size: 'normal',
          }}
        />
      </div>
      <Image
        className="-z-50 absolute bottom-0 w-screen h-auto"
        src="/assets/bg-image.svg"
        alt="me"
        width={0}
        height={0}
      />
    </div>
  );
}
