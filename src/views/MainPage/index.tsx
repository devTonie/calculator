import React from 'react';
import SocialMediaButton from '../../components/SocialMediaButton';
import FacebookImg from '../../assets/facebook.png';
import InstagramImg from '../../assets/instagram.png';
import LinkedinImg from '../../assets/linkedin.png';

const MainPage: React.FC = () => {
    return <div className='w-full h-screen flex'>
        <div className='w-full h-screen'>
            <div className='text-center items-center'>
                <h1 className='text-[28px] font-semibold text-yellow-500 m-10 mt-22 font-Lobster'>Welcome to my project!</h1>
                <p className='text-[20px] font-normal text-yellow-500 font-Lobster'>
                    This is my pet-project implemented using the React programming language.<br /><br />
                    In this project, I applied the knowledge gained during the courses<br /> and self-study with the help of available resources.<br /><br />
                    The project applied the basic concepts of the React.js framework using libraries such as:
                </p>
                <ul className='text-yellow-200 list-disc w-full list-inside mt-10 text-[22px] font-Lobster lg:list-none lg:flex lg:text-[28px]'>
                    <li className='mx-10'>React Router</li>
                    <li className='mx-10'>Tailwind CSS</li>
                    <li className='mx-10'>HeroIcons</li>
                    <li className='mx-10'>mathjs</li>
                    <li className='mx-10'>axios</li>
                    <li className='mx-10'>convert-units</li>
                </ul>
                <div className='flex absolute bottom-10 justify-center w-[70%]'>
                    <SocialMediaButton href="https://www.linkedin.com/in/tonie-simonenkov-618788255/">
                        <img 
                            src={LinkedinImg}
                            alt="linkedin"
                            className='w-12 h-12 mx-10 lg:w-16 lg:h-16'
                        />
                    </SocialMediaButton>
                    <SocialMediaButton href="https://instagram.com/tonie.store?igshid=ZDdkNTZiNTM">
                        <img
                            src={InstagramImg}
                            alt="instagram"
                            className='w-12 h-12 mx-10 lg:w-16 lg:h-16'
                        />
                    </SocialMediaButton>
                    <SocialMediaButton href="https://www.facebook.com/profile.php?id=100090458972960">
                        <img
                            src={FacebookImg}
                            alt="facebook"
                            className='w-12 h-12 mx-10 lg:w-16 lg:h-16'
                        />
                    </SocialMediaButton>
                </div>
            </div>
        </div>
    </div>
};

export default MainPage;