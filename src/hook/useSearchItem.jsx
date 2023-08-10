import { useEffect, useState }  from 'react';

export default function useSearchItem(){
    const [searchRes, setSearchRes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/get/allscreen')
            .then((res) => res.json())
            .then((res) => {
                setSearchRes(res.list)
            }
            )

    }, [])

    return {searchRes, setSearchRes}
}