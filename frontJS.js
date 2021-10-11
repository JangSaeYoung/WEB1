//6. Math Expression
//문제
//mathMyage 함수의 결과 값이 29가 나오도록 수식을 사용하여  작성해주세요. //

function mathMyage() { // f를 대문자로 쓰고 클론이  빠졌다고  오류가 나서 화가 났다. 
    let result = (3+6)+(100/5);
    return result;
}

console.log(mathMyage());

//매개변수에 인자값을 넣어서 값 구해보기.
function mathMyagenine(num){
    let result3 = num + 20;
    return result3
}
console.log(mathMyagenine(9));

//

function textConnum(){
    let text = "3 더하기 12는 " + (3+12);
     return text;
}
console.log(textConnum());


// if문 조건에 맞게 구현하기.
function myFavoriteColor(color){
    if(color==="navy"){
        return "Goode!";
    }else if(color==="yellow"){
        return "bad!";
    }else{
        return "Whatever!";
    }
}
console.log(myFavoriteColor("red"));
console.log(myFavoriteColor("yellow"));
console.log(myFavoriteColor("navy"));

function rockPaperScissors (player1, player2){ // 두 개의 매개변수가 필요하다. 
  if((player1 ==="가위" && player2 === "보") || (player1 ==="바위" && player2 === "가위")
  || (player1 ==="보" && player2 === "바위")){
    return "player1";
  }else if((player1 ==="보" && player2 === "가위") || (player1 ==="가위" && player2 === "바위")
  || (player1 ==="바위" && player2 === "보")){
      return "player2"
  }else{
      return "player1";
  }
}

// 와 이거 이렇게 다 구하는게 맞을까? 어마어마하네 
console.log(rockPaperScissors ("가위", "바위"));

function isbiggerThanHundred (myNumber){
  if (myNumber > 100){
      return "크다!"
  }else(myNumber <=100) //여기서 왜 {}안 넣어야 답이 나오는 걸까?????
      return "작다!"
  }


console.log(isbiggerThanHundred (199));

function halfNumber(num){
    return num/2;
  }
  console.log( halfNumber(6));

function halfAndAddNumber(num){
    let result = halfNumber(num);
    return result + 1
}
console.log(halfAndAddNumber(100));

//년월일 
function meetAt(year, month, date){
  if(date){
      return year +"/"+month+"/"+date;
  }else if(month){
      return year + "년 " + month +"월"; // 띄어쓰기 주의
  }else if(year){
      return year +"년";
  }
}
console.log( meetAt(2021, 10, 5)); // 인자 하나만 받을 때는? 어떻게 작성하지?

// for 반복문

// let cities = ["서울", "대전", "대구", "부산", "광주", "제주도"];
// let home ="서울";
// for (let i=0; i<=50; i++){
//     if (cities[i] === home){
//         alert("아, 여기 사시는군요");
//     }
// }

const home ="대전";
// const cities = ["서울", "대전", "대구", "부산", "광주", "제주도"];
const cities = ["서울", "대전", "대구", "대전", "광주", "대전"];

for(let i=0; i<=5; i++) {
    if(cities[i] === home){  // i가 0일 때, cities[0]과 Home을 비교
        console.log("아, " + cities[i] + " 사시는군요");
    }
}

//16-4. 반복문의 다양한 활용
// for (var i = 2; i < 10; i = i + 2) //2,4,6,8로 2씩 증가
// for (var i = 10; i > 7; i--) // 1씩 감소하면서 FOR문 안의 코드를 실행

// let cities2 = ["서울", "대전", "대구", "대전", "광주", "대전"];
// console.log(cities.length)

// for(var i=0; i<cities.length; i++){
//     if(cities[i] === home){
//         alert("아, 여기 사시는군요");
//     }
// }

let arr = [20, 200, 23, 1, 9];
let arr2 = [];
// arr인자는 숫자 값으로만 이루어진 배열
// function findSmallestElement(arr){

