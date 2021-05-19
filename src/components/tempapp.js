import React, { useEffect, useState } from 'react';
import axios from 'axios'
const Tempapp = () => {
    const [city, setcity] = useState(null)
    const [search, setsearch] = useState("Kudachi")

    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=3f343b19f6110ff72c103d9a1c344276`
            const response = await fetch(url);
            const resJson = await response.json();
            setcity(resJson.main)
        }
        fetchApi()
    }, [search])
    return (
        <>
            <div className="container mt-5 ">
                <div className="row">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6 py-3" id="container">
                        <h2 className="text-danger text-center " id="heading">Weather APP</h2>
                        <input type="search" className="form-control mt-3 text-center"
                            placeholder="Enter City Name"
                            value={search}
                            onChange={(obj) => { setsearch(obj.target.value) }}
                        />
                        {
                            !city ? (
                                <p>No Data Found</p>
                            ) : (
                                <div className="row">
                                    <div className="col  text-center">
                                        <h1> {city.temp}°C</h1>
                                        <h2 className="text-primary mt-2"><i className="fas fa-cloud-sun"></i>{search}</h2>
                                        <p>Max : {city.temp_max}°C <br /> Min : {city.temp_min}°C </p>
                                    </div>
                                </div>
                            )}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Tempapp;