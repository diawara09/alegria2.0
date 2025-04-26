import banner2 from "../Images/04.jpeg";
import boss from "../Images/boss.jpeg";
import segal from "../images/segal.jpeg";
export default function Team() {
  return (
    <>
      <div className="w-full relative max-h-96 overflow-hidden">
        <img src={banner2} className="w-full" />
        <div className="absolute top-0 h-full w-full opacity-80 bg-primary"></div>
        <div className="absolute top-0 h-full w-full flex gap-3 flex-col justify-center items-center">
          <h1 className="font-extrabold text-white text-2xl lg:text-5xl">
            Notre Equipe
          </h1>
        </div>
      </div>

      <div className="flex p-10 gap-20 lg:p-20 flex-col overflow-x-hidden">
        <div className="flex flex-wrap justify-between">
          <h1 className="text-4xl font-bold flex-1 min-w-60">Notre Equipe</h1>
          <p className="flex-2 shrink-0 min-w-60">
            Découvrez l’équipe de bénévoles qui compose HEVA. Grâce à toutes ces
            personnes, nous sommes en capacité de jouer un rôle important pour
            les populations.
          </p>
        </div>

        <div className="flex flex-wrap gap-5">
          <div className="flex intersect:motion-preset-slide-up motion-duration-2000 flex-col min-w-60 max-w-sm shadow-sm">
            <img src={boss} className="w-full" />
            <div className="flex flex-col items-center gap-2.5 p-5 bg-white text-black">
              <h3 className="text-3xl">Adama Samake</h3>
              <p className="text-secondary">Présidente</p>
            </div>
          </div>
          <div className="flex intersect:motion-preset-slide-up motion-duration-2000 flex-col min-w-60 max-w-sm shadow-sm">
            <img src={segal} className="w-full" />
            <div className="flex flex-col items-center gap-2.5 p-5 bg-white text-black">
              <h3 className="text-3xl">Assetou Diakite</h3>
              <p className="text-secondary">Secrétaire Général</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