//     //arr의 값들 중 가장 작은 값을 리턴해야함
//     //만일 arr이 비어있으면  0을 리턴
//     // for(let i=0; i<arr.length; i++){
//     //    return i
//     // }
//     if(arr.length === 0) return 0;
//     let min =arr[0];
//     for(let i=0; i<arr.length; i++){
//         if(min > arr[i]) min = arr[i];
//     }
//      return min;
// }
// console.log(findSmallestElement(arr));

// function findSmallestElement(arr) {
//     if (arr.length === 0){
//         return 0;
//     }else{
//         let small = arr[0]; // 배열의 첫번째 값을 작은 값으로 임의 지정
//         for(let i=0; i<arr.length; i++){
//             if(arr[i]< small){
//                 small = arr[i]; //for 루프를 돌면서 small보다 작은 값이 존재하면 해당 값을 small로 지정
//             }
//         }return small; //루프 종료 후 가장 작은 값  리턴 
//     }
// }

// console.log(findSmallestElement(arr));

function findSmallestElement(arr) {
     if(arr.length === 0){ //만약 arr의 길이가 0이라면 
        return 0;
     }else{
         let small = arr[0]; // 임의의 변수 small은 arr의 0번째 요소라고 정해주는 거야 
                     //arr의 0번째 요소? 0번째 요소이자 가장 작은 수인건가? 
         for(let i=0; i<arr.length; i++){ //i가 순회하다가
             if(arr[i]<small){  // 배열의 i요소가 변수 Small보다 작으면 
                small = arr[i];
             }
         }return small
     }
    }
     console.log(findSmallestElement(arr));


//17번 배열 조작하기 
//17-1 
let cities1 = []; //cisties라는 변수에 빈 배열을 할당해줌. 
cities1[0] = "서울"; // ["서울"]
cities1[1] = "대전"; // ["서울", "대전"]
cities1[2] = "대구"; // ["서울", "대전", "대구"]

cities1[5] = "제주도"; // 차레대로 안줘도 됨, 원하는 위치 마음대로 요소 할당 가능
cities1[2] = "포항";
console.log(cities1[4]);  //undefined
console.log(cities1[2]);  //요소가 포항으로 수정됨
console.log(cities1);  //요소가 포항으로 수정됨

//17-2
let cities3 = [];
cities3.push("경주","전주"); // 배열의 마지막 부분에 요소 추가됨. 
console.log(cities3); 
cities3.unshift("인천"); // 배열의 맨 앞에 요소 추가 
console.log(cities3); // ["인천","경주","전주"]

//17-3
let cities4 = ["서울","대전","대구"];
cities4.pop(); // 배열의 마지막 요소가 제거 ["서울","대전"]
cities4.pop(); // ["서울"]
console.log(cities4);



let lastCity = cities4.pop(); // pop메소드는 마지막 요소가 제거되기도 하지만, 
console.log(lastCity); // ["대전"] // 마지막 요소의 값을 반환한다. 

//17 Assignment



let arr3 = [1, 20, 10, 5, 100];

function divideArrayInHalf(arr3){
    // result = arr
    // return result;
    
    let div =[];
    for(let i=0; i<arr3.length; i++){
        if(arr3[i]<= 10){
            return div.unshift(i);
        }else(arr3[i]>10)
            return div.push(i);
    }result = div;
    return result
}

console.log(divideArrayInHalf(arr3)); // 1

let array =[1, 20, 10, 5, 100];

function divideArrayInHalf(array){
    let count = array.length;        //인자로 받은 배열의 길이를 변수 count로 정의해줌. 꼭 이렇게 줘야하나?
    let result=[]  // 새롭게 구성될 배열 

    for(let i = 0; i<count; i++){
        // for(let i = 0; i<array.length; i++){ // 콘솔찍으니깐 [10,5,100]만 나온다. 
        let num=array.pop() // 변수로 주는 이유가 뭐지? , 마지막 요소부터 재구성해줘
        if(num <=10){
            result.unshift(num);} //.unshifr(num)이게 정확히 어떻게 들어가는 거지?
        else {result.push(num);} //10보다 크면 맨 뒤로 
    }
    return result;
}
console.log(divideArrayInHalf(array));


