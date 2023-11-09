// @ts-nocheck

import { VendorsRepo } from "./repository";

export async function getCategories(): VendorsRepo {
    const resp = await fetch('https://hb-strapi-production.up.railway.app/api/vendors?populate=*', 
    {
			headers: {
				'Authorization': 'bearer '+process.env.STRAPI_API_KEY,
			}
		});

    let ret = {}
    let data = await resp.json()
    console.log(data)

    data.data.forEach(vendor => {
      let categories = vendor.attributes.categories.data;
      categories.forEach(category => ret[category.attributes.name] = [ ]);
    })

    data.data.forEach(vendor => {
      let categories = vendor.attributes.categories.data;
      categories.forEach(category => {
        let vendor_desc = {};
        vendor_desc["name"] = vendor.attributes.name;
        vendor_desc["image"] = vendor.attributes.primaryImage.data.attributes.formats.thumbnail.url;
        ret[category.attributes.name].push(vendor_desc)
      });
    })
    console.log(ret);
    return VendorsRepo(ret);
}
/*
{
  "data": [
    {
      "id": 1,
      "attributes": {
        "name": "Christmas Decorations",
        "createdAt": "2023-10-21T18:38:09.427Z",
        "updatedAt": "2023-10-21T19:19:37.154Z",
        "publishedAt": "2023-10-21T19:19:37.151Z",
        "vendors": {
          "data": [
            {
              "id": 1,
              "attributes": {
                "name": "Vendor Name",
                "createdAt": "2023-10-21T18:38:39.193Z",
                "updatedAt": "2023-10-21T19:19:33.076Z",
                "publishedAt": "2023-10-21T19:19:33.073Z"
              }
            }
          ]
        }
      }
    },
    {
      "id": 2,
      "attributes": {
        "name": "FOod",
        "createdAt": "2023-10-21T18:45:35.332Z",
        "updatedAt": "2023-10-21T19:19:41.625Z",
        "publishedAt": "2023-10-21T19:19:41.623Z",
        "vendors": {
          "data": [
            {
              "id": 1,
              "attributes": {
                "name": "Vendor Name",
                "createdAt": "2023-10-21T18:38:39.193Z",
                "updatedAt": "2023-10-21T19:19:33.076Z",
                "publishedAt": "2023-10-21T19:19:33.073Z"
              }
            }
          ]
        }
      }
    }
  ],
  "meta": {
    "pagination": {
      "page": 1,
      "pageSize": 25,
      "pageCount": 1,
      "total": 2
    }
  }
}*/

/*
{
    "Christmas Decorations": [
        {
            "name": "Vendor Name",
        }
    ],
    "Food":[
        {
            "name": "Vendor Name",
        }
    ]
}
*/

/*
{
    "Vendor Name": [
        "Chrostmas Decorations",
        "Food"
    ]
}
*/
