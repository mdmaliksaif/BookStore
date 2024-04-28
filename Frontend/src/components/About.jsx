import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const About = () => {
  return (
    <div className='text-2xl text-white'>
        <Navbar/>
        {/* Heading */}
        <div className='md:ml-72 ml-10'>
            <h1 className=' pt-36  text-green-400'>Who We Are</h1>
            <p className='mr-36 mt-12 text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non animi mollitia, odio cum voluptas hic pariatur, distinctio veniam unde tenetur voluptatem beatae velit sed. Veniam laborum cumque aspernatur! Assumenda, accusantium?</p>
        </div>

        <div className='mt-20 md:flex  '>
            <div className=''><img src="https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_640.jpg" className='md:w-full' alt="" /></div>
            <div className='p-10 -mt-10'>
                <h1 className='text-blue-400'>Our History</h1>
                <div className='md:w-[800px] '><p className='mr-24'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta animi, accusamus nisi corrupti rem fugit sint necessitatibus aut similique et obcaecati perferendis iure eligendi porro? Nostrum porro commodi similique fugiat!
            Modi vel doloremque dignissimos qui assumenda. Qui quaerat id soluta modi molestias commodi quae sunt quidem, aperiam, est voluptates, iure sed aliquid dolores mollitia ratione sapiente laudantium fugiat itaque. Sunt!
          um sit deleniti inventore, numquam aut laborum officia ipsam obcaecati ipsa voluptate eveniet nulla animi fugit voluptatibus accusantium? Reprehenderit illum perferendis sed.</p></div>
        </div>
            </div>
            <Footer/>
    </div>
  )
}

export default About