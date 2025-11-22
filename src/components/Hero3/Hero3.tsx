import './Hero3.css'
import goatGamingTumbnail from '../../assets/goatGamingTumbnail.png'
import EzyScrap from '../../assets/EzyScrap.png'

export const Hero3 = () => {
    const workCards = [
        'https://cdn.jsdelivr.net/gh/shaheer-git/FyreHubAssets/cards-container-1/1.png',
        'https://cdn.jsdelivr.net/gh/shaheer-git/FyreHubAssets/cards-container-1/2.png',
        'https://cdn.jsdelivr.net/gh/shaheer-git/FyreHubAssets/cards-container-1/3.png',
        'https://cdn.jsdelivr.net/gh/shaheer-git/FyreHubAssets/cards-container-1/4.png',
        'https://cdn.jsdelivr.net/gh/shaheer-git/FyreHubAssets/cards-container-1/5.png',
        'https://cdn.jsdelivr.net/gh/shaheer-git/FyreHubAssets/cards-container-1/6.png',
    ]

    const portfolioWebsites = [
        {
            name: 'EzyScrap',
            url: 'https://ezyscrap.com',
            thumbnail: EzyScrap
        },
        {
            name: 'GOAT Gaming Café',
            url: 'https://goatgamingcafe.com',
            thumbnail: goatGamingTumbnail
        }
    ]

    return (
        <div className='min-h-screen flex flex-col justify-center items-center py-12 px-4'>
            <h1 className='text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white mb-6 leading-tight'>
                Our <span className='text-[#AFFC41] font-bold'>Works</span>
            </h1>

            <div className="w-full max-w-7xl flex flex-col gap-12">
                {/* Project Carousels Section */}
                <div className="flex flex-col gap-8">
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
                                    className='bg-contain bg-no-repeat rounded-xl h-[450px] w-full opacity-90'
                                    style={{ backgroundImage: `url("${card}")` }}
                                ></div>
                            ))}
                            {/* <div className='flex items-center justify-center'>
                                <Link
                                    to='/portfolio'
                                    className='bg-[#AFFC41] cursor-pointer hover:bg-[#aefc419d] text-[#252525] px-3 py-2 rounded-md text-sm lg:text-base font-semibold transition-colors text-center w-1/2 opacity-85'
                                >
                                    See All
                                </Link>
                            </div> */}
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

                {/* Portfolio Websites Section */}
                <div className="py-12 border-t-2 border-[#AFFC41] border-opacity-30">
                    <div className="mb-8 text-center">
                        <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#AFFC41] mb-2'>Website Designs</h2>
                        <p className='text-[#AFFC41] opacity-80 text-sm md:text-base'>Some of the websites we've designed and built</p>
                    </div>

                    {/* Desktop Grid */}
                    <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {portfolioWebsites.map((site, idx) => (
                            <a
                                key={idx}
                                href={site.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                            >
                                <div className="relative w-full h-64 md:h-72 bg-[#2a2630]">
                                    <img
                                        src={site.thumbnail}
                                        alt={site.name}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.currentTarget.style.display = 'none'
                                            e.currentTarget.nextElementSibling?.classList.remove('hidden')
                                        }}
                                    />
                                    <div className="hidden absolute inset-0 bg-gradient-to-br from-[#AFFC41] to-[#9cda2a] flex items-center justify-center">
                                        <div className="text-center text-[#252525]">
                                            <div className="text-sm font-semibold mb-2">Website Preview</div>
                                            <div className="text-xs opacity-75">{site.name}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-end">
                                    <div className="w-full p-4 bg-gradient-to-t from-black to-transparent text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                        <h3 className="font-bold text-lg">{site.name}</h3>
                                        <p className="text-xs opacity-80">Visit Website →</p>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* Mobile View */}
                    <div className="sm:hidden flex flex-col gap-4">
                        {portfolioWebsites.map((site, idx) => (
                            <a
                                key={idx}
                                href={site.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block rounded-xl overflow-hidden"
                            >
                                <div className="relative w-full h-48 bg-[#2a2630]">
                                    <img
                                        src={site.thumbnail}
                                        alt={site.name}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.currentTarget.style.display = 'none'
                                            e.currentTarget.nextElementSibling?.classList.remove('hidden')
                                        }}
                                    />
                                    <div className="hidden absolute inset-0 bg-gradient-to-br from-[#AFFC41] to-[#9cda2a] flex items-center justify-center">
                                        <div className="text-center text-[#252525]">
                                            <div className="text-sm font-semibold">{site.name}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-3 bg-[#2a2630] border-b-2 border-[#AFFC41]">
                                    <h3 className="font-bold text-[#AFFC41]">{site.name}</h3>
                                    <p className="text-[#AFFC41] text-xs opacity-75">Visit Website →</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
