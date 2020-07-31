const container =document.querySelector('.container');
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
let ticketPrice = +movieSelect.value;

populateUI();//回调函数

//更新座位数和总票价
function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    //获得可选座位的数组索引值
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

    //索引数组的本地存储
    localStorage.setItem('selectedSeats',JSON.stringify(seatsIndex));

    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;

}

//保存电影索引值和票价
function setMovieDate(movieIndex,moviePrice){
    localStorage.setItem("selectedMovieIndex",movieIndex);
    localStorage.setItem("selectedMoviePrice",moviePrice);
}

//电影下拉框事件监听
movieSelect.addEventListener('change',ev => {
    ticketPrice = +ev.target.value;
    setMovieDate(ev.target.selectedIndex , ev.target.value);
    updateSelectedCount();
})

//获取本地数据并渲染样式
function populateUI(){
    const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
    console.log(selectedSeats);
    if(selectedSeats != null && selectedSeats.length > 0){
        seats.forEach((seat,index) => {
            if(selectedSeats.indexOf(index) > -1){
                seat.classList.add("selected");
            }
        });
    }

    const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");
    if(selectedMovieIndex != null){
        movieSelect.selectedIndex = selectedMovieIndex;
    }
}

//座位点击事件
container.addEventListener('click',evt => {
    if (evt.target.classList.contains('seat') && !evt.target.classList.contains('occupied')){
        evt.target.classList.toggle('selected'); //有就添加 ，没有就移除
    }

    updateSelectedCount();
})

// 设置初始座位和总票价
updateSelectedCount();