let array5 =[1, 20, 10, 5, 100];

function divideArrayInHalf(array5){
    let result=[]
    let leng = array5.length;
    
    for(let i=0; i<leng; i++){
        let num = array5.pop()
        if( num <= 10){
            result.unshift(num);
        }else {result.push(num);
    }
    }
    return result;
}
console.log(divideArrayInHalf(array5));

//18번 데이터 타입
// - 기본 자료형 (Primitive) 인 여섯 가지 데이터 타입
// String (문자열)
// Number (숫자)
// Boolean (true/false)
// Undefined
// Null
// Symbol (ECMAScript 6 에 추가됨)
// - 별도로 Object(객체) 도 있음

let msg = "message";
console.log(typeof msg); //string
console.log(typeof 100); // number

//typeof null
// typeof null → "object"
// null 이라는 데이터 타입이 object 로 반환됩니다.
// null 은 빈 객체를 참조하고 있어서 그렇습니다.

let message = "감사합니다., ";
let userName = "김개발";
let banger ="님!";
let customMess = message + userName + banger;
console.log(customMess);

//string 과 Number형을 더하면 항상 String형으로 반환된다. 

// let name = prompt("성함을 입력해주세요");
// if(name.length ===2){
//     alert("외자이시군요! 이름이 이쁘네요.");
// }else if(name.length === 1){
//     alert("제대로 입력하셨나요?");
// }else if (name.length === 3){
//     alert("멋진 이름입니다.");
// }

//19-4 문자열 찾기
let info = "JavaScript는 프로그래밍 언어이다.";
let firstChar = info.indexOf("프로래밍");

console.log(info, firstChar); // JavaScript는 프로그래밍 언어이다. -1(찬는 문자열이 없으면 -1)

if (firstChar !== -1){
    info =info.slice(0, firstChar) + "프로그래밍"  //slice(잘릴 시작위치, 잘릴 끝위치)
    + info.slice(firstChar+4, info.length);    
}
console.log(info);
console.log(firstChar+4, info.length);

//19번  Assigment

// let address = "경기도 성남시 분당구 중앙공원로 53"
// function sliceCityFromAddress(address){
//     for(let i = 0; i<address.length; i++){
//         if()
//     }
//     return result
// }
let address= "경기도 성남시 분당구 중앙공원로 53" ;

function sliceCityFromAddress(address){
    let indexDo = address.indexOf("도");
    let indexSi = address.indexOf("시");

    if( indexDo !== -1){
          return address.slice(0,indexDo+1) + address.slice(indexSi +1);
    }else {
        return address.slice(indexSi +2);
    }
}
console.log(sliceCityFromAddress(address));

// function sliceCityFromAddress(address){
//   let indexDo = addrees.indexOf("도"); //인자에서  "도"를 찾아내는 변수 값
//   let indexSi = address.indexOf("시");// 인자에서 "시"를 찾아내는 변수 값

//    if( indexSi == -1){ //인덱스 SI가 없다면
//      return address
//    }els
let detail = '자세히\n'+'보아야\n'+'이쁘다';
console.log(detail);

const email = 'yealee.kim87@gmail.com';

console.log(email.startsWith('ye'));
console.log(email.endsWith('com'));
console.log(email.includes('@gmail'));


// const ass = '제 닉네임은  ${nickname}입니다. 취미는 ${intersts}입니다.'

// const handleEdit = (nickname, interests) => {
// const ass = '제 닉네임은  ${nickname}입니다. 취미는 ${intersts}입니다.'
//  let nickname = "뚜비";
//  let interests = "방탈출, 테니스, 멍 때리기";

