import React from "react";
import { useId } from "react";



function InputBox({

    // all these are variables which user gets to decide.
    // or the variables which will change the state of the website and thus are needed to keep track of the change.
    label,
    className = "",
    amount,
    onAmountChange, //so that we can call it whenever there is a change in the amount entered by user.
    onCurrencyChange, // this function is called whenever you change the currency to which you want to convert or from which you want to convert.
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false

}) {

    const amountInputId = useId()

    return (
        <div className={`bg-white p-3 rounded-lg 
        text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black mb-2 inline-block">
                    {label}
                </label>

                <input
                    id={amountInputId}
                    type="number"
                    className="outline-none w-48 bg-gray-200 rounded-lg px-2 py-1.5 text-black "
                    placeholder="Amount"
                    value={amount}
                    disabled={amountDisable}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />

            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">

                <p className="text-black mb-2 w-full">
                    Currency Type
                </p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-200 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}>

                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency.toUpperCase()}
                        </option>
                    ))}
                </select>

            </div>
        </div>
    )
}

export default InputBox;