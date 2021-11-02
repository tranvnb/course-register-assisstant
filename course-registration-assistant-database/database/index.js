var cheerio = require('cheerio');
var fs = require('fs'); 
console.log("start app");
let resultArr = [];
fs.readFile('data/index.html', 'utf8', function(err, data) {

    if (err) throw err;

    var $ = cheerio.load(data, null, false);
    let test = $('table.dataentrytable > tbody').toArray();
    let checkboxList = $('table.dataentrytable > tbody > tr > td input[type=checkbox]').toArray();
    let course = {};

    // 1 empty
    // has 'section notes:'
    // has days:, time:, building:, room:
    // not 3 above + not empty
    $(test[1]).children().each((idx, element) => {
        
        // resultArr.push('==================');
        // resultArr.push($(element).text());

        if (element) {
            let courseIndex = -1;
            const text = $(element).text();
            // case sensitive
            if (text.trim() === '') {
                courseIndex = 0;
            } else if (text.includes('Section Notes:')) {
                courseIndex = 3;
            } else if (text.includes('Days:') && text.includes('Room:') && text.includes('Building:')) {
                courseIndex = 2;
            } else {
                courseIndex = 1;
            }

            // resultArr.push('================== ' + courseIndex);
            // resultArr.push($(element).text());

            const info = $(element).children('td').toArray();
            
            switch (courseIndex) {
                case 0:
                    resultArr.push(course); // finised a course, then add to the array
                    course = {};
                    break;
                case 1:

                    course = {...course, 
                        CRN: $(info[1]).text().trim(),
                        subject: $(info[2]).text().trim(),
                        credit: $(info[3]).text().trim(),
                        title: $(info[4]).text().trim(),
                        max: $(info[5]).text().trim(),
                        enrolled: $(info[6]).text().trim(),
                        remain: $(info[7]).text().trim(),
                        wait: $(info[8]).text().trim(),
                        status: $(info[9]).text().trim(),                        
                        startEnd: $(info[10]).text().trim(),
                        campus: $(info[11]).text().trim(),
                        delivery_mode:$(info[12]).text().trim(), 
                        instructor: $(info[13]).text().trim(),
                        prerequisites: $(info[14]).text().trim(),

                    }
                    break;
                case 2: // Days are in 2 rows
                    const day = extractDays($(info[1]).text().trim());
                    if (course.days == undefined) {
                        // check a special condition on HOSP program : Days: Tue Thu Time: 08:30 - 10:20 Building: Coquitlam - Bldg. A Room: A2290
                        if (day.day.includes(' ')) {
                            // split day of week
                            const dayArr = day.day.split(' ').map(d => {return {
                                day: d,
                                time: day.time,
                                buiding: day.buiding,
                                rom: day.rom
                            }})
                            course.days = dayArr;
                        } else {
                            course.days = [day];
                        }
                    } else {
                        course.days.push(day);
                    }
                    break;
                case 3: // session note
                    course = {...course, 
                        sessionnote: $(info[1]).text().trim() + ': ' + $(info[2]).text().trim(),
                    }
                    
                    break;
            } 
            
        }
    });

    // console.log(resultArr[0]);
    // var file = fs.createWriteStream('data/result.text');
    var file = fs.createWriteStream('data/result.json');
    // file.on('error', function(err) { /* error handling */ });
    // resultArr.forEach(function(v) { file.write(v + '\n'); });
    file.write(JSON.stringify(resultArr));
    file.end();
    console.log("Number of checkbox:", checkboxList.length);
    console.log("Number of courses:", resultArr.length);
});

const extractDays = (day) => {
    //Days: Tue Time: 09:30 - 12:20 Building:\n                     Room:',
    const idxTime = day.indexOf('Time:');
    const idxBuilding = day.indexOf('Building:');
    const idxRoom = day.indexOf('Room:');

    const dayOfWeek = day.slice(5, idxTime).trim();  
    const time = day.slice(idxTime + 5, idxBuilding).trim();
    const building = day.slice(idxBuilding, idxRoom).trim();
    const room = day.slice(idxRoom, day.length).trim();

    return {
        day: dayOfWeek,
        time: time,
        buiding: building,
        rom: room
    }
}