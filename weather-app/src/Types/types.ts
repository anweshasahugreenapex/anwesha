export interface Data {
    alpha2Code: string;
    alpha3Code: string;
    altSpellings: any;
    area: number;
    callingCodes: any;
    capital: string;
    currencies: any;
    demonym: string;
    flag: string;
    flags: { svg: string; png: string };
    independent: boolean;
    languages: any;
    latlng: any;
    name: string;
    nativeName: string;
    numericCode: string;
    population: number;
    region: string;
    regionalBlocs: any;
    subregion: string;
    timezones: any;
    topLevelDomain: any;
    translations: any;
  }
  
  export type inputDataType = Data[];
  
  export interface Current {
    cloudcover: number;
    feelslike: number;
    humidity: number;
    is_day: string;
    observation_time: string;
    precip: number;
    pressure: number;
    temperature: number;
    uv_index: number;
    visibility: number;
    weather_code: number;
    weather_descriptions: string[];
    weather_icons: string[];
    wind_degree: number;
    wind_dir: string;
    wind_speed: number;
  }