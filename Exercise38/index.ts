function describe_city(city:string, country: string = "Unknown Country"){
    console.log(`${city} is in ${country}`);
}

describe_city("Karachi", "Pakistan");
describe_city("New York"); // using the default country value
describe_city("Berlin", "Germany");
