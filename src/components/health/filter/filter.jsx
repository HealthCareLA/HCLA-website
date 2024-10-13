import React, { useState, useEffect } from 'react';
import axios from 'axios'; // For making HTTP requests

const HealthFilter = (block) => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };

  const { attribute1, attribute2, attribute3 } = block;

  useEffect(() => {
    const fetchItems = async () => {
      try {
        let window_href = window.location.href;

        // if (window_href.indexOf("app.cloudcannon.com") > -1 || window_href.indexOf("127.0.0.1") > -1 || window.location.href.indexOf('editor=visual') > -1) {
          // Sample data for local or cloudcannon
          setItems([
            {
              "id": 3688,
              "title": "HEALTH CARE - 1",
              "fax": "(818) 241-3627",
              "tel": "(818) 241-4331",
              "street_address": "544 N GLENDALE AVE # A",
              "city": "GLENDALE",
              "state": "CA",
              "zip": "91206-3311",
              "contact_email": null,
              "website": null,
              "lat": 34.1527251,
              "lng": -118.2117257,
              "createdAt": "2024-07-02T10:36:00.869Z",
              "updatedAt": "2024-07-02T10:36:00.869Z",
              "publishedAt": "2024-07-02T10:38:28.063Z",
              "hours": [
                {
                  "id": 23624,
                  "day": "Saturday",
                  "time": "09:00 AM - 05:00 PM",
                  "closed_message": null
                },
                {
                  "id": 23625,
                  "day": "Sunday",
                  "time": "09:00 AM - 05:00 PM",
                  "closed_message": null
                }
              ],
              "clients": {
                "data": [
                  {
                    "id": 1,
                    "attributes": {
                      "title": "Adventist Health Care Network, Inc.",
                      "content": "<p>P.O Box 7020-07<br>Tarzana, CA, 91357</p>",
                      "hide": null,
                      "Website": "https://adventisthealth.org/adventist-health-care-network-inc/",
                      "createdAt": "2021-09-27T12:54:41.396Z",
                      "updatedAt": "2024-02-21T17:15:17.586Z",
                      "publishedAt": "2021-09-27T12:54:44.754Z"
                    }
                  },
                  {
                    "id": 8,
                    "attributes": {
                      "title": "Family Care Specialists IPA",
                      "content": "<p>PO Box 570518<br>Tarzana, CA, 91357</p><p>&nbsp;</p><div className=\"raw-html-embed\"><img src=\"https://site.medpointmanagement.com/uploads/ncqa_badge_5e00a5c3a8.png\" style=\"max-width:100px;margin:auto;\"></div>",
                      "hide": null,
                      "Website": null,
                      "createdAt": "2021-09-27T12:58:26.001Z",
                      "updatedAt": "2023-07-13T08:37:59.183Z",
                      "publishedAt": "2021-09-27T12:58:27.774Z"
                    }
                  }
                ]
              }
            },
            {
              "id": 3689,
              "title": "HEALTH CARE - 2",
              "fax": "(818) 249-9420",
              "tel": "(818) 249-9454",
              "street_address": "1975 VERDUGO BLVD # A",
              "city": "LA CANADA FLINTRIDGE",
              "state": "CA",
              "zip": "91011-3024",
              "contact_email": null,
              "website": null,
              "lat": 34.2053662,
              "lng": -118.2199719,
              "createdAt": "2024-07-02T10:36:00.984Z",
              "updatedAt": "2024-07-02T10:36:00.984Z",
              "publishedAt": "2024-07-02T10:38:28.063Z",
              "hours": [
                {
                  "id": 23626,
                  "day": "Monday",
                  "time": "08:00 AM - 08:00 PM",
                  "closed_message": null
                },
                {
                  "id": 23632,
                  "day": "Sunday",
                  "time": "09:00 AM - 05:00 PM",
                  "closed_message": null
                }
              ],
              "clients": {
                "data": [
                  {
                    "id": 1,
                    "attributes": {
                      "title": "Adventist Health Care Network, Inc.",
                      "content": "<p>P.O Box 7020-07<br>Tarzana, CA, 91357</p>",
                      "hide": null,
                      "Website": "https://adventisthealth.org/adventist-health-care-network-inc/",
                      "createdAt": "2021-09-27T12:54:41.396Z",
                      "updatedAt": "2024-02-21T17:15:17.586Z",
                      "publishedAt": "2021-09-27T12:54:44.754Z"
                    }
                  },
                  {
                    "id": 8,
                    "attributes": {
                      "title": "Family Care Specialists IPA",
                      "content": "<p>PO Box 570518<br>Tarzana, CA, 91357</p><p>&nbsp;</p><div className=\"raw-html-embed\"><img src=\"https://site.medpointmanagement.com/uploads/ncqa_badge_5e00a5c3a8.png\" style=\"max-width:100px;margin:auto;\"></div>",
                      "hide": null,
                      "Website": null,
                      "createdAt": "2021-09-27T12:58:26.001Z",
                      "updatedAt": "2023-07-13T08:37:59.183Z",
                      "publishedAt": "2021-09-27T12:58:27.774Z"
                    }
                  }
                ]
              }
            },
            {
              "id": 3690,
              "title": "HEALTH CARE - 3",
              "fax": "(805) 955-7001",
              "tel": "(805) 955-7000",
              "street_address": "301 SCIENCE DR # 150",
              "city": "MOORPARK",
              "state": "CA",
              "zip": "93021-2097",
              "contact_email": null,
              "website": null,
              "lat": 34.2942772,
              "lng": -118.8829816,
              "createdAt": "2024-07-02T10:36:01.038Z",
              "updatedAt": "2024-07-02T10:36:01.038Z",
              "publishedAt": "2024-07-02T10:38:28.063Z",
              "hours": [
                {
                  "id": 23633,
                  "day": "Monday",
                  "time": "08:00 AM - 08:00 PM",
                  "closed_message": null
                },
                {
                  "id": 23639,
                  "day": "Sunday",
                  "time": "09:00 AM - 02:00 PM",
                  "closed_message": null
                }
              ],
              "clients": {
                "data": [
                  {
                    "id": 1,
                    "attributes": {
                      "title": "Adventist Health Care Network, Inc.",
                      "content": "<p>P.O Box 7020-07<br>Tarzana, CA, 91357</p>",
                      "hide": null,
                      "Website": "https://adventisthealth.org/adventist-health-care-network-inc/",
                      "createdAt": "2021-09-27T12:54:41.396Z",
                      "updatedAt": "2024-02-21T17:15:17.586Z",
                      "publishedAt": "2021-09-27T12:54:44.754Z"
                    }
                  },
                  {
                    "id": 8,
                    "attributes": {
                      "title": "Family Care Specialists IPA",
                      "content": "<p>PO Box 570518<br>Tarzana, CA, 91357</p><p>&nbsp;</p><div className=\"raw-html-embed\"><img src=\"https://site.medpointmanagement.com/uploads/ncqa_badge_5e00a5c3a8.png\" style=\"max-width:100px;margin:auto;\"></div>",
                      "hide": null,
                      "Website": null,
                      "createdAt": "2021-09-27T12:58:26.001Z",
                      "updatedAt": "2023-07-13T08:37:59.183Z",
                      "publishedAt": "2021-09-27T12:58:27.774Z"
                    }
                  }
                ]
              }
            },
            {
              "id": 3691,
              "title": "HEALTH CARE - 4",
              "fax": "(805) 933-1138",
              "tel": "(805) 933-1122",
              "street_address": "250 W HARVARD BLVD # A",
              "city": "SANTA PAULA",
              "state": "CA",
              "zip": "93060-3200",
              "contact_email": null,
              "website": null,
              "lat": 34.345476,
              "lng": -119.065128,
              "createdAt": "2024-07-02T10:36:01.168Z",
              "updatedAt": "2024-07-02T10:36:01.168Z",
              "publishedAt": "2024-07-02T10:38:28.063Z",
              "hours": [
                {
                  "id": 23640,
                  "day": "Monday",
                  "time": "08:00 AM - 08:00 PM",
                  "closed_message": null
                },
                {
                  "id": 23645,
                  "day": "Sunday",
                  "time": "09:00 AM - 02:00 PM",
                  "closed_message": null
                }
              ],
              "clients": {
                "data": [
                  {
                    "id": 1,
                    "attributes": {
                      "title": "Adventist Health Care Network, Inc.",
                      "content": "<p>P.O Box 7020-07<br>Tarzana, CA, 91357</p>",
                      "hide": null,
                      "Website": "https://adventisthealth.org/adventist-health-care-network-inc/",
                      "createdAt": "2021-09-27T12:54:41.396Z",
                      "updatedAt": "2024-02-21T17:15:17.586Z",
                      "publishedAt": "2021-09-27T12:54:44.754Z"
                    }
                  },
                  {
                    "id": 8,
                    "attributes": {
                      "title": "Family Care Specialists IPA",
                      "content": "<p>PO Box 570518<br>Tarzana, CA, 91357</p><p>&nbsp;</p><div className=\"raw-html-embed\"><img src=\"https://site.medpointmanagement.com/uploads/ncqa_badge_5e00a5c3a8.png\" style=\"max-width:100px;margin:auto;\"></div>",
                      "hide": null,
                      "Website": null,
                      "createdAt": "2021-09-27T12:58:26.001Z",
                      "updatedAt": "2023-07-13T08:37:59.183Z",
                      "publishedAt": "2021-09-27T12:58:27.774Z"
                    }
                  }
                ]
              }
            }
          ]);
        // } else {
        //   //
        //   const response = await axios.get('https://mpm-strapi.onrender.com/api/urgent-care-items?filters[clients][id][$in]=10');
        //   setItems(response.data.data || response.data); // Adjust based on API response structure
        // }
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch items');
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredItems = items.filter(item =>
    item.street_address.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.zip.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatAddress = (item) => {
    let address = item.street_address || '';
    if (item.city) address += `, ${item.city}`;
    if (item.state) address += `, ${item.state}`;
    if (item.zip) address += ` ${item.zip}`;
    return address;
  };

  if (loading) return
  (
    <div style={{ minHeight: '300px' }}>
      <p>Loading...</p>
    </div>
  );
  if (error) return
  (
    <div style={{ minHeight: '300px' }}>
      <p>{error}</p>
    </div>
  );

  const styles = {
    searchBox: {
      maxWidth: '661px',
      height: '50px',
      width: '100%',
      padding: '5px 50px',
      fontSize: '18px',
      fontWeight: '400',
      outline: 'none',
      border: isFocused ? '1px solid #B3E1F2' : '1px solid #B3E1F2',
      boxShadow: isFocused ? '0 0 10px #719ECE' : 'none',
    },
    searchBoxIcon: {
      height: '50px',
      position: 'absolute',
      left: '45px',
      width: '20px',
    },
    centerItem: {
      display: 'flex',
      flexDirection: 'row',
      marginBottom: '30px',
      backgroundColor: '#FFF',
      padding: '20px',
      borderRadius: '10px',
      width: '100%',
    },
    centerItemImg: {
      marginBottom: '20px',
      width: '160px',
      height: '160px',
      borderRadius: '50%',
      objectFit: 'cover',
    },
    centerItemTitle: {
      fontSize: '34px',
      fontWeight: '500',
    },
    centerItemAddress: {
      fontSize: '20px',
      fontWeight: '400',
      marginTop: '20px',
    },
    centerItemExtraInfo2: {
      fontSize: '20px',
      fontWeight: '400',
      marginTop: '20px',
    },
    item_highlight_color: {
      color: '#34C565',
      fontWeight: '400',
    },
  };

  return (
    <section>
      <div className="bg-trans-blue relative py-[50px] md:py-[120px] lg:pt-0 min-h-[550px]" suppressHydrationWarning>
        <div className="absolute left-0 w-full top-[-164px] hidden lg:block">
          <svg className='w-full h-full' width="1440" height="446" viewBox="0 0 1440 446" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1440.92 122.92C1217.28 43.48 974.816 0 721.546 0C468.276 0 224.906 43.65 0.915527 123.37V445.09H1440.92V122.92Z" fill="#eefcff"/>
          </svg>
        </div>
        <div className="max-container flex flex-col items-start justify-between gap-x-5 gap-y-10 relative -top-12">
          <div className="w-full flex align-items-center justify-center">
            <span className="relative w-[30px]">
              <img style={styles.searchBoxIcon} src="/images/search-icon.svg" alt="Search" />
            </span>
            <input
              type="text"
              placeholder="Street, City or ZIP Code"
              value={searchTerm}
              onChange={handleSearch}
              style={styles.searchBox}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>

          {filteredItems.length > 0 ? (
            <div className="w-full">
              {filteredItems.map((item) => (
                <div className="center_item" key={item.id} style={styles.centerItem}>
                  {/* <img className="centerItemImg" src="/images/center_sample.png" alt="" style={styles.centerItemImg} /> */}
                  <div className="ml-5">
                    <div className="mt-1" style={styles.centerItemTitle}>{item.title}</div>
                    <div style={styles.centerItemAddress}>{formatAddress(item)}</div>
                    <div className="flex flex-col lg:flex-row" style={styles.centerItemExtraInfo2}>
                      <div className="info_location flex flex-row align-items-center">
                        <span className="mt-1">
                          <img src="/images/location_mark.svg" alt="Location" />
                        </span>
                        <a href="" className="ml-2"><span style={styles.item_highlight_color}>{attribute1}</span></a>
                      </div>
                      <div className="mx-3 hidden lg:block">|</div>
                      <div className="info_call"> {attribute2} <span style={styles.item_highlight_color}>{item.tel}</span></div>
                      <div className="mx-3 hidden lg:block">|</div>
                      <div className="info_location"> {attribute3} {item.fax}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No items match your search criteria.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default HealthFilter;