// }
// console.log(handleEdit = (nickname, interests));

const handleEdit = (nickname, interests) => {
    user ={};
    user.nickname = nickname;
    user.interests = interests.split(',');
    user.bio = `제 닉네임은 ${nickname}입니다. 취미는 ${interests}입니다.`
    return user;
}
console.log(handleEdit("뚜비", "방탈출, 테니스, 멍 때리기"));


// 20번
let a = '900';  
let b = 350; 
let c = Math.random(); 
let d = '5' + 5; 

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);;
console.log(typeof a);

var numberAsNumber = 1234; 
var numberAsString = numberAsNumber.toString();

console.log(numberAsNumber, typeof numberAsNumber);
console.log(numberAsString, typeof numberAsString);

var numberAsNumber = 1234;
var numberAsString = 1234 + "";

console.log(numberAsNumber, typeof numberAsString);
console.log(numberAsString, typeof numberAsString);

var numberAsNumber = "1234"; 
var numberAsString = numberAsNumber - 0;

console.log(numberAsNumber, typeof numberAsNumber);
console.log(numberAsString, typeof numberAsString);

//20번 Assignment
// 우리나라는 국민연금을 만 65세 부터 받을 수 있습니다.
// nationalPensionRemainingYearCount 는 age_string 이라는 input을 받습니다.
// age_string 은 나이 값인데 string형 값으로 되어 있습니다.
// 주어진 나이부터 몇년이 지나야 국민연금을 받을수 있는지 리턴 해주세요.
// 리턴 값은 다음과 같습니다.

// "앞으로 20년 남으셨습니다"
// 예를 들어, age_string 값이 다음과 같다면:

// "35"
// 리턴 값은 다음과 같아야 합니다.

// "앞으로 30년 남으셨습니다"

function nationalPensionRemainingYearCount(age_string){ // 이 함수 Age_string이라는 INput을 받는다.
   //age_string 은 나이 값인데 string형 값으로 되어 있습니다.
   
//    return `앞으로 ${65 - age_string}년 남으셨습니다.`; // 안됨

  let age_number = Number(age_string);
  let years = 65 - age_number;

  return "앞으로 " + years + "년 남으셨습니다";

}



//21번
//1. 날짜 객체 : 시간과 날짜를 얻을 수 있다. 
var rightNow = new Date();
console.log(rightNow);
//* 브라우저마다 표현하는 방법은 다름.
//* GMT 컴퓨터 언어에서는 GMT기준으로 시간을 알려줌. / 기준이 되는 시간
//* Date객체로 현재 시간을 가져온 후, Date객체가 갖고 있는 함수로 각 날짜, 시간의 값을 가져올 수 있다. 

let rightNow1 = new Date();
let year = rightNow.getFullYear();
let month = rightNow.getMonth()+1;
let date = rightNow.getDate();
let day = rightNow.getDay();
let currentHour = rightNow.getHours();
let currentMin = rightNow.getMinutes();
let time = rightNow.getTime();

console.log(time);

//21-3 특정 날짜의 DATE
let date1 = new Date('December 17, 2019 03:24:00');
let date2 = new Date('2019-12-17T03:24:00');
let date3 = new Date(2019, 5, 1);

//Assignment
// function getWesternAge(birthday){
//     let mydate = birthday.getDate();
//     let age = mydate.
//     return 
// }

