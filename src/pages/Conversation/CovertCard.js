import React, {useState} from 'react';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import useNumberFormat from "../../hooks/useNumberFormat";

function CovertCard(props) {

    const formattedNumber = useNumberFormat(props.amount_old);
    const formattedNumber2 = useNumberFormat(props.amount_new);

    return (
        <div className="convert-card">
            <div className="convert-amounts">
                <h1 className="old-amount">{formattedNumber}</h1>
                <div className="divider">
                    <TrendingFlatIcon sx={{width: '50px', height: '40px', color: '#46A358'}}/>
                </div>
                <h1 className="new-amount">{formattedNumber2}</h1>
            </div>
            <div className="convert-content">
                <h1 className="old-currency">{props.old}</h1>
                <div className="divider">
                    <TrendingFlatIcon sx={{width: '50px', height: '40px', color: '#46A358'}}/>
                </div>
                <h1 className="new-currency">{props.new}</h1>
            </div>
        </div>
    );
}

export default CovertCard;