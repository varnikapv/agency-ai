import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServicesCard from './ServicesCard'

const Services = () => {

    const servicesData=[
        {
            title:'Advertising',
            description:'Leverage targeted advertising campaigns to reach your ideal audience and maximize ROI.',
            icon: assets.ads_icon
        },
        {
            title:'Social Media',
            description:'Boost your brand presence and engage with your audience through strategic social media management.',
            icon: assets.social_icon,
        },
        {
            title:'Content marketing',
            description:'We help you create and distribute valuable, relevant, and consistent content to attract and retain a clearly defined audience.',
            icon: assets.marketing_icon
        },
        {
            title:'Content writing',
            description:' We help you craft compelling and SEO-friendly content that resonates with your target audience.',
            icon: assets.content_icon,
        }
    ]


return (
    <div id="services" className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40
    pt-30 text-gray-700 dark:text-white'>

        <img src={assets.bgImage2} alt=" " className='absolute -top-110 -left-70 -z-1 dark:hidden' />
        
        <Title title='How can we help?' desc='From strategy to execution, we craft digital solutions that move your business forward.' />

    <div className='flex flex-col md:grid grid-cols-2'>
        {servicesData.map((service, index) => (
            <ServicesCard key={index} service={service} index={index}/>
        ))}
    </div>

    </div>
)
}

export default Services