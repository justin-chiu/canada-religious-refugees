var ctryIndexClasses = {
    'Low':'low',
    'Moderate':'moderate',
    'High':'high',
    'Very High':'very-high'
}

var ctryReligionClasses = {
    'Christian':'christian',
    'Christian – Coptic':'coptic',
    'Christian – Pentecostal':'pentecostal',
    'Muslim':'muslim',
    'Muslim – Sunni':'sunni',
    'Muslim – Shia':'shia',
    'Muslim – Ahmadi':'ahmadi',
    'Alevi':'alevi',
    'Bahai':'bahai',
    'Buddhist':'buddhist',
    'Chieftaincy and Fetish Priests':'chieftaincy-and-fetish-priests',
    'Hindu':'hindu',
    'Sikh':'sikh',
    'Traditional':'traditional',
    'Apostasy':'apostasy',
    'Varied/Other':'varied-other'
}

var ctryReligionNames = {
    'christian':'Christian',
    'coptic':'Christian&nbsp;(Coptic)',
    'pentecostal':'Christian&nbsp;(Pentecostal)',
    'muslim':'Muslim',
    'sunni':'Muslim&nbsp;(Sunni)',
    'shia':'Muslim&nbsp;(Shia)',
    'ahmadi':'Muslim&nbsp;(Ahmadi)',
    'alevi':'Muslim&nbsp;(Alevi)',
    'bahai':'Baha’i',
    'buddhist':'Buddhist',
    'chieftaincy-and-fetish-priests':'Chieftaincy&nbsp;and&nbsp;Fetish Priests',
    'hindu':'Hindu',
    'sikh':'Sikh',
    'traditional':'Traditional',
    'apostasy':'Apostasy',
    'varied-other':'Varied/Other'
}

