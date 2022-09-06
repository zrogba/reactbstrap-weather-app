import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../../Api";

//using arrow function create a functiona search
//function onSearchChange to passed to appJS
const Search = ({ onSearchChange }) => {
    //create the search variable using geostate hook, 
    //ceate method [search, setSearch]setSearch to update  that variable setSeacrh is ok 
    //using useStatehook with initial variable of null
    const [search, setSearch] = useState(null);
    //call function to input loaded values
    const loadOptions = (inputValue) => {
        //retunr a new fetch change options to geopoptions 
        return fetch(
            `${GEO_API_URL}/cities?minpopulation=1000000&namePrefix=${inputValue}`, 
            geoApiOptions
        )// remove consolelog to change in format input  
        // return an  options parameter to return  an array of objects with value and labale props
        //data needed to call api lat log, name etc
	.then(response => response.json())
	.then(response =>{
        return {
            options: response.data.map((city) => {
                return {
                    value: `${city.latitude} ${city.longitude}`,
                    label: `${city.name} ${city.countryCode}`,
                }
            
            })
        }
    })
	.catch(err => console.error(err));
    };
     //will retrieve data 
    const handleOnChange = (searchData) => {
        //use setsearch method to update seacr using searchdata
        setSearch(searchData);
        //pass searchData to the onSearchChange 
        onSearchChange(searchData);
    }
    //return the 
    return (
        //using the component asybpaginate to pass the paramemters
        <AsyncPaginate
            placeholder="Search for city"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    )
};
//export default function name
export default Search;