function getWesternAge(birthday){
    let now = new Date();            // 현재 날짜를 받을 변수를 선언하고
    let birth = new Date(birthday);  // 인자 값으로 받을 특정 생일 날짜를 선언한다. 

    let birthMonth = birth.getMonth(); // 생일달을 구하는 Date객체 
    let nowMonth = now.getMonth(); // 현재달을 구하는 Date 객체 
    
    let birthDate = birth.getDate(); // 생일날을 구하는 Date 객체 
    let nowDate = now.getDate(); // 현재날을 구하는 Date 객체

    let year = now.getFullYear() - birth.getFullYear(); // 현재 년도에서에서 생일년도 빼기 (나이 구하는 그거)
    // let month = now.getMonth()+1 - birth.getMonth()+1; // 

    //우리나라 +1인 만나이를 게산하기 위한 조건문을 만드는 거지.
    if(nowMonth < birthMonth){    // 만약 생일달이 현재달보다 크면
        return year -1        // 생일 달이 지나지 않았으므로 -1 살을 뺀다. 
    }else if (nowMonth > birthMonth){ // 또 만약 현재 달이 생일 달 보다 크면
        return year          // 이건 생일 지난 거니깐 Year값 그대로 받는다. 
    }else if(nowMonth =  birthMonth){ //또 만약 현달과 생일달이 같으면
        if(nowDate >= birthDate){ // 그 중에서도 현재날이 생일 날보다 크거나 같으면
            return year // 그대로 year값 리턴해줘
        }
    }else if(nowDate < birthDate){ // 현재 날이 생일 날보다 작으면 (생일이 안된것으로 나이 먹지 않아)
        return year -1 // 나이 먹지 않으니깐 -1해줘.
    }
}

console.log(getWesternAge(1990-03-21));



//22번 -2 
// * round 반올림 메서드
console.log(Math.round(2.5));  //3
console.log(Math.round(2.49)); //2
console.log(Math.round(2)); //2
console.log(Math.round(2.82));//3
//ex Math.round 함수를 통해 반올림해서 별의 색깔 칠할 수 있다. 

// * ceil  올림 메서드
console.log(Math.ceil(2.5)); //3
console.log(Math.ceil(2.49)); //3
console.log(Math.ceil(2));  //2
console.log(Math.ceil(2.82)); //3

//* floor 내림 메서드
console.log(Math.floor(2.5)); //2
console.log(Math.floor(2.49)); //2
console.log(Math.floor(2)); //2
console.log(Math.floor(2.82)); //2

//22번 -3 랜덤함수
var randomNumber = Math.random();
console.log(randomNumber);

var randomNumber = Math.random();
console.log(Math.floor(randomNumber*10)); //개발자가 원하는 범위의 랜덤수를 설정할 수 있다. 
// 1 등 소수자리는 다 버리고 내림함수를 사용하여 0~10 사이의 랜덤수를 구할 수 있다. 
//ex 로또 , 이벤트 당첨자 뽀을 때 유용

//22번 Assignment
// 최소(min), 최대값(max)을 받아 그 사이의 랜덤수를 return 하는 함수를 구현해주세요.
// 함수는 짧지만, 이번에는 수학의 뇌를 조금 써야 하는 assignment 입니다. 🙌
// 앞으로 랜덤함수를 쓸 일이 정말 많습니다.
// 그런데 Math.random() 으로는 내가 원하는 범위의 랜덤수를 얻을 수가 없습니다.
// 항상 0.0000000000000000에서 0.9999999999999999 사이 값만 return 해주기 때문이죠.

function getRandomNumber (min, max) {
    // let myrandom = Math.random();

    return Math.floor(Math.random() * (max + 1 - min)) + min;

}

console.log(getRandomNumber (3, 100));
//https://velog.io/@saemsol/TIL-40 // 문제 풀이 잘해 주심. 
// 캡쳐 이미지 있음. 

//23번 Object(객체)
let plan1Name = "Basic";
let plan1Price = 3.99;
let plan1Space = 100;
let plan1Data = 1000;
let plan1Pages = 10;
let plan2Name = "Professional";
let plan2Price = 5.99;
let plan2Space = 500;
let plan2Data = 5000;
let plan2Pages = 50;
let plan3Name = "Ultimate";
let plan3Price = 9.99;
let plan3Space = 2000;
let plan3Data = 20000;
let plan3Pages = 500;

