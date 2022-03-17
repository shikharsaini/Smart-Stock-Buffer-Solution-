import { getData } from "../../lib/api";
import useHttp from "../../Hooks/use-http";
const Data = () => {
    const { sendRequest, status, data, error } = useHttp(getData, true);
    useEffect(() => {
      sendRequest();
    }, [sendRequest]);
    if (error) {
      return <p className="centered focused">{error}</p>;
    }
  
    if (status === "completed" && (!data || data.length === 0)) {
      return <NoData />;
    }
    console.log(data);
    return (
      <div>
        {data}
      </div>
    );
  };
  export default Data;