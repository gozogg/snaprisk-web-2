import { ContactButtonLight } from "./ContactButton";
import { RequestDemoLight} from "./RequestDemo";
import {SeeLocationsLight} from "./SeeLocations";
import { Link } from "react-router-dom";

function NextSteps() {
  return (
    <section className="py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-evenly gap-4 px-6 md:flex-row md:gap-6 lg:gap-10">
        <ContactButtonLight />
        <RequestDemoLight />
        <SeeLocationsLight />
      </div>
      <div className="mx-auto flex flex-col items-center px-6 md:flex-row justify-center mt-6">
        <Link to="https://www.linkedin.com/company/snaprisk" className="mt-2 text-2xl px-4 py-2  align-center text-white"><i class="fa-brands fa-linkedin"></i></Link>
        <Link to="mailto:contact@snaprisk.com" className="mt-2 text-2xl px-4 py-2  align-center text-white"><i class="fa-regular fa-envelope"></i></Link>
        <Link to="tel:817-608-7818" className="mt-2 text-2xl px-4 py-2  align-center text-white"><i class="fa-solid fa-phone"></i></Link>
      </div>
    </section>
  );
}

export default NextSteps;