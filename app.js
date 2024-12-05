// 1)Berilgan massivdagi barcha elementlarni konsolga chiqaring

// let son = ['birnima', 'birnimalar']
// console.log(son);

// 2)Massiv elementlarining yig‘indisini hisoblang.

// let yegindi = [10, 30 , 50 , 90,]
// let sum = 0;

// for(let i = 0; i<yegindi.length; i++ ){
//     sum += yegindi[i]
// }
// console.log(sum);

// 3)Massivdagi eng katta elementni toping.

// let katta = [ 5, 6 , 8, 2, 34, 54]
// let res = Math.max(...katta)
// console.log(res);

// 4)Massivdagi eng kichik elementni toping.

// let kichik = [81, 24 , 35, 63, 6, 3,36,]
// let res = Math.min(...kichik)
// console.log(res);

// 5)Massivdagi barcha juft sonlarni konsolga chiqaring.

// let massiv = [7,8,0,4,5,1]
// for(let i = 0; i<massiv.length; i++){
//     if(massiv[i] % 2 == 0){
//         console.log(massiv[i]);
        
//     }
// }

// 6)Massivdagi barcha toq sonlarni konsolga chiqaring

// let massiv = [72,12,0,64,532,143]
// for(let i = 0; i<massiv.length; i++){
//     if(massiv[i] % 2 == 1){
//         console.log(massiv[i]);
        
//     }
// }

// 7)Massivdagi manfiy sonlar sonini hisoblang.

// let massiv = [-3,-4,5,9,76,23,-54,-12]
// let counter = 0;
// for( let i = 0; i<massiv.length; i++){
//     if(massiv[i]<0)[
//         counter++
//     ]
// }
// console.log(counter);

// 8)Massivdagi musbat sonlar sonini hisoblang

// let massiv = [-2353,-524,145,92643,76,232,-5453,-12366]
// let counter = 0;
// for( let i = 0; i<massiv.length; i++){
//     if(massiv[i]>0)[
//         counter++
//     ]
// }
// console.log(counter);

// 9)Massivdagi elementlarning o‘rtacha qiymatini toping.

// let massiv = [1, 3, 6, 4, 3, 7, 8,45,3 ]
// let sum = 0;
// for(let i = 0; i<massiv.length; i++){
//     sum += massiv[i]
// }
// console.log(`ortach qiymat ${sum/massiv.length}`);

// 10)Massivdagi barcha elementlarni teskari tartibda joylashtiring (massivni o‘zgartirmasdan)

// let massiv = ['nok', 'uzum', 'anor', 'shaftoli']
// let massiv1 = []
// for (let i = massiv.length -1; i>=0; i--){
//     massiv1.push(massiv[i])
// }
// console.log(massiv1);

// 12)Massivning har bir elementini 2 ga ko‘paytiring va natijani yangi massivga saqlang.

// let massiv = [2, 4, 5, 7, 8 ]
// let yangimassiv =[]
// for(let i = 0; i<massiv.length; i++){
//     yangimassiv.push(massiv[i] * 2);
// }
// console.log(yangimassiv);

// 13)Massiv elementlari orasidan 0 qiymatlari sonini hisoblang.

// let massiv = [0,1 ,3 , 5, 0, 6,7 , 0]
// let counter =0;
// for(let i = 0; i<massiv.length; i++){
// if(massiv[i] == 0){
//     counter++
// }
// }
// console.log(counter);

// 14)Massiv elementlari ichida 5 ga karrali bo‘lgan sonlarni konsolga chiqaring.

// let massiv = [42,3,56,7,768,5,4310,]
// for(let i = 0; i<massiv.length; i++){
//     if(massiv[i] % 5 ==0){
//         console.log(massiv[i]);
        
//     }
// }

// 15)Massivni tartiblang (o‘sish bo‘yicha).

// let massiv = [123,43,5,457,87,9,54,23,523]
// massiv.sort((x ,y)=>x-y)
// console.log(massiv);

// 16)Massivni tartiblang (kamayish bo‘yicha)

