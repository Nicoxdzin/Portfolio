import Github from '../../assets/github.svg'
import Linkedin from '../../assets/linkedin.svg'
import Gmail from '../../assets/gmail.svg'

export default function Presentation() {
    return(
        <section className="min-h-screen bg-zinc-900 flex justify-center items-center bg-cover">
            <div className="flex flex-col justify-center text-center">
                <span className="text-slate-100 tracking-wider font-">Hello! My name is</span>
                <span className="text-slate-100 text-7xl font-tourney font-bold">NICOLAS MARQUES</span>
                <div className='flex justify-center text-slate-100 gap-3'>
                    <img src={Linkedin} alt="" className='max-w-12 text-slate-50' />
                    <img src={Github} alt="" className='max-w-8' />
                    <img src={Gmail} alt="" className='max-w-12' />
                </div>
            </div>
        </section>
    )
}