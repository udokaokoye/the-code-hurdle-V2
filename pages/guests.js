import GuestCard from "../Components/GuestCard";
import Footer from "../Components/Footer";
import GenericShowcase from "../Components/GenericShowcase";
import Navigation from "../Components/Navigation";
import React from "react";

function guests() {
  const demoGuests = [
    {
      name: "Nyamake Annor",
      title: "Software Developer",
      company: "Annonymous",
    },
    {
      name: "Uma Abu",
      title: "Software Developer",
      company: "Microsoft",
    },
    {
      name: "Eric Duran",
      title: "Senior Software Developer",
      company: "Google",
    },
  ];
  return (
    <div>
      <Navigation active={"Guests"} />
      <GenericShowcase page={"Guests"} />
      <div className="guestsConatiner">
        {demoGuests.map((guest) => (<GuestCard guest={guest} />))}
      </div>
      <Footer />
    </div>
  );
}

export default guests;
