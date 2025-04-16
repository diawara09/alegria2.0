import banner1 from '../Images/03.jpeg'
import banner2 from '../Images/02.jpeg'
import { Link } from 'react-router'

export function Welcome() {
  return (<>
    <div id="auto-play" data-carousel='{ "loadingClassNamees": "opacity-0", "isAutoPlay": true, "speed": 10000,"dotsItemClasses": "carousel-dot carousel-active:bg-primary" }' className="relative w-full" >
    <div className="carousel max-h-svh">
      <div className="carousel-body opacity-0 h-full">
       
        <div className="carousel-slide">
          <div className="bg-base-200/60 flex h-full justify-center relative">
            <img src={banner1} className='w-full z-0' />
            <div className='absolute intersect:motion-opacity-in-0 intersect:motion-translate-y-in-100 p-5 max-w-1/2 lg:p-10 justify-end top-0 h-full lg:h-screen left-0 z-1 flex flex-col gap-2.5'>
              <span className='bg-secondary intersect:motion-opacity-in-0 intersect:motion-translate-y-in-100 text-white font-extrabold text-xl lg:text-5xl motion-delay-[1s] motion-duration-[3s]'>This is a Hero Section</span>
              <p className="bg-secondary intersect:motion-opacity-in-0 intersect:motion-translate-y-in-100 text-white text-sm lg:text-lg motion-delay-[2s] motion-duration-[5s]"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis ducimus nisi ea quo sunt aperiam aliquid at dolorum repudiandae placeat! </p>
              <div className='flex gap-2'>
                <Link to={"#"} className="btn btn-sm lg:btn-md btn-primary intersect:motion-translate-y-in-100 intersect:motion-opacity-in-0 motion-delay-[3s] motion-duration-[5s]">Faire un don</Link>
                <Link to={"#"} className='btn btn-sm lg:btn-md btn-secondary intersect:motion-translate-y-in-100 intersect:motion-opacity-in-0 motion-delay-[3s] motion-duration-[5s]'>Devenir Benevole</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-slide">
          <div className="bg-base-200/60 flex h-full justify-center relative">
            <img src={banner2} className='w-full z-0' />
            <div className='absolute intersect:motion-opacity-in-0 intersect:motion-translate-y-in-100 p-5 max-w-1/2 lg:p-10 justify-end top-0 h-full lg:h-screen left-0 z-1 flex flex-col gap-2.5'>
              <span className='bg-secondary intersect:motion-opacity-in-0 intersect:motion-translate-y-in-100 text-white font-extrabold text-xl lg:text-5xl motion-delay-[1s] motion-duration-[3s]'>This is a Hero Section</span>
              <p className="bg-secondary intersect:motion-opacity-in-0 intersect:motion-translate-y-in-100 text-white text-sm lg:text-lg motion-delay-[2s] motion-duration-[5s]"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis ducimus nisi ea quo sunt aperiam aliquid at dolorum repudiandae placeat! </p>
              <div className='flex gap-2'>
                <Link to={"#"} className="btn btn-sm lg:btn-md btn-primary intersect:motion-translate-y-in-100 intersect:motion-opacity-in-0 motion-delay-[3s] motion-duration-[5s]">Faire un don</Link>
                <Link to={"#"} className='btn btn-sm lg:btn-md btn-secondary intersect:motion-translate-y-in-100 intersect:motion-opacity-in-0 motion-delay-[3s] motion-duration-[5s]'>Devenir Benevole</Link>
              </div>
            </div>
          </div>
        </div>

        
       
       
      </div>
      <div className="carousel-pagination absolute bottom-3 end-10 start-0 flex justify-end gap-3"></div>
    </div>
   
    
  </div>
  <div className='flex flex-wrap'>
    <div className='flex flex-col bg-primary p-12 lg:p-24 min-w-xs flex-1 text-white'>
       <span className='text-3xl my-3'>"L'education est l'arme la plus puissante pour changer le monde."</span>
       <Link to={"#"} className='text-lg text-secondary font-bold'>Donner maintenant  <span className="icon-[tabler--heart] size-4"></span></Link>
    </div>
    <div className='flex flex-col bg-black flex-1 p-12 lg:p-24 min-w-xs text-white'>
       <span className='text-3xl my-3'>"L'education est l'arme la plus puissante pour changer le monde."</span>
       <Link to={"#"} className='text-lg text-secondary font-bold'>Devenir Benevole  <span className="icon-[tabler--user-circle] size-4"></span></Link>
    </div>
    <img src={banner1} className='hidden lg:block flex-2 min-w-xs' />
  </div>

  <div className='flex flex-wrap my-10 lg:my-20 w-full overflow-x-hidden'>
    <img src={banner2} className='min-w-xs flex-1' />
    <div className='flex-2 p-10 lg:p-20 text-white font-bold bg-primary min-w-sm'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste laudantium commodi aliquam animi! Iusto officia corrupti repellat, nam iure 
      provident! Sit ullam ipsum eligendi voluptatibus accusantium dicta cumque corrupti qui deleniti cupiditate? 
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore suscipit sapiente soluta laudantium ullam eius odio praesentium? Consequatur hic soluta veniam exercitationem et accusantium quos!
      </div>
  </div>

  <div className='flex flex-col my-10 lg:my-20 w-full overflow-x-hidden'>
     <div className='flex flex-wrap w-full p-10 items-center justify-between'>
      <h1 className='text-2xl lg:text-4xl font-extrabold min-w-xs'>Nos actions</h1>
      <Link to={""} className='text-sm text-secondary font-bold flex items-center'>Voir toutes nos actions  <span className="icon-[tabler--arrow-right] collapse-open:hidden size-4"></span></Link>
     </div>
  </div>
  </>
  )
}


