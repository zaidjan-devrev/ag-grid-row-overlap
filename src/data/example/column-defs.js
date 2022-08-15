import { useEffect, useState } from "react"

const Athlete = (params) => {
    const [dummyData, setDummyData] = useState([]) 
    useEffect(() => {
        const a = []
        for (let i = 0; i<1000000; i++) {
            a.push(1)
        }
        setDummyData(a)
    }, [])
    return <div>{params.data.athlete} {dummyData.length}</div>
}

export const columnDefs  = [
    { field: 'country', rowGroup: true, hide: true },
    { field: 'athlete', minWidth: 180, cellRenderer:Athlete  },
    { field: 'age' },
    { field: 'year' },
    { field: 'date', minWidth: 150 },
    { field: 'sport', minWidth: 150 },
    { field: 'gold' },
    { field: 'silver' },
    { field: 'bronze' },
    { field: 'total' },
]

export const defaultColDef = {
    flex: 1,
    minWidth: 100,
}