// pasted Excel converted to js object here
var ctryData = [
    {
        "number": "0",
        "country": "Pakistan",
        "positionX": "66.2",
        "positionY": "37.7",
        "acceptedClaims": "1785",
        "totalClaims": "2146",
        "acceptanceRate": "83.2%",
        "governmentRestrictions": "High",
        "socialHostilities": "Very High",
        "religiousDiversity": "0.8",
        "clmRel1": "Muslim – Ahmadi",
        "clmRel2": "Muslim – Shia",
        "clmRel3": "Christian",
        "clmRel4": "Varied/Other",
        "clmRel5": "Muslim – Sunni",
        "clmRel6": "",
        "clmRel7": "",
        "clmRel8": "",
        "clmRelNum1": "994",
        "clmRelNum2": "425",
        "clmRelNum3": "234",
        "clmRelNum4": "124",
        "clmRelNum5": "8",
        "clmRelNum6": "",
        "clmRelNum7": "",
        "clmRelNum8": ""
    },
    {
        "number": "1",
        "country": "Iran",
        "positionX": "57.2",
        "positionY": "32.53",
        "acceptedClaims": "1049",
        "totalClaims": "1226",
        "acceptanceRate": "85.6%",
        "governmentRestrictions": "Very High",
        "socialHostilities": "Moderate",
        "religiousDiversity": "0.1",
        "clmRel1": "Christian",
        "clmRel2": "Apostasy",
        "clmRel3": "Varied/Other",
        "clmRel4": "Bahai",
        "clmRel5": "",
        "clmRel6": "",
        "clmRel7": "",
        "clmRel8": "",
        "clmRelNum1": "569",
        "clmRelNum2": "227",
        "clmRelNum3": "166",
        "clmRelNum4": "87",
        "clmRelNum5": "",
        "clmRelNum6": "",
        "clmRelNum7": "",
        "clmRelNum8": ""
    },
    {
        "number": "2",
        "country": "Iraq",
        "positionX": "47.8",
        "positionY": "35.29",
        "acceptedClaims": "973",
        "totalClaims": "1152",
        "acceptanceRate": "84.5%",
        "governmentRestrictions": "Very High",
        "socialHostilities": "Very High",
        "religiousDiversity": "0.2",
        "clmRel1": "Muslim – Sunni",
        "clmRel2": "Varied/Other",
        "clmRel3": "Christian",
        "clmRel4": "Muslim – Shia",
        "clmRel5": "Muslim",
        "clmRel6": "Apostasy",
        "clmRel7": "",
        "clmRel8": "",
        "clmRelNum1": "424",
        "clmRelNum2": "210",
        "clmRelNum3": "208",
        "clmRelNum4": "127",
        "clmRelNum5": "3",
        "clmRelNum6": "1",
        "clmRelNum7": "",
        "clmRelNum8": ""
    },
    {
        "number": "3",
        "country": "Nigeria",
        "positionX": "15.2",
        "positionY": "66.9",
        "acceptedClaims": "218",
        "totalClaims": "1112",
        "acceptanceRate": "19.6%",
        "governmentRestrictions": "High",
        "socialHostilities": "Very High",
        "religiousDiversity": "5.9",
        "clmRel1": "Traditional",
        "clmRel2": "Christian",
        "clmRel3": "Varied/Other",
        "clmRel4": "Chieftaincy and Fetish Priests",
        "clmRel5": "",
        "clmRel6": "",
        "clmRel7": "",
        "clmRel8": "",
        "clmRelNum1": "100",
        "clmRelNum2": "49",
        "clmRelNum3": "37",
        "clmRelNum4": "32",
        "clmRelNum5": "",
        "clmRelNum6": "",
        "clmRelNum7": "",
        "clmRelNum8": ""
    },
    {
        "number": "4",
        "country": "Syria",
        "positionX": "39.5",
        "positionY": "31.3",
        "acceptedClaims": "979",
        "totalClaims": "1067",
        "acceptanceRate": "91.8%",
        "governmentRestrictions": "Very High",
        "socialHostilities": "Very High",
        "religiousDiversity": "1.6",
        "clmRel1": "Muslim – Sunni",
        "clmRel2": "Christian",
        "clmRel3": "Varied/Other",
        "clmRel4": "",
        "clmRel5": "",
        "clmRel6": "",
        "clmRel7": "",
        "clmRel8": "",
        "clmRelNum1": "595",
        "clmRelNum2": "248",
        "clmRelNum3": "136",
        "clmRelNum4": "",
        "clmRelNum5": "",
        "clmRelNum6": "",
        "clmRelNum7": "",
        "clmRelNum8": ""
    },
    {
        "number": "5",
        "country": "China",
        "positionX": "82.5",
        "positionY": "29.1",
        "acceptedClaims": "432",
        "totalClaims": "960",
        "acceptanceRate": "45.0%",
        "governmentRestrictions": "Very High",
        "socialHostilities": "Moderate",
        "religiousDiversity": "7.3",
        "clmRel1": "Christian",
        "clmRel2": "Varied/Other",
        "clmRel3": "Buddhist",
        "clmRel4": "",
        "clmRel5": "",
        "clmRel6": "",
        "clmRel7": "",
        "clmRel8": "",
        "clmRelNum1": "299",
        "clmRelNum2": "119",
        "clmRelNum3": "14",
        "clmRelNum4": "",
        "clmRelNum5": "",
        "clmRelNum6": "",
        "clmRelNum7": "",
        "clmRelNum8": ""
    },
    {
        "number": "6",
        "country": "Egypt",
        "positionX": "25.7",
        "positionY": "47.4",
        "acceptedClaims": "856",
        "totalClaims": "894",
        "acceptanceRate": "95.7%",
        "governmentRestrictions": "Very High",
        "socialHostilities": "Very High",
        "religiousDiversity": "1.1",
        "clmRel1": "Christian – Coptic",
        "clmRel2": "Christian",
        "clmRel3": "Varied/Other",
        "clmRel4": "Muslim – Shia",
        "clmRel5": "",
        "clmRel6": "",
        "clmRel7": "",
        "clmRel8": "",
        "clmRelNum1": "764",
        "clmRelNum2": "57",
        "clmRelNum3": "34",
        "clmRelNum4": "1",
        "clmRelNum5": "",
        "clmRelNum6": "",
        "clmRelNum7": "",
        "clmRelNum8": ""
    },
    {
        "number": "7",
        "country": "Eritrea",
        "positionX": "36.1",
        "positionY": "60.7",
        "acceptedClaims": "351",
        "totalClaims": "429",
        "acceptanceRate": "81.8%",
        "governmentRestrictions": "Very High",
        "socialHostilities": "Low",
        "religiousDiversity": "5.4",
        "clmRel1": "Christian – Pentecostal",
        "clmRel2": "Christian",
        "clmRel3": "Varied/Other",
        "clmRel4": "",
        "clmRel5": "",
        "clmRel6": "",
        "clmRel7": "",
        "clmRel8": "",
        "clmRelNum1": "210",
        "clmRelNum2": "75",
        "clmRelNum3": "66",
        "clmRelNum4": "",
        "clmRelNum5": "",
        "clmRelNum6": "",
        "clmRelNum7": "",
        "clmRelNum8": ""
    },
    {
        "number": "8",
        "country": "Somalia",
        "positionX": "42.4",
        "positionY": "71.4",
        "acceptedClaims": "148",
        "totalClaims": "285",
        "acceptanceRate": "51.9%",
        "governmentRestrictions": "Moderate",
        "socialHostilities": "High",
        "religiousDiversity": "0.1",
        "clmRel1": "Varied/Other",
        "clmRel2": "",
        "clmRel3": "",
        "clmRel4": "",
        "clmRel5": "",
        "clmRel6": "",
        "clmRel7": "",
        "clmRel8": "",
        "clmRelNum1": "148",
        "clmRelNum2": "",
        "clmRelNum3": "",
        "clmRelNum4": "",
        "clmRelNum5": "",
        "clmRelNum6": "",
        "clmRelNum7": "",
        "clmRelNum8": ""
    },
    {
        "number": "9",
        "country": "Turkey",
        "positionX": "36.2",
        "positionY": "25.2",
        "acceptedClaims": "199",
        "totalClaims": "265",
        "acceptanceRate": "75.1%",
        "governmentRestrictions": "Very High",
        "socialHostilities": "High",
        "religiousDiversity": "0.4",
        "clmRel1": "Alevi",
        "clmRel2": "Varied/Other",
        "clmRel3": "Christian",
        "clmRel4": "",
        "clmRel5": "",
        "clmRel6": "",
        "clmRel7": "",
        "clmRel8": "",
        "clmRelNum1": "133",
        "clmRelNum2": "43",
        "clmRelNum3": "23",
        "clmRelNum4": "",
        "clmRelNum5": "",
        "clmRelNum6": "",
        "clmRelNum7": "",
        "clmRelNum8": ""
    },
    {
        "number": "10",
        "country": "Yemen",
        "positionX": "45.9",
        "positionY": "64.2",
        "acceptedClaims": "213",
        "totalClaims": "227",
        "acceptanceRate": "93.8%",
        "governmentRestrictions": "Very High",
        "socialHostilities": "High",
        "religiousDiversity": "0.2",
        "clmRel1": "Varied/Other",
        "clmRel2": "Muslim – Sunni",
        "clmRel3": "Muslim – Shia",
        "clmRel4": "Chieftaincy and Fetish Priests",
        "clmRel5": "",
        "clmRel6": "",
        "clmRel7": "",
        "clmRel8": "",
        "clmRelNum1": "126",
        "clmRelNum2": "76",
        "clmRelNum3": "10",
        "clmRelNum4": "1",
        "clmRelNum5": "",
        "clmRelNum6": "",
        "clmRelNum7": "",
        "clmRelNum8": ""
    },
    {
        "number": "11",
        "country": "Bangladesh",
        "positionX": "81.3",
        "positionY": "51.4",
        "acceptedClaims": "138",
        "totalClaims": "183",
        "acceptanceRate": "75.4%",
        "governmentRestrictions": "High",
        "socialHostilities": "High",
        "religiousDiversity": "2.1",
        "clmRel1": "Hindu",
        "clmRel2": "Christian",
        "clmRel3": "Varied/Other",
        "clmRel4": "Buddhist",
        "clmRel5": "Muslim",
        "clmRel6": "Muslim – Ahmadi",
        "clmRel7": "",
        "clmRel8": "",
        "clmRelNum1": "55",
        "clmRelNum2": "34",
        "clmRelNum3": "25",
        "clmRelNum4": "9",
        "clmRelNum5": "8",
        "clmRelNum6": "7",
        "clmRelNum7": "",
        "clmRelNum8": ""
    },
    {
        "number": "12",
        "country": "Saudi Arabia",
        "positionX": "43.1",
        "positionY": "55.1",
        "acceptedClaims": "123",
        "totalClaims": "159",
        "acceptanceRate": "77.4%",
        "governmentRestrictions": "Very High",
        "socialHostilities": "Moderate",
        "religiousDiversity": "1.5",
        "clmRel1": "Varied/Other",
        "clmRel2": "Muslim – Sunni",
        "clmRel3": "",
        "clmRel4": "",
        "clmRel5": "",
        "clmRel6": "",
        "clmRel7": "",
        "clmRel8": "",
        "clmRelNum1": "119",
        "clmRelNum2": "4",
        "clmRelNum3": "",
        "clmRelNum4": "",
        "clmRelNum5": "",
        "clmRelNum6": "",
        "clmRelNum7": "",
        "clmRelNum8": ""
    },
    {
        "number": "13",
        "country": "India",
        "innerOrder": "TRUE",
        "positionX": "75.5",
        "positionY": "57.7",
        "acceptedClaims": "52",
        "totalClaims": "148",
        "acceptanceRate": "35.1%",
        "governmentRestrictions": "High",
        "socialHostilities": "Very High",
        "religiousDiversity": "4",
        "clmRel1": "Muslim",
        "clmRel2": "Varied/Other",
        "clmRel3": "Sikh",
        "clmRel4": "Christian",
        "clmRel5": "Buddhist",
        "clmRel6": "",
        "clmRel7": "",
        "clmRel8": "",
        "clmRelNum1": "18",
        "clmRelNum2": "13",
        "clmRelNum3": "11",
        "clmRelNum4": "8",
        "clmRelNum5": "2",
        "clmRelNum6": "",
        "clmRelNum7": "",
        "clmRelNum8": ""
    },
    {
        "number": "14",
        "country": "Lebanon",
        "innerOrder": "TRUE",
        "positionX": "34.5",
        "positionY": "34.9",
        "acceptedClaims": "63",
        "totalClaims": "139",
        "acceptanceRate": "45.3%",
        "governmentRestrictions": "Moderate",
        "socialHostilities": "High",
        "religiousDiversity": "5.5",
        "clmRel1": "Muslim – Sunni",
        "clmRel2": "Varied/Other",
        "clmRel3": "Christian",
        "clmRel4": "Muslim – Shia",
        "clmRel5": "",
        "clmRel6": "",
        "clmRel7": "",
        "clmRel8": "",
        "clmRelNum1": "24",
        "clmRelNum2": "24",
        "clmRelNum3": "12",
        "clmRelNum4": "3",
        "clmRelNum5": "",
        "clmRelNum6": "",
        "clmRelNum7": "",
        "clmRelNum8": ""
    },
    {
        "number": "15",
        "country": "Afghanistan",
        "innerOrder": "TRUE",
        "positionX": "65.9",
        "positionY": "31.3",
        "acceptedClaims": "88",
        "totalClaims": "117",
        "acceptanceRate": "75.2%",
        "governmentRestrictions": "High",
        "socialHostilities": "High",
        "religiousDiversity": "0.1",
        "clmRel1": "Muslim – Shia",
        "clmRel2": "Varied/Other",
        "clmRel3": "Christian",
        "clmRel4": "Muslim – Sunni",
        "clmRel5": "",
        "clmRel6": "",
        "clmRel7": "",
        "clmRel8": "",
        "clmRelNum1": "48",
        "clmRelNum2": "30",
        "clmRelNum3": "7",
        "clmRelNum4": "3",
        "clmRelNum5": "",
        "clmRelNum6": "",
        "clmRelNum7": "",
        "clmRelNum8": ""
    },
    {
        "number": "16",
        "country": "Jordan",
        "innerOrder": "TRUE",
        "positionX": "39.9",
        "positionY": "47.9",
        "acceptedClaims": "32",
        "totalClaims": "80",
        "acceptanceRate": "40.0%",
        "governmentRestrictions": "High",
        "socialHostilities": "High",
        "religiousDiversity": "0.6",
        "clmRel1": "Christian",
        "clmRel2": "Varied/Other",
        "clmRel3": "Muslim – Sunni",
        "clmRel4": "",
        "clmRel5": "",
        "clmRel6": "",
        "clmRel7": "",
        "clmRel8": "",
        "clmRelNum1": "18",
        "clmRelNum2": "10",
        "clmRelNum3": "4",
        "clmRelNum4": "",
        "clmRelNum5": "",
        "clmRelNum6": "",
        "clmRelNum7": "",
        "clmRelNum8": ""
    },
    {
        "number": "17",
        "country": "Russia",
        "innerOrder": "TRUE",
        "positionX": "76.8",
        "positionY": "13.3",
        "acceptedClaims": "67",
        "totalClaims": "76",
        "acceptanceRate": "88.2%",
        "governmentRestrictions": "Very High",
        "socialHostilities": "High",
        "religiousDiversity": "4.9",
        "clmRel1": "Varied/Other",
        "clmRel2": "",
        "clmRel3": "",
        "clmRel4": "",
        "clmRel5": "",
        "clmRel6": "",
        "clmRel7": "",
        "clmRel8": "",
        "clmRelNum1": "67",
        "clmRelNum2": "",
        "clmRelNum3": "",
        "clmRelNum4": "",
        "clmRelNum5": "",
        "clmRelNum6": "",
        "clmRelNum7": "",
        "clmRelNum8": ""
    },
    {
        "number": "18",
        "country": "Sudan",
        "innerOrder": "TRUE",
        "positionX": "29.5",
        "positionY": "63.5",
        "acceptedClaims": "53",
        "totalClaims": "69",
        "acceptanceRate": "76.8%",
        "governmentRestrictions": "High",
        "socialHostilities": "Moderate",
        "religiousDiversity": "2",
        "clmRel1": "Christian",
        "clmRel2": "Varied/Other",
        "clmRel3": "Christian – Coptic",
        "clmRel4": "Muslim",
        "clmRel5": "",
        "clmRel6": "",
        "clmRel7": "",
        "clmRel8": "",
        "clmRelNum1": "24",
        "clmRelNum2": "23",
        "clmRelNum3": "5",
        "clmRelNum4": "1",
        "clmRelNum5": "",
        "clmRelNum6": "",
        "clmRelNum7": "",
        "clmRelNum8": ""
    },
    {
        "number": "19",
        "country": "Kazakhstan",
        "innerOrder": "TRUE",
        "positionX": "69.5",
        "positionY": "21.9",
        "acceptedClaims": "56",
        "totalClaims": "63",
        "acceptanceRate": "88.9%",
        "governmentRestrictions": "Very High",
        "socialHostilities": "Low",
        "religiousDiversity": "5",
        "clmRel1": "Varied/Other",
        "clmRel2": "",
        "clmRel3": "",
        "clmRel4": "",
        "clmRel5": "",
        "clmRel6": "",
        "clmRel7": "",
        "clmRel8": "",
        "clmRelNum1": "56",
        "clmRelNum2": "",
        "clmRelNum3": "",
        "clmRelNum4": "",
        "clmRelNum5": "",
        "clmRelNum6": "",
        "clmRelNum7": "",
        "clmRelNum8": ""
    },
    {
        "number": "20",
        "country": "Algeria",
        "innerOrder": "TRUE",
        "positionX": "13.2",
        "positionY": "48.4",
        "acceptedClaims": "41",
        "totalClaims": "53",
        "acceptanceRate": "77.4%",
        "governmentRestrictions": "Very High",
        "socialHostilities": "High",
        "religiousDiversity": "0.5",
        "clmRel1": "Varied/Other",
        "clmRel2": "Muslim – Sunni",
        "clmRel3": "",
        "clmRel4": "",
        "clmRel5": "",
        "clmRel6": "",
        "clmRel7": "",
        "clmRel8": "",
        "clmRelNum1": "38",
        "clmRelNum2": "3",
        "clmRelNum3": "",
        "clmRelNum4": "",
        "clmRelNum5": "",
        "clmRelNum6": "",
        "clmRelNum7": "",
        "clmRelNum8": ""
    },
    {
        "number": "21",
        "country": "Azerbaijan",
        "innerOrder": "TRUE",
        "positionX": "49.7",
        "positionY": "26",
        "acceptedClaims": "37",
        "totalClaims": "50",
        "acceptanceRate": "74.0%",
        "governmentRestrictions": "Very High",
        "socialHostilities": "Low",
        "religiousDiversity": "0.7",
        "clmRel1": "Varied/Other",
        "clmRel2": "",
        "clmRel3": "",
        "clmRel4": "",
        "clmRel5": "",
        "clmRel6": "",
        "clmRel7": "",
        "clmRel8": "",
        "clmRelNum1": "37",
        "clmRelNum2": "",
        "clmRelNum3": "",
        "clmRelNum4": "",
        "clmRelNum5": "",
        "clmRelNum6": "",
        "clmRelNum7": "",
        "clmRelNum8": ""
    },
    {
        "number": "22",
        "country": "Sri Lanka",
        "innerOrder": "TRUE",
        "positionX": "78.8",
        "positionY": "70",
        "acceptedClaims": "31",
        "totalClaims": "39",
        "acceptanceRate": "79.5%",
        "governmentRestrictions": "Moderate",
        "socialHostilities": "Very High",
        "religiousDiversity": "5.6",
        "clmRel1": "Muslim",
        "clmRel2": "Christian",
        "clmRel3": "Varied/Other",
        "clmRel4": "Buddhist",
        "clmRel5": "",
        "clmRel6": "",
        "clmRel7": "",
        "clmRel8": "",
        "clmRelNum1": "17",
        "clmRelNum2": "9",
        "clmRelNum3": "4",
        "clmRelNum4": "1",
        "clmRelNum5": "",
        "clmRelNum6": "",
        "clmRelNum7": "",
        "clmRelNum8": ""
    },
    {
        "number": "23",
        "country": "Libya",
        "innerOrder": "TRUE",
        "positionX": "20.3",
        "positionY": "50",
        "acceptedClaims": "38",
        "totalClaims": "39",
        "acceptanceRate": "97.4%",
        "governmentRestrictions": "High",
        "socialHostilities": "Very High",
        "religiousDiversity": "0.7",
        "clmRel1": "Varied/Other",
        "clmRel2": "Muslim – Ahmadi",
        "clmRel3": "",
        "clmRel4": "",
        "clmRel5": "",
        "clmRel6": "",
        "clmRel7": "",
        "clmRel8": "",
        "clmRelNum1": "37",
        "clmRelNum2": "1",
        "clmRelNum3": "",
        "clmRelNum4": "",
        "clmRelNum5": "",
        "clmRelNum6": "",
        "clmRelNum7": "",
        "clmRelNum8": ""
    },
    {
        "number": "24",
        "country": "Angola",
        "innerOrder": "TRUE",
        "positionX": "23.8",
        "positionY": "85.9",
        "acceptedClaims": "23",
        "totalClaims": "36",
        "acceptanceRate": "63.9%",
        "governmentRestrictions": "Moderate",
        "socialHostilities": "Low",
        "religiousDiversity": "2",
        "clmRel1": "Varied/Other",
        "clmRel2": "Christian",
        "clmRel3": "",
        "clmRel4": "",
        "clmRel5": "",
        "clmRel6": "",
        "clmRel7": "",
        "clmRel8": "",
        "clmRelNum1": "21",
        "clmRelNum2": "2",
        "clmRelNum3": "",
        "clmRelNum4": "",
        "clmRelNum5": "",
        "clmRelNum6": "",
        "clmRelNum7": "",
        "clmRelNum8": ""
    },
    {
        "number": "25",
        "country": "Palestine",
        "innerOrder": "TRUE",
        "positionX": "33",
        "positionY": "44.6",
        "acceptedClaims": "25",
        "totalClaims": "32",
        "acceptanceRate": "78.1%",
        "governmentRestrictions": "Moderate",
        "socialHostilities": "High",
        "religiousDiversity": "0.5",
        "clmRel1": "Varied/Other",
        "clmRel2": "Muslim – Sunni",
        "clmRel3": "Muslim",
        "clmRel4": "",
        "clmRel5": "",
        "clmRel6": "",
        "clmRel7": "",
        "clmRel8": "",
        "clmRelNum1": "22",
        "clmRelNum2": "2",
        "clmRelNum3": "1",
        "clmRelNum4": "",
        "clmRelNum5": "",
        "clmRelNum6": "",
        "clmRelNum7": "",
        "clmRelNum8": ""
    },
    {
        "number": "26",
        "country": "Bahrain",
        "innerOrder": "TRUE",
        "positionX": "53",
        "positionY": "53.5",
        "acceptedClaims": "21",
        "totalClaims": "28",
        "acceptanceRate": "75.0%",
        "governmentRestrictions": "High",
        "socialHostilities": "Moderate",
        "religiousDiversity": "5.4",
        "clmRel1": "Varied/Other",
        "clmRel2": "",
        "clmRel3": "",
        "clmRel4": "",
        "clmRel5": "",
        "clmRel6": "",
        "clmRel7": "",
        "clmRel8": "",
        "clmRelNum1": "21",
        "clmRelNum2": "",
        "clmRelNum3": "",
        "clmRelNum4": "",
        "clmRelNum5": "",
        "clmRelNum6": "",
        "clmRelNum7": "",
        "clmRelNum8": ""
    },
    {
        "number": "27",
        "country": "Americas",
        "innerOrder": "TRUE",
        "positionX": "1.5",
        "positionY": "48.6",
        "acceptedClaims": "34",
        "totalClaims": "97",
        "acceptanceRate": "35.1%",
        "clmRel1": "Varied/Other",
        "clmRel2": "Christian",
        "clmRel3": "",
        "clmRel4": "",
        "clmRel5": "",
        "clmRel6": "",
        "clmRel7": "",
        "clmRel8": "",
        "clmRelNum1": "23",
        "clmRelNum2": "11",
        "clmRelNum3": "",
        "clmRelNum4": "",
        "clmRelNum5": "",
        "clmRelNum6": "",
        "clmRelNum7": "",
        "clmRelNum8": ""
    },
    {
        "number": "28",
        "country": "Europe",
        "innerOrder": "TRUE",
        "positionX": "24",
        "positionY": "21.6",
        "acceptedClaims": "30",
        "totalClaims": "59",
        "acceptanceRate": "50.8%",
        "clmRel1": "Varied/Other",
        "clmRel2": "",
        "clmRel3": "",
        "clmRel4": "",
        "clmRel5": "",
        "clmRel6": "",
        "clmRel7": "",
        "clmRel8": "",
        "clmRelNum1": "30",
        "clmRelNum2": "",
        "clmRelNum3": "",
        "clmRelNum4": "",
        "clmRelNum5": "",
        "clmRelNum6": "",
        "clmRelNum7": "",
        "clmRelNum8": ""
    },
    {
        "number": "29",
        "country": "Northern Africa",
        "innerOrder": "TRUE",
        "positionX": "11.2",
        "positionY": "59",
        "acceptedClaims": "41",
        "totalClaims": "82",
        "acceptanceRate": "50.0%",
        "clmRel1": "Varied/Other",
        "clmRel2": "Apostasy",
        "clmRel3": "Christian",
        "clmRel4": "Muslim – Shia",
        "clmRel5": "",
        "clmRel6": "",
        "clmRel7": "",
        "clmRel8": "",
        "clmRelNum1": "25",
        "clmRelNum2": "8",
        "clmRelNum3": "4",
        "clmRelNum4": "4",
        "clmRelNum5": "",
        "clmRelNum6": "",
        "clmRelNum7": "",
        "clmRelNum8": ""
    },
    {
        "number": "30",
        "country": "Southern Africa",
        "positionX": "31.2",
        "positionY": "79.8",
        "acceptedClaims": "78",
        "totalClaims": "177",
        "acceptanceRate": "44.1%",
        "clmRel1": "Varied/Other",
        "clmRel2": "Christian",
        "clmRel3": "Christian – Coptic",
        "clmRel4": "Chieftaincy and Fetish Priests",
        "clmRel5": "Christian – Pentecostal",
        "clmRel6": "Muslim – Ahmadi",
        "clmRel7": "Muslim – Shia",
        "clmRel8": "",
        "clmRelNum1": "64",
        "clmRelNum2": "4",
        "clmRelNum3": "4",
        "clmRelNum4": "2",
        "clmRelNum5": "2",
        "clmRelNum6": "1",
        "clmRelNum7": "1",
        "clmRelNum8": ""
    },
    {
        "number": "31",
        "country": "Middle East & West Asia",
        "innerOrder": "TRUE",
        "positionX": "57.4",
        "positionY": "60.9",
        "acceptedClaims": "23",
        "totalClaims": "39",
        "acceptanceRate": "59.0%",
        "clmRel1": "Varied/Other",
        "clmRel2": "Christian",
        "clmRel3": "",
        "clmRel4": "",
        "clmRel5": "",
        "clmRel6": "",
        "clmRel7": "",
        "clmRel8": "",
        "clmRelNum1": "20",
        "clmRelNum2": "3",
        "clmRelNum3": "",
        "clmRelNum4": "",
        "clmRelNum5": "",
        "clmRelNum6": "",
        "clmRelNum7": "",
        "clmRelNum8": ""
    },
    {
        "number": "32",
        "country": "East & South Asia",
        "innerOrder": "TRUE",
        "positionX": "90.5",
        "positionY": "44.9",
        "acceptedClaims": "30",
        "totalClaims": "39",
        "acceptanceRate": "76.9%",
        "clmRel1": "Varied/Other",
        "clmRel2": "Christian",
        "clmRel3": "Buddhist",
        "clmRel4": "Muslim",
        "clmRel5": "",
        "clmRel6": "",
        "clmRel7": "",
        "clmRel8": "",
        "clmRelNum1": "18",
        "clmRelNum2": "9",
        "clmRelNum3": "2",
        "clmRelNum4": "1",
        "clmRelNum5": "",
        "clmRelNum6": "",
        "clmRelNum7": "",
        "clmRelNum8": ""
    }
];

