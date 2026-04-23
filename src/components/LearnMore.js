import { Link } from "react-router-dom";

function LearnMore({solution = ""}) {
    return (
        <Link to={`/contact?type=solutions&solution=${encodeURIComponent(solution)}`} className="w-fit bg-primary text-white px-5 py-2.5 rounded-md font-medium transition-opacity hover:opacity-90">Learn More</Link>
    );
}



export default LearnMore;