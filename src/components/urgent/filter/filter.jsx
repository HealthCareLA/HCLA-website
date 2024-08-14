import React, { useState, useEffect } from 'react';
import axios from 'axios'; // For making HTTP requests

const UrgentFilter = (block) => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFocused, setIsFocused] = useState(false);
  const [filterByDistance, setFilterByDistance] = useState('');
  const [filterByType, setFilterByType] = useState('');
  const [location, setLocation] = useState({ latitude: null, longitude: null });

  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };

  const { attribute1, attribute2, attribute3, attribute4 } = block;

  useEffect(() => {
    const fetchItems = async () => {
      try {
        let window_href = window.location.href;

        if (window_href.indexOf("app.cloudcannon.com") > -1 || window_href.indexOf("127.0.0.1") > -1 || window.location.href.indexOf('editor=visual') > -1) {
          // Sample data for local or cloudcannon
          setItems([
            {
              "id": 3846,
              "title": "RESEDA FAMILY CLINIC AND URGENT CARE",
              "fax": "(818) 996-5888",
              "tel": "(818) 996-4888",
              "street_address": "6830 RESEDA BLVD",
              "city": "RESEDA",
              "state": "CA",
              "zip": "91335-4204",
              "contact_email": null,
              "website": null,
              "lat": 34.2035088,
              "lng": -118.5389414,
              "createdAt": "2024-07-02T10:36:11.839Z",
              "updatedAt": "2024-07-02T10:36:11.839Z",
              "publishedAt": "2024-07-02T10:38:41.833Z",
              "hours": [
                {
                  "id": 24725,
                  "day": "Monday",
                  "time": null,
                  "closed_message": "closed"
                },
                {
                  "id": 24726,
                  "day": "Tuesday",
                  "time": "09:00 AM - 08:00 PM",
                  "closed_message": null
                },
                {
                  "id": 24727,
                  "day": "Wednesday",
                  "time": "09:00 AM - 08:00 PM",
                  "closed_message": null
                },
                {
                  "id": 24728,
                  "day": "Thursday",
                  "time": "09:00 AM - 08:00 PM",
                  "closed_message": null
                },
                {
                  "id": 24729,
                  "day": "Friday",
                  "time": "09:00 AM - 08:00 PM",
                  "closed_message": null
                },
                {
                  "id": 24730,
                  "day": "Saturday",
                  "time": "09:00 AM - 05:00 PM",
                  "closed_message": null
                },
                {
                  "id": 24731,
                  "day": "Sunday",
                  "time": "09:00 AM - 05:00 PM",
                  "closed_message": null
                }
              ],
              "clients": {
                "data": [
                  {
                    "id": 12,
                    "attributes": {
                      "title": "Premier Physician Network - Valley",
                      "content": "<p>PO Box 570997\\ Tarzana, California, 91357</p>",
                      "hide": null,
                      "Website": null,
                      "createdAt": "2021-09-27T13:00:07.224Z",
                      "updatedAt": "2024-05-21T17:52:41.452Z",
                      "publishedAt": "2021-09-27T13:00:08.409Z"
                    }
                  },
                  {
                    "id": 13,
                    "attributes": {
                      "title": "Prospect Medical Group – LA Care",
                      "content": "PO Box 573094\\\nTarzana, California, 91357",
                      "hide": null,
                      "Website": "https://prospectmedicalgroup.com",
                      "createdAt": "2021-09-27T13:00:35.422Z",
                      "updatedAt": "2022-06-28T03:14:07.601Z",
                      "publishedAt": "2021-09-27T13:00:36.554Z"
                    }
                  },
                  {
                    "id": 7,
                    "attributes": {
                      "title": "El Proyecto del Barrio, Inc.",
                      "content": "PO Box 571210\\\nTarzana, California, 91357",
                      "hide": null,
                      "Website": "https://www.elproyecto.us",
                      "createdAt": "2021-09-27T12:58:04.439Z",
                      "updatedAt": "2022-06-28T03:08:33.616Z",
                      "publishedAt": "2021-09-27T12:58:05.465Z"
                    }
                  },
                  {
                    "id": 10,
                    "attributes": {
                      "title": "Health Care LA, IPA",
                      "content": "PO Box 570590\\\nTarzana, California, 91357",
                      "hide": null,
                      "Website": "https://www.healthcarela.org",
                      "createdAt": "2021-09-27T12:59:11.192Z",
                      "updatedAt": "2022-06-28T03:09:55.359Z",
                      "publishedAt": "2021-09-27T12:59:13.293Z"
                    }
                  }
                ]
              }
            },
            {
              "id": 3688,
              "title": "ADVENTIST HEALTH URGENT CARE - GLENDALE",
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
                  "day": "Monday",
                  "time": "09:00 AM - 05:00 PM",
                  "closed_message": "closed"
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
              "title": "ADVENTIST HEALTH URGENT CARE - MONTROSE",
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
              "title": "ADVENTIST HEALTH URGENT CARE - MOORPARK",
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
              "title": "ADVENTIST HEALTH URGENT CARE - SANTA PAULA",
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
        } else {
          //
          const response = await axios.get('https://mpm-strapi.onrender.com/api/urgent-care-items?filters[clients][id][$in]=10');
          setItems(response.data.data || response.data); // Adjust based on API response structure
        }
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch items');
        setLoading(false);
      }
    };

    fetchItems();

    const getLocation = function () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
            console.log('location error');
            // setError(null);
          },
          (error) => {
            console.log('location error');
            // setError(error.message);
          }
        );
      }
    }
    getLocation();
  }, []);

  const handleFilterByTypeChange = (event) => {
    let value = event.target.value;
    setFilterByType(value);
  }

  const handleFilterByDistanceChange = (event) => {
    let value = event.target.value;
    setFilterByDistance(value);
  }

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClickViewHours = (itemId) => {
    setItems(items =>
      items.map(item =>
        item.id === itemId
          ? { ...item, show_hours: !item.show_hours }
          : item
      )
    );
  };

  const formatHourState = (item) => {
    let day = new Date();
    if (item.day == 'Monday' && day.getDay() == 1) {
      return 1;
    } else if (item.day == 'Tuesday' && day.getDay() == 2) {
      return 1;
    } else if (item.day == 'Wednesday' && day.getDay() == 3) {
      return 1;
    } else if (item.day == 'Thursday' && day.getDay() == 4) {
      return 1;
    } else if (item.day == 'Friday' && day.getDay() == 5) {
      return 1;
    } else if (item.day == 'Saturday' && day.getDay() == 6) {
      return 1;
    } else if (item.day == 'Sunday' && day.getDay() == 7) {
      return 1;
    }
    return 0;
  };
  const isClosed = (item) => {
    let day = new Date();
    if (item.day == 'Monday' && day.getDay() == 1) {
      return item.closed_message == 'closed';
    } else if (item.day == 'Tuesday' && day.getDay() == 2) {
      return item.closed_message == 'closed';
    } else if (item.day == 'Wednesday' && day.getDay() == 3) {
      return item.closed_message == 'closed';
    } else if (item.day == 'Thursday' && day.getDay() == 4) {
      return item.closed_message == 'closed';
    } else if (item.day == 'Friday' && day.getDay() == 5) {
      return item.closed_message == 'closed';
    } else if (item.day == 'Saturday' && day.getDay() == 6) {
      return item.closed_message == 'closed';
    } else if (item.day == 'Sunday' && day.getDay() == 7) {
      return item.closed_message == 'closed';
    }
    return false;
  };
  const isItemClosed = (item) => {
    let open_state = 1;
    for (let i = 0; i < item.hours.length; i++) {
      if (isClosed(item.hours[i])) {
        open_state = 0; break;
      }
    }
    return open_state;
  }

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const toRadians = (degree) => degree * (Math.PI / 180);

    const R = 3958.8; // Radius of the Earth in miles
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in miles

    return distance;
  };

  const filteredItems = items.map(item => { item.show_hours ? item.show_hours : false; return item; }).filter((item) => {
    let search_result =
      item.street_address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.zip.toLowerCase().includes(searchTerm.toLowerCase());

    let filter_by_type = false;
    if (filterByType == 'open') {
      let open_state = isItemClosed(item);
      if (open_state == 1) {
        filter_by_type = true;
      } else {
        filter_by_type = false;
      }
    } else if (filterByType == 'closed') {
      let closed_state = 0;
      for (let i = 0; i < item.hours.length; i++) {
        if (isClosed(item.hours[i])) {
          closed_state = 1; break;
        }
      }
      if (closed_state == 1) {
        filter_by_type = true;
      } else {
        filter_by_type = false;
      }
    } else {
      filter_by_type = true;
    }

    let filter_by_distance = false;
    if (filterByDistance > 0 && location.latitude && location.longitude) {
      let distance = calculateDistance(location.latitude, location.longitude, item.lat, item.lng);
      if (distance <= filterByDistance) {
        filter_by_distance = true;
      } else {
        filter_by_distance = false;
      }
    } else {
      filter_by_distance = true;
    }

    return search_result && filter_by_type && filter_by_distance;
  });

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
    centerItemContainer: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '10px',
      backgroundColor: '#FFF',
      padding: '0px',
      borderRadius: '10px',
      width: '100%',
      position: 'relative',
      overflow: 'hidden'
    },
    centerItem: {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: '#FFF',
      padding: '25px',
      width: '100%',
      position: 'relative'
    },
    centerItemOpen: {
      position: 'absolute',
      top: '0',
      right: '50px',
      width: '116px',
      height: '48px',
      backgroundColor: '#FCF2D6',
      display: 'flex',
      flexDirection: 'row',
      padding: '10px 15px'
    },
    centerItemStateImg: {
      width: '25px',
      height: '25px',
      marginRight: '10px',
    },
    centerItemStateTxt: {
      font: 'Jost',
      fontWeight: '400',
      fontSize: '20px',
      color: '#34C565'
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
    centerItemViewHours: {
      cursor: 'pointer',
    },
    item_highlight_color: {
      color: '#34C565',
      fontWeight: '400',
    },
    centerItemHours: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#FCFFFF',
      width: '100%',
      position: 'relative',
      borderTop: '1px solid #E3F4FA',
      padding: '30px 60px',
    },
    centerItemDayList: {
      display: 'flex',
      flexDirection: 'row',
      gap: '10px',
      fontSize: '20px',
      fontWeight: '400',
      lineHeight: '40px',
    },
    centerItemHoursDay: {
      width: '150px',
    },
    centerItemHoursTime: {
      width: '250px',
      textTransform: 'capitalize'
    },
    centerItemHoursDayBold: {
      width: '150px',
      fontWeight: '500',
    },
    centerItemHoursTimeBold: {
      width: '250px',
      fontWeight: '500',
    },
    centerItemHoursState: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    }
  };

  console.log('render --------------------------------');
  return (
    <section>
      <div className="bg-trans-blue relative py-[50px] md:py-[120px] lg:pt-0 min-h-[550px]" style={{marginTop: '55px'}} suppressHydrationWarning>
        {/* <img
          src="/images/circle-shape-top.png"
          alt="circle-shape"
          className="absolute left-1/2 -translate-x-1/2 w-full z-[0] top-[-80px] hidden lg:block"
        /> */}
        <img
          src="/images/circle-shape-top.svg"
          alt="circle-shape"
          // className="absolute left-1/2 -translate-x-1/2 w-full z-[0] top-[-80px] hidden lg:block"
          style={{
            position: 'absolute',
            top: '-100px',
            width: '100%',
            height: 'auto',
            background: '#0183B3',
            objectFit: 'cover',
            objectPosition: '0px 5px'
          }}
        />        
        <div className="max-container flex flex-col items-start justify-between gap-x-5 gap-y-10 relative">
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

          <div className="w-full flex align-items-center justify-left">
            <select
              name=""
              id="filter_by_distance"
              style={{ fontSize: '18px', fontWeight: '400', border: '1px solid #B3E1F2', padding: '5px' }}
              value={filterByDistance}
              onChange={handleFilterByDistanceChange}
            >
              <option value=''>Filter by Distance</option>
              <option value='10'>10 Miles</option>
              <option value='20'>20 Miles</option>
              <option value='30'>30 Miles</option>
            </select>
            <select
              name=""
              id="filter_by_type"
              style={{ marginLeft: '30px', fontSize: '18px', fontWeight: '400', border: '1px solid #B3E1F2', padding: '5px' }}
              value={filterByType}
              onChange={handleFilterByTypeChange}
            >
              <option value=''>Filter by Type</option>
              <option value='open'>Open</option>
              <option value='closed'>Closed</option>
            </select>
          </div>

          {filteredItems.length > 0 ? (
            <div className="w-full">
              {
                filteredItems.map((item) =>
                (
                  <>
                    <div className="center_item_container" key={'center_item_list_' + item.id} style={styles.centerItemContainer}>
                      <div className='center_item' style={styles.centerItem}>
                        <div className="center_item_open" key={'state_' + item.id} style={styles.centerItemOpen}>
                          <img className="centerItemClockImg" src="/images/state_clock.svg" alt="" style={styles.centerItemStateImg} />
                          <span style={styles.centerItemStateTxt}>{isItemClosed(item) ? 'Open' : 'Closed'}</span>
                        </div>
                        <img className="centerItemImg" src="/images/center_sample.png" alt="" style={styles.centerItemImg} />
                        <div className="ml-5">
                          <div className="mt-1" style={styles.centerItemTitle}>{item.title}</div>
                          <div style={styles.centerItemAddress}>{formatAddress(item)}</div>
                          <div className="flex flex-col lg:flex-row" style={styles.centerItemExtraInfo2}>
                            <div className="info_view_hours flex flex-row align-items-center" style={styles.centerItemViewHours} onClick={() => handleClickViewHours(item.id)}>
                              <span className="mt-1">
                                {!item.show_hours && <img src="/images/img_plus.svg" alt="view hours" />}
                                {item.show_hours && <img src="/images/img_minus.svg" alt="view hours" />}
                              </span>
                              <div className="ml-2"><span style={styles.item_highlight_color}>{attribute1}</span></div>
                            </div>
                            <div className="mx-3 hidden lg:block">|</div>
                            <div className="info_location flex flex-row align-items-center">
                              <span className="mt-1">
                                <img src="/images/location_mark.svg" alt="Location" />
                              </span>
                              <a href="" className="ml-2"><span style={styles.item_highlight_color}>{attribute2}</span></a>
                            </div>
                            <div className="mx-3 hidden lg:block">|</div>
                            <div className="info_call"> {attribute3} <span style={styles.item_highlight_color}>{item.tel}</span></div>
                            <div className="mx-3 hidden lg:block">|</div>
                            <div className="info_location"> {attribute4} {item.fax}</div>
                          </div>
                        </div>
                      </div>
                      {
                        item.show_hours &&
                        <div className="center_item_hours" style={styles.centerItemHours}>
                          {
                            item.hours.map((day) =>
                            (
                              <div key={'hours_' + day.id} className="center_item_day_list" style={styles.centerItemDayList}>
                                <div className={"center_item_day"} style={(formatHourState(day) == 1 ? styles.centerItemHoursDayBold : styles.centerItemHoursDay)}>{day.day}</div>
                                <div className={"center_item_time"} style={formatHourState(day) == 1 ? styles.centerItemHoursTimeBold : styles.centerItemHoursTime}>{ day.closed_message ? day.closed_message: day.time }</div>
                                <div className="center_item_state" style={styles.centerItemHoursState}>
                                  {
                                    (formatHourState(day) == 1) &&
                                    <>
                                      <img src="/images/state_clock.svg" alt="" style={styles.centerItemStateImg} />
                                      <span style={styles.centerItemStateTxt}>Open Now</span>
                                    </>
                                  }
                                </div>
                              </div>
                            )
                            )
                          }
                        </div>
                      }
                    </div>
                  </>
                )
                )
              }
            </div>
          ) : (
            <p>No items match your search criteria.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default UrgentFilter;