function loadCtrys(){
    var ctrysParent = document.querySelector('.wm-content');
    for (a = 0; a < ctryData.length; a++) {
        ctrysParent.insertAdjacentHTML("beforeend",plotCtry(a));
    }
};

function plotCtry(ctryNumber){
    /*
    var ctryObject = ctryData.find(obj => {
        return obj['number'] === ctryNumber
    })
    */

    var ctryObject = ctryData[ctryNumber];

    var ctryHTML= [];
    var id = 'ctry-'+ctryNumber;

    // css properties
    var circleMultiplier = 10;
    var sqrtTotal = Math.sqrt(circleMultiplier * ctryObject['totalClaims']);
    var sqrtAccepted = Math.sqrt(circleMultiplier * ctryObject['acceptedClaims']);
    var sqrtPi = Math.sqrt(Math.PI);

    var circleTotalWidth = Math.round((1000 * 2 * sqrtTotal)/sqrtPi)/1000;
    var circleAcceptedWidth = Math.round((1000 * 2 * sqrtAccepted)/sqrtPi)/1000;

    // parent ctry element opening tags
    ctryHTML[0] = '<div class="ctry" id="' + id + '" style="width:' + circleTotalWidth + 'px;height:' + circleTotalWidth + 'px;top:' + ctryObject['positionY'] + '%;left:' + ctryObject['positionX'] + '%;">' + '<div class="ctry-rotation">';

    // ctry total circle
    ctryHTML[1] = '<div class="ctry-total-clms"></div>'

    // fletching, if exists
    if (ctryObject['governmentRestrictions'] && ctryObject['socialHostilities']) {
        ctryHTML[2] = '<div class="ctry-fletching">' + '<div class="ctry-index-wrapper">' + '<div class="ctry-gov-restrictions ' + ctryIndexClasses[ctryObject['governmentRestrictions']] + '"></div></div>' + '<div class="ctry-index-spacer"></div>' + '<div class="ctry-index-wrapper">' + '<div class="ctry-social-hostilities ' + ctryIndexClasses[ctryObject['socialHostilities']] + '"></div></div></div>';
    }

    else {
        ctryHTML[2] = "";
    }

    // ctry accepted circle
    ctryHTML[3] = '<div class="ctry-accepted-clms" style="width:' + circleAcceptedWidth + 'px;height:' + circleAcceptedWidth + 'px;"></div>';

    // ctry claim religions
    ctryHTML[4] = '<div class="ctry-clm-religions"><div class="ctry-clm-religions-wrapper">' + plotCtryRel(ctryObject,id) + '</div></div>';

    // parent ctry element closing tags
    ctryHTML[5] = '</div>' + '<div class="ctry-title">' + '<div class="wm-heading-2">' + ctryObject['country'] + '</div></div></div>';

    if (ctryObject.innerOrder == 'TRUE') {
        return ctryHTML[0] + ctryHTML[2] + ctryHTML[1] + ctryHTML[3] + ctryHTML[4] + ctryHTML[5];
    }

    else {
        return ctryHTML[0] + ctryHTML[1] + ctryHTML[2] + ctryHTML[3] + ctryHTML[4] + ctryHTML[5];
    }
};

