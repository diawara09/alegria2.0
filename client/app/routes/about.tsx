import { useEffect } from "react"
import banner2 from "../Images/01.jpeg"
import autonomy from "../Images/autonomie.png"
import benvole from "../Images/benevoles.png"
import independence from "../Images/independence.png"
import React, { Suspense } from 'react';
import { Link } from "react-router"

const Chart = React.lazy(() => import('react-apexcharts'));
export default function About(){
    const [state, setState] = React.useState({
          
        series: [35, 23, 22, 20],
        options: {
          chart: {
            type: 'donut',
          },
          labels: [
            'Education',
            'Assainissement',
            'Sante',
            'Developpement',
            
          ],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
      
      
    });
    return (<>
    <div className="w-full relative max-h-96 overflow-hidden">
        <img src={banner2} className="w-full"/>
        <div className="absolute top-0 h-full w-full opacity-80 bg-primary"></div>
        <div className="absolute top-0 h-full w-full flex gap-3 flex-col justify-center items-center">
            <h1 className="font-extrabold text-white text-2xl lg:text-5xl">Nous découvrir</h1>
            <p className="font-extrabold uppercase text-white text-ld">Story About Us</p>
        </div>
    </div>
    <div className="flex flex-wrap items-center  gap-5 p-10 lg:p-20 overflow-x-hidden intersect:motion-preset-slide-up motion-duration-2000">
        <div className="flex flex-col min-w-60 lg:min-w-sm lg:max-w-1/2">
            <span className="text-secondary uppercase font-light">ALEFRIA</span>
            <h3 className="font-bold text-lg lg:text-2xl my-3">Nous découvrir</h3>
            <p>Notre association œuvre activement au Mali dans plusieurs domaines essentiels visant à améliorer les conditions de vie des populations vulnérables. Elle se concentre principalement sur trois axes d’intervention : l’éducation, la santé et l’humanitaire.</p>
                <button className="btn btn-primary my-3">Voir la video</button>
        </div>
        <div>
        <iframe className="min-w-60 lg:min-w-sm min-h-72" src="https://www.youtube.com/embed/e1IUuncr71E?si=l_xEi9yhSCkwCzmC" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    </div>
    <div className="flex flex-wrap items-center -mt-10 gap-5 p-10 lg:p-20 overflow-x-hidden intersect:motion-preset-slide-up motion-duration-2000">
        <div className="flex flex-col min-w-60 flex-1 p-10">
            <img className="max-w-24" src={independence} />
            <h1 className="text-2xl font-bold my-3">Éducation et réinsertion socioprofessionnelle</h1>
            <p>Nous nous engageons dans la réinsertion sociale et professionnelle des enfants de la rue ainsi que des enfants mendiants. Notre objectif est de leur offrir une seconde chance à travers l’éducation et la formation. À cet effet, nous mettons en place des programmes éducatifs adaptés, des activités de sensibilisation, des ateliers de formation professionnelle et un accompagnement psychologique pour faciliter leur réhabilitation dans la société. Nous croyons que chaque enfant mérite un avenir meilleur, loin de la rue et de la mendicité.</p>
        </div>
        <div className="flex flex-col min-w-60 flex-1 p-10">
            <img className="max-w-24" src={autonomy} />
            <h1 className="text-2xl font-bold my-3">Santé : un accès aux soins pour tous</h1>
            <p>L’association soutient les personnes malades démunies qui n’ont pas les moyens de se soigner. Nous facilitons leur accès aux structures sanitaires en prenant en charge les frais médicaux, les médicaments, et en assurant un suivi régulier. Nos actions visent à garantir à chacun le droit fondamental à la santé, en particulier aux plus démunis, souvent oubliés du système.</p>
        </div>
        <div className="flex flex-col min-w-60 flex-1 p-10">
            <img className="max-w-24" src={benvole} />
            <h1 className="text-2xl font-bold my-3">Actions humanitaires</h1>
            <p>Notre action humanitaire s’adresse aux populations en situation de grande précarité. Nous apportons une assistance matérielle et morale aux femmes veuves, aux déplacés internes, aux personnes sinistrées par des catastrophes naturelles ou des conflits, ainsi qu’aux enfants orphelins. À travers des distributions de vivres, de vêtements, de kits d’hygiène et de produits de première nécessité, nous nous efforçons de redonner espoir et dignité à ceux qui traversent des périodes difficiles.</p>
            
        </div>
    </div>

    <div className="flex flex-wrap bg-primary items-center gap-5 p-10 lg:p-20 overflow-x-hidden intersect:motion-preset-slide-up motion-duration-2000">
        <div className="min-w-60 lg:min-w-sm flex-1 flex flex-col text-white">
            <span className="uppercase text-secondary">Transparence</span>
            <h1 className="text-2xl lg:text-4xl my-3">Comment sont utilisés les dons ?</h1>
            <p>Nous sommes fiers de vous informer que la totalité de votre don est utilisée pour soutenir
                notre mission humanitaire au Mali et dans d’autres régions reculées. Nous nous engageons à utiliser
                chaque centime de manière responsable et efficace afin de maximiser l’impact de votre générosité. Nous comprenons
                l’importance de garantir que vos dons sont directement alloués aux initiatives sur le terrain, bénéficiant ainsi aux populations dans le besoin. 
                Par conséquent, nous maintenons nos frais administratifs aussi bas que possible et veillons à ce que chaque ressource soit utilisée de manière 
                stratégique pour répondre aux besoins spécifiques des communautés que nous servons.</p>
        </div>

        <div className="min-w-sm flex-1">
        <Suspense fallback={<div>Loading...</div>}>
        <Chart options={state.options} series={state.series} type="donut" />
    </Suspense>
        </div>
    </div>
    <div className="flex flex-col  justify-center items-center gap-10 p-10 lg:p-20 overflow-x-hidden intersect:motion-preset-slide-up motion-duration-2000">
        <h1 className="text-3xl lg:text-5xl text-center">Vous souhaitez rejoindre notre équipe ?</h1>
        <p className="border-2 p-5 text-center">“L’engagement est ce qui transforme une promesse en réalité.”</p>
        <Link to={"#"} className="btn btn-primary">Devenir Benevole</Link>

    </div>
    <div className="flex flex-wrap px-10 justify-around overflow-x-hidden intersect:motion-preset-slide-up motion-duration-2000">
        <div className="bg-black flex flex-col text-white min-w-60 p-10 flex-1">
            <h1 className="text-3xl font-bold">Donner</h1>
            <p className="my-3">En donnant à ALEGRIA, nous assurons que 100% de votre don est reversé pour les missions en cours.</p>
            <Link className="btn btn-primary" to={"#"}>Donner Maintenant</Link>
        </div>

        <div className="bg-primary flex flex-col text-white min-w-60 p-10 flex-1">
            <h1 className="text-3xl font-bold">Soutenir</h1>
            <p className="my-3">Grâce au parrainage, accompagnez un enfant dans sa vie pour lui permettre l’accès à une alimentation juste, un accès aux soins, à l’éducation jusqu’au monde du travail.</p>
            <Link className="btn btn-secondary" to={"#"}>Prochainement</Link>
        </div>

        <div className="bg-black flex flex-col text-white min-w-60 p-10 flex-1">
            <h1 className="text-3xl font-bold">Rejoindre</h1>
            <p className="my-3">Rejoignez l’aventure ALEGRIA et devenez bénévole !</p>
            <Link className="btn btn-primary" to={"#"}>Rejoindre</Link>
        </div>
    </div>
    </>)
}