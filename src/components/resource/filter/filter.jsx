import React, { useState, useEffect } from 'react';
import axios from 'axios'; // For making HTTP requests

const ResourceFilter = (block) => {

  const [items, setItems] = useState([]);
  const [groupList, setGroupList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [processCategoryStep, setProcessCategoryStep] = useState(0);
  const [selectedCategoriesTitle, setSelectedCategoriesTitle] = useState("");

  // 0 init
  // 1 selecting
  // 2 confirm

  const [gOrderBy, setGOrderBy] = useState(true);

  const handleGOrderBy = () => {
    console.log("gOrderBy", gOrderBy);
    if (!gOrderBy) {
      const groupList1 = [...groupList].sort((a, b) => a.title.localeCompare(b.title));
      setGroupList(groupList1);
    } else {
      const groupList2 = [...groupList].sort((a, b) => b.title.localeCompare(a.title));
      setGroupList(groupList2);
    }
    setGOrderBy(!gOrderBy);
  }
  const handleCheckboxChange = (group_id) => {

    setGroupList(groupList =>
      groupList.map(group =>
        group.id == group_id
          ? { ...group, isChecked: event.target.checked }
          : group
      )
    );

    console.log(groupList);
  };
  const handleResourceView = (group_id) => {

    setGroupList(groupList =>
      groupList.map(group =>
        group.id == group_id
          ? { ...group, isShowResource: !group.isShowResource }
          : group
      )
    );

    console.log(groupList);
  };
  const handleResourceClickAll = (group_id) => {

    setGroupList(groupList =>
      groupList.map(group =>
        group.id == group_id
          ? {
            ...group, files: group.files.map(_file => ({ ..._file, 'isSelectR': true })
            )
          }
          : group
      )
    );

    console.log(groupList);
  };

  const handleSubGroupResourceClickAll = (subGroup_id) => {

    setGroupList(groupList =>
      groupList.map(group => ({
        ...group, subGroup: group.subGroup.map(_subGroup => ({
          ..._subGroup,
          files: _subGroup.id == subGroup_id ? _subGroup.files.map(
            _files => ({ ..._files, 'isSelectR': true })
          ) : _subGroup.files
        }))
      })
      )
    );

    console.log(groupList);
  };

  const handleResourceClick = (resource_id) => {
    setGroupList(groupList =>
      groupList.map(group =>
      ({
        ...group, files: group.files && group.files.length > 0 && group.files.map(_file => ({ ..._file, 'isSelectR': _file.id == resource_id ? event.target.checked : (_file.isSelectR ? _file.isSelectR : false) }))
      })
      )
    );

    console.log(groupList);
  };
  const handleSubGroupResourceClick = (resource_id) => {
    setGroupList(groupList =>
      groupList.map(group => ({
        ...group, subGroup: group.subGroup.map(_subGroup => ({
          ..._subGroup,
          files: _subGroup.files.map(
            _file => ({ ..._file, 'isSelectR': _file.id == resource_id ? event.target.checked : (_file.isSelectR ? _file.isSelectR : false) })
          )
        }))
      })
      )
    );

    console.log(groupList);
  };

  const handleSubGroupResourceView = (subGroup_id) => {
    setGroupList(groupList =>
      groupList.map(group =>
      ({
        ...group, subGroup: (group.subGroup && group.subGroup.length > 0) ? (group.subGroup.map(_subGroup => ({ ..._subGroup, 'isShowSubGroupResource': _subGroup.id == subGroup_id ? !_subGroup.isShowSubGroupResource : _subGroup.isShowSubGroupResource }))) : []
      })
      )
    );
    console.log(groupList);
  };

  const handleConfirmBtn = () => {
    let select_categories_title = "";
    let select_categories_count = 0;
    groupList.forEach(group => {
      if (group.isChecked) {
        if (select_categories_title == "") {
          select_categories_title = group.title;
        } else {
          select_categories_count++;
        }
      }
    })
    setSelectedCategoriesTitle(select_categories_title + (select_categories_count > 0 ? (' + ' + select_categories_count) : ''))

    if (select_categories_title == "") {
      setProcessCategoryStep(0);
    } else {
      setProcessCategoryStep(2);
    }
  }
  const handleResetBtn = () => {
    setGroupList(groupList =>
      groupList.map(group => ({ ...group, isChecked: false }))
    );
  };
  const handleResetResourceBtn = () => {
    setGroupList(groupList =>
      groupList.map(group =>
      ({
        ...group,
        files: ((group.files && group.files.length > 0) ? group.files.map(_file => ({ ..._file, 'isSelectR': false })) : []),
        subGroup: (group.subGroup && group.subGroup.length > 0) ? group.subGroup.map(_subGroup => ({
          ..._subGroup,
          files: _subGroup.files.map(
            _file => ({ ..._file, 'isSelectR': false })
          )
        })) : []
      })
      )
    );
  };

  useEffect(() => {
    // Fetch items from API
    const fetchItems = async () => {
      try {
        let item_list_max = 0;
        let window_href = window.location.href;
        let full_item_list = [];

        if (window_href.indexOf("app.cloudcannon.com") > -1 || window_href.indexOf("127.0.0.1") > -1 || window.location.href.indexOf('editor=visual') > -1) {
          item_list_max = 5;
          full_item_list = [
            {
              "id": 13,
              "title": "IPA Provider Manuals",
              "items": [],
              "parent": null,
              "children": [],
              "files": [
                {
                  "id": 102,
                  "title": "Provider Manual – Adventist Health Care Network",
                  "file_link": null,
                  "file": {
                    "id": 851,
                    "name": "AHCN Provider Manual 2022.pdf",
                    "url": "/uploads/AHCN_Provider_Manual_2022_bc5aa3aaae.pdf"
                  }
                },
                {
                  "id": 103,
                  "title": "Provider Manual – Associated Hispanic Physicians of Southern California",
                  "file_link": null,
                  "file": {
                    "id": 1080,
                    "name": "AHPSC Provider Manual 2022.pdf",
                    "url": "/uploads/AHPSC_Provider_Manual_2022_9e61945ddd.pdf"
                  }
                }
              ],
              "order": 1
            },
            {
              "id": 22,
              "title": "DHCS Crosswalk",
              "items": [],
              "parent": null,
              "children": [],
              "files": [
                {
                  "id": 454,
                  "title": "DHCS Crosswalk 2023",
                  "file_link": null,
                  "file": {
                    "id": 1137,
                    "name": "DHCS Crosswalk V3_23.pdf",
                    "url": "/uploads/DHCS_Crosswalk_V3_23_b0edc00f3c.pdf"
                  }
                }
              ],
              "order": 1
            },
            {
              "id": 7,
              "title": "Cultural & Linguistic Information",
              "items": [
                {
                  "id": 9,
                  "title": "Anthem Blue Cross",
                  "files": [
                    {
                      "id": 59,
                      "title": "Language Assistance Program Quick Reference Guide",
                      "file_link": null,
                      "file": {
                        "id": 299,
                        "name": "Anthem LAP.pdf",
                        "url": "https://mpm-strapi.onrender.com/uploads/Anthem_LAP_771d7c81cc.pdf"
                      }
                    }
                  ]
                },
                {
                  "id": 11,
                  "title": "General",
                  "files": [
                    {
                      "id": 64,
                      "title": "Culturally and Linguistically Appropriate Service (CLAS) Standards Tool Kit",
                      "file_link": null,
                      "file": {
                        "id": 303,
                        "name": "CLAS_Provider_Toolkit.pdf",
                        "url": "https://mpm-strapi.onrender.com/uploads/CLAS_Provider_Toolkit_c485f94062.pdf"
                      }
                    },
                    {
                      "id": 65,
                      "title": "MedPOINT Healthplan LEP Contact Grid",
                      "file_link": null,
                      "file": {
                        "id": 304,
                        "name": "MedPOINTs Healthplan LEP Contact Grid 01-5-22.pdf",
                        "url": "https://mpm-strapi.onrender.com/uploads/Med_POIN_Ts_Healthplan_LEP_Contact_Grid_01_5_22_3a8f67a5fa.pdf"
                      }
                    },
                    {
                      "id": 66,
                      "title": "Refusal form for Interpreter Services – English",
                      "file_link": null,
                      "file": {
                        "id": 305,
                        "name": "refusal-form-for-interpretive-services-english.pdf",
                        "url": "https://mpm-strapi.onrender.com/uploads/refusal_form_for_interpretive_services_english_d7cc2b9b5b.pdf"
                      }
                    },
                    {
                      "id": 67,
                      "title": "Refusal form for Interpreter Services – Spanish",
                      "file_link": null,
                      "file": {
                        "id": 306,
                        "name": "refusal-form-for-interpretive-services-spanish.pdf",
                        "url": "https://mpm-strapi.onrender.com/uploads/refusal_form_for_interpretive_services_spanish_69fde67bea.pdf"
                      }
                    }
                  ]
                }
              ]
            }
          ];

        } else {
          const response = await axios.get('https://mpm-strapi.onrender.com/api/users-permissions/provider_resources/');
          full_item_list = response.data;
        }

        let group_list = [];
        let item_list = [];

        full_item_list.forEach(element => {
          if (element['items'] && element['items'].length > 0) {
            let group_2 = {
              "id": element['id'],
              "title": element['title'],
              "isChecked": false,
              "isShowResource": false,
              "subGroup": [] //
            };
            element['items'].forEach(element1 => {
              if (element1['files'] && element1['files'].length > 0) {
                group_2.subGroup.push({
                  "id": element1['id'],
                  "title": element1['title'],
                  "isChecked": false,
                  "isShowSubGroupResource": false,
                  "files": element1['files']
                });

                element1['files'].forEach(element2 => {
                  if (item_list_max > 0 && item_list.length > item_list_max) return;
                  item_list.push(element2);
                });
              }
            });
            group_list.push(group_2);
          }
          if (element['files'] && element['files'].length > 0) {
            group_list.push({
              "id": element['id'],
              "title": element['title'],
              "isChecked": false,
              "isShowResource": false,
              "files": element['files']
            });
            element['files'].forEach(element => {
              if (item_list_max > 0 && item_list.length > item_list_max) return;
              item_list.push(element);
            });
          }
        });

        setItems(item_list); // Adjust based on API response structure

        const groupList1 = [...group_list].sort((a, b) => a.title.localeCompare(b.title));
        setGroupList(groupList1);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError('Failed to fetch items');
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

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
    select_category_description: {
      fontSize: '22px',
      fontWeight: '500',
      color: '003041',
    },
    select_category_container: {
      backgroundColor: '#fff',
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '650px',
      width: '100%',
      border: '1px solid #B3E1F2',
      borderRadius: '5px',
      overflow: 'hidden',
    },
    select_category_header: {
      display: 'flex',
      flexDirection: 'row',
      position: 'relative',
      width: '100%',
      padding: '10px 20px',
    },
    select_category_header_title: {
      textAlign: 'left',
      width: '100%',
      fontSize: '18px',
      fontWeight: '400',
    },
    select_category_header_icon: {
      position: 'absolute',
      top: '15px',
      right: '15px',
      cursor: 'pointer',
    },
    select_category_group_item: {
      padding: '5px 25px',
    },
    select_category_group_title: {
      cursor: 'pointer',
      marginLeft: '10px',
    },
    select_category_sub_group: {
      cursor: 'pointer',
      paddingLeft: '30px',
      display: 'flex',
      flexDirection: 'row'
    },
  };

  const handleDownload = async (link, name) => {
    console.log('downloading - starting');
    const response = await fetch(link);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);
  }

  const downloadResourceFiles = async () => {
    console.log('downloading');
    groupList.forEach(group => {
      group.files && group.files.length > 0 && group.files.forEach(_file => {
        if (_file.isSelectR) {
          if (_file.file.url.indexOf('https://mpm-strapi.onrender.com') > -1) {
            handleDownload(_file.file.url, _file.file.name);
          } else {
            handleDownload('https://mpm-strapi.onrender.com' + _file.file.url, _file.file.name);
          }
        }
      })
      group.subGroup && group.subGroup.length > 0 && group.subGroup.forEach(_subGroup => {
        _subGroup.files && _subGroup.files.length > 0 && _subGroup.files.forEach(_file2 => {
          if (_file2.isSelectR) {
            if (_file2.file.url.indexOf('https://mpm-strapi.onrender.com') > -1) {
              handleDownload(_file2.file.url, _file2.file.name);
            } else {
              handleDownload('https://mpm-strapi.onrender.com' + _file2.file.url, _file2.file.name);
            }
          }
        })
      })
    })
  };

  return (
    <section>
      <div className="bg-trans-blue relative py-[50px] md:py-[120px] lg:pt-0 min-h-[550px]" style={{marginTop:'55px'}} suppressHydrationWarning >
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
          <div className="w-full flex align-items-center justify-center" style={styles.select_category_description}>
            {block.select_category_description}:
          </div>

          <div className="w-full flex align-items-center justify-center">
            <div className="select_category_container" style={styles.select_category_container}>
              <div className="select_category_header" style={styles.select_category_header}>
                {
                  processCategoryStep == 0 &&
                  <>
                    <div className="select_category_header_title" style={styles.select_category_header_title} onClick={() => setProcessCategoryStep(1)}>
                      {block.select_category_title_1}
                    </div>
                    <img style={styles.select_category_header_icon} src="/images/arrow_down.svg" alt="" onClick={() => setProcessCategoryStep(1)} />
                  </>
                }
                {
                  processCategoryStep == 2 &&
                  <>
                    <div className="select_category_header_title" style={styles.select_category_header_title}>
                      {selectedCategoriesTitle}
                    </div>
                    <img style={styles.select_category_header_icon} src="/images/arrow_down.svg" alt="" onClick={() => setProcessCategoryStep(1)} />
                  </>
                }
                {
                  processCategoryStep == 1 &&
                  <>
                    <div className="select_category_header_title" style={styles.select_category_header_title}>
                      {block.select_category_title_2}
                    </div>
                    <img style={styles.select_category_header_icon} src="/images/arrow_up.svg" alt="" onClick={() => setProcessCategoryStep(selectedCategoriesTitle != '' ? 2 : 0)} />
                  </>
                }
              </div>
              <div className="select_category_group">
                {
                  processCategoryStep == 1 &&
                  <>
                    <div style={{ width: '100%', padding: '10px 0 20px' }}>
                      {
                        groupList.map((group, index) => (
                          <div className="group-item" key={'group_' + group.id}
                            style={styles.select_category_group_item}>
                            <input
                              type="checkbox"
                              id={'check_1_' + group.id}
                              checked={group.isChecked}
                              onChange={() => handleCheckboxChange(group.id)}
                            />
                            <label style={styles.select_category_group_title} htmlFor={'check_1_' + group.id}>{group.title}</label>
                            {
                              /*
                              group.sub_group && group.sub_group.map((subGroup, index) => (
                                <div key={subGroup.id}>
                                  <div className='' style={styles.select_category_sub_group}>
                                    <input type="checkbox" name="" id={'check_2_' + subGroup.id} />
                                    <label htmlFor={'check_2_' + subGroup.id} style={styles.select_category_group_title}>{subGroup.title}</label>
                                  </div>
                                </div>
                              ))
                              */
                            }
                          </div>
                        ))}
                    </div>
                    <div className="select_category_footer" style={{ width: '100%', padding: '20px 25px 45px 40px' }}>
                      <button className="bg-trans-blue text-white px-12 py-3 rounded-md shadow-sm" style={{ background: '#34C565' }} onClick={handleConfirmBtn}>
                        {block.select_category_confirm_btn}
                      </button>
                      <button className="bg-trans-blue text-white px-12 py-3 rounded-md shadow-sm" style={{ background: '#fff', color: "#34C565" }} onClick={handleResetBtn}>
                        {block.select_category_reset_btn}
                      </button>
                    </div>
                  </>
                }
              </div>
            </div>
          </div>
          {
            processCategoryStep == 2 &&
            <div className="w-full flex align-items-center justify-center">
              <div className="select_resource_list" style={{ width: '100%' }}>
                <div className="select_resource_header" style={{ width: '100%', padding: '20px 25px 45px 40px', display: 'flex', justifyContent: 'right' }}>
                  <div className='flex flex-col lg:flex-row'>
                    <button className="bg-trans-blue text-white px-12 py-3 rounded-md shadow-sm" style={{ color: "#34C565", border: "1px solid #34C565", marginTop: '5px' }} onClick={handleResetResourceBtn}>
                      {block.select_resource_clear_selected}
                    </button>
                    <button className="bg-trans-blue text-white px-12 py-3 rounded-md shadow-sm" style={{ background: '#34C565', marginLeft: '20px', marginTop: '5px' }} onClick={downloadResourceFiles}>
                      {block.select_resource_download}
                    </button>
                  </div>
                </div>
                <div>
                  <div style={{ paddingTop: '5px', position: 'relative', cursor: 'pointer' }} onClick={handleGOrderBy}>
                    <span style={{ fontSize: '18px', fontWeight: '400' }}>Order By </span>
                    {
                      gOrderBy && <div style={{ position: 'absolute', top: '7px', left: '75px', fontSize: '18px', fontWeight: '400' }}>˅</div>
                    }
                    {
                      !gOrderBy && <div style={{ position: 'absolute', top: '7px', left: '75px', fontSize: '18px', fontWeight: '400' }}>˄</div>
                    }
                  </div>
                </div>
                {
                  groupList.map((group, index) => (
                    group.isChecked &&
                    <div className="select_resource_group" key={'download_group_' + group.id}
                      style={{
                        background: '#FFF',
                        border: '1px solid #B3E1F2',
                        margin: '20px 0 0',
                        padding: '20px',
                      }}>
                      <div className="select_resource_group_title"
                        style={{ fontSize: '32px', fontWeight: '500', color: '#003041', display: 'flex', flexDirection: 'row', gap: '10px', cursor: 'pointer' }}
                        onClick={() => { handleResourceView(group.id) }}
                      >
                        {!group.isShowResource && <img src="/images/img_plus.svg" alt="view hours" style={{ width: '35px' }} />}
                        {group.isShowResource && <img src="/images/img_minus.svg" alt="view hours" style={{ width: '35px' }} />}
                        <span>
                          {group.title}
                        </span>
                      </div>
                      {

                        group.subGroup && group.subGroup.length > 0 && group.subGroup.map((subGroup, index) => (
                          group.isChecked && group.isShowResource &&
                          <div className="select_sub_group" key={'download_sub_group_' + subGroup.id}
                            style={{
                              background: '#FFF',
                              border: '1px solid #B3E1F2',
                              margin: '20px 0 0',
                              padding: '20px',
                            }}>
                            <div className="select_resource_group_title"
                              style={{ fontSize: '32px', fontWeight: '500', color: '#003041', display: 'flex', flexDirection: 'row', gap: '10px', cursor: 'pointer' }}
                              onClick={() => { handleSubGroupResourceView(subGroup.id) }}
                            >
                              {!subGroup.isShowSubGroupResource && <img src="/images/img_plus.svg" alt="view hours" style={{ width: '35px' }} />}
                              {subGroup.isShowSubGroupResource && <img src="/images/img_minus.svg" alt="view hours" style={{ width: '35px' }} />}
                              <span>
                                {subGroup.title}
                              </span>
                            </div>

                            {
                              subGroup.isShowSubGroupResource && subGroup.files && subGroup.files.length > 0 &&
                              <div style={{ marginLeft: '32px', marginTop: '15px', color: '#34C565', fontSize: '20px', fontWeight: '400', cursor: 'pointer' }}
                                onClick={() => { handleSubGroupResourceClickAll(subGroup.id) }}>
                                Select All
                              </div>
                            }
                            {
                              subGroup.isShowSubGroupResource && subGroup.files && subGroup.files.length > 0 && subGroup.files.map((resource, index) => (
                                <div className="select_resource_item" key={'download_file_' + resource.id} style={{ padding: '10px 32px', display: 'flex', justifyContent: 'space-between' }}>
                                  <div>
                                    <input type="checkbox"
                                      id={'check_3_' + resource.id}
                                      checked={resource.isSelectR ? true : false}
                                      onChange={() => {
                                        handleSubGroupResourceClick(resource.id)
                                      }} />
                                    <label htmlFor={'check_3_' + resource.id} style={{ marginLeft: '10px', cursor: 'pointer', fontSize: '20px', fontWeight: '400' }}>{resource.title}</label>
                                  </div>
                                </div>
                              ))
                            }

                          </div>
                        ))
                      }
                      {
                        group.isShowResource && group.files && group.files.length > 0 &&
                        <div style={{ marginLeft: '32px', marginTop: '15px', color: '#34C565', fontSize: '20px', fontWeight: '400', cursor: 'pointer' }}
                          onClick={() => { handleResourceClickAll(group.id) }}>
                          Select All
                        </div>
                      }
                      {
                        group.isShowResource && group.files && group.files.length > 0 && group.files.map((resource, index) => (
                          <div className="select_resource_item" key={'download_file_' + resource.id} style={{ padding: '10px 32px', display: 'flex', justifyContent: 'space-between' }}>
                            <div>
                              <input type="checkbox"
                                id={'check_3_' + resource.id}
                                checked={resource.isSelectR ? true : false}
                                onChange={() => {
                                  handleResourceClick(resource.id)
                                }} />
                              <label htmlFor={'check_3_' + resource.id} style={{ marginLeft: '10px', cursor: 'pointer', fontSize: '20px', fontWeight: '400' }}>{resource.title}</label>
                            </div>
                          </div>
                        ))
                      }
                    </div>
                  ))
                }
              </div>
            </div>
          }
        </div>
      </div>
    </section >
  );
};

export default ResourceFilter;
