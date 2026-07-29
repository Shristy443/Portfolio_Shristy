import React from "react";
import {motion} from 'framer-motion';
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Contact=()=>{
    return(
         <motion.div
                
                  initial={{opacity:0,y:50}}
               whileInView={{opacity:1, y:0}}
                transition={{duration:1, ease:"easeOut"}}
                viewport={{once:false,amount:0.2}}
                id='contact'
                className='py-20 bg-dark-200'>
<div className="container mx-auto px-6 ">
<h2 className="text-3xl font-bold text-center mb-4" >
Get In
<span className="text-purple">Touch</span>
</h2>
<p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
    I'm a Computer Science student passionate about
     web development, artificial intelligence, and
      solving real-world problems through technology. Feel free to reach out for collaborations, opportunities,
     or just a friendly conversation about tech.
</p>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
    <div>
        <form className="space-y-6">
            <div>
                <label htmlFor='name' className='block text-gray-300 mb-2'>Your Name</label>
                <input 
               className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
                type='text'/>
            
            </div>
             <div>
                <label htmlFor='Email' className='block text-gray-300 mb-2'>Your Email Address</label>
                <input 
               className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
                type='email'/>
            
            </div>
             <div>
                <label htmlFor='message' className='block text-gray-300 mb-2'>Your Message</label>
                <textarea 
               className="w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
                type='text'/>
            
            </div>
<button type='submit' className='w-full px-6 py-3
bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300 cursor-pointer'>
    Send
</button>
        </form>
    </div>
    {/* contact info */}
    <div className="space-y-8">
        <div className="flex items-start">
            <div className="text-purple text-2xl mr-4">
                <FaMapMarkerAlt/>
            </div>
            <div>
                <h3 className='text-lg font-semibold mb-2'>
                    Location
                </h3>
                <p className="text-gray-400">Uttarakhand, Dehradun</p>
            </div>
        </div>

        <div className="flex items-start">
            <div className="text-purple text-2xl mr-4">
                <FaEnvelope/>
            </div>
            <div>
                <h3 className='text-lg font-semibold mb-2'>
                    Email
                </h3>
                <p className="text-gray-400">shristykewat0704@gmail.com</p>
            </div>
        </div>

        <div className="flex items-start">
            <div className="text-purple text-2xl mr-4">
                <FaPhone/>
            </div>
            <div>
                <h3 className='text-lg font-semibold mb-2'>
                    Phone
                </h3>
                <p className="text-gray-400">7983xxxxxx</p>
            </div>
        </div>
        <div className="pt-4">
            <h3 className="text-lg font-semibold mb-4">Follow me</h3>
            <div className="flex space-x-4">
                <a href='https://github.com/Shristy443' className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center
             hover:text-white
                transition duration-300">
                    <FaGithub/>
                </a>

                 <a href='https://www.linkedin.com/public-profile/settings/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact_info%3BzZB9wostRrOv72IxgjUT0w%3D%3D' className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center
                 hover:text-white
                transition duration-300">
                    <FaLinkedin/>
                </a>

                 {/* <a href='#' className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center
                
                 hover:text-white
                transition duration-300">
                    <FaTwitter/>
                </a> */}

               
            </div>
        </div>


    </div>
</div>
</div>
                </motion.div>
      
    )
}

export default Contact;