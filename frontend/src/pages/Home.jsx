function Home() {
  return (
    <div>

      {/* Hero Section */}
      <section className="bg-blue-700 text-white px-8 py-20 text-center">

        <h1 className="text-5xl font-bold mb-4">
          Welcome to Iganga Dynamic Secondary School
        </h1>

        <p className="text-xl mb-6">
          Providing quality education and shaping future leaders.
        </p>

        <div className="space-x-4">

          <button className="bg-white text-blue-700 px-6 py-3 rounded font-semibold">
            Apply Now
          </button>

          <button className="border border-white px-6 py-3 rounded font-semibold">
            Learn More
          </button>

        </div>

      </section>


      {/* Introduction Section */}
      <section className="px-8 py-12 text-center">

        <h2 className="text-3xl font-bold mb-4">
          About Our School
        </h2>

        <p className="max-w-3xl mx-auto">
          Iganga Dynamic Secondary School is committed to providing
          quality education in a supportive environment where students
          develop academically, socially, and morally.
        </p>

      </section>


      {/* Vision and Mission */}
      <section className="grid md:grid-cols-2 gap-8 px-8 py-12">

        <div className="shadow-lg p-6 rounded">

          <h2 className="text-2xl font-bold mb-3">
            Our Vision
          </h2>

          <p>
            To provide quality education and nurture responsible
            future leaders.
          </p>

        </div>


        <div className="shadow-lg p-6 rounded">

          <h2 className="text-2xl font-bold mb-3">
            Our Mission
          </h2>

          <p>
            To promote academic excellence, discipline, and
            character development among learners.
          </p>

        </div>

      </section>


    </div>
  );
}

export default Home;