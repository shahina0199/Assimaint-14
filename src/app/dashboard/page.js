import {headers} from "next/headers";

async function GetData() {
    const headersList = headers()
    return headersList.get('email')
    
}

import React from 'react';

const page = async() => {
    const x = await GetData()
    return (
        <div>
            {x}
            
        </div>
    );
};

export default page;