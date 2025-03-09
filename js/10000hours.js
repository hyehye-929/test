const startButton = document.querySelector(".start_btn");/*document.querySelector:html에서 start_btn의주소. 이것을 startButton 변수에 넣어줌*/
const result = document.querySelector(".result");
const modal = document.querySelector("#modal");
const openButton = document.querySelector(".modal_btn");
const closeButton = document.querySelector(".close_btn");
const shareButton = document.querySelector(".share_btn");
const loading = document.querySelector(".result_loading");

function calculator(){  /*()를 붙이는건 함수를 실행하라는명령*/
    const fieldValue = document.querySelector("#field_value");
    let timeValue = document.querySelector("#time_value");/* Number로 입력받으니 _int 넣기 */
    let timeValue_int = Number(timeValue.value);

    const fieldResult = document.querySelector(".field_result");
    const timeResult = document.querySelector(".time_result");

    if(fieldValue.value == ""){ /* 만약에 fieldValue에 아무것도 입력되지않았을경우 */
        alert('입력되지 않았습니다.'); /* alert(경고창)을 띄운다 */
        fieldValue.focus();
        return false;
    } else if(timeValue.value == ""){
        alert('입력되지 않았습니다.');
        timeValue.focus();
        return false;
    } else if (timeValue_int > 24){
        alert('잘못된 값입니다. 24이하의 값을 입력해 주세요.');
        return false;
    }

    result.style.display = "none";
    loading.style.display = "flex"; /* 로딩 화면이 먼저 */

    setTimeout(function() {
        loading.style.display = "none";
        result.style.display = "flex";
        fieldResult.innerText = fieldValue.value;
        timeResult.innerText = parseInt((10000/timeValue_int), 10);
    }, 1800);   /* parseInt : 소수점자리는 빼고 나눈값을 출력. 10진수로. 1.8초뒤에 실행*/
}

function openModal(){
    modal.style.display = "flex";
}

function closeModal(){
    modal.style.display = "none";
}

window.onclick = function (event) { /* 클로우즈버튼이 아닌 다른곳을 눌렀을때도 닫히게 하기 */
    if(event.target == modal) {
        closeModal();
    }
}

function copyUrl(){ /* url을 카피하는 소스코드*/
    const url= window.location.href;

    navigator.clipboard.writeText(url).then(()=>{
        alert("URL이 복사되었습니다");
    });

    /*let url = window.location.href; /* url을 카피하는 소스코드 (예전방식)
    let tmp = document.createElement('input'); 
    
    document.body.appendChild(tmp);
    tmp.value = url;
    tmp.select();
    document.execCommand("copy");
    document.body.removeChild(tmp);
    
    alert("URL이 복사되었습니다"); */
}

shareButton.addEventListener('click',copyUrl);/*shareButton요소를 click했을때copyUrl함수를사용해라 */
openButton.addEventListener('click',openModal);
closeButton.addEventListener('click',closeModal);
startButton.addEventListener('click',calculator);