function plotCtryRel(ctryObject, ctryID) {
    var ctryRelHTML = '';
    var plotVariedOther;
    var variedOtherRef;

    for (i = 0; i < 8; i++) {
        var relRef = i+1;
        var relName = 'clmRel' + relRef;
        var relNum = 'clmRelNum' + relRef;
        // might break here
        if (ctryObject[relName] == "Varied/Other") {
            plotVariedOther = true;
            variedOtherRef = relRef;
        }
        else if (ctryObject[relName] !== "") {
            var relID = ctryID + '-' + (i+1)
            ctryRelHTML = ctryRelHTML + '<div class="ctry-clm-religion-item ' + ctryReligionClasses[ctryObject[relName]] + '" id="' + relID + '" style="flex-grow:' + ctryObject[relNum] + ';"></div>'
        }
    }

    if (plotVariedOther == true) {
        relName = 'clmRel' + variedOtherRef;
        relNum = 'clmRelNum' + variedOtherRef;
        var relID = ctryID + '-' + variedOtherRef

        ctryRelHTML = ctryRelHTML + '<div class="ctry-clm-religion-item ' + ctryReligionClasses[ctryObject[relName]] + '" id="' + relID + '" style="flex-grow:' + ctryObject[relNum] + ';"></div>'
    }

    return ctryRelHTML;
}

