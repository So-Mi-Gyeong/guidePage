$(document).ready(function(){
  const myTab = () => {
    const tabList = document.querySelectorAll('.defualt_tab_list');  //ul 리스트
    for(const tabArea of tabList){   //tabArea  --> ul 
      tabArea.addEventListener('click', function(e){  //ul에 클릭 이벤트
        const tabChild = this.children; // li 리스트
        
        console.log(tabChild)
        //li를 모두 찾아서 class 값이 on인 거를 모두 제거
        for (const child of tabChild) { 
          if(child.classList.contains('on')){ 
            child.classList.remove('on');
          }
        }
        
        //e 내가 클릭한 녀석 의 이벤트 값이고 e.target은 내가 클릭한 녀석 
        //e.target은 a태그 이므로 그녀석의 부모 e.target.parentElement(li 요소)를 찾아서 class on을 붙여 준다.
        e.target.parentElement.classList.add('on');

      });
    }
  }
  myTab();
});