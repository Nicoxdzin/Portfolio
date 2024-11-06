import TechCard from "../../Components/TechCard";
import reactLogo from '../../assets/react.svg'
import nodeLogo from '../../assets/nodejs.svg'
import phpLogo from '../../assets/php.svg'
import laravelLogo from '../../assets/laravel.svg'
import mysqlLogo from '../../assets/mysql.svg'
import tailwindLogo from '../../assets/tailwind.svg'

export default function Technologies() {

    console.log(reactLogo)
    return (
        <section className=" bg-cover shadow-md grid justify-items-center sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-5 p-5">
            <TechCard
                techName="React"
                techImgUrl={reactLogo}
            />
            <TechCard
                techName="NodeJS"
                techImgUrl={nodeLogo} />
            <TechCard
                techName="php"
                techImgUrl={phpLogo} />
            <TechCard
                techName="Laravel"
                techImgUrl={laravelLogo} />
            <TechCard
                techName="MySQL"
                techImgUrl={mysqlLogo} />
            <TechCard
                techName="TailwindCSS"
                techImgUrl={tailwindLogo} />
        </section>
    )
}