function fixCtry() {
    ctryData[28]['country'] = 'Rest of Europe';
    ctryData[29]['country'] = 'Rest of Northern Africa';
    ctryData[30]['country'] = 'Rest of Southern Africa';
    ctryData[31]['country'] = 'Rest of Middle East & West Asia';
    ctryData[32]['country'] = 'Rest of East & South Asia';
};

var mapX;
var mapY;
function centerMap() {
    var mapElement = document.querySelector('.wm');
    var wrapperElement = document.querySelector('.wm-content');

    mapX = (mapElement.offsetWidth / 2) - (wrapperElement.offsetWidth / 2);
    mapY = (mapElement.offsetHeight / 2) - (wrapperElement.offsetHeight / 2);

    var setPosition = 'top:' + mapY + 'px;left:' + mapX + 'px;';

    wrapperElement.setAttribute('style',setPosition);
};

// when webpage opens
fixCtry();
loadCtrys(centerMap());
// panzoom library
var pzElement = document.querySelector('.wm-content-wrapper');
var pz = panzoom(pzElement, {
    zoomDoubleClickSpeed: 1,
    // allow zoom only while pressing alt key
    beforeWheel: function(e) {
        var shouldIgnore = !e.altKey;
        return shouldIgnore;
    },
    // ignore + and -
    filterKey: function(/* e, dx, dy, dz */) {
        return true;
    },
    bounds: true
});
$(document).bind('mousemove', function(e){
    $('#wm-mouse-label').css({
       left:  e.pageX,
       top:   e.pageY
    });
});

// label & hover functions

var hoverObject;
var labelCtry;
var labelTitle;

function setCtryObject(ctryElement){
    var hoverID = $(ctryElement).attr('id');
    var hoverNum = hoverID.replace('ctry-','');
    return ctryData[hoverNum];
};

function setLabel(labelValue){
    $('.wm-mouse-box').html(labelValue);
};

function setLabelRow(labelHeading,labelText){
    var labelTags = {
        textLine:['<div class="caption-sans">','</div>'],
        heading:['<span class="caption-sans bold">','</span>']
    };

    return labelTags.textLine[0] + labelTags.heading[0] + labelHeading + labelTags.heading[1] + labelText + labelTags.textLine[1];

};

// seek child/parent in DOM tree

function ctryTree(currentElement,seekChild) {
    return $($(currentElement).parents('.ctry')).find(seekChild);
}

function parentCtry(childElement) {
    return $(childElement).parents('.ctry');
}

// label triggers

$('.ctry-total-clms').mouseenter(function(){
    var circleParent = $(this).parents('.ctry');
    hoverObject = setCtryObject(circleParent);
    labelCtry = hoverObject['country'].replace(' ','&nbsp;');
    labelTitle = '<div class="wm-mouse-heading"><div class="wm-heading-2">' + labelCtry + '</div></div>';

    setLabel(labelTitle + setLabelRow('Successful&nbsp;&nbsp;',hoverObject['acceptedClaims']) + setLabelRow('Total&nbsp;&nbsp;',hoverObject['totalClaims']) + setLabelRow('Acceptance&nbsp;Rate&nbsp;&nbsp;',hoverObject['acceptanceRate']))

    $('#wm-mouse-label').addClass('visible');
});

$('.ctry-social-hostilities').mouseenter(function(){
    var fletchingParent1 = $(this).parents('.ctry');
    hoverObject = setCtryObject(fletchingParent1);
    labelCtry = hoverObject['country'].replace(' ','&nbsp;');
    labelTitle = '<div class="wm-mouse-heading"><div class="wm-heading-2">' + labelCtry + '</div></div>';

    setLabel(labelTitle + setLabelRow('Social&nbsp;Hostilities&nbsp;&nbsp;',hoverObject['socialHostilities'].replace(' ','&nbsp;')) + setLabelRow('Gov.&nbsp;Restrictions&nbsp;&nbsp;', hoverObject['governmentRestrictions'].replace(' ','&nbsp;')));

    $('#wm-mouse-label').addClass('visible');
});

$('.ctry-gov-restrictions').mouseenter(function(){
    var fletchingParent2 = $(this).parents('.ctry');
    hoverObject = setCtryObject(fletchingParent2);
    labelCtry = hoverObject['country'].replace(' ','&nbsp;');
    labelTitle = '<div class="wm-mouse-heading"><div class="wm-heading-2">' + labelCtry + '</div></div>';

    setLabel(labelTitle + setLabelRow('Social&nbsp;Hostilities&nbsp;&nbsp;',hoverObject['socialHostilities'].replace(' ','&nbsp;')) + setLabelRow('Gov.&nbsp;Restrictions&nbsp;&nbsp;', hoverObject['governmentRestrictions'].replace(' ','&nbsp;')));

    $('#wm-mouse-label').addClass('visible');
});

$('.ctry-clm-religion-item').mouseenter(function(){
    var religionsParent = $(this).parents('.ctry');

    hoverObject = setCtryObject(religionsParent);
    labelCtry = hoverObject['country'].replace(' ','&nbsp;');
    labelTitle = '<div class="wm-mouse-heading"><div class="wm-heading-2">' + labelCtry + '</div></div>';

    var religionsParentID =$(religionsParent).attr('id');
    var itemClasses = $(this).attr('class')
    var itemID = $(this).attr('id');
    var itemReligionClass = itemClasses.replace('ctry-clm-religion-item ','');
    var itemReligionID = itemID.replace(religionsParentID + '-','');

    setLabel(labelTitle + setLabelRow(ctryReligionNames[itemReligionClass] + '&nbsp&nbsp;',hoverObject['clmRelNum'+itemReligionID]))
    
});

$('.ctry').mouseleave(function(){
    $('#wm-mouse-label').removeClass('visible');
});

// hovers

$('.ctry').mouseenter(function(){
    $($(this).find('.ctry-total-clms')).addClass('active');
});

$('.ctry').mouseleave(function(){
    $($(this).find('.ctry-total-clms')).removeClass('active');
});

var religionsLeft;

$('.ctry-clm-religions').mouseenter(function(){
    religionsLeft = $(parentCtry(this)).attr('id');
    var thisReligions = this;

    $(parentCtry(this)).addClass('highlighted');
    $(this).addClass('expanded-med');
    $(ctryTree(this,'.ctry-fletching')).addClass('expanded');

    setTimeout(function(){
       if (religionsLeft == $(parentCtry(thisReligions)).attr('id')) {
            $(thisReligions).removeClass('expanded-med');
            $(thisReligions).addClass('expanded-full');
            $(ctryTree(thisReligions,'.ctry-index-spacer')).addClass('expanded');
        }
    },1100);

});

$('.ctry-clm-religions').mouseleave(function(){
    religionsLeft = '';
    $(this).removeClass('expanded-full');
    $(this).removeClass('expanded-med');
    $(parentCtry(this)).removeClass('highlighted');
    $(ctryTree(this,'.ctry-index-spacer')).removeClass('expanded');
    $(ctryTree(this,'.ctry-fletching')).removeClass('expanded');
});

$('.ctry-gov-restrictions, .ctry-social-hostilities').mouseenter(function(){
    $(ctryTree(this,'.ctry-fletching')).addClass('expanded');
    $(ctryTree(this,'.ctry-clm-religions')).addClass('expanded-med');
});

$('.ctry-gov-restrictions, .ctry-social-hostilities').mouseleave(function(){
    $(ctryTree(this,'.ctry-fletching')).removeClass('expanded');
    $(ctryTree(this,'.ctry-clm-religions')).removeClass('expanded-med');
});

// on pan or zoom

pz.on('panstart', function(e) {
    $('.wm-legend-top, .wm-legend-bottom').addClass('closed');
});

pz.on('panend', function(e) {
    $('.wm-legend-top, .wm-legend-bottom').removeClass('closed');
});

pz.on('zoom', function(e) {
    $('.wm-legend-top, .wm-legend-bottom').addClass('closed');
});

pz.on('zoomend', function(e) {
    $('.wm-legend-top, .wm-legend-bottom').removeClass('closed');
});