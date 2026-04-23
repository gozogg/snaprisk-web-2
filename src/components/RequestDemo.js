import { Link } from "react-router-dom";

function RequestDemo({solution = ''}) {
    return (
        <Link to={`/contact?type=demo&solution=${encodeURIComponent(solution)}`} className="w-fit bg-primary text-white px-5 py-2.5 rounded-md font-medium transition-opacity hover:opacity-90">Request Demo</Link>
    );
}

export function RequestDemoLight() {
    return (
        <Link to="/contact?type=demo" className="mt-2 text-xl border-white border-2 px-16 py-2 rounded-xl align-center text-white">Request Demo</Link>
    );
}

export default RequestDemo;