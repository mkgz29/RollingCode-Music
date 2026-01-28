import Navbar from "../components/navbar";
import Songlist from "../components/Songlist";
import SearchForm from "../components/SearchForm";

const Home = () => {
    return (
        <>
            <Navbar />
            
            <div style={{ marginLeft: '0' }} className="ms-lg-0 ps-lg-0">
                <div className="content-wrapper" id="homewrapper" style={{ paddingLeft: '0' }}>
                    <h1>Welcome to RollingCode Music</h1>
                    <SearchForm />
                    
                    <Songlist />
                </div>
            </div>
            <style>{`
                @media (min-width: 992px) {
                #homewrapper {
                margin-left: 250px !important;
                }
                }
            `}</style>
        </>
    )
}

export default Home;

/* Home, funcion flecha que representa la pantalla de la app, App.jsx renderiza Home.jsx 

Home = pantalla principal */