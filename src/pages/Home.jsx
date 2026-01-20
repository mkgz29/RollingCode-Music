import Navbar from "../components/Navbar";
import Songlist from "../components/Songlist";
import SearchForm from "../components/SearchForm";

const Home = () => {
    return (
        <div>
            <Navbar />
            <SearchForm />
            <Songlist />
            
        </div>
    )
}

export default Home;

/* Home, funcion flecha que representa la pantalla de la app, App.jsx renderiza Home.jsx 

Home = pantalla principal */