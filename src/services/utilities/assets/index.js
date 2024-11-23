import * as appSvgs from './appSvgs'

// leave off @2x/@3x
const appImages = {
    backGroundImage : require('../../../assets/images/bg.png'),
    partlycloudy: require('../../../assets/images/partlycloudy.png'),
    heavyrain: require('../../../assets/images/heavyrain.png'),
}

const weatherImages = {
    'Partly cloudy' : require('../../../assets/images/partlycloudy.png'),
    'Moderate rain' : require('../../../assets/images/moderaterain.png'),
    'Patchy rain possible' : require('../../../assets/images/moderaterain.png'),
    'Sunny': require('../../../assets/images/sun.png'),
    'Clear': require('../../../assets/images/sun.png'),
    'Overcast' : require('../../../assets/images/cloud.png'),
    'Clouds' :require('../../../assets/images/cloud.png'),
    'Light rain' : require('../../../assets/images/moderaterain.png'),
    'Moderate rain at times': require('../../../assets/images/moderaterain.png'),
    'Rain': require('../../../assets/images/heavyrain.png'),
    'Fair': require('../../../assets/images/sun.png'),
    'Heavy rain': require('../../../assets/images/heavyrain.png'),
    'Heavy rain at times': require('../../../assets/images/heavyrain.png'),
    'Moderate or heavy freezing rain': require('../../../assets/images/heavyrain.png'),
    'Moderate or heavy rain shower': require('../../../assets/images/heavyrain.png'),
    'Moderate or heavy rain with thunder': require('../../../assets/images/heavyrain.png'),
    'Mist':  require('../../../assets/images/mist.png'),
    'other': require('../../../assets/images/moderaterain.png'),
}

