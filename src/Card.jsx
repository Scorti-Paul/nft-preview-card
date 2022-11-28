import equilibriumImg from './assets/image-equilibrium.jpg'
import ethereumIcon from './assets/icon-ethereum.svg'
import clockIcon from './assets/icon-clock.svg'
import viewIcon from './assets/icon-view.svg'
import avatar from './assets/image-avatar.png'
const Card = () => {
  return (
    <main className='bg-verydarkbluemain p-4 h-screen flex items-center justify-center'>
      <div className='max-w-[24rem] min-w-[20rem] bg-verydarkbluecard rounded-xl p-6'>
        <div className='w-full rounded-xl hover:cursor-pointer'>
          <div className='relative'>
            <img className='rounded-xl hover:opacity-80' src={equilibriumImg} alt="equilibrium" />
            <div className='opacity-0 hover:opacity-100 w-full h-full bg-cyan/50 absolute top-0 flex items-center justify-center rounded-xl'>
              <img src={viewIcon} alt="view" />
            </div>
          </div>
        </div>
        <div>
          <div className='pt-4'>
            <h1 className='text-white text-3xl  hover:text-cyan hover:cursor-pointer'>Equilibrium #3429</h1>
            <p className='py-4 md:text-xl'>Our Equilibrium collection promotes balance and clam.</p>
            <div className='flex justify-between pt-3'>
              <div className='flex gap-2'>
                <img src={ethereumIcon} alt="ethereum" />
                <h3 className='text-cyan font-bold'>0.041ETH</h3>
              </div>
              <div className='flex gap-2 w-32'>
                <img src={clockIcon} alt="clock" />
                <p>3 days left</p>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-verydarkblueline w-full h-[1px] my-4'></div>
        <div className='flex gap-4 items-center'>
          <img className='w-1/6 border border-white rounded-full' src={avatar} alt="avatar" />
          <p className='text-[16px]'>Creation of <a href='/' className='text-white hover:text-cyan'>Jules Wyvern</a></p>
        </div>
      </div>
    </main>
  )
}

export default Card