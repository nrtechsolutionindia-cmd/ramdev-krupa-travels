 "use client";

import { useState } from "react";
import { ArrowRight, Phone, MessageCircle, MapPin, ShieldCheck, Snowflake, Users, Clock3, Menu, X, CarFront, Route, Luggage } from "lucide-react";

const phone = "918140948313";
const fleet = [
  {
    name: "Maruti Suzuki Ertiga",
    type: "Family & group travel",
    seats: "6+1 Seater",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=85",
    tag: "POPULAR",
  },
  {
    name: "Swift Dzire",
    type: "Comfortable sedan rides",
    seats: "4+1 Seater",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=85",
    tag: "CITY & OUTSTATION",
  },
  {
    name: "Tempo Traveller",
    type: "Group & family journeys",
    seats: "14 / 17 / 20 Seater",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&q=85",
    tag: "GROUP TRAVEL",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", mobile: "", pickup: "", destination: "", date: "", vehicle: "Any available vehicle", message: "" });

  function submitEnquiry(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const msg = `Hello Ramdev Krupa Travels,%0A%0AI want to enquire about a cab booking.%0AName: ${encodeURIComponent(form.name)}%0AMobile: ${encodeURIComponent(form.mobile)}%0APickup: ${encodeURIComponent(form.pickup)}%0ADestination: ${encodeURIComponent(form.destination)}%0ADate: ${encodeURIComponent(form.date)}%0AVehicle: ${encodeURIComponent(form.vehicle)}%0AMessage: ${encodeURIComponent(form.message)}`;
    window.open(`https://wa.me/${phone}?text=${msg}`, "_blank");
  }

  return (
    <main>
      <div className="topbar"><div className="container topbar-inner"><span>Reliable rides. Thoughtful journeys.</span><a href={`tel:+${phone}`}><Phone size={14}/> +91 81409 48313</a></div></div>
      <header className="header">
        <div className="container nav-wrap">
          <a className="brand" href="#"><span className="brand-mark"><CarFront size={25}/></span><span>RAMDEV KRUPA <b>TRAVELS</b><small>YOUR JOURNEY, OUR PRIORITY</small></span></a>
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X/> : <Menu/>}</button>
          <nav className={menuOpen ? "nav open" : "nav"}>
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a><a href="#fleet" onClick={() => setMenuOpen(false)}>Our Fleet</a><a href="#services" onClick={() => setMenuOpen(false)}>Services</a><a href="#why" onClick={() => setMenuOpen(false)}>Why Choose Us</a><a className="nav-cta" href="#booking" onClick={() => setMenuOpen(false)}>Book a Ride <ArrowRight size={16}/></a>
          </nav>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-shade"/>
        <div className="container hero-content">
          <div className="eyebrow"><span/> RAMDEV KRUPA TRAVELS</div>
          <h1>Every journey<br/><em>deserves a better ride.</em></h1>
          <p>Comfortable rides, dependable service and the right vehicle for every journey. Travel with confidence, wherever the road takes you.</p>
          <div className="hero-actions"><a className="btn btn-red" href="#booking">Book Your Ride <ArrowRight size={18}/></a><a className="btn btn-outline" href={`https://wa.me/${phone}`} target="_blank"><MessageCircle size={18}/> WhatsApp Us</a></div>
          <div className="hero-points"><span><ShieldCheck/> Safe & reliable</span><span><Snowflake/> AC vehicles</span><span><Users/> Family friendly</span></div>
        </div>
        <div className="hero-bottom"><span>LOCAL • OUTSTATION • GROUP TRAVEL</span><span>VADODARA & BEYOND</span></div>
      </section>

      <section className="trust-strip"><div className="container trust-grid"><div><ShieldCheck/><span><b>Safe & Reliable</b><small>Travel with peace of mind</small></span></div><div><Snowflake/><span><b>Comfortable Rides</b><small>AC vehicle options</small></span></div><div><Clock3/><span><b>On-time Service</b><small>Your time matters</small></span></div><div><Users/><span><b>Extra Trip Facility</b><small>Ask us for details</small></span></div></div></section>

      <section className="section fleet-section" id="fleet"><div className="container"><div className="section-head"><div><div className="eyebrow dark"><span/> TRAVEL YOUR WAY</div><h2>Choose your <em>ride.</em></h2></div><p>From everyday travel to outstation adventures and group journeys, choose a vehicle that fits your plans.</p></div><div className="fleet-grid">{fleet.map((car) => <article className="fleet-card" key={car.name}><div className="fleet-image"><img src={car.image} alt={car.name}/><span>{car.tag}</span></div><div className="fleet-info"><div><h3>{car.name}</h3><p>{car.type}</p></div><div className="seat"><Users size={16}/>{car.seats}</div><a href="#booking">Enquire now <ArrowRight size={16}/></a></div></article>)}</div></div></section>

      <section className="services-section section" id="services"><div className="container"><div className="center-head"><div className="eyebrow"><span/> OUR SERVICES</div><h2>Wherever you go,<br/><em>we get you there.</em></h2></div><div className="service-grid"><div className="service-card"><Route/><h3>Local & City Rides</h3><p>Convenient rides for errands, appointments, shopping and everyday travel.</p></div><div className="service-card"><CarFront/><h3>Outstation Travel</h3><p>Plan one-way or round trips for business, family visits and getaways.</p></div><div className="service-card"><Luggage/><h3>Group Journeys</h3><p>Tempo Traveller options for family functions, group tours and occasions.</p></div></div></div></section>

      <section className="why-section section" id="why"><div className="container why-grid"><div className="why-photo"><img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85" alt="Scenic road trip"/><div className="photo-note"><b>Your journey, our priority.</b><span>Reliable • Comfortable • Affordable</span></div></div><div className="why-copy"><div className="eyebrow dark"><span/> THE RAMDEV KRUPA PROMISE</div><h2>Good trips start<br/>with <em>good people.</em></h2><p>We believe every ride should feel comfortable, safe and hassle-free. Tell us where you need to go and we’ll help you find the right vehicle for the journey.</p><ul><li><ShieldCheck/> Safety-minded service</li><li><Snowflake/> Comfortable AC vehicle options</li><li><Users/> Options for individuals, families and groups</li></ul><a className="text-link" href="#booking">Plan your journey <ArrowRight size={17}/></a></div></div></section>

      <section className="booking-section section" id="booking"><div className="container booking-grid"><div className="booking-copy"><div className="eyebrow"><span/> LET'S GET YOU MOVING</div><h2>Where can we<br/><em>take you?</em></h2><p>Share a few trip details. Your enquiry will open in WhatsApp, ready to send to our team.</p><a className="call-card" href={`tel:+${phone}`}><span><Phone/></span><div><small>CALL FOR BOOKINGS</small><b>+91 81409 48313</b></div></a></div><form className="booking-form" onSubmit={submitEnquiry}><h3>Request a trip</h3><p>Fill in your details and we’ll get back to you.</p><div className="form-row"><label>Your name<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Enter your name"/></label><label>Mobile number<input required type="tel" pattern="[0-9+ ]{10,15}" value={form.mobile} onChange={e=>setForm({...form,mobile:e.target.value})} placeholder="Your contact number"/></label></div><div className="form-row"><label>Pickup location<input required value={form.pickup} onChange={e=>setForm({...form,pickup:e.target.value})} placeholder="Pickup city or area"/></label><label>Destination<input required value={form.destination} onChange={e=>setForm({...form,destination:e.target.value})} placeholder="Where to?"/></label></div><div className="form-row"><label>Travel date<input type="date" value={form.date} onChange={e=>setForm({...form,date:e.target.value})}/></label><label>Vehicle<select value={form.vehicle} onChange={e=>setForm({...form,vehicle:e.target.value})}><option>Any available vehicle</option><option>Swift Dzire</option><option>Maruti Suzuki Ertiga</option><option>Tempo Traveller 14 Seater</option><option>Tempo Traveller 17 Seater</option><option>Tempo Traveller 20 Seater</option></select></label></div><label>Additional message<textarea rows={3} value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="One-way / round trip, passengers or other details"/></label><button className="btn btn-red submit-btn" type="submit">Send Enquiry on WhatsApp <ArrowRight size={18}/></button><small className="form-note">Your enquiry is sent to WhatsApp. It is not stored in a website database.</small></form></div></section>

      <footer className="footer"><div className="container footer-main"><a className="brand footer-brand" href="#"><span className="brand-mark"><CarFront size={25}/></span><span>RAMDEV KRUPA <b>TRAVELS</b><small>YOUR JOURNEY, OUR PRIORITY</small></span></a><p>Reliable • Comfortable • Affordable</p><a href={`tel:+${phone}`}><Phone size={16}/> +91 81409 48313</a></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Ramdev Krupa Travels. All rights reserved.</span><span>Local • Outstation • Tempo Traveller</span></div></footer>
      <a className="floating-wa" href={`https://wa.me/${phone}`} target="_blank" aria-label="Chat on WhatsApp"><MessageCircle/></a>
    </main>
  );
}