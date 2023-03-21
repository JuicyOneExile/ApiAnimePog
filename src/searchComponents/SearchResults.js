import { useParams } from "react-router-dom";

const SearchResults = ({ results }) => {
    const { id } = useParams();

    const result = results.find((r) => r.id === parseInt(id));

    return (
        <div>
            <h1>{result.title}</h1>
            <p>{result.synopsis}</p>
            {/* add more details as needed */}
        </div>
    );
};

export default SearchResults;