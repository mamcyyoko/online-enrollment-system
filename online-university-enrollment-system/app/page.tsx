import Header from "@/app/ui/header/Header";




const Home = () => {
    return (
        <div className="flex flex-col min-h-screen bg-sky-300">

            <Header />
            <div>

            </div>

            <div className="flex-grow flex flex-col items-center justify-center">

            </div>

            <footer className="bg-gray-800 text-white text-center p-4">
                <p>&copy; 2024 University of Makeni. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;