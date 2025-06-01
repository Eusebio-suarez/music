import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#fd4c5c] to-[#fd2e5c] w-full text-white px-6 py-6 block">
      <div className="flex justify-center gap-6 min-[570px]:gap-12 text-[10px] min-[570px]:text-[13px] min-[700px]:text-[14px] min-[800px]:text-[15.5px]">
        <div>
          <h3 className="font-semibold mb-2">Address</h3>
          <ul className="space-y-1">
            <li><a href="#">Service Info</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Product</h3>
          <ul className="space-y-1">
            <li><a href="#">Music</a></li>
            <li><a href="#">Videos</a></li>
            <li><a href="#">Store</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Team</h3>
          <ul className="space-y-1">
            <li><a href="#">Developer</a></li>
            <li><a href="#">Designer</a></li>
            <li><a href="#">Testers</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Pricing</h3>
          <ul className="space-y-1">
            <li><a href="#">Basic Plan</a></li>
            <li><a href="#">Pro Plan</a></li>
            <li><a href="#">Business Plan</a></li>
          </ul>
        </div>
      </div>
      <div className=" flex justify-center gap-6 mt-5 pt-4 border-t border-white text-[10px] min-[570px]:text-[13px] min-[700px]:text-[14px] min-[800px]:text-[15.5px] text-center space-y-1">
        <p>©2025 Music Company. All Rights Reserved.</p>
        <p>Terms & Conditions | Privacy Policy</p>
      </div>
    </footer>
  )
}