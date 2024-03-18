import React, { useEffect, useState } from 'react'
import LineThroughText from '../UI/LineThroughText';
import Tag from '../UI/Tag';
import MenuList from '../../../static/Menu';
import MenuItem from './MenuItem';

function Menu() {
  const [visibleSections, setVisibleSections] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.menu-section');
      const newVisibleSections = [];

      sections.forEach(section => {
        const position = section.getBoundingClientRect();

        // Checking if the section is partially visible
        if (position.top < window.innerHeight && position.bottom >= 0) {
          newVisibleSections.push(section.id);
        }
      });

      setVisibleSections(newVisibleSections);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    // Trigger the visibility check once on component mount
    handleScroll();

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className='bg-[#F8F8F8] pb-[85px] pt-[168px] grid justify-center grid-rows-1 grid-cols-[repeat(4,268px)] relative'>
      <div className='flex justify-center absolute right-1/2 transform translate-x-1/2 z-[4]'>
        <div className='relative flex justify-center'>
          <div className='border-[#CECECE] border-t-0 border-b-0 border-[1px] w-[268px] h-[894px]'></div>
          <div className='border-[#CECECE] border-t-0 border-b-0 border-[1px] w-[268px] h-[894px] -ml-[1px]'></div>
        </div>
        <div className='absolute flex flex-col items-center ml-2 mt-[42px]'>
          <LineThroughText
              text='OUR MENU'
              strikeColor='#FFDAC9' 
              strikeHeight={6}
              strikeWidth='236'
              leftPos='-16px'
            />
          <div className='-mt-[8px]'>
            <Tag
              text='KNOW MORE'
              pl='16'
              pr='13'
            />
          </div>
        </div>
      </div>

      {MenuList.map((menu,i)=>(
            <div 
              id={`section${i+1}`} 
              style={{
                paddingTop: i === 1 ? '132px' : i === 2 ? '92px' : i === 3 ? '40px' : '',
                zIndex: 4-i
              }} 
              className={`bg-[#F8F8F8] menu-section transition ease-in-out duration-[1500ms] ${visibleSections.includes(`section${i+1}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[400px]'}`}
            >
              <h1 className='text-[62px] font-din leading-[52px] mb-[19px]'
                style={{ 
                  marginLeft: i === 1 ? '-9px' : i === 2 ? '-8px' : i === 3 ? '-6px' : '',
                }}
              >{menu.heading}
              </h1>
                <div className='flex flex-col items-center'>
                  {menu.items.map((item,i)=>(
                    <MenuItem item={item}/> 
                  ))}
                </div>
            </div>  
      ))
      }
    </div>
  )
}

export default Menu