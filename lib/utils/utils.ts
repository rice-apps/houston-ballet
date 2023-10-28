// @ts-nocheck
import axios from 'axios';

export async function getCategories() {
    const resp = await axios.get('https://hb-strapi-production.up.railway.app/api/categories?populate=*', 
    {
			headers: {
				'Authorization': 'Bearer 72a88bfd96ccee9fd8c9c859394d0c0962c1b5a4e3f68346f61d93020b44383c602c8cd7cd963e0fea40499dec4df50a06bf0157d2dd22393288c08621b1383c7018f8541c0d54ac3dc5b7c5b73227cb764c391e29b6998dd561c77ce1027d857fd0ca0b16c217b2cca37cded8a69ad5e3dfc37309cf7fa021ba70f138f0f725',
			}
		});

    let ret = {}
    
    resp.data.data.forEach(category => {
        ret[category.attributes.name] = [];
        let vendors = category.attributes.vendors.data;
        vendors.forEach(vendor => ret[category.attributes.name].push({"name":vendor.attributes.name}))
    })

    return ret;
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