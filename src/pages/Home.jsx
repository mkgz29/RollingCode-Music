import Navbar from "../components/navbar";
import Songlist from "../components/Songlist";

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