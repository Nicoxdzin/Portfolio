import Github from '../../assets/github.svg'
import Linkedin from '../../assets/linkedin.svg'
import Gmail from '../../assets/gmail.svg'

export default function AboutMe() {
    return(
        <section className="min-h-screen items-center bg-cover shadow-md grid sm:grid-cols-1 lg:grid-cols-2">
            <div className="w-full flex justify-center text-center">
                <h1 className='font-rubik sm:text-lg md:text-4xl lg:text-5xl tex'>Fullstack Developer</h1>
            </div>
            <div className="w-full h-full flex justify-center items-center text-center">
                <div className="border-2 w-1/2 h-1/2"></div>
            </div>
        </section>
    )
}