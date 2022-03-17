import React from "react";
import { useEffect } from "react";
import useHttp from "../../Hooks/use-https";
import NoDataFound from "../NoData";
import { getTempData } from "../../api/api";
const TempData = () => {
    
    const { sendRequest, status, data, error } = useHttp(getTempData, true);
    useEffect(() => {
        sendRequest();
    }, [sendRequest]);
    if (status === "pending") {
        return (
        <div className="centered">
        </div>
        );
    }
    if (error) {
        return <p className="centered focused">{error}</p>;
    }
    if (status === "completed" && (!data || data.length === 0)) {
        return <NoDataFound />;
    }
    return (
        <div>
            {data}
        </div>
    );
}
export default TempData;