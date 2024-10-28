import { ChangeEvent } from "react"

interface inputFieldType  {
    label : string,
    inpType : string,
    inpId : string,
    inpName : string,
    inpPlaceholder : string,
    onChange : (e:ChangeEvent<HTMLInputElement>) => void
}

export const Inputfield = ({label,inpType,inpId,inpName,inpPlaceholder,onChange}:inputFieldType)=>{
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700">{label}</label>
            <input type={inpType} id={inpId} name={inpName} onChange={onChange} className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" placeholder={inpPlaceholder}></input>
        </div>
    )
}