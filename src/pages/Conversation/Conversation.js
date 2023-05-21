import React, {useEffect, useRef, useState} from 'react';
import getConversionsService from "../../services/getConversions.service";
import {Button, FormControl, InputLabel, MenuItem, Select, Skeleton, TextField} from "@mui/material";
import CovertCard from "./CovertCard";
import useValidation from "../../hooks/useValidation";
import Error from "../../components/Error";
import useSpaceRemove from "../../hooks/useSpaceRemove";

function Conversation(props) {

    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(true);
    const [have, setHave] = useState('USD');
    const [want, setWant] = useState('UAH');
    const [err, setErr] = useState(false);
    const [errContent, setErrContent] = useState();
    const [amount, setAmount] = useState('100');
    const isAmountValidate = useValidation(amount);
    const newAmount = useSpaceRemove(amount);

    function handleHaveChange(e) {
        setHave(e.target.value);
    }

    function handleWantChange(e) {
        setWant(e.target.value);
    }

    function handleAmountChange(e) {
        setAmount(e.target.value);
    }

    function processError(status, reason) {
        setLoading(false);
        setErr(true);
        setErrContent({
            status: status,
            reason: reason
        });
    }

    function handleSwap() {
        setHave(want);
        setWant(have);
    }

    function convert(extraAmount) {
        if (extraAmount === undefined) {
            getConversionsService.getConversions(have, want, amount)
                .then(res => {
                    if (!res.data) return;
                    setLoading(false);
                    setResult([res.data]);
                })
                .catch(error => processError(error.code, error.message));
        } else {
            getConversionsService.getConversions(have, want, extraAmount)
                .then(res => {
                    if (!res.data) return;
                    setLoading(false);
                    setResult([res.data]);
                })
                .catch(error => processError(error.code, error.message));
        }
    }

    function handleConvert(e) {
        e.preventDefault();
        setErr(false);
        setLoading(true);
        if (!isAmountValidate) return processError('404', 'You have not provided amount');
        if (Number(newAmount) === 0 || !Number(newAmount)) return processError('404', 'Your amount is 0');
        convert(newAmount);
    }

    useEffect(() => {
        convert();
        setAmount('');
    }, []);

    return (
        <div className="conversation">
            <div className="conversation-container">
                <h1 className="conversation-title">Conversions</h1>
                <form action="#" className="conversation-form">
                    <div className="form-controls">
                        <FormControl>
                            <InputLabel id="demo-simple-select-label">Have</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={have}
                                label="Have"
                                onChange={handleHaveChange}
                            >
                                <MenuItem value="USD">USD</MenuItem>
                                <MenuItem value="UAH">UAH</MenuItem>
                                <MenuItem value="EUR">EUR</MenuItem>
                            </Select>
                        </FormControl>
                        <Button variant="contained" onClick={handleSwap} sx={{marginTop: '30px'}}>Swap</Button>
                        <FormControl>
                            <InputLabel id="demo-simple-select-label">Want</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={want}
                                label="Want"
                                onChange={handleWantChange}
                            >
                                <MenuItem value="USD">USD</MenuItem>
                                <MenuItem value="UAH">UAH</MenuItem>
                                <MenuItem value="EUR">EUR</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <TextField id="standard-basic" label="Amount" variant="standard" onChange={handleAmountChange}
                               sx={{marginTop: '20px'}}/>
                    <Button variant="contained" onClick={handleConvert} sx={{marginTop: '30px'}}>Convert</Button>
                </form>
                {loading ?
                    <div className="result">
                        <Skeleton height={300} width={400}/>
                    </div>
                    :
                    err ? <Error status={errContent.status} reason={errContent.reason}/> :
                        <div className="result">
                            {result.map(item =>
                                <CovertCard
                                    amount_new={Math.round(item.new_amount)}
                                    amount_old={Math.round(item.old_amount)}
                                    new={item.new_currency}
                                    old={item.old_currency}
                                />
                            )}
                        </div>
                }
            </div>
        </div>
    );
}

export default Conversation;