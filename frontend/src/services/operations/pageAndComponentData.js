import React from 'react'
// import { toast } from "react-hot-toast"
import { apiConnector } from '../apiConnector';
import { catalogData } from '../apis';


// ================ get Catalog Page Data  ================
export const getCatalogPageData = async (categoryId) => {
 
  // const toastId = toast.loading("Loading...");
  let result = [];
  try {
    const response = await apiConnector("GET", catalogData.CATALOGPAGEDATA_API,null,null,
      { categoryId: categoryId, });

    if (!response?.data?.success)
      throw new Error("Could not Fetch Category page data");

    console.log("CATALOG PAGE DATA API RESPONSE............", response)
    result = response?.data?.data;

  }
  catch (error) {
    console.log("CATALOG PAGE DATA API ERROR....", error);
    // toast.error(error.response?.data.message);
    result = error.response?.data.data;
  }
  // toast.dismiss(toastId);
  return result;
}

