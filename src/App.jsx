import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Heroes from "./components/Heroes"
import Photography from "./components/Photography"
import Standout from "./components/Standout"
import Testimonials from "./components/Testimonials"
import Transform from "./components/Transform"


const App = () => (
  <div className="relative">
      <Hero />
      <Transform />
      <Standout />
      <Photography />
      <Testimonials />
      <Heroes />
      <Footer />
  </div>
)

export default App