// let massiv = [123,43,5,457,87,9,54,23,523]
// massiv.sort((x ,y)=> y-x)
// console.log(massiv);

// 17)Massivning har bir elementiga 3 qo‘shing va natijani yangi massivga saqlang

// let massiv = [2, 4, 5, 7, 8 ]
// let yangimassiv =[]
// for(let i = 0; i<massiv.length; i++){
//     yangimassiv.push(massiv[i] + 3);
// }
// console.log(yangimassiv);

// 18)Massivdagi barcha musbat sonlarni alohida massivga ajrating.

// let massiv = [12,-2,-54,566,86,9,-456,32,-41,-31,2,4]
// let massiv1 = []
// for(let i = 0; i<massiv.length; i++){
//     if(massiv[i]> 0){
//         massiv1.push(massiv[i])
//     }
// }
// console.log(massiv1);

// 19)Massivdagi barcha manfiy sonlarni alohida massivga ajrating.

// let massiv = [12,-2,-54,566,86,9,-456,32,-41,-31,2,4]
// let massiv1 = []
// for(let i = 0; i<massiv.length; i++){
//     if(massiv[i]< 0){
//         massiv1.push(massiv[i])
//     }
// }
// console.log(massiv1);

// 20)Massivning faqat toq indeksdagi elementlarini konsolga chiqaring.

// let massiv = [32,4,65,706,78,7,9,59,89,98]
// for(let i = 1; i<massiv.length; i+=2){
//         console.log(massiv[i]);
    
// }

// 22)Massivda nechta element 10 dan katta ekanini aniqlang.

// let massiv = [31,23,54,5,66,4,75,58,67,7,96,6,9]
// let counter = 0;
// for (let i = 0; i<massiv.length; i++){
//     if(massiv[i]>10){
//         counter++
//     }
// }
// console.log(counter);

// 23)Massivdagi barcha elementlarni 0 ga almashtiring

// let massiv = [2,21,3,4,64,6,5,75,7,]
// let massiv1 = []
// for(let i =0; i<massiv.length; i++){
//     massiv1.push(0)
// }
// console.log(massiv1);

// 24)Massivning birinchi elementini oxiriga o‘tkazing.

// let massiv = [23,45,54,6,67,78,9]
// let res = massiv.shift();
// massiv.push(res)
// console.log(massiv);

// 25)Massivning oxirgi elementini boshiga o‘tkazing.

// let massiv = [23,45,54,6,67,78,9]
// let res = massiv.pop();
// massiv.unshift(res)
// console.log(massiv);

// 26)Massivdan har ikkinchi elementni o‘chiring.

// let massiv = [23,43,54,67,5,58,68,7,9]
// for(let i = 0; i<massiv.length; i+=2){
//     massiv.splice(i, 1)
//     i--;
// }
// console.log(massiv);

// 27)Massivdagi faqat manfiy elementlarni 0 bilan almashtiring.

// let massiv = [2,-21,3,4,-64,-6,5,-75,7,]
// for(let i =0; i<massiv.length; i++){
//     if(massiv[i]<0){
//         massiv[i]=0;
//     }
// }
// console.log(massiv);

// 28)Massivdagi har bir elementni uning indeksiga ko‘paytiring va natijani yangi massivga saqlang.

// let massiv = [21,3,4,3,5,45,6]
// let massiv1 = massiv.map((element, index ) =>element * index);
// console.log(massiv1);

// 29)Massivdan 3 ga bo‘linmaydigan barcha elementlarni o‘chiring

// let massiv = [2,12,43,5,46,7,52,6,24,8,]
// let massiv1 = []
// for(let i = 0; i<massiv.length; i++){
//     if(massiv[i] % 3 ==0){
//         massiv1.push(massiv[i])
//     }
// }
// console.log(massiv1);

// 31)Massiv elementlari orasidan faqat juft indeksdagi sonlarni yangi massivga saqlang.

// let massiv = [21,2,34,3,5,4,6,7,5,8]
// let massiv1 = []
// for(let i = 0; i<massiv.length; i+=2){
//     massiv1.push(massiv[i])
// }
// console.log(massiv1);

