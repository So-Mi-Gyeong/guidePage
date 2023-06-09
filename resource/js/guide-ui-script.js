$(document).ready(function(){

  const myTab = () => {
    const tabList = document.querySelectorAll('.defualt_tab_list');
    //const tabItem = document.querySelectorAll('.defualt_tab_item');


    //Tab
    // for(var i = 0; i < tabItem.length; i++){
    //   tabItem[i].querySelector('.btn').addEventListener('click', function(e){
    //     e.preventDefault();
    //     for(var j = 0; j < tabItem.length; j++){
    //       tabItem[j].classList.remove('on');
    //     }
    //     this.parentNode.classList.add('on');
    //   });
    // }
 
    //forOf
    // for (const tab of tabItem) {
    //   tab.addEventListener('click', function(e){
    //     for(let tabClick of tabItem){
    //       tabClick.classList.remove('on');
    //     }
    //     this.classList.add('on');
    //   });
    // }

    //tabAct에 넣은 forOf
    for(const tabArea of tabList){

      tabArea.addEventListener('click', function(){
        let tabChild = this.children;//클릭한 ul의 자식요소

        for(const tabClick of tabChild){
          tabClick.addEventListener('click', function(){//클릭한 li
            let elePrent = this.parentElement; //클릭한 li의 부모요소
            let prentChild = elePrent.children; //elePrent의 자식요소
            let eleonClass = elePrent.getElementsByClassName('on'); //prentChild 중 on을 가진 요소

            let onBowl = [];
            onBowl.push(eleonClass);//on을 가진 요소를 배열에 담기

            for(let aa of onBowl){
              aa.classList.remove('on');
            }
            
          });   
        }

      });

    }


    // const tabAct = (e) => {

  
    //   for (const tabArea of tabItem){
    //     tabArea.addEventListener('click', function(e){
    //       if(this.classList.contains('on')){
    //         this.classList.remove('on');
    //       }else{
    //         this.classList.add('on');
    //       }
    //       for(let tabClick of tabItem){
    //         tabClick.classList.remove('on');
    //       }
    //       this.classList.add('on');
    //     });
    //   }
    // }

    // for (const tab of tabList) {
    //   tab.addEventListener('click', tabAct);
    // }
  }
  myTab();
});
