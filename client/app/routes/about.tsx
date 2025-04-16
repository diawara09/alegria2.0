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
    <div className="flex flex-wrap items-center  gap-5 p-10 lg:p-20 overflow-x-hidden">
        <div className="flex flex-col min-w-sm lg:max-w-1/2">
            <span className="text-secondary uppercase font-light">ALEFRIA - HELP FOR EDUCATION AND VILLAGERS IN AFRICA</span>
            <h3 className="font-bold text-lg lg:text-2xl my-3">Nous découvrir</h3>
            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit laudantium omnis quas eius alias 
                repudiandae eligendi voluptas sed. Pariatur rem tempore nam minima, in sunt? </p>
                <button className="btn btn-primary max-w-1/3 my-3">Voir la video</button>
        </div>
        <div>
        <iframe className="min-w-sm min-h-72" src="https://www.youtube.com/embed/e1IUuncr71E?si=l_xEi9yhSCkwCzmC" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    </div>
    <div className="flex flex-wrap items-center -mt-10 gap-5 p-10 lg:p-20 overflow-x-hidden">
        <div className="flex flex-col min-w-xs flex-1 p-10">
            <img className="max-w-24" src={independence} />
            <h1 className="text-2xl font-bold my-3">Independence</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti qui consequuntur repellat placeat rerum? Tempore, inventore nemo cumque, ullam nam sint quisquam nisi, fuga tenetur quia quo doloremque quas sequi quam? 
                Incidunt quidem quibusdam optio iste quae totam? Sed, quis voluptas cupiditate nisi quos consectetur!</p>
        </div>
        <div className="flex flex-col min-w-xs flex-1 p-10">
            <img className="max-w-24" src={autonomy} />
            <h1 className="text-2xl font-bold my-3">Autonomie</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti qui consequuntur repellat placeat rerum? Tempore, inventore nemo cumque, ullam nam sint quisquam nisi, fuga tenetur quia quo doloremque quas sequi quam? 
                Incidunt quidem quibusdam optio iste quae totam? Sed, quis voluptas cupiditate nisi quos consectetur!</p>
        </div>
        <div className="flex flex-col min-w-xs flex-1 p-10">
            <img className="max-w-24" src={benvole} />
            <h1 className="text-2xl font-bold my-3">Benevoles</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti qui consequuntur repellat placeat rerum? Tempore, inventore nemo cumque, ullam nam sint quisquam nisi, fuga tenetur quia quo doloremque quas sequi quam? 
                Incidunt quidem quibusdam optio iste quae totam? Sed, quis voluptas cupiditate nisi quos consectetur!</p>
            
        </div>
    </div>

    <div className="flex flex-wrap bg-primary items-center gap-5 p-10 lg:p-20 overflow-x-hidden">
        <div className="min-w-sm flex-1 flex flex-col text-white">
            <span className="uppercase text-secondary">Transparence</span>
            <h1 className="text-2xl lg:text-4xl my-3">Comment sont utilisés les dons ?</h1>
            <p>Nous sommes fiers de vous informer que la totalité de votre don est utilisée pour soutenir
                notre mission humanitaire au Sénégal et dans d’autres régions reculées. Nous nous engageons à utiliser
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
    <div className="flex flex-col  justify-center items-center gap-10 p-10 lg:p-20 overflow-x-hidden">
        <h1 className="text-3xl lg:text-5xl">Vous souhaitez rejoindre notre équipe ?</h1>
        <p className="border-2 p-5 text-center">“L’engagement est ce qui transforme une promesse en réalité.”</p>
        <Link to={"#"} className="btn btn-primary">Devenir Benevole</Link>

    </div>
    <div className="flex flex-wrap px-10 justify-around overflow-x-hidden">
        <div className="bg-black flex flex-col text-white min-w-xs p-10 flex-1">
            <h1 className="text-3xl font-bold">Donner</h1>
            <p className="my-3">En donnant à ALEGRIA, nous assurons que 100% de votre don est reversé pour les missions en cours.</p>
            <Link className="btn btn-primary" to={"#"}>Donner Maintenant</Link>
        </div>

        <div className="bg-primary flex flex-col text-white min-w-60 p-10 flex-1">
            <h1 className="text-3xl font-bold">Soutenir</h1>
            <p className="my-3">Grâce au parrainage, accompagnez un enfant dans sa vie pour lui permettre l’accès à une alimentation juste, un accès aux soins, à l’éducation jusqu’au monde du travail.</p>
            <Link className="btn btn-secondary" to={"#"}>Prochainement</Link>
        </div>

        <div className="bg-black flex flex-col text-white min-w-xs p-10 flex-1">
            <h1 className="text-3xl font-bold">Rejoindre</h1>
            <p className="my-3">Rejoignez l’aventure HEVA et devenez bénévole !</p>
            <Link className="btn btn-primary" to={"#"}>Rejoindre</Link>
        </div>
    </div>
    </>)
}