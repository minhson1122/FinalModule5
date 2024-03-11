import React, {useEffect, useState} from "react";
import axios from "axios";

export default function ListFlags(){
    const [list, setList] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all?fields=name,flags").then((res) => {
            setList(res.data);
        });
    }, []);

    const filteredList = list.filter((item) =>
        item.name.common.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <h1>ListCountry</h1>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by country name"
            />
            {filteredList.map((item, index) => (
                <tr key={index}>
                    <td scope="row">{index + 1}</td>
                    <td>{item.name.common}</td>
                    <td>
                        <img src={item.flags.svg} style={{ width: "100px" }} alt={item.name.common} />
                    </td>
                </tr>
            ))}
        </>
    );
}