module.exports = function toReadable (number) {
    let numbers = {"1" : "one " , "2" : "two " , "3" : "three " , "4" : "four " , "5" : "five " , "6" : "six " , "7" : "seven " , "8" : "eight " , "9" : "nine " , "10" : "ten " , "11" : "eleven " , "12" : "twelve " , "13" : "thirteen " , "14" : "fourteen " , "15" : "fifteen " , "16" : "sixteen " , "17" : "seventeen " , "18" : "eighteen " , "19" : "nineteen " , "20" : "twenty " , "30" : "thirty " , "40" : "forty " , "50" : "fifty " , "60" : "sixty " , "70" : "seventy " , "80" : "eighty " , "90" : "ninety " , "100" : "hundred " }
    var a = ''
    var b = ''
    var c = ''   
    if (number === 0){
        return 'zero'
    }

    var hund = (Math.floor(number/100))

    if (hund > 0){      
     a = numbers[hund]+numbers[100]
    } 


    var dec = number%100

    if (dec < 20 && dec > 0 ) {
      b = numbers[dec]
    } 
    if (dec < 100 && dec >= 20) {
      b = numbers[Math.floor(dec/10)*10]
      if (dec%10 > 0){
        c =  numbers[dec%10]
      }

    }  

    var str = a + b + c
 
    return str.trim()
    
   }
