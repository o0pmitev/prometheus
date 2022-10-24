enum resultConversionEnum {
    AS_STRING = "as-string",
    AS_NUMBER = "as-number",
};

type Combinable = number | string;
type ConversionDescriptor = resultConversionEnum.AS_NUMBER | resultConversionEnum.AS_STRING;

function combine( 
    input1: Combinable, 
    input2: Combinable, 
    resultConversion : ConversionDescriptor
    ): number | string  {
    let result;
    if(typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    } 
    if(typeof input1 === "string" || typeof input2 === "string") {
        result = input1.toString() + input2.toString();
    }

    if(resultConversion === resultConversionEnum.AS_NUMBER) {
        return +result;
    } else {
        return result.toString();
    }

};



const combineAges = combine(30, 26, resultConversionEnum.AS_NUMBER);
console.log(combineAges);

const combineNames = combine("Plamen", "Mitev", resultConversionEnum.AS_STRING);
console.log(combineNames);
