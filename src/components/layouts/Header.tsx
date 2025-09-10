'use client'

import { useState } from 'react'
import { X, Download, Menu } from 'lucide-react'

const navLinks = [
  { name: 'github', href: '/', isModal: false },
  { name: 'linkedIn', href: '/linkedin', isModal: false },
  { name: 'x', href: '/x', isModal: false },
  { name: 'portfolio', href: '#', isModal: true },
  { name: "lets'talk", href: '/contact', isModal: false }
]

function Header() {
  const [currentPath, setCurrentPath] = useState('/')
  const [showToggle, setShowToggle] = useState(false)
  const [showPortfolio, setShowPortfolio] = useState(false)


  const portfolioPdfUrl = "/danso.pdf"

  function handleNavClick(href:any) {
    if (href !== '#') {
      setCurrentPath(href)
    }
  }

  function handleToggleShow() {
    setShowToggle(prev => !prev)
  }

  function handlePortfolioClick() {
    setShowPortfolio(true)
  }

  function closePortfolio() {
    setShowPortfolio(false)
  }

  function downloadPortfolio() {
    // Create a temporary link element to trigger download
    const link = document.createElement('a')
    link.href = portfolioPdfUrl
    link.download = 'DevKenny-Portfolio.pdf' // Customize the download filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div>
      {/* Desktop Header */}
      <div className='hidden lg:block bg-wineTexture border border-white border-b-0 border-l-0 border-r-0'>
        <div className='flex items-center justify-between mt-1 border border-white-color border-l-0 text-white-color'>
          <div className='border p-3 border-t-0 border-b-0'>
            <a href="/" onClick={() => handleNavClick('/')}>
              <h1 className='font-bowlby text-primary-color text-4xl capitalize hover:scale-90 hover:font-playWright'>
                dev<span className='font-playWright text-white-color hover:font-bowlby hover:text-primary-color'>kenny</span>
              </h1>
            </a>
          </div>

          <div>
            <div className='flex items-center text-[18px] font-dmMono capitalize'>
              {navLinks.map((item, index) => {
                const isActive = currentPath === item.href
                const isLast = index === navLinks.length - 1
                const baseClasses = `py-5 px-10 border-l border-white-color hover:bg-primary-color first:border-white-color ${isLast ? 'border-r' : ''}`
                const activeClasses = isActive ? 'bg-softBlend uppercase' : ''
                const fullClasses = `${baseClasses} ${activeClasses}`
                
                return item.isModal ? (
                  <button
                    key={index}
                    onClick={handlePortfolioClick}
                    className={fullClasses}
                  >
                    {item.name}
                  </button>
                ) : (
                  <a
                    key={index}
                    href={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={fullClasses}
                  >
                    {item.name}
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className='relative lg:hidden border'>
        <div className='text-zinc-800 flex items-center overflow-x-hidden justify-between'>
          <div className='p-3'>
            <a href="/" onClick={() => handleNavClick('/')}>
              <h1 className='font-bowlby text-[20px] text-primary-color lg:text-4xl capitalize hover:scale-90 hover:font-playWright'>
                dev<span className='font-playWright text-white-color hover:font-bowlby hover:text-primary-color'>kenny</span>
              </h1>
            </a>
          </div>
          <Menu onClick={handleToggleShow} className='text-3xl mr-5 text-white cursor-pointer w-8 h-8'/>
        </div>
      </div>

      {/* Portfolio PDF Modal */}
      {showPortfolio && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col">
          {/* Modal Header */}
          <div className="flex justify-between items-center p-6 bg-gray-900 border-b border-gray-700">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl md:text-3xl font-bowlby text-white">
                my <span className="text-primary-color">portfolio</span>
              </h1>
              <span className="text-gray-400 text-sm">PDF Document</span>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Download Button */}
              <button
                onClick={downloadPortfolio}
                className="flex items-center gap-2 bg-primary-color text-white px-4 py-2 rounded-lg hover:bg-opacity-80 transition-colors"
              >
                <Download size={20} />
                <span className="hidden sm:inline">Download</span>
              </button>
              
              {/* Close Button */}
              <button
                onClick={closePortfolio}
                className="text-white hover:text-primary-color transition-colors p-2"
              >
                <X size={28} />
              </button>
            </div>
          </div>

          {/* PDF Viewer */}
          <div className="flex-1 p-4">
            <div className="w-full h-full bg-white rounded-lg shadow-2xl overflow-hidden">
              {/* PDF Embed */}
              <iframe
                src={`${portfolioPdfUrl}#toolbar=1&navpanes=1&scrollbar=1`}
                className="w-full h-full border-0"
                title="Portfolio PDF"
                loading="lazy"
              >
                {/* Fallback for browsers that don't support iframe PDF viewing */}
                <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                  <div className="bg-gray-100 rounded-lg p-8 max-w-md">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      Portfolio PDF
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Your browser doesn't support PDF viewing. Please download the file to view it.
                    </p>
                    <button
                      onClick={downloadPortfolio}
                      className="flex items-center gap-2 bg-primary-color text-white px-6 py-3 rounded-lg hover:bg-opacity-80 transition-colors mx-auto"
                    >
                      <Download size={20} />
                      Download Portfolio
                    </button>
                  </div>
                </div>
              </iframe>
            </div>
          </div>

          {/* Mobile Download Bar */}
          <div className="lg:hidden bg-gray-900 border-t border-gray-700 p-4">
            <button
              onClick={downloadPortfolio}
              className="w-full flex items-center justify-center gap-2 bg-primary-color text-white py-3 rounded-lg hover:bg-opacity-80 transition-colors"
            >
              <Download size={20} />
              Download Portfolio PDF
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Header