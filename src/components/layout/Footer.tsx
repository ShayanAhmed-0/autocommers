import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
   
    <div className='navc'>
      {/* <!-- component --> */}
<Link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"/>
<Link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"/>

<footer className="relative pt-8 pb-6 bg-blueGray-200">
  <div className="container px-4 mx-auto">
    <div className="flex flex-wrap text-left lg:text-left">
      <div className="w-full px-4 lg:w-6/12">
        {/* <h4 className="text-3xl fonat-semibold text-blueGray-700">Let's keep in touch!</h4> */}
        <h5 className="mt-0 mb-2 text-lg text-blueGray-600">
          Find us on any of these platforms, we respond 1-2 business days.
        </h5>
        <div className="mt-6 mb-6 lg:mb-0 ">
          <button className="items-center justify-center w-10 h-10 mr-2 font-normal bg-white rounded-full shadow-lg outline-none text-lightBlue-400 align-center focus:outline-none" type="button">
            <i className="net sh usfab fa-twitter"></i></button><button className="items-center justify-center w-10 h-10 mr-2 font-normal bg-white rounded-full shadow-lg outline-none text-lightBlue-600 align-center focus:outline-none" type="button">
            <i className="fab fa-facebook-square"></i></button><button className="items-center justify-center w-10 h-10 mr-2 font-normal text-pink-400 bg-white rounded-full shadow-lg outline-none align-center focus:outline-none" type="button">
            <i className="fab fa-dribbble"></i></button><button className="items-center justify-center w-10 h-10 mr-2 font-normal bg-white rounded-full shadow-lg outline-none text-blueGray-800 align-center focus:outline-none" type="button">
            <i className="fab fa-github"></i>
          </button>
        </div>
      </div>
      <div className="w-full px-4 lg:w-6/12">
        <div className="flex flex-wrap mb-6 items-top">
          <div className="w-full px-4 ml-auto lg:w-4/12">
            <span className="block mb-2 text-sm font-semibold uppercase text-blueGray-500">Useful Links</span>
            <ul className="list-unstyled">
              <li>
                <a className="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800" href="https://www.creative-tim.com/presentation?ref=njs-profile">About Us</a>
              </li>
              <li>
                <a className="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800" href="https://blog.creative-tim.com?ref=njs-profile">Blog</a>
              </li>
              <li>
                <a className="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800" href="https://www.github.com/creativetimofficial?ref=njs-profile">Github</a>
              </li>
              <li>
                <a className="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800" href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile">Free Products</a>
              </li>
            </ul>
          </div>
          <div className="w-full px-4 lg:w-4/12">
            <span className="block mb-2 text-sm font-semibold uppercase text-blueGray-500">Other Resources</span>
            <ul className="list-unstyled">
              <li>
                <a className="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800" href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile">MIT License</a>
              </li>
              <li>
                <a className="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800" href="https://creative-tim.com/terms?ref=njs-profile">Terms Conditions</a>
              </li>
              <li>
                <a className="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800" href="https://creative-tim.com/privacy?ref=njs-profile">Privacy Policy</a>
              </li>
              <li>
                <a className="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800" href="https://creative-tim.com/contact-us?ref=njs-profile">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr className="my-6 border-blueGray-300"/>
    <div className="flex flex-wrap items-center justify-center md:justify-between">
      <div className="w-full px-4 mx-auto text-center md:w-4/12">
        <div className="py-1 text-sm font-semibold text-blueGray-500">
          Copyright © <span id="get-current-year">2021</span><a href="https://www.creative-tim.com/product/notus-js" className="text-blueGray-500 hover:text-gray-800" target="_blank"> Notus JS by</a>
          <a href="https://www.creative-tim.com?ref=njs-profile" className="text-blueGray-500 hover:text-blueGray-800">Creative Tim</a>.
        </div>
      </div>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer
