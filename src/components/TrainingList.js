import React, { useState } from 'react';
import AddTask from './AddTask';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';


export default function TrainginList() {
    

    const [rowData, setRowData] = useState([
        {
                "brand" : "Ford",
                "model" : "Mondeo",
                "color" : "Red",
                "fuel" : "Diesel",
                "year" : 2013,
                "price" : 17500,
                "_links" : {
                  "self" : {
                    "href" : "https://carstockrest.herokuapp.com/cars/1"
                  },
                  "car" : {
                    "href" : "https://carstockrest.herokuapp.com/cars/1"
                  }
                }
              }, {
                "brand" : "Ford",
                "model" : "Focus",
                "color" : "White",
                "fuel" : "A95",
                "year" : 2015,
                "price" : 18900,
                "_links" : {
                  "self" : {
                    "href" : "https://carstockrest.herokuapp.com/cars/2"
                  },
                  "car" : {
                    "href" : "https://carstockrest.herokuapp.com/cars/2"
                  }
                }
              }, {
                "brand" : "Ford",
                "model" : "Focus",
                "color" : "Red",
                "fuel" : "A95",
                "year" : 2016,
                "price" : 19000,
                "_links" : {
                  "self" : {
                    "href" : "https://carstockrest.herokuapp.com/cars/3"
                  },
                  "car" : {
                    "href" : "https://carstockrest.herokuapp.com/cars/3"
                  }
                }
              }, {
                "brand" : "Alfa Romeo",
                "model" : "Spider",
                "color" : "Black",
                "fuel" : "B98",
                "year" : 2019,
                "price" : 31000,
                "_links" : {
                  "self" : {
                    "href" : "https://carstockrest.herokuapp.com/cars/4"
                  },
                  "car" : {
                    "href" : "https://carstockrest.herokuapp.com/cars/4"
                  }
                }
              }, {
                "brand" : "Mercedes-Benz",
                "model" : "180",
                "color" : "Silver",
                "fuel" : "Diesel",
                "year" : 2011,
                "price" : 16500,
                "_links" : {
                  "self" : {
                    "href" : "https://carstockrest.herokuapp.com/cars/5"
                  },
                  "car" : {
                    "href" : "https://carstockrest.herokuapp.com/cars/5"
                  }
                }
              }, {
                "brand" : "Mercedes-Benz",
                "model" : "E200",
                "color" : "Silver",
                "fuel" : "Diesel",
                "year" : 2010,
                "price" : 21500,
                "_links" : {
                  "self" : {
                    "href" : "https://carstockrest.herokuapp.com/cars/6"
                  },
                  "car" : {
                    "href" : "https://carstockrest.herokuapp.com/cars/6"
                  }
                }
              }, {
                "brand" : "Mercedes-Benz",
                "model" : "A",
                "color" : "Red",
                "fuel" : "A95",
                "year" : 2017,
                "price" : 23500,
                "_links" : {
                  "self" : {
                    "href" : "https://carstockrest.herokuapp.com/cars/7"
                  },
                  "car" : {
                    "href" : "https://carstockrest.herokuapp.com/cars/7"
                  }
                }
              }, {
                "brand" : "Mercedes-Benz",
                "model" : "A",
                "color" : "White",
                "fuel" : "A95",
                "year" : 2020,
                "price" : 34000,
                "_links" : {
                  "self" : {
                    "href" : "https://carstockrest.herokuapp.com/cars/8"
                  },
                  "car" : {
                    "href" : "https://carstockrest.herokuapp.com/cars/8"
                  }
                } 
              }
            
    ]);

    const columns = [
        { field: 'brand', sortable: true, filter: true },
        { field: 'model', sortable: true, filter: true },
        { field: 'color', sortable: true, filter: true },
        { field: 'year', sortable: true, filter: true, width: 100 },
        { field: 'fuel', sortable: true, filter: true, width: 100 },
        { field: 'price', sortable: true, filter: true },
        {
            headerName: "",
            width: 120,
            cellRendererFramework: function (params) {
                return <button>Moi</button>
            }
        }
    ]
    

    return(
    <div>
        Moi
        
        <AddTask />
        <div className="ag-theme-material"
                style={{ height: 670, width: '90%', margin: 'auto', padding: '10px' }}>
        <AgGridReact
            rowData={rowData}
            columnDefs={columns}

            floatingFilter={true}
                    pagination={true}
                    paginationPageSize={10}
        />
        </div>
    </div>
    )
}