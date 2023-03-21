import {Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';




const eleData= [
  {
      "deviceUUID": "80a9b8a2-3a2c-429c-b925-b4007c706662",
      "ipAddress": "2.2.2.67",
      "deviceParameter": {
          "deviceName": "device44",
          "unitIdentifier": 1,
          "port": 502,
          "responseTimeout": "2.0",
          "scanCycleForMeasuredValues": "10.0",
          "scanCycleForIndications": "2.0",
          "scanCycleForCounters": "60.0",
          "templateName": ""
      },
      "isConnected": false,
      "isSerial": false,
      "details": null,
      "Type": "Ethernet",
      "portExceeded": false,
      "unitIdentifierExceeded": false,
      "responseTimePattern": false,
      "responseTimeExceeded": false,
      "MeasurePattern": false,
      "MeasureExceeded": false,
      "indicationPattern": false,
      "indicationExceeded": false,
      "countersPattern": false,
      "countersExceeded": false
  },
  {
      "deviceUUID": "f1e74e0d-bb46-460b-abef-dda8742e143e",
      "ipAddress": "2.2.3.12",
      "deviceParameter": {
          "deviceName": "device34",
          "unitIdentifier": 1,
          "port": 502,
          "responseTimeout": "2.0",
          "scanCycleForMeasuredValues": "10.0",
          "scanCycleForIndications": "2.0",
          "scanCycleForCounters": "60.0",
          "templateName": ""
      },
      "isConnected": false,
      "isSerial": false,
      "details": null,
      "Type": "Ethernet",
      "portExceeded": false,
      "unitIdentifierExceeded": false,
      "responseTimePattern": false,
      "responseTimeExceeded": false,
      "MeasurePattern": false,
      "MeasureExceeded": false,
      "indicationPattern": false,
      "indicationExceeded": false,
      "countersPattern": false,
      "countersExceeded": false
  },
  {
    "deviceUUID": "f1e74e0d-bb46-460b-abef-dda8742e143e",
    "ipAddress": "2.2.3.23",
    "deviceParameter": {
        "deviceName": "device23",
        "unitIdentifier": 1,
        "port": 503,
        "responseTimeout": "2.0",
        "scanCycleForMeasuredValues": "10.0",
        "scanCycleForIndications": "2.0",
        "scanCycleForCounters": "60.0",
        "templateName": ""
    },
    "isConnected": false,
    "isSerial": false,
    "details": null,
    "Type": "serial",
    "portExceeded": false,
    "unitIdentifierExceeded": false,
    "responseTimePattern": false,
    "responseTimeExceeded": false,
    "MeasurePattern": false,
    "MeasureExceeded": false,
    "indicationPattern": false,
    "indicationExceeded": false,
    "countersPattern": false,
    "countersExceeded": false
}
]

/**
 * @title Table with filtering
 */
@Component({
  selector: 'table-filtering-example',
  styleUrls: ['table-filtering-example.css'],
  templateUrl: 'table-filtering-example.html',
})
export class TableFilteringExample {
  displayedColumns: string[] = ['ipaddress', 'type', 'devicename', 'port'];
  dataSource = new MatTableDataSource(eleData);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
   const filterVal=  filterValue.trim().toLowerCase();
   this.dataSource.filterPredicate = (data, filter: string)  => {
    const accumulator = (currentTerm:any, key:any) => {
      return this.nestedFilterCheck(currentTerm, data, key);
    };
    const dataStr = Object.keys(data).reduce(accumulator, '').toLowerCase();
    // Transform the filter by converting it to lowercase and removing whitespace.
    const transformedFilter = filter.trim().toLowerCase();
    return dataStr.indexOf(transformedFilter) !== -1;
  };
   this.dataSource.filter= filterVal;
  }


  nestedFilterCheck(search:any, data:any, key:any) {
    if (typeof data[key] === 'object') {
      for (const k in data[key]) {
        if (data[key][k] !== null) {
          search = this.nestedFilterCheck(search, data[key], k);
        }
      }
    } else {
      search += data[key];
    }
    return search;
  }
}


/**  Copyright 2021 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */