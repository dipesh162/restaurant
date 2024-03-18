import React, { useEffect, useState } from 'react';
import LineThroughText from '../UI/LineThroughText';
import Tag from '../UI/Tag';
import FoodItems from './FoodItems';
import detail from '/images/detail01.png'
import detail2 from '/images/detail02.png'
import detail3 from '/images/detail03.png'


function Community() {
  const [visibleSections, setVisibleSections] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
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
    <div className='mt-[80px] tracking-[0.1px] mb-[130px] grid justify-center grid-cols-[repeat(2,525px)] grid-rows-[repeat(3,auto)] gap-[25px]'>
      <div id='section1' className="section justify-self-end">
        <div className='leading-[53px] pb-2 pr-[20px] text-[62px] font-din text-[#333333]'>
          MEET OUR
          <LineThroughText
            text='COMMUNITY'
            strikeColor='#FFDAC9' 
            strikeHeight={6}
            strikeWidth='266'
            leftPos='-15px'
          />
        </div>
        <Tag
          text='know more'
          pl='9.6'
          pr='10.4'
        />
        <div className='mt-[36px] w-[199px] leading-[25px] font-din text-[22px]'>
          LOREM IPSUM DOLOR SIT AMET ERNUT TEMPARTERO SERTU PER NABORE EN TORNA ENTALTO
        </div>
      </div>
      <div id='section2' className={`mt-[75px] relative section transition ease-in-out duration-[1500ms]  ${visibleSections.includes('section2') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[400px]'}`}>
        <FoodItems
          flex='row'
          image='/images/Community/food1.png'
          name='buzzfeedfood'
          likes='14,7K'
          comments='60'
          content='It’s taco Tuesday! These tacos from @jesseszewczyk have no added sugars and are SO good 🌮. Find the recipe from the link in our bio! 📸: @taylormillerphoto'
        />
        <img src={detail} alt="" className='absolute -right-[12px] -bottom-[22px]'/>
        <img src={detail2} alt="" className='absolute left-[181px] -bottom-[31px]'/>
      </div>
      <div id='section3' className={`section transition ease-in-out duration-[1500ms]  ${visibleSections.includes('section3') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[300px]'}`}>
        <FoodItems
          flex='row-reverse'
          image='/images/Community/food2.png'
          name='love_food'
          likes='99,7K'
          comments='789'
          content='Waffle sticks in Copenhagen! 🇩🇰😍 Milk chocolate with sprinkles, dark chocolate with coconut and milk chocolate with peanuts! [📷: @foodwithmichel] #lovefood'
        />
        <img src={detail3} alt="" className='absolute left-[55px] -bottom-[34px]'/>
      </div>
      <div id='section4' className={`section transition ease-in-out duration-[1500ms]  ${visibleSections.includes('section4') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[300px]'}`}>
      </div>
      <div id='section5' className={`mt-[67px] font-gillSans text-[15px] leading-[20px] text-[#333333] text-left w-[192px] h-[141px] section transition ease-in-out duration-[1500ms]  ${visibleSections.includes('section5') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[200px]'}`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure.
      </div>
      <div id='section6' className={`section transition ease-in-out duration-[1500ms]  ${visibleSections.includes('section6') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[200px]'}`}>
        <FoodItems
          flex='row-reverse'
          image='/images/Community/food3.png'
          name='buzzfeedfood'
          likes='18,2K'
          comments='152'
          content='Waffle sticks in Copenhagen! 🇩🇰😍 Milk chocolate with sprinkles, dark chocolate with coconut and milk chocolate with peanuts! [📷: @foodwithmichel] #lovefood'
        />
      </div>
    </div>
  );
}

export default Community;
