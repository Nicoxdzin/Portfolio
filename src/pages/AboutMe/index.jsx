import Github from '../../assets/github.svg'
import Linkedin from '../../assets/linkedin.svg'
import Gmail from '../../assets/gmail.svg'
import Me from '../../assets/sticker.png'

export default function AboutMe() {
    return (
        <section className="min-h-screen items-center bg-cover grid sm:grid-cols-1 lg:grid-cols-2 m-5">
            <div className="flex flex-col justify-center items-center">
                <div className="w-3/4">
                    <span className="font-rubik text-5xl">FULLSTACK DEVELOPER</span>
                </div>
                <div className="w-3/4 m-8">
                    <p>As a full-stack developer, I bring a versatile and well-rounded skill set to the table, with experience in both front-end and back-end development. I enjoy taking projects from concept to deployment, ensuring every aspect of the application is built to be robust, scalable, and user-friendly.</p>
                </div>
            </div>
            <div className="w-full h-full flex justify-center items-center text-center">
                <div className=" w-1/2 h-1/2">
                    <img src={Me} alt="" />
                </div>
            </div>
        </section>
    )
}