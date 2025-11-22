import{
  Hero,
  customerservices,
  footer,
  services,
  popularproducts,
  subscribe,
  specialoffer,
  superquality
}from "./sections";
import Nav from "./components/Nav"


const App=()=>(
  <main className="relative">
    {/*<Nav />*/}
    <section className="xl:padding-1
    wide:padding-r padding-b">
    <Hero/>
    </section>
    <section className="padding"><Popular products/></section>
    <section className="padding"><superquality/></section>
    <section className="padding"><services/></section>
    <section className="padding"><speacial offer/></section>
    <section className="bg-pale-blue 
    padding"><Customer review/></section>
    <section className="padding-x 
    sm:py-32 py-16 w-full "><subscribe/></section>
    <section className="bg-black 
    padding-x padding-t pb-8"><footer/></section>
  </main>
);
export default App;