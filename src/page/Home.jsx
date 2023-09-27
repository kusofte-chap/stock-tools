// import React from 'react'

import { useEffect } from "react";
import request from "../api/request";

export default function Home() {
  useEffect(() => {
    request.get(
      `/income-statement/MSFT?limit=30&apikey=${import.meta.env.VITE_API_KEY}`
    ).then(rst=>{
        console.log('rst:',rst)
    })
  }, []);

  return <div>home</div>;
}
