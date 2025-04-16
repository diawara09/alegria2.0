import { Link } from "react-router"
import logo from "../Images/logo.jpeg"

export default function Navbar(){
    return(
       
    <nav className="navbar sticky top-0 bg-base-100 z-1 shadow-base-300/20 shadow-sm">
        <div className="w-full md:flex md:items-center md:gap-2">
          <div className="flex items-center justify-between">
            <div className="navbar-start items-center justify-between max-md:w-full">
              <Link className="link text-base-content link-neutral text-xl font-bold no-underline" to="/">
                <img src={logo} className="max-w-32" />
              </Link>
              <div className="md:hidden">
                <button type="button" className="collapse-toggle btn btn-outline btn-secondary btn-sm btn-square" data-collapse="#navbar-collapse" aria-controls="navbar-collapse" aria-label="Toggle navigation" >
                  <span className="icon-[tabler--menu-2] collapse-open:hidden size-6"></span>
                  <span className="icon-[tabler--x] collapse-open:block hidden size-6"></span>
                </button>
              </div>
            </div>
          </div>
          <div id="navbar-collapse" className="md:navbar-end collapse hidden grow basis-full overflow-hidden transition-[height] duration-300 max-md:w-full" >
            <ul className="menu md:menu-horizontal gap-2 p-0 text-base max-md:mt-2">
              <li><Link to="/">Accueil</Link></li>
              <li className="dropdown relative inline-flex [--auto-close:inside] [--offset:8] [--placement:bottom-end]">
                <button id="dropdown-link" type="button" className="dropdown-toggle dropdown-open:bg-base-content/10 dropdown-open:text-base-content" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown" >
                 Nous Decouvrir
                  <span className="icon-[tabler--chevron-down] dropdown-open:rotate-180 size-4"></span>
                </button>
                <ul className="dropdown-menu dropdown-open:opacity-100 hidden" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-link" >
                <li><a className="dropdown-item" href="#">A Propos de Nous</a></li>
                  <li><a className="dropdown-item" href="#">Notre Equipe</a></li>
                </ul>
              </li>
              <li><a href="#">Contact</a></li>
              <li><Link to="/payment" className="btn btn-primary"> Faire un don </Link></li>
              <li><a href="#" className="btn btn-secondary"> Devenir Benevole </a></li>
            </ul>
          </div>
        </div>
      </nav>
      )
}