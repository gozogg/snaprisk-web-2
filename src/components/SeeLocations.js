import { Link } from "react-router-dom";

function SeeLocations() {
    return (
        <Link to="/contact" className="mt-2 text-xl md:text-base border-white border-2 px-4 py-2 rounded-md align-center bg-primary text-white">See Locations</Link>
    );
}

export function SeeLocationsLight() {
    return (
        <Link to="/contact" className="mt-2 text-xl border-white border-2 px-16 py-2 rounded-xl align-center text-white">See Locations</Link>
    );
}

export default SeeLocations;