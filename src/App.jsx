import ButtonGradient from './assets/svg/ButtonGradient'; // 确保路径正确
import Button from './components/Button';

const App = () => {
  return (
    <>
    <h1 className="text-3xl font-bold underline">
      Hello world
      </h1>
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
        <Button className='mt-20' href='#login'>
          something
        </Button>
      </div>
      <ButtonGradient />
      </>
  );
};

export default App;