// 32)Massivdan 2 ga karrali sonlarni olib tashlang.

// let massiv = [13,2,536,5,65,54,3,24,567,]
// let massiv1 =[]
// for(let i = 0; i<massiv.length; i++){
//     if(massiv[i] % 2 != 0){
//         massiv1.push(massiv[i])
//     }
// }
// console.log(massiv1);

// 34)Massivning birinchi va oxirgi elementlarini almashtiring.

// let massiv = [12,224,3,53,5,6]
//     let res = massiv.shift();
//     let res1 = massiv.pop()
// massiv.push(res)
// massiv.unshift(res1)
// console.log(massiv);

// 36)Massivdagi barcha elementlarni 3 ga bo‘lingan holatda yangi massivga saqlang.

// let massiv = [1,32,4,3,54,6,57,5,8,6,9,38]
// let massiv1 = []
// for(let i = 0; i<massiv.length; i++){
//     if(massiv[i] % 3 ==0){
//         massiv1.push(massiv[i])
//     }
// }
// console.log(massiv1);

// 
// 37)Massivdan manfiy sonlarni olib tashlang.

// let massiv = [-8,-32,435,46,-57,3,-43,-5,4,-3]
// let massiv1 = []
// for( let i = 0; i<massiv.length; i++){
//     if(massiv[i]> 0 ){
//         massiv1.push(massiv[i])
//     }
// }
// console.log(massiv1);

// 38)Massivdagi juft indeksdagi elementlarni 0 ga almashtiring.

// let massiv = [-8,-32,435,46,-57,3,-43,-5,4,-3]
// for( let i = 0; i<massiv.length; i+=2){
//         massiv[i] =0;
// }
// console.log(massiv);

// 40)Massivning o‘rta indeksiga yangi element qo‘shing.

// let massiv = [12,23,4,3,53]
// let massiv1 = 1
// let orta = Math.floor(massiv.length/2)
// massiv.splice(orta ,0, massiv1)
// console.log(massiv);

// 42)Massivni aylantiring (so‘nggi elementni boshiga qo‘ying).

// let massiv = [12,33,5,46,7,5,3]
//     let res = massiv.pop()
//     massiv.unshift(res)
// console.log(massiv);

// 43)Massivni aylantiring (birinchi elementni oxiriga qo‘ying).

// let massiv = [12,33,5,46,7,5,3]
//     let res = massiv.shift()
//     massiv.push(res)
// console.log(massiv);

// 44)Massivni barcha musbat va manfiy elementlarga ajratib, musbatlarini boshiga, manfiylarini oxiriga joylashtiring

// let massiv = [12,-5,3,64,5,4,-7,68,-65,8,-59,]
// let massiv1 = massiv.filter(Element => Element >0)
// let massiv2 = massiv.filter(Element => Element<0)
// let massiv3 = [...massiv1, ...massiv2]
// console.log(massiv3);

// 45)Massivning eng kichik elementini o‘chiring.

// let massiv = [21,3,2,43,5,1]
// let kichik = Math.min(...massiv)
// if(kichik != -1){
//     massiv.splice(kichik ,1)
// }
// console.log(massiv);

// 46)Massivning eng katta elementini o‘chiring.

// let massiv = [21,3,2,43,5,1]
// let kichik = Math.max(...massiv)
// if(kichik != -1){
//     massiv.splice(kichik ,1)
// }
// console.log(massiv);

// 47)Massivdagi barcha sonlarni 2 ga karrali bo‘lgan sonlar bilan almashtiring

// let massiv = [1,3,24,546,76,687,]
// for(let i = 0; i<massiv.length; i++){
//     if(massiv[i] % 2 !=0){
//         massiv[i]*=2;
//     }
// }
// console.log(massiv);

// 50)Massivni aylantirish (rotation) orqali 3 marta oldinga suring.

// let massiv = [32,435,46,3,5,67]
// let n = 3;
// for(let i = 0; i<n; i++){
//     let res = massiv.pop()
//     massiv.unshift(res)
// }
// console.log(massiv);
