const allEpsg = require('epsg-index/all.json')
const proj4 = require('proj4');

const assertInput = (input) => {  
    if (!input) {
        throw new Error('getEpsg: Input required');   
    }
    if (!('lat' in input) || !('lng' in input) || !('country' in input)) {
        throw new Error('getEpsg: lat, lng and country required');   
    }
};

const getEpsg = (input) => {
    assertInput(input);
    proj4.defs('WGS84', "+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees");
    let found = [];
    Object.keys(allEpsg).forEach((key) => {
        const obj = allEpsg[key];
        if (obj.bbox !== null && obj.proj4 !== null) {
            if (insideBbox(obj.bbox, input)) {
                let f = obj;
                if (input.country && obj.area !== null) {
                    if (searchArea(input.country.toLowerCase(), obj.area.toLowerCase(), input.strict)) {
                        found.push(obj)
                    }
                } else {
                    found.push(obj)
                }          
            }
        }
    });
        
    let output = [];
    for (let f of found) {      
        f.pointLocal = proj4(proj4('EPSG:4326'), f.proj4,
            {x: input.lng, y: input.lat});
        output.push(f);
    }
    return output;
};

const searchArea = (searchStr, area, strict = false) => {
    if (strict) {
        return area.search(searchStr) === 0;
    } else {
        return area.search(searchStr) !== -1;
    }
};

const insideBbox = (bbox, input) => {
    if (input.lat >= bbox[2] && input.lat <= bbox[0]
        && input.lng >= bbox[1] && input.lng <= bbox[3]) {
            return true;
        }
    return false;
};

module.exports = {
    getEpsg,
};