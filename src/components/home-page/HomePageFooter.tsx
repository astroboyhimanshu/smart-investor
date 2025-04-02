const HomePageFooter = () => {
  return (
    <div>
      <footer className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Transform Your Financial Future
          </h2>
          <p className="text-xl max-w-2xl mx-auto">
            Experience the next generation of intelligent investment management
            with Nebula's AI-driven platform.
          </p>
          {/* <button className="bg-white text-purple-900 px-10 py-4 rounded-full text-lg hover:bg-gray-100 transition-all shadow-2xl">
            Join Nebula Today
          </button> */}
          {/* <div className="mt-12 text-sm opacity-70">
            © 2024 Nebula AI Investment Platform. All Rights Reserved.
          </div> */}
        </div>
      </footer>
    </div>
  );
};

export default HomePageFooter;
