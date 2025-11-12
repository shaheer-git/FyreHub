import React from 'react'
import './Hero3.css'

export const Hero3 = () => {
    const workCards = [
        'https://cdn.jsdelivr.net/gh/shaheer-git/FyreHubAssets/cards-container-1/1.png',
        'https://cdn.jsdelivr.net/gh/shaheer-git/FyreHubAssets/cards-container-1/2.png',
        'https://cdn.jsdelivr.net/gh/shaheer-git/FyreHubAssets/cards-container-1/3.png',
        'https://cdn.jsdelivr.net/gh/shaheer-git/FyreHubAssets/cards-container-1/4.png',
        'https://cdn.jsdelivr.net/gh/shaheer-git/FyreHubAssets/cards-container-1/5.png',
        'https://cdn.jsdelivr.net/gh/shaheer-git/FyreHubAssets/cards-container-1/6.png',
    ]

    return (
        <div className='min-h-screen flex flex-col justify-center items-center py-12 px-4'>
            <div className='mb-8 md:mb-12 text-center'>
                <p className='text-4xl md:text-6xl lg:text-8xl font-bold text-[#AFFC41]'>our works</p>
            </div>
            
            <div className="w-full max-w-7xl flex flex-col gap-8">
                {/* Desktop view - carousel */}
                <div className="hidden md:block">
                    <div className="work-cards-container-1 flex items-center gap-3">
                        <div className="bg-[#AFFC41] h-[150px] w-[300px] rounded-xl flex-shrink-0"></div>
                        {workCards.map((card, idx) => (
                            <div 
                                key={idx}
                                className='bg-cover rounded-xl h-[300px] w-[300px] flex-shrink-0'
                                style={{ backgroundImage: `url("${card}")` }}
                            ></div>
                        ))}
                        <div 
                            className='bg-cover rounded-xl h-[300px] w-[300px] flex-shrink-0'
                            style={{ backgroundImage: `url("${workCards[0]}")` }}
                        ></div>
                    </div>
                </div>

                <div className="hidden md:block">
                    <div className="work-cards-container-2 flex items-center gap-3">
                        <div className="bg-[#AFFC41] h-[150px] w-[300px] rounded-xl flex-shrink-0"></div>
                        {workCards.map((_, idx) => (
                            <div 
                                key={`second-${idx}`}
                                className="bg-[#AFFC41] h-[150px] w-[300px] rounded-xl flex-shrink-0"
                            ></div>
                        ))}
                        {workCards.map((_, idx) => (
                            <div 
                                key={`third-${idx}`}
                                className="bg-[#AFFC41] h-[150px] w-[300px] rounded-xl flex-shrink-0"
                            ></div>
                        ))}
                    </div>
                </div>

                {/* Mobile view - grid */}
                <div className="md:hidden flex flex-col gap-6">
                    <div className="grid grid-cols-1 gap-4">
                        {workCards.map((card, idx) => (
                            <div 
                                key={idx}
                                className='bg-cover rounded-xl h-[250px] w-full'
                                style={{ backgroundImage: `url("${card}")` }}
                            ></div>
                        ))}
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                        {Array(4).fill(null).map((_, idx) => (
                            <div 
                                key={`mobile-${idx}`}
                                className="bg-[#AFFC41] h-[120px] rounded-lg"
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
