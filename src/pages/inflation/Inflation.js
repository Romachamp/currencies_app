import React, {useEffect, useState} from 'react';
import getInflationService from "../../services/getInflation.service";
import {Button, FormControl, InputLabel, MenuItem, Select, Skeleton} from "@mui/material";
import {Info} from "@mui/icons-material";
import InflationCard from "./InflationCard";
import useLocalStorage from "../../hooks/useLocalStorage";
import useNumberFormat from "../../hooks/useNumberFormat";

function Inflation(props) {

    const [result, setResult] = useState();
    const [loading, setLoading] = useState(true);
    const [country, setCountry] = useState('United States');
    const [biggest, setBiggest] = useLocalStorage('biggestNumberInflation', '');

    function makeReq(country) {
        getInflationService.getInflation(country).then(res => {
            if (res.data) {
                setLoading(false);
                setResult(res.data);
                setBiggest((prevState) => {
                    if (!prevState) return res.data[0].yearly_rate_pct;
                    if (prevState === res.data[0].yearly_rate_pct) return prevState;
                    if (Number(prevState) < Number(res.data[0].yearly_rate_pct)) return res.data[0].yearly_rate_pct;
                    return prevState;
                });
            }
        });
    }

    function handleCountryChange(e) {
        setCountry(e.target.value);
    }

    useEffect(() => {
        setLoading(true);
        makeReq(country);
    }, [country]);

    return (
        <div className="inflation">
            <form action="#" className="inflation-form">
                <FormControl>
                    <InputLabel id="demo-simple-select-label">Country</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={country}
                        label="Country"
                        onChange={handleCountryChange}
                    >
                        <MenuItem value="United States">USA</MenuItem>
                        <MenuItem value="Great Britain">UK</MenuItem>
                        <MenuItem value="France">France</MenuItem>
                        <MenuItem value="Spain">Spain</MenuItem>
                        <MenuItem value="Germany">Germany</MenuItem>
                        <MenuItem value="Poland">Poland</MenuItem>
                        <MenuItem value="Israel">Israel</MenuItem>
                        <MenuItem value="Sweden">Sweden</MenuItem>
                    </Select>
                </FormControl>
                <h1 className="biggest-inflation">The Biggest yearly: {useNumberFormat(biggest)}</h1>
                <div className="response">
                    <p>
                        {loading ? <Skeleton height={400} width={300}/>
                            : result?.map(item =>
                            <InflationCard
                                type={item.type}
                                country={item.country}
                                month={item.monthly_rate_pct}
                                year={item.yearly_rate_pct}
                                period={item.period}
                            />
                        )}
                    </p>
                </div>
            </form>
        </div>
    );
}

export default Inflation;