// "สร้าง array ใหม่" ดีกว่าสำหรับ 95% ของกรณีจริง
// เว้นแต่จอปัญหา memory หรือทำ optimization ลึกๆ ถึงค่อยหันไปใช้ in-place mutation
const arr1 = [1,2,3,4,5,6,7,8]

function Chunks(arr,chunkSize) {
    let i = 0;
    while (i < arr.length) {
        let chunk = arr.splice(i, chunkSize);
        console.log(arr);
        arr.splice(i, 0, chunk);
        console.log(arr);
        i++;
    }
    return arr;

}
console.log(Chunks(arr1,3));