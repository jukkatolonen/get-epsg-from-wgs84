# get-epsg-from-wgs84

Get available EPSG codes based on WGS84 coordinates and country

# Install
```
$ npm i epsg-sniffer
```

# Usage
```
const sniffer = require('epsg-sniffer');
sniffer.getEpsg({
    lat: 63.727390, lng: 23.030782, 
    country: 'finland', strict: true,
});
```
Sample output is array of epsg objects:
```
[ { code: '2392',
    kind: 'CRS-PROJCRS',
    name: 'KKJ / Finland zone 2',
    wkt:
     'PROJCS["KKJ / Finland zone 2",GEOGCS["KKJ",DATUM["Kartastokoordinaattijarjestelma_1966",SPHEROID["International 1924",6378388,297,AUTHORITY["EPSG","7022"]],TOWGS84[-96.062,-82.428,-121.753,4.801,0.345,-1.376,1.496],AUTHORITY["EPSG","6123"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AUTHORITY["EPSG","4123"]],PROJECTION["Transverse_Mercator"],PARAMETER["latitude_of_origin",0],PARAMETER["central_meridian",24],PARAMETER["scale_factor",1],PARAMETER["false_easting",2500000],PARAMETER["false_northing",0],UNIT["metre",1,AUTHORITY["EPSG","9001"]],AUTHORITY["EPSG","2392"]]',
    proj4:
     '+proj=tmerc +lat_0=0 +lon_0=24 +k=1 +x_0=2500000 +y_0=0 +ellps=intl +towgs84=-96.062,-82.428,-121.753,4.801,0.345,-1.376,1.496 +units=m +no_defs',
    bbox: [ 68.9, 22.5, 59.75, 25.5 ],
    unit: 'metre',
    area: 'Finland - onshore between 22°30\'E and 25°30\'E.',
    accuracy: null,
    pointLocal:
     { x: 2452294.37443927,
       y: 7069969.422483389,
       z: -24.643609080463648 } },
  { code: '2393',
    kind: 'CRS-PROJCRS',
    name: 'KKJ / Finland Uniform Coordinate System',
    wkt:
     'PROJCS["KKJ / Finland Uniform Coordinate System",GEOGCS["KKJ",DATUM["Kartastokoordinaattijarjestelma_1966",SPHEROID["International 1924",6378388,297,AUTHORITY["EPSG","7022"]],TOWGS84[-96.062,-82.428,-121.753,4.801,0.345,-1.376,1.496],AUTHORITY["EPSG","6123"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AUTHORITY["EPSG","4123"]],PROJECTION["Transverse_Mercator"],PARAMETER["latitude_of_origin",0],PARAMETER["central_meridian",27],PARAMETER["scale_factor",1],PARAMETER["false_easting",3500000],PARAMETER["false_northing",0],UNIT["metre",1,AUTHORITY["EPSG","9001"]],AUTHORITY["EPSG","2393"]]',
    proj4:
     '+proj=tmerc +lat_0=0 +lon_0=27 +k=1 +x_0=3500000 +y_0=0 +ellps=intl +towgs84=-96.062,-82.428,-121.753,4.801,0.345,-1.376,1.496 +units=m +no_defs',
    bbox: [ 70.09, 19.24, 59.75, 31.59 ],
    unit: 'metre',
    area:
     'Finland - onshore between 25°30\'E and 28°30\'E for Basic Coordinate System and all onshore Finland for Uniform Coordinate System.',
    accuracy: null,
    pointLocal:
     { x: 3304155.5409333333,
       y: 7075689.564182355,
       z: -24.643609080463648 } },
  { code: '3067',
    kind: 'CRS-PROJCRS',
    name: 'ETRS89 / TM35FIN(E,N)',
    wkt:
     'PROJCS["ETRS89 / TM35FIN(E,N)",GEOGCS["ETRS89",DATUM["European_Terrestrial_Reference_System_1989",SPHEROID["GRS 1980",6378137,298.257222101,AUTHORITY["EPSG","7019"]],TOWGS84[0,0,0,0,0,0,0],AUTHORITY["EPSG","6258"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AUTHORITY["EPSG","4258"]],PROJECTION["Transverse_Mercator"],PARAMETER["latitude_of_origin",0],PARAMETER["central_meridian",27],PARAMETER["scale_factor",0.9996],PARAMETER["false_easting",500000],PARAMETER["false_northing",0],UNIT["metre",1,AUTHORITY["EPSG","9001"]],AXIS["Easting",EAST],AXIS["Northing",NORTH],AUTHORITY["EPSG","3067"]]',
    proj4:
     '+proj=utm +zone=35 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs',
    bbox: [ 70.09, 19.08, 58.84, 31.59 ],
    unit: 'metre',
    area: 'Finland - onshore and offshore.',
    accuracy: 1,
    pointLocal: { x: 304063.10500895214, y: 7072726.209520935, z: 0 } },
  { code: '3130',
    kind: 'CRS-PROJCRS',
    name: 'ETRS89 / ETRS-GK23FIN',
    wkt:
     'PROJCS["ETRS89 / ETRS-GK23FIN",GEOGCS["ETRS89",DATUM["European_Terrestrial_Reference_System_1989",SPHEROID["GRS 1980",6378137,298.257222101,AUTHORITY["EPSG","7019"]],TOWGS84[0,0,0,0,0,0,0],AUTHORITY["EPSG","6258"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AUTHORITY["EPSG","4258"]],PROJECTION["Transverse_Mercator"],PARAMETER["latitude_of_origin",0],PARAMETER["central_meridian",23],PARAMETER["scale_factor",1],PARAMETER["false_easting",500000],PARAMETER["false_northing",0],UNIT["metre",1,AUTHORITY["EPSG","9001"]],AUTHORITY["EPSG","3130"]]',
    proj4:
     '+proj=tmerc +lat_0=0 +lon_0=23 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs',
    bbox: [ 68.74, 22.5, 59.75, 23.5 ],
    unit: 'metre',
    area: 'Finland - onshore between 22°30\'E and 23°30\'E.',
    accuracy: 1,
    pointLocal: { x: 501520.8739542992, y: 7069465.208306874, z: 0 } },
  { code: '3877',
    kind: 'CRS-PROJCRS',
    name: 'ETRS89 / GK23FIN',
    wkt:
     'PROJCS["ETRS89 / GK23FIN",GEOGCS["ETRS89",DATUM["European_Terrestrial_Reference_System_1989",SPHEROID["GRS 1980",6378137,298.257222101,AUTHORITY["EPSG","7019"]],TOWGS84[0,0,0,0,0,0,0],AUTHORITY["EPSG","6258"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AUTHORITY["EPSG","4258"]],PROJECTION["Transverse_Mercator"],PARAMETER["latitude_of_origin",0],PARAMETER["central_meridian",23],PARAMETER["scale_factor",1],PARAMETER["false_easting",23500000],PARAMETER["false_northing",0],UNIT["metre",1,AUTHORITY["EPSG","9001"]],AUTHORITY["EPSG","3877"]]',
    proj4:
     '+proj=tmerc +lat_0=0 +lon_0=23 +k=1 +x_0=23500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs',
    bbox: [ 68.74, 22.5, 59.75, 23.5 ],
    unit: 'metre',
    area:
     'Finland - nominally onshore between 22°30\'E and 23°30\'E but may be used in adjacent areas if a municipality chooses to use one zone over its whole extent.',
    accuracy: 1,
    pointLocal: { x: 23501520.8739543, y: 7069465.208306874, z: 0 } },
  { code: '3901',
    kind: 'CRS-COMPOUNDCRS',
    name: 'KKJ / Finland Uniform Coordinate System + N60 height',
    wkt:
     'COMPD_CS["KKJ / Finland Uniform Coordinate System + N60 height",PROJCS["KKJ / Finland Uniform Coordinate System",GEOGCS["KKJ",DATUM["Kartastokoordinaattijarjestelma_1966",SPHEROID["International 1924",6378388,297,AUTHORITY["EPSG","7022"]],TOWGS84[-96.062,-82.428,-121.753,4.801,0.345,-1.376,1.496],AUTHORITY["EPSG","6123"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AUTHORITY["EPSG","4123"]],PROJECTION["Transverse_Mercator"],PARAMETER["latitude_of_origin",0],PARAMETER["central_meridian",27],PARAMETER["scale_factor",1],PARAMETER["false_easting",3500000],PARAMETER["false_northing",0],UNIT["metre",1,AUTHORITY["EPSG","9001"]],AUTHORITY["EPSG","2393"]],VERT_CS["N60 height",VERT_DATUM["Helsinki 1960",2005,AUTHORITY["EPSG","5116"]],UNIT["metre",1,AUTHORITY["EPSG","9001"]],AXIS["Up",UP],AUTHORITY["EPSG","5717"]],AUTHORITY["EPSG","3901"]]',
    proj4:
     '+proj=tmerc +lat_0=0 +lon_0=27 +k=1 +x_0=3500000 +y_0=0 +ellps=intl +towgs84=-96.062,-82.428,-121.753,4.801,0.345,-1.376,1.496 +units=m +vunits=m +no_defs',
    bbox: [ 70.09, 19.24, 59.75, 31.59 ],
    unit: null,
    area: 'Finland - onshore.',
    accuracy: null,
    pointLocal:
     { x: 3304155.5409333333,
       y: 7075689.564182355,
       z: -24.643609080463648 } },
  { code: '3902',
    kind: 'CRS-COMPOUNDCRS',
    name: 'ETRS89 / TM35FIN(N,E) + N60 height',
    wkt:
     'COMPD_CS["ETRS89 / TM35FIN(N,E) + N60 height",PROJCS["ETRS89 / TM35FIN(N,E)",GEOGCS["ETRS89",DATUM["European_Terrestrial_Reference_System_1989",SPHEROID["GRS 1980",6378137,298.257222101,AUTHORITY["EPSG","7019"]],TOWGS84[0,0,0,0,0,0,0],AUTHORITY["EPSG","6258"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AUTHORITY["EPSG","4258"]],PROJECTION["Transverse_Mercator"],PARAMETER["latitude_of_origin",0],PARAMETER["central_meridian",27],PARAMETER["scale_factor",0.9996],PARAMETER["false_easting",500000],PARAMETER["false_northing",0],UNIT["metre",1,AUTHORITY["EPSG","9001"]],AUTHORITY["EPSG","5048"]],VERT_CS["N60 height",VERT_DATUM["Helsinki 1960",2005,AUTHORITY["EPSG","5116"]],UNIT["metre",1,AUTHORITY["EPSG","9001"]],AXIS["Up",UP],AUTHORITY["EPSG","5717"]],AUTHORITY["EPSG","3902"]]',
    proj4:
     '+proj=utm +zone=35 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs',
    bbox: [ 70.09, 19.24, 59.75, 31.59 ],
    unit: null,
    area: 'Finland - onshore.',
    accuracy: null,
    pointLocal: { x: 304063.10500895214, y: 7072726.209520935, z: 0 } },
  { code: '3903',
    kind: 'CRS-COMPOUNDCRS',
    name: 'ETRS89 / TM35FIN(N,E) + N2000 height',
    wkt:
     'COMPD_CS["ETRS89 / TM35FIN(N,E) + N2000 height",PROJCS["ETRS89 / TM35FIN(N,E)",GEOGCS["ETRS89",DATUM["European_Terrestrial_Reference_System_1989",SPHEROID["GRS 1980",6378137,298.257222101,AUTHORITY["EPSG","7019"]],TOWGS84[0,0,0,0,0,0,0],AUTHORITY["EPSG","6258"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AUTHORITY["EPSG","4258"]],PROJECTION["Transverse_Mercator"],PARAMETER["latitude_of_origin",0],PARAMETER["central_meridian",27],PARAMETER["scale_factor",0.9996],PARAMETER["false_easting",500000],PARAMETER["false_northing",0],UNIT["metre",1,AUTHORITY["EPSG","9001"]],AUTHORITY["EPSG","5048"]],VERT_CS["N2000 height",VERT_DATUM["N2000",2005,AUTHORITY["EPSG","1030"]],UNIT["metre",1,AUTHORITY["EPSG","9001"]],AXIS["Up",UP],AUTHORITY["EPSG","3900"]],AUTHORITY["EPSG","3903"]]',
    proj4:
     '+proj=utm +zone=35 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs',
    bbox: [ 70.09, 19.24, 59.75, 31.59 ],
    unit: null,
    area: 'Finland - onshore.',
    accuracy: null,
    pointLocal: { x: 304063.10500895214, y: 7072726.209520935, z: 0 } },
  { code: '4123',
    kind: 'CRS-GEOGCRS',
    name: 'KKJ',
    wkt:
     'GEOGCS["KKJ",DATUM["Kartastokoordinaattijarjestelma_1966",SPHEROID["International 1924",6378388,297,AUTHORITY["EPSG","7022"]],TOWGS84[-96.062,-82.428,-121.753,4.801,0.345,-1.376,1.496],AUTHORITY["EPSG","6123"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AUTHORITY["EPSG","4123"]]',
    proj4:
     '+proj=longlat +ellps=intl +towgs84=-96.062,-82.428,-121.753,4.801,0.345,-1.376,1.496 +no_defs',
    bbox: [ 70.09, 19.24, 59.75, 31.59 ],
    unit: 'degree (supplier to define representation)',
    area: 'Finland - onshore.',
    accuracy: null,
    pointLocal:
     { x: 23.0344838502209,
       y: 63.72712330188992,
       z: -24.643609080463648 } },
  { code: '5048',
    kind: 'CRS-PROJCRS',
    name: 'ETRS89 / TM35FIN(N,E)',
    wkt:
     'PROJCS["ETRS89 / TM35FIN(N,E)",GEOGCS["ETRS89",DATUM["European_Terrestrial_Reference_System_1989",SPHEROID["GRS 1980",6378137,298.257222101,AUTHORITY["EPSG","7019"]],TOWGS84[0,0,0,0,0,0,0],AUTHORITY["EPSG","6258"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AUTHORITY["EPSG","4258"]],PROJECTION["Transverse_Mercator"],PARAMETER["latitude_of_origin",0],PARAMETER["central_meridian",27],PARAMETER["scale_factor",0.9996],PARAMETER["false_easting",500000],PARAMETER["false_northing",0],UNIT["metre",1,AUTHORITY["EPSG","9001"]],AUTHORITY["EPSG","5048"]]',
    proj4:
     '+proj=utm +zone=35 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs',
    bbox: [ 70.09, 19.08, 58.84, 31.59 ],
    unit: 'metre',
    area: 'Finland - onshore and offshore.',
    accuracy: 1,
    pointLocal: { x: 304063.10500895214, y: 7072726.209520935, z: 0 } } ]
```