const appIcons = {

    location: require('../../../assets/icons/location.png'),
    wind: require('../../../assets/icons/wind.png'),
    drop: require('../../../assets/icons/drop.png'),
    sun: require('../../../assets/icons/sun.png'),
    calendar: require('../../../assets/icons/calendar.png'),
    locationTag: require('../../../assets/icons/locationTag.png'),
    clock: require('../../../assets/icons/clock.png'),

    // localEyesMiddle: require('../../../assets/icons/localEyesMiddle.png'),
    // localEyesLeft: require('../../../assets/icons/localEyesLeft.png'),
    // localEyesRight: require('../../../assets/icons/localEyesRight.png'),
    // eye: require('../../../assets/icons/eye.png'),
    // lock: require('../../../assets/icons/lock.png'),
    // mail: require('../../../assets/icons/mail.png'),
    // arrow_forward: require('../../../assets/icons/arrow_forward.png'),
    // vector: require('../../../assets/icons/vector.png'),
    // google: require('../../../assets/icons/google.png'),
    // facebook: require('../../../assets/icons/facebook.png'),
    // apple: require('../../../assets/icons/apple.png'),
    // blankCheck: require('../../../assets/icons/blankCheck.png'),
    // checked: require('../../../assets/icons/checked.png'),
    // camera: require('../../../assets/icons/camera.png'),
    // calendar: require('../../../assets/icons/calendar.png'),
    // dropDown: require('../../../assets/icons/dropDown.png'),
    // location: require('../../../assets/icons/location.png'),
    // pin: require('../../../assets/icons/pin.png'),
    // time: require('../../../assets/icons/time.png'),
    // home: require('../../../assets/icons/home.png'),
    // log_out: require('../../../assets/icons/log_out.png'),
    // headphone: require('../../../assets/icons/headphone.png'),
    // notes: require('../../../assets/icons/notes.png'),
    // securitySafe: require('../../../assets/icons/securitySafe.png'),
    // infoCircle: require('../../../assets/icons/infoCircle.png'),
    // plus: require('../../../assets/icons/plus.png'),
    // minus: require('../../../assets/icons/minus.png'),
    // plus_1: require('../../../assets/icons/plus_1.png'),
    // minus_1: require('../../../assets/icons/minus_1.png'),
    // chevron_left: require('../../../assets/icons/chevron_left.png'),
    // notification: require('../../../assets/icons/notification.png'),
    // drawer: require('../../../assets/icons/drawer.png'),
    // search: require('../../../assets/icons/search.png'),
    // equalizer: require('../../../assets/icons/equalizer.png'),
    // nearBy: require('../../../assets/icons/nearBy.png'),
    // star: require('../../../assets/icons/star.png'),
    // map: require('../../../assets/icons/map.png'),
    // chats: require('../../../assets/icons/chats.png'),
    // profile: require('../../../assets/icons/profile.png'),
    // messages: require('../../../assets/icons/messages.png'),
    // book: require('../../../assets/icons/book.png'),
    // car: require('../../../assets/icons/car.png'),
    // car2: require('../../../assets/icons/car2.png'),
    // people: require('../../../assets/icons/people.png'),
    // experience: require('../../../assets/icons/experience.png'),
    // user: require('../../../assets/icons/user.png'),
    // adults: require('../../../assets/icons/adults.png'),
    // young: require('../../../assets/icons/young.png'),
    // baby: require('../../../assets/icons/baby.png'),
    // picker: require('../../../assets/icons/picker.png'),
    // calendarLeft: require('../../../assets/icons/calenderLeft.png'),
    // calendarRight: require('../../../assets/icons/calenderRight.png'),
    // send: require('../../../assets/icons/sendButton.png'),
    // attach: require('../../../assets/icons/attach.png'),
    // download: require('../../../assets/icons/download.png'),
    // edit: require('../../../assets/icons/edit.png'),
    // location_2: require('../../../assets/icons/location_2.png'),
    // card: require('../../../assets/icons/card.png'),
    // delete: require('../../../assets/icons/delete.png'),
    // dining: require('../../../assets/icons/dining.png'),
    // history: require('../../../assets/icons/history.png'),
    // shopping: require('../../../assets/icons/shopping.png'),
    // art: require('../../../assets/icons/art.png'),
    // nightLife: require('../../../assets/icons/nightLife.png'),
    // culture: require('../../../assets/icons/culture.png'),
    // nature: require('../../../assets/icons/nature.png'),
    // sightSeeing: require('../../../assets/icons/sightSeeing.png'),
    // couple: require('../../../assets/icons/couple.png'),
    // family: require('../../../assets/icons/family.png'),
    // sort: require('../../../assets/icons/sort.png'),
    // dollar: require('../../../assets/icons/dollar.png'),
    // medal: require('../../../assets/icons/medal.png'),
    // rating: require('../../../assets/icons/rating.png'),
    // english: require('../../../assets/icons/english.png'),
    // china: require('../../../assets/icons/china.png'),
    // thailand: require('../../../assets/icons/thailand.png'),
    // indonesia: require('../../../assets/icons/indonesia.png'),
    // dummyFlag: require('../../../assets/icons/dummyFlag.png'),
    // close: require('../../../assets/icons/close.png'),
    // trendUp: require('../../../assets/icons/trendUp.png'),
    // currency: require('../../../assets/icons/currency.png'),
    // states: require('../../../assets/icons/states.png'),
    // smallUp:require('../../../assets/icons/smallUp.png'),
    // clock:require('../../../assets/icons/clock.png'),

    // // add:require('../../../assets/icons/add.png'),

    // security: require('../../../assets/icons/security.png'),
    // logIn: require('../../../assets/icons/logIn.png'),
    // format_size: require('../../../assets/icons/format_size.png'),
    // info: require('../../../assets/icons/info.png'),
    // file_text: require('../../../assets/icons/file_text.png'),
    // chevron_right: require('../../../assets/icons/chevron_right.png'),
    // arrow_back: require('../../../assets/icons/arrow_back.png'),
}

