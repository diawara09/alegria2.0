import banner2 from "../Images/04.jpeg";
export default function Contact() {
  return (
    <>
      <div className="w-full relative max-h-96 overflow-hidden">
        <img src={banner2} className="w-full" />
        <div className="absolute top-0 h-full w-full opacity-80 bg-primary"></div>
        <div className="absolute top-0 h-full w-full flex gap-3 flex-col justify-center items-center">
          <h1 className="font-extrabold text-white text-2xl lg:text-5xl">
            Contactez Nous
          </h1>
          <p className="font-extrabold uppercase text-white text-ld">
            ECHANGEONS ENSEMBLE
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row p-10 gap-10 justify-between bg-black text-white lg:p-20">
        <div className="flex flex-col gap-10 min-w-60">
          <span className="icon-[tabler--phone] size-14"></span>
          <h1 className="text-2xl lg:text-4xl">Telephone</h1>
          <p>+223 77 00 45 45</p>
        </div>
        <div className="flex flex-col gap-10 min-w-60">
          <span className="icon-[tabler--mail] size-14"></span>
          <h1 className="text-2xl lg:text-4xl">Email</h1>
          <p>test@example.com</p>
        </div>

        <div className="flex flex-col gap-10 min-w-60">
          <span className="icon-[tabler--send] size-14"></span>
          <h1 className="text-2xl lg:text-4xl">Location</h1>
          <p>Bamako, Mali</p>
        </div>
      </div>

      <div className="flex flex-col gap-10 justify-center p-10 lg:p-20 overflow-x-hidden">
        <div className="flex flex-col text-center">
          <h1 className="text-4xl text-black font-bold">Ecrivez un mot</h1>
          <p>Nous reviendrons vers vous</p>
        </div>
        <form className="flex flex-col gap-2.5" action="">
          <input
            type="text"
            placeholder="Votre nom et prenom*"
            className="input"
          />
          <input type="email" placeholder="email*" className="input" />
          <input type="text" placeholder="subject*" className="input" />
          <div className="textarea-floating">
            <textarea
              className="textarea"
              placeholder="Hello!!!"
              id="textareaFloating"
            ></textarea>
            <label
              className="textarea-floating-label"
              htmlFor="textareaFloating"
            >
              Message*
            </label>
          </div>

          <button className="btn btn-primary uppercase">Envoyer</button>
        </form>
      </div>
    </>
  );
}
