
import HTMLFlipBook from 'react-pageflip';
import './App.css';
import { Page1 } from './components/content/page1';
import { Page2 } from './components/content/page2';
import { Page3 } from './components/content/page3';
import { Page4 } from './components/content/page4';
import { Page5 } from './components/content/page5';
import { Page6 } from './components/content/page6';
import { Page7 } from './components/content/page7';
import { Page8 } from './components/content/page8';
import { Cover } from './components/content/cover';
import { CoverEnd } from './components/content/coverEnd';
// import { Page1 } from './components/content/page1';

function App() {
  return (
    <div className="flex justify-center overflow-hidden items-center h-screen">
      <div className='w-[550px] h-full'>
        <HTMLFlipBook
          width={407}
          height={637}
          maxShadowOpacity={0.5}
          mobileScrollSupport={true}
          className=" h-full w-full"
        >
          <div className='bg-red-100'>
            <Cover />
          </div>
          <div className='bg-red-100'>
            <Page1 number={1} />
          </div>
          <div className='bg-red-100'>
            <Page2 number={2} />
          </div>
          <div className='bg-red-100'>
            <Page3 number={3} />
          </div>
          <div className='bg-red-100'>
            <Page4 number={4} />
          </div>
          <div className='bg-red-100'>
            <Page5 number={5} />
          </div>
          <div className='bg-red-100'>
            <Page6 number={6} />
          </div>
          <div className='bg-red-100'>
            <Page7 number={7} />
          </div>
          <div className='bg-red-100'>
            <Page8 number={8} />
          </div>
          <div className='bg-red-100'>
            <CoverEnd />
          </div>
        </HTMLFlipBook>
      </div>
    </div>
  );
}

export default App;