// alert(plan2Name + "플랜 가격은 한 달에 " + plan2Price + "달러입니다.")

let plan1 = {
    name: "Basic",
    price: 3.99,
    space: 100,
    transfer: 1000,
    pages: 10
  };
//아래의 규칙을 지켜 객체를 만들 수 있습니다.
// - property 이름은 중복될 수 없다.
// - property이름과 property값 사이에 : (콜론)으로 구분한다.
// - property를 추가할 때는 , (쉼표)를 붙여준다.
// - property 값에는 어느 type이나 가능하다(string, number, array, object, function..)

let myObj = {
    property1: "hello",
    property2: [1,2,3,4,5],
    property3: {
      childproperty: "haha"
    }
  };

let name = "property"; // 
console.log(myObj[name+"1"]); //hello // name(property)의 1번
console.log(myObj[name+"2"]); //[1,2,3,4,5] // name(property)의 2번
console.log(myObj[name+"3"]); // childproperty: "haha"
console.log(myObj[name+"3"]["child"+name]); //haha // child + name(property) = childproperty 이고 그 값이 "haha"

let name1 = "property1";
myObj[name1] = ["hi", "hello"];
console.log(myObj); // 

// myObj.property3.siblingproperty = [3, 6, 9];
// console.log(myObj);

myObj.property3.siblingproperty = [3,6,999];
console.log(myObj);

console.log(myObj.property1[0]); // 이 배열의 첫번쨰 요소에 접근하고 싶어 // hi

//* 객체 안의 객체
let objData = {
    name: 50,
    address: { 
      email: "gaebal@gmail.com",
      home: "위워크 선릉2호점"
    },
    books: {
      year: [2019, 2018, 2006],
      info: [{
        name: "JS Guide",
        price: 9000
      }, {
        name: "HTML Guide",
        price: 19000,
        author: "Kim, gae bal"
      }]
    }
  };

  let bookName = objData.books.info[1].name;
  console.log(bookName); // HTML Guide

//23번 Assignment
// getData 함수를 구현해주세요!
// getData 함수는 세 개의 배열을 인자로 받습니다.
// salesArr : 날짜별 판매량
// ex) [["20190401", 34], ["20190402", 23], ["20190403", 29]]
// reviewArr : 날짜별 리뷰수
// ex) [["20190328", 3], ["20190401", 0], ["20190403", 1]]
// likeArr : 날짜별 좋아요수
// ex) [["20190328", 98], ["20190401", 102], ["20190403", 125]]
// 다음 요구사항을 충족하는 객체를 만들어서 return 해주세요.
// 리턴되는 객체는 아래와 같이 3개의 property를 가집니다.
// sumAmount : 총 판매량
// sumReview : 총 리뷰개수
// sumLike : 총 좋아요수

// function getData(salesArr, reviewArr, likeArr){
//     sumAmount: [["20190401", 34], ["20190402", 23], ["20190403", 29]],
//     sumReview: [["20190328", 3], ["20190401", 0], ["20190403", 1]],
//     sumLike: [["20190328", 98], ["20190401", 102], ["20190403", 125]]
// }

// 
function getData(salesArr,reviewArr, likeArr){
    let sumAmount = 0;
    let sumReview = 0;
    let sumLike = 0;
      
    for (let i = 0; i < salesArr.length; i++) {
      let amount = salesArr[i][1];
      sumAmount += amount;
    }
    
    for (let i = 0; i < reviewArr.length; i++) {
      let review = reviewArr[i][1];
      sumReview += review;
    }
    
    for (let i = 0; i < likeArr.length; i++) {
      let like = likeArr[i][1];
      sumLike += like;
    }
      
    let objData = {};
    objData.sumAmount = sumAmount;
    objData.sumReview = sumReview;
    objData.sumLike = sumLike;
    
    return objData;
    }

// co