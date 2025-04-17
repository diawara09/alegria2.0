import banner1 from "../Images/03.jpeg";
import banner2 from "../Images/02.jpeg";
import teamBoss from "../Images/boss.jpeg"
import { Link } from "react-router";

export function Welcome() {
  return (
    <>
      <div
        id="auto-play"
        data-carousel='{ "loadingClassNameNamees": "opacity-0", "isAutoPlay": true, "speed": 10000,"dotsItemClassNamees": "carousel-dot carousel-active:bg-primary" }'
        className="relative w-full"
      >
        <div className="carousel max-h-svh">
          <div className="carousel-body opacity-0 h-full">
            <div className="carousel-slide">
              <div className="bg-base-200/60 flex h-full justify-center relative">
                <img src={banner1} className="w-full z-0" />
                <div className="absolute intersect:motion-opacity-in-0 intersect:motion-translate-y-in-100 p-5 max-w-1/2 lg:p-10 justify-end top-0 h-full lg:h-screen left-0 z-1 flex flex-col gap-2.5">
                  <span className="bg-secondary intersect:motion-opacity-in-0 intersect:motion-translate-y-in-100 text-white font-extrabold text-xl lg:text-5xl motion-delay-[1s] motion-duration-[3s]">
                    This is a Hero Section
                  </span>
                  <p className="bg-secondary intersect:motion-opacity-in-0 intersect:motion-translate-y-in-100 text-white text-sm lg:text-lg motion-delay-[2s] motion-duration-[5s]">
                    {" "}
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Officiis ducimus nisi ea quo sunt aperiam aliquid at dolorum
                    repudiandae placeat!{" "}
                  </p>
                  <div className="flex gap-2">
                    <Link
                      to={"#"}
                      className="btn btn-sm lg:btn-md btn-primary intersect:motion-translate-y-in-100 intersect:motion-opacity-in-0 motion-delay-[3s] motion-duration-[5s]"
                    >
                      Faire un don
                    </Link>
                    <Link
                      to={"#"}
                      className="btn btn-sm lg:btn-md btn-secondary intersect:motion-translate-y-in-100 intersect:motion-opacity-in-0 motion-delay-[3s] motion-duration-[5s]"
                    >
                      Devenir Benevole
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-slide">
              <div className="bg-base-200/60 flex h-full justify-center relative">
                <img src={banner2} className="w-full z-0" />
                <div className="absolute intersect:motion-opacity-in-0 intersect:motion-translate-y-in-100 p-5 max-w-1/2 lg:p-10 justify-end top-0 h-full lg:h-screen left-0 z-1 flex flex-col gap-2.5">
                  <span className="bg-secondary intersect:motion-opacity-in-0 intersect:motion-translate-y-in-100 text-white font-extrabold text-xl lg:text-5xl motion-delay-[1s] motion-duration-[3s]">
                    This is a Hero Section
                  </span>
                  <p className="bg-secondary intersect:motion-opacity-in-0 intersect:motion-translate-y-in-100 text-white text-sm lg:text-lg motion-delay-[2s] motion-duration-[5s]">
                    {" "}
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Officiis ducimus nisi ea quo sunt aperiam aliquid at dolorum
                    repudiandae placeat!{" "}
                  </p>
                  <div className="flex gap-2">
                    <Link
                      to={"#"}
                      className="btn btn-sm lg:btn-md btn-primary intersect:motion-translate-y-in-100 intersect:motion-opacity-in-0 motion-delay-[3s] motion-duration-[5s]"
                    >
                      Faire un don
                    </Link>
                    <Link
                      to={"#"}
                      className="btn btn-sm lg:btn-md btn-secondary intersect:motion-translate-y-in-100 intersect:motion-opacity-in-0 motion-delay-[3s] motion-duration-[5s]"
                    >
                      Devenir Benevole
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-pagination absolute bottom-3 end-10 start-0 flex justify-end gap-3"></div>
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="flex flex-col bg-primary p-12 lg:p-24 min-w-60 flex-1 text-white intersect:motion-preset-slide-up motion-duration-2000">
          <span className="text-3xl my-3">
            "L'education est l'arme la plus puissante pour changer le monde."
          </span>
          <Link to={"#"} className="text-lg text-secondary font-bold">
            Donner maintenant{" "}
            <span className="icon-[tabler--heart] size-4"></span>
          </Link>
        </div>
        <div className="flex flex-col bg-black flex-1 p-12 lg:p-24 min-w-60 text-white intersect:motion-preset-slide-up motion-duration-2000">
          <span className="text-3xl my-3">
            "L'education est l'arme la plus puissante pour changer le monde."
          </span>
          <Link to={"#"} className="text-lg text-secondary font-bold">
            Devenir Benevole{" "}
            <span className="icon-[tabler--user-circle] size-4"></span>
          </Link>
        </div>
        <img src={banner1} className="hidden lg:block flex-2 min-w-60" />
      </div>

      <div className="flex flex-wrap my-10 lg:my-20 w-full overflow-x-hidden intersect:motion-preset-slide-up motion-duration-2000">
        <img src={banner2} className="min-w-60 flex-1" />
        <div className="flex-2 p-10 lg:p-20 text-white font-bold bg-primary min-w-sm">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
          laudantium commodi aliquam animi! Iusto officia corrupti repellat, nam
          iure provident! Sit ullam ipsum eligendi voluptatibus accusantium
          dicta cumque corrupti qui deleniti cupiditate? Lorem ipsum dolor sit,
          amet consectetur adipisicing elit. Inventore suscipit sapiente soluta
          laudantium ullam eius odio praesentium? Consequatur hic soluta veniam
          exercitationem et accusantium quos!
        </div>
      </div>

      <div className="flex flex-col my-10 lg:my-20 w-full overflow-x-hidden intersect:motion-preset-slide-up motion-duration-2000">
        <div className="flex flex-wrap w-full p-10 items-center justify-between">
          <h1 className="text-2xl lg:text-4xl font-extrabold min-w-60">
            Nos actions
          </h1>
          <Link
            to={""}
            className="text-sm text-secondary font-bold flex items-center"
          >
            Voir toutes nos actions{" "}
            <span className="icon-[tabler--arrow-right] size-4"></span>
          </Link>
        </div>

        <div className="p-10 flex flex-wrap gap-2.5 items-center">
          <div className="flex flex-col  min-w-60 max-w-sm grow-0">
            <img src={banner1} className="w-full" />
            <span className="text-primary font-bold text-lg">
              Action Title
            </span>
            <div className="my-2 flex flex-col">
              <span className="text-gray-600 font-bold">$1,320.00</span>
              <div
                className="progress h-2.5 w-full"
                role="progressbar"
                aria-label="75% Progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div className="progress-bar progress-primary w-3/4"></div>
              </div>
              <div className="flex justify-between">
                <span className="text-black font-bold">75% de dons</span>{" "}
                <span className="text-gray-600 font-bold">
                  Objectif: $1,320.00
                </span>
              </div>
              <p className="my-2">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda, illum impedit velit sunt debitis numquam fuga
                quibusdam! Asperiores, ratione hic blanditiis eveniet unde
                excepturi consectetur!{" "}
              </p>
              <div className="flex my-3 justify-between items-center">
                <Link to="/payment" className="btn btn-primary">
                  Donner maintenant
                </Link>
                <span className="icon-[tabler--heart] size-6"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap  my-10 lg:my-20 w-full overflow-x-hidden intersect:motion-preset-slide-up motion-duration-2000">
        <img src={banner1} className="min-w-60 flex-1 lg:min-w-1/2" />
        <div className="flex flex-col p-10 lg:p-20 flex-1 bg-black text-white min-w-60 lg:min-w-md shrink-0">
          <span className="text-secondary">Notre histoire</span>
          <h1 className="my-5 text-3xl lg:text-5xl font-light">
            Pourquoi nous?
          </h1>
          <p>
            Notre association est fondée sur la conviction profonde que chaque
            individu a le droit de vivre dans la dignité et de subvenir à ses
            besoins les plus fondamentaux. Nous croyons en l’importance de
            donner aux communautés les outils nécessaires pour prendre leur
            destin en main et se développer de manière autonome.
          </p>
        </div>
        <div className="flex flex-col p-10 lg:p-20 bg-primary flex-1 text-white min-w-60 lg:min-w-md shrink-0">
          <span className="text-secondary">Faire un don</span>
          <h1 className="my-5 text-3xl lg:text-5xl font-light">
            Pourquoi à ALEGRIA ?
          </h1>
          <p>
            Chez ALEGRIA, nous croyons fermement que chaque don compte et qu’il
            peut faire une réelle différence dans la vie des populations
            reculées en Afrique. En choisissant de faire un don par
            l’intermédiaire de notre association, vous optez pour une approche
            unique et significative de l’aide humanitaire.
          </p>
        </div>
        <img
          src={banner2}
          className="min-w-60 hidden lg:flex flex-1 lg:min-w-1/2"
        />
      </div>

      <div className="flex flex-col my-10 lg:my-20 w-full overflow-x-hidden intersect:motion-preset-slide-up motion-duration-2000">
        <div className="flex flex-wrap w-full p-10 items-center justify-between">
          <h1 className="text-2xl lg:text-4xl font-extrabold min-w-60">
            Notre Equipe
          </h1>
          <Link to={""} className="btn btn-primary">
            Voir toutes notre equipe{" "}
            <span className="icon-[tabler--arrow-right] size-4"></span>
          </Link>
        </div>

        <div
          id="multi-slide"
          data-carousel='{ "loadingClassNamees": "opacity-0","isAutoPlay": true, "speed": 3000 , "slidesQty": { "xs": 1, "lg": 5 },"dotsItemClasses": "carousel-dot carousel-active:bg-primary" }'
          className="relative w-full"
        >
          <div className="carousel">
            <div className="carousel-body  h-full opacity-0">
              <div className="carousel-slide">
                <div className="bg-base-200/50 border border-x-2 border-white flex h-full justify-center relative overflow-hidden">
                  <img src={teamBoss} className="w-full hover:grayscale-0 hover:scale-150 transition-all grayscale-100 z-0"/>
                  <div className="flex flex-col items-center absolute p-3 bottom-0 z-1">
                    <h3 className="text-xl text-white font-bold">Michael Lanjard</h3>
                    <p className="text-secondary">Vice-President</p>
                  </div>
                </div>
              </div>

              <div className="carousel-slide">
                <div className="bg-base-200/50 border border-x-2 border-white flex h-full justify-center relative overflow-hidden">
                  <img src={teamBoss} className="w-full hover:grayscale-0 hover:scale-150 transition-all grayscale-100 z-0"/>
                  <div className="flex flex-col items-center absolute p-3 bottom-0 z-1">
                    <h3 className="text-xl text-white font-bold">Michael Lanjard</h3>
                    <p className="text-secondary">Vice-President</p>
                  </div>
                </div>
              </div>

              <div className="carousel-slide">
                <div className="bg-base-200/50 border border-x-2 border-white flex h-full justify-center relative overflow-hidden">
                  <img src={teamBoss} className="w-full hover:grayscale-0 hover:scale-150 transition-all grayscale-100 z-0"/>
                  <div className="flex flex-col items-center absolute p-3 bottom-0 z-1">
                    <h3 className="text-xl text-white font-bold">Michael Lanjard</h3>
                    <p className="text-secondary">Vice-President</p>
                  </div>
                </div>
              </div>

              <div className="carousel-slide">
                <div className="bg-base-200/50 border border-x-2 border-white flex h-full justify-center relative overflow-hidden">
                  <img src={teamBoss} className="w-full hover:grayscale-0 hover:scale-150 transition-all grayscale-100 z-0"/>
                  <div className="flex flex-col items-center absolute p-3 bottom-0 z-1">
                    <h3 className="text-xl text-white font-bold">Michael Lanjard</h3>
                    <p className="text-secondary">Vice-President</p>
                  </div>
                </div>
              </div>

              <div className="carousel-slide">
                <div className="bg-base-200/50 border border-x-2 border-white flex h-full justify-center relative overflow-hidden">
                  <img src={teamBoss} className="w-full hover:grayscale-0 hover:scale-150 transition-all grayscale-100 z-0"/>
                  <div className="flex flex-col items-center absolute p-3 bottom-0 z-1">
                    <h3 className="text-xl text-white font-bold">Michael Lanjard</h3>
                    <p className="text-secondary">Vice-President</p>
                  </div>
                </div>
              </div>
             
              <div className="carousel-slide">
                <div className="bg-base-200/50 border border-x-2 border-white flex h-full justify-center relative overflow-hidden">
                  <img src={teamBoss} className="w-full hover:grayscale-0 hover:scale-150 transition-all grayscale-100 z-0"/>
                  <div className="flex flex-col items-center absolute p-3 bottom-0 z-1">
                    <h3 className="text-xl text-white font-bold">Michael Lanjard</h3>
                    <p className="text-secondary">Vice-President</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-pagination absolute bottom-3 end-10 start-0 flex justify-end gap-3"></div>
         
        </div>
      </div>
      <div className={`flex flex-wrap p-10 bg-gray-500 mb-0 lg:p-20 mt-10 gap-5 lg:mt-20 w-full overflow-x-hidden intersect:motion-preset-slide-up motion-duration-2000`} >
         
        <div className="flex flex-col bg-black text-white py-24 px-12 flex-1">
          <span className="text-5xl font-extrabold text-white">01</span>
          <h2 className="text-3xl text-secondary my-3">Rendre autonome</h2>
          <p className="font-light text-lg ">Nos programmes visent à répondre aux besoins de première
             nécessité tels que l’accès à l’eau potable, la sécurité alimentaire, la santé, l’éducation et l’emploi. Nous adoptons une approche globale qui aborde ces besoins de manière interconnectée, afin de garantir des résultats durables.</p>
        </div>

        <div className="flex flex-col bg-primary text-white py-24 px-12 flex-1">
          <span className="text-5xl font-extrabold text-white">02</span>
          <h2 className="text-3xl text-secondary my-3">Zones reculées</h2>
          <p className="font-light text-lg ">Les zones reculées sont souvent les plus touchées par la pauvreté, les maladies, le manque d’accès à l’eau potable, à l’éducation et à d’autres besoins fondamentaux. Les populations vivant dans ces régions sont confrontées à des défis majeurs qui entravent leur développement et leur bien-être.</p>
        </div>

        <div className="flex flex-col bg-secondary text-white py-24 px-12 flex-1">
          <span className="text-5xl font-extrabold text-white">03</span>
          <h2 className="text-3xl text-primary my-3">Suivi</h2>
          <p className="font-light text-lg ">Nous réalisons des évaluations régulières pour mesurer l’impact de nos actions et identifier les domaines qui nécessitent des ajustements ou des améliorations. Ces évaluations nous permettent de recueillir des données objectives sur les progrès réalisés, les défis rencontrés et les leçons apprises. Nous utilisons ces informations pour orienter nos futures interventions et maximiser notre efficacité.</p>
        </div>

      </div>

      <div className="flex flex-wrap bg-primary justify-between text-white p-10 lg:my-20 w-full overflow-x-hidden intersect:motion-preset-slide-up motion-duration-2000">
        <div className="flex">
        <span className="icon-[tabler--phone] size-8"></span>
        <div className="flex flex-col mx-2 gap-2.5">
          <h1 className="text-xl lg:text-3xl font-extralight">Contactez nous! +223 66 99 600 550</h1>
          <p className="font-extralight mb-5 lg:mb-0"> Association basée à Montauban (82000) </p>
        </div>
        </div>
       

        <div className="flex flex-col gap-2.5 items-end">
          <span className="font-extralight"> Suivez nous</span>
          <div className="flex h-5 gap-4 text-white">
            <a href="#" className="link text-white" aria-label="Github Link">
              <span className="icon-[tabler--brand-facebook] size-5"></span>
            </a>
            <a href="#" className="link text-white" aria-label="Facebook Link">
              <span className="icon-[tabler--brand-linkedin] size-5"></span>
            </a>
            <a href="#" className="link text-white" aria-label="X Link">
              <span className="icon-[tabler--brand-youtube] size-5"></span>
            </a>
            <a href="#" className="link text-white" aria-label="Google Link">
              <span className="icon-[tabler--brand-instagram] size-5"></span>
            </a>
          </div>
        </div>
        

      </div>
    </>
  );
}
