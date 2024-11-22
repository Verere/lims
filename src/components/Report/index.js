
"use client"

import { currencyFormat } from "@/utils/currency"
import { MyChart } from "../Chart.js"

const ReportPage=()=>{
    return(
        <>
         <div>
            <label
              htmlFor='search_date'
              className='block text-sm font-medium text-gray-700'
            >
              Filter by Date
            </label>
            <input
              type='date'
              min={new Date().toISOString()}
              id='check_in_date'
              name='bDate'
              className='mt-1 block w-max-content px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              required
            />
          </div>
        <div className="flex space-x-5 sm:flex-col sm:space-y-2 sm:mx-auto sm:items-center sm:text:center">
        <div className="text-center px-3 bg-black text-white py-3 rounded-sm h-[100px] w-[150px] ">
            <p className="text-xs font-bold">Tests done</p>
            <p className="text-lg py-2 font-bold">7</p>
            <p className="text-xs font-bold">+2.5%</p>
        </div>
        <div className="text-center px-3 bg-black text-white py-3 rounded-sm h-[100px] w-[150px]">
            <p className="text-xs font-bold">Test Total</p>
            <p className="text-lg py-2 font-bold">{currencyFormat(89000)}</p>
            <p className="text-xs font-bold">+2.5%</p>
        </div>
        <div className="text-center px-3 bg-black text-white py-3 rounded-sm h-[100px] w-[150px]">
            <p className="text-xs font-bold">Total Payments</p>
            <p className="text-lg py-2 font-bold">{currencyFormat(79000)}</p>
            <p className="text-xs font-bold">+2.5%</p>
        </div>
        <div className="text-center px-3 bg-black text-white py-3 rounded-sm h-[100px] w-[150px]">
            <p className="text-sm font-bold">Credit</p>
            <p className="text-lg py-2 font-bold">{currencyFormat(10000)}</p>
            <p className="text-xs font-bold">+2.5%</p>
        </div>
        </div>
        {/* <MyChart/> */}
        </>
    )
}
export default ReportPage