const appFonts = {
    // appTextLight: 'Roboto-Light',
    // appTextRegular: 'Roboto-Regular',
    // appTextMedium: 'Roboto-Medium',
    // appTextBold: 'Roboto-Bold',
    appTextLight: 'Urbanist-Light',
    appTextRegular: 'Urbanist-Regular',
    appTextMedium: 'Urbanist-Medium',
    appTextBold: 'Urbanist-Bold',
    appTextExtraBold: 'Urbanist-ExtraBold',

    interBold: 'Inter_24pt-Bold',
    interExtraBold: 'Inter_24pt-ExtraBold',
    interLight: 'Inter_24pt-Light',
    interMedium: 'Inter_24pt-Medium',
    interSemiBold: 'Inter_24pt-SemiBold',
    interRegular: 'Inter_24pt-Regular',

    satoshiBold: 'Satoshi-Bold',
    satoshiLight: 'Satoshi-Light',
    satoshiMedium: 'Satoshi-Medium',
    satoshiRegular: 'Satoshi-Regular',

    baloo2_Bold: 'Baloo2-Bold',
    baloo2_ExtraBold: 'Baloo2-ExtraBold',
    baloo2_Medium: 'Baloo2-Medium',
    baloo2_Regular: 'Baloo2-Regular',
    baloo2_SemiBold: 'Baloo2-SemiBold',

    plusJakartaSans_Bold: 'PlusJakartaSans-Bold',
    plusJakartaSans_ExtraBold: 'PlusJakartaSans-ExtraBold',
    plusJakartaSans_Light: 'PlusJakartaSans-Light',
    plusJakartaSans_Medium: 'PlusJakartaSans-Medium',
    plusJakartaSans_Regular: 'PlusJakartaSans-Regular',
    plusJakartaSans_SemiBold: 'PlusJakartaSans-SemiBold',

    avenirNextLTPro_Regular: 'AvenirNextLTPro-Regular',
    avenirNextLTPro_Medium: 'AvenirNextLTPro-Medium',
    avenirNextLTPro_Bold: 'AvenirNextLTPro-Bold',

    AmiriQuran_Regular: 'AmiriQuran-Regular'
}
const countryList =[
    { "name": "Afghanistan", "code": "AF" },
    { "name": "Albania", "code": "AL" },
    { "name": "Algeria", "code": "DZ" },
    { "name": "Andorra", "code": "AD" },
    { "name": "Angola", "code": "AO" },
    { "name": "Antigua and Barbuda", "code": "AG" },
    { "name": "Argentina", "code": "AR" },
    { "name": "Armenia", "code": "AM" },
    { "name": "Australia", "code": "AU" },
    { "name": "Austria", "code": "AT" },
    { "name": "Azerbaijan", "code": "AZ" },
    { "name": "Bahamas", "code": "BS" },
    { "name": "Bahrain", "code": "BH" },
    { "name": "Bangladesh", "code": "BD" },
    { "name": "Barbados", "code": "BB" },
    { "name": "Belarus", "code": "BY" },
    { "name": "Belgium", "code": "BE" },
    { "name": "Belize", "code": "BZ" },
    { "name": "Benin", "code": "BJ" },
    { "name": "Bhutan", "code": "BT" },
    { "name": "Bolivia", "code": "BO" },
    { "name": "Bosnia and Herzegovina", "code": "BA" },
    { "name": "Botswana", "code": "BW" },
    { "name": "Brazil", "code": "BR" },
    { "name": "Brunei Darussalam", "code": "BN" },
    { "name": "Bulgaria", "code": "BG" },
    { "name": "Burkina Faso", "code": "BF" },
    { "name": "Burundi", "code": "BI" },
    { "name": "Cabo Verde", "code": "CV" },
    { "name": "Cambodia", "code": "KH" },
    { "name": "Cameroon", "code": "CM" },
    { "name": "Canada", "code": "CA" },
    { "name": "Central African Republic", "code": "CF" },
    { "name": "Chad", "code": "TD" },
    { "name": "Chile", "code": "CL" },
    { "name": "China", "code": "CN" },
    { "name": "Colombia", "code": "CO" },
    { "name": "Comoros", "code": "KM" },
    { "name": "Congo (Congo-Brazzaville)", "code": "CG" },
    { "name": "Costa Rica", "code": "CR" },
    { "name": "Croatia", "code": "HR" },
    { "name": "Cuba", "code": "CU" },
    { "name": "Cyprus", "code": "CY" },
    { "name": "Czechia (Czech Republic)", "code": "CZ" },
    { "name": "Denmark", "code": "DK" },
    { "name": "Djibouti", "code": "DJ" },
    { "name": "Dominica", "code": "DM" },
    { "name": "Dominican Republic", "code": "DO" },
    { "name": "Ecuador", "code": "EC" },
    { "name": "Egypt", "code": "EG" },
    { "name": "El Salvador", "code": "SV" },
    { "name": "Equatorial Guinea", "code": "GQ" },
    { "name": "Eritrea", "code": "ER" },
    { "name": "Estonia", "code": "EE" },
    { "name": "Eswatini", "code": "SZ" },
    { "name": "Ethiopia", "code": "ET" },
    { "name": "Fiji", "code": "FJ" },
    { "name": "Finland", "code": "FI" },
    { "name": "France", "code": "FR" },
    { "name": "Gabon", "code": "GA" },
    { "name": "Gambia", "code": "GM" },
    { "name": "Georgia", "code": "GE" },
    { "name": "Germany", "code": "DE" },
    { "name": "Ghana", "code": "GH" },
    { "name": "Greece", "code": "GR" },
    { "name": "Grenada", "code": "GD" },
    { "name": "Guatemala", "code": "GT" },
    { "name": "Guinea", "code": "GN" },
    { "name": "Guinea-Bissau", "code": "GW" },
    { "name": "Guyana", "code": "GY" },
    { "name": "Haiti", "code": "HT" },
    { "name": "Honduras", "code": "HN" },
    { "name": "Hungary", "code": "HU" },
    { "name": "Iceland", "code": "IS" },
    { "name": "India", "code": "IN" },
    { "name": "Indonesia", "code": "ID" },
    { "name": "Iran", "code": "IR" },
    { "name": "Iraq", "code": "IQ" },
    { "name": "Ireland", "code": "IE" },
    { "name": "Israel", "code": "IL" },
    { "name": "Italy", "code": "IT" },
    { "name": "Jamaica", "code": "JM" },
    { "name": "Japan", "code": "JP" },
    { "name": "Jordan", "code": "JO" },
    { "name": "Kazakhstan", "code": "KZ" },
    { "name": "Kenya", "code": "KE" },
    { "name": "Kiribati", "code": "KI" },
    { "name": "Kuwait", "code": "KW" },
    { "name": "Kyrgyzstan", "code": "KG" },
    { "name": "Laos", "code": "LA" },
    { "name": "Latvia", "code": "LV" },
    { "name": "Lebanon", "code": "LB" },
    { "name": "Lesotho", "code": "LS" },
    { "name": "Liberia", "code": "LR" },
    { "name": "Libya", "code": "LY" },
    { "name": "Liechtenstein", "code": "LI" },
    { "name": "Lithuania", "code": "LT" },
    { "name": "Luxembourg", "code": "LU" },
    { "name": "Madagascar", "code": "MG" },
    { "name": "Malawi", "code": "MW" },
    { "name": "Malaysia", "code": "MY" },
    { "name": "Maldives", "code": "MV" },
    { "name": "Mali", "code": "ML" },
    { "name": "Malta", "code": "MT" },
    { "name": "Marshall Islands", "code": "MH" },
    { "name": "Mauritania", "code": "MR" },
    { "name": "Mauritius", "code": "MU" },
    { "name": "Mexico", "code": "MX" },
    { "name": "Micronesia", "code": "FM" },
    { "name": "Moldova", "code": "MD" },
    { "name": "Monaco", "code": "MC" },
    { "name": "Mongolia", "code": "MN" },
    { "name": "Montenegro", "code": "ME" },
    { "name": "Morocco", "code": "MA" },
    { "name": "Mozambique", "code": "MZ" },
    { "name": "Myanmar (Burma)", "code": "MM" },
    { "name": "Namibia", "code": "NA" },
    { "name": "Nauru", "code": "NR" },
    { "name": "Nepal", "code": "NP" },
    { "name": "Netherlands", "code": "NL" },
    { "name": "New Zealand", "code": "NZ" },
    { "name": "Nicaragua", "code": "NI" },
    { "name": "Niger", "code": "NE" },
    { "name": "Nigeria", "code": "NG" },
    { "name": "North Korea", "code": "KP" },
    { "name": "North Macedonia", "code": "MK" },
    { "name": "Norway", "code": "NO" },
    { "name": "Oman", "code": "OM" },
    { "name": "Pakistan", "code": "PK" },
    { "name": "Palau", "code": "PW" },
    { "name": "Palestine", "code": "PS" },
    { "name": "Panama", "code": "PA" },
    { "name": "Papua New Guinea", "code": "PG" },
    { "name": "Paraguay", "code": "PY" },
    { "name": "Peru", "code": "PE" },
    { "name": "Philippines", "code": "PH" },
    { "name": "Poland", "code": "PL" },
    { "name": "Portugal", "code": "PT" },
    { "name": "Qatar", "code": "QA" },
    { "name": "Romania", "code": "RO" },
    { "name": "Russia", "code": "RU" },
    { "name": "Rwanda", "code": "RW" },
    { "name": "Saint Kitts and Nevis", "code": "KN" },
    { "name": "Saint Lucia", "code": "LC" },
    { "name": "Saint Vincent and the Grenadines", "code": "VC" },
    { "name": "Samoa", "code": "WS" },
    { "name": "San Marino", "code": "SM" },
    { "name": "Sao Tome and Principe", "code": "ST" },
    { "name": "Saudi Arabia", "code": "SA" },
    { "name": "Senegal", "code": "SN" },
    { "name": "Serbia", "code": "RS" },
    { "name": "Seychelles", "code": "SC" },
    { "name": "Sierra Leone", "code": "SL" },
    { "name": "Singapore", "code": "SG" },
    { "name": "Slovakia", "code": "SK" },
    { "name": "Slovenia", "code": "SI" },
    { "name": "Solomon Islands", "code": "SB" },
    { "name": "Somalia", "code": "SO" },
    { "name": "South Africa", "code": "ZA" },
    { "name": "South Korea", "code": "KR" },
    { "name": "South Sudan", "code": "SS" },
    { "name": "Spain", "code": "ES" },
    { "name": "Sri Lanka", "code": "LK" },
    { "name": "Sudan", "code": "SD" },
    { "name": "Suriname", "code": "SR" },
    { "name": "Sweden", "code": "SE" },
    { "name": "Switzerland", "code": "CH" },
    { "name": "Syria", "code": "SY" },
    { "name": "Tajikistan", "code": "TJ" },
    { "name": "Tanzania", "code": "TZ" },
    { "name": "Thailand", "code": "TH" },
    { "name": "Timor-Leste", "code": "TL" },
    { "name": "Togo", "code": "TG" },
    { "name": "Tonga", "code": "TO" },
    { "name": "Trinidad and Tobago", "code": "TT" },
    { "name": "Tunisia", "code": "TN" },
    { "name": "Turkey", "code": "TR" },
    { "name": "Turkmenistan", "code": "TM" },
    { "name": "Tuvalu", "code": "TV" },
    { "name": "Uganda", "code": "UG" },
    { "name": "Ukraine", "code": "UA" },
    { "name": "United Arab Emirates", "code": "AE" },
    { "name": "United Kingdom", "code": "GB" },
    { "name": "United States", "code": "US" },
    { "name": "Uruguay", "code": "UY" },
    { "name": "Uzbekistan", "code": "UZ" },
    { "name": "Vanuatu", "code": "VU" },
    { "name": "Vatican City", "code": "VA" },
    { "name": "Venezuela", "code": "VE" },
    { "name": "Vietnam", "code": "VN" },
    { "name": "Yemen", "code": "YE" },
    { "name": "Zambia", "code": "ZM" },
    { "name": "Zimbabwe", "code": "ZW" }
  ]
  

export { appImages, appIcons, appSvgs, appFonts, countryList, weatherImages }
