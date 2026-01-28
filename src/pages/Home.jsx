import Navbar from "../components/Navbar";
import Songlist from "../components/Songlist";
import Subscribe from "./Subscribe";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Songlist />
            <h1>Rolling Code Music</h1>
        </div>
    )
}

export default Home;

/* Home, funcion flecha que representa la pantalla de la app, App.jsx renderiza Home.jsx 

Home = pantalla principal */