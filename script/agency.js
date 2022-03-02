(($, window, document, undefined)=>{

  class Agency {
    init(){
        this.parallax();   //패럴럭스
        this.header();
        this.section1();
        this.section2();
        this.section3();
        this.section4();
        this.section5();
        this.section6();
        this.section7();
        this.section8();
        this.section9();
        this.section10();
        this.footer();
    }
    parallax(){  //패럴럭스

        let obj = {
            init(){
                this.section2();
                this.section3();
                this.section4();
                this.section6();
                this.section7();
                this.section8();
                this.section9();
                this.section10();
            },
            section2(){
                const sec2Title    = $('#section2 .title');
                const sec2Col      = $('#section2 .col');
                let   sec2TitleTop = $('#section2 .title').offset().top-$(window).height()-200;
                let   sec2ColTop   = $('#section2 .col').offset().top-$(window).height()-900;
      
                $(window).scroll(()=>{
                    // 초기화설정
                    if( $(window).scrollTop() == 0 ){
                        sec2Title.removeClass('addParallax');
                        sec2Col.removeClass('addParallax');
                    }
      
                    // 섹션2타이틀
                    if( $(window).scrollTop() > sec2TitleTop ){
                        sec2Title.addClass('addParallax');
                    }
      
                    if( $(window).scrollTop() > sec2ColTop ){
                        sec2Col.addClass('addParallax');
                    }
                });
    
            },
            section3(){
                const sec3Title    = $('#section3 .title');
                const sec3Col      = $('#section3 .col');
                let   sec3TitleTop = $('#section3 .title').offset().top-$(window).height()-200;
                let   sec3ColTop   = $('#section3 .col').offset().top-$(window).height()-900;
      
                $(window).scroll(()=>{
                    // 초기화설정
                    if( $(window).scrollTop() == 0 ){
                        sec3Title.removeClass('addParallax');
                        sec3Col.removeClass('addParallax');
                    }
      
                    // 섹션3타이틀
                    if( $(window).scrollTop() > sec3TitleTop ){
                        sec3Title.addClass('addParallax');
                    }
      
                    if( $(window).scrollTop() > sec3ColTop ){
                        sec3Col.addClass('addParallax');
                    }
                });
            },
            section4(){
              const sec4Title        = $('#section4 .title');
              const sec4Row1Col      = $('#section4 .row1-col');
              const sec4Row2Col      = $('#section4 .row2-col');
              let   sec4TitleTop     = $('#section4 .title').offset().top-$(window).height()-200;
              let   sec4Row1ColTop   = $('#section4 .row1-col').offset().top-$(window).height()-900;
              let   sec4Row2ColTop   = $('#section4 .row2-col').offset().top-$(window).height()-900;
              let   t1=false;
              let   t2=false;


              $(window).scroll(()=>{
                  // 초기화설정
                  if( $(window).scrollTop() == 0 ){
                      t1=false;
                      t2=false;
                      sec4Title.removeClass('addParallax');

                      sec4Row1Col.removeClass('addParallax');
                      sec4Row2Col.removeClass('addParallax');

                      sec4Row1Col.removeClass('addGallery');
                      sec4Row2Col.removeClass('addGallery')
                  }
    
                  if( $(window).scrollTop() > sec4TitleTop ){
                      sec4Title.addClass('addParallax');
                  }
    
                  if( $(window).scrollTop() > sec4Row1ColTop ){
                      if(t1==false){
                        t1=true;
                        sec4Row1Col.addClass('addParallax');
                      }
                  }

                  if( $(window).scrollTop() > sec4Row2ColTop ){
                      if(t2==false){
                        t2=true;
                        sec4Row2Col.addClass('addParallax');
                      }
                  }

              });
            },
            section6(){
              
                 const sec6    = $('#section6');
                 let   sec6Top = $('#section6').offset().top-$(window).height();

                  $(window).scroll(()=>{

                      if( $(window).scrollTop() == 0 ){
                        sec6.removeClass('addParallax');
                      }

                      if( $(window).scrollTop() > sec6Top ){
                        sec6.addClass('addParallax');
                      }

                  });

            },
            section7(){

              // 1. 변수설정 및 객체요소.offset().top-$(window).height()설정
              const sec7  = $("#section7");
              let sec7Top = $("#section7").offset().top-$(window).height();
              
              // 2. $(window).scroll() 이벤트
              // 3. 조건에 따른 구현 addClass
              $(window).scroll(()=>{
                  if( $(window).scrollTop() == 0 ){
                      sec7.removeClass('addParallax');
                  }
                  if( $(window).scrollTop() > sec7Top ){
                      sec7.addClass('addParallax');
                  }
              });
            },
            section8(){

                const sec8  = $("#section8");
                let sec8Top = $("#section8").offset().top-$(window).height()+200;
                $(window).scroll(()=>{
                    if( $(window).scrollTop() == 0 ){
                        sec8.removeClass('addParallax');
                    }
                    if( $(window).scrollTop() > sec8Top ){
                        sec8.addClass('addParallax');
                    }
                });

            },
            section9(){
              
              const sec9  = $("#section9");
              let sec9Top = $("#section9").offset().top-$(window).height()+200;

              $(window).scroll(()=>{
                  if( $(window).scrollTop() == 0 ){
                      sec9.removeClass('addParallax');
                  }
                  if( $(window).scrollTop() > sec9Top ){
                      sec9.addClass('addParallax');
                  }
              });

            },
            section10() {

              const sec10  = $("#section10");
              let sec10Top = $("#section10").offset().top-$(window).height()+200;

              $(window).scroll(()=>{
                  if( $(window).scrollTop() == 0 ){
                      sec10.removeClass('addParallax');
                  }
                  if( $(window).scrollTop() > sec10Top ){
                      sec10.addClass('addParallax');
                  }
              });
            }
        }
        obj.init();
    }
    header(){
  
      let newTop = $(window).scrollTop();
      let oldTop = newTop;
      let x = '';

      $(window).scroll(function(){
          if( $(window).scrollTop() == 0 ){
              $('#header').removeClass('addH60');
              $('#header').removeClass('addShow');
              $('#header').removeClass('addHide');
          }
          else{
             $('#header').addClass('addH60');

             //위 아래 방향 알아내야 한다.
              newTop = $(window).scrollTop();
                  x = oldTop-newTop > 0 ? 'UP' : 'DOWN';
                  if(x=='UP'){
                      $('#header').addClass('addShow');
                      $('#header').removeClass('addHide');
                  }

                  if(x=='DOWN'){
                      $('#header').addClass('addHide');
                      $('#header').removeClass('addShow');
                  }
             oldTop = newTop;
          }
      });

      const mainBtn = $('.main-btn');
      const sub = $('.sub');
      const nav = $('#nav');
      const subBtn = $('.sub-btn');
      const subSub = $('.sub-sub');
      let   t = 0;
      
      $('.sub').stop().slideUp(0);

      resizefn();
      function resizefn(){
          
          if($(window).innerWidth()<=991){
              if(t==0){
                t=1;
                mainBtn.off('mouseenter');

                mainBtn.bind('click',function(){
                  $(this).next('.sub').stop().slideToggle(300); 
                });
              }              
          }
          else{
              t=0;
              $('.sub').stop().fadeOut(0);
              mainBtn.off('click');
              //메인메뉴-서브메뉴
              mainBtn.on({
                mouseenter(e){
                  const $this = $(this);
                        sub.stop().fadeOut(0);
                        $this.next().stop().fadeIn(300);
                },
                focusin(e){
                  const $this = $(this);
                        sub.stop().fadeOut(0);
                        $this.next().stop().fadeIn(300);
                }
              });

              nav.on({
                mouseleave(){
                  sub.stop().fadeOut(300);
                  subSub.stop().fadeOut(300);
                }
              });


              //서브메뉴-서브서브메뉴
              subBtn.on({
                mouseenter(){
                  const $this = $(this);
                        subSub.stop().fadeOut(0);
                        $this.next().stop().fadeIn(300);
                },
                focusin(){
                  const $this = $(this);
                        subSub.stop().fadeOut(0);
                        $this.next().stop().fadeIn(300);
                }
              });
          }

      }

       $(window).resize(function(){
          resizefn();
       });
       $('.mobile-btn').on({
         click: function(){
           
            nav.slideToggle(300);
            $(this).children().toggleClass('addMobile');
         }
       });
    }
    section1(){
      // 슬라이드 관련된 모든 변수 등록
      const slideWrap = $('.slide-wrap');
      const slideView = $('.slide-view');
      const pageBtn = $('.page-btn');
      let   winW = $(window).innerWidth();
      let cnt = 0;

      resizefn();
      function resizefn(){
          return  winW = $(window).innerWidth();
      }

      $(window).resize(function(){
        resizefn();
      });


      function mainSlide(){
        slideWrap.stop().animate({left: -winW*cnt }, 600, 'easeInOutExpo', function(){
          if(cnt>2){cnt=0}
          if(cnt<0){cnt=2}
          slideWrap.stop().animate({left: -winW*cnt }, 0);
        });
        pageEvent();
      }    


      // 페이지 이벤트 함수
      function pageEvent(){
          pageBtn.removeClass('currentPage');
          pageBtn.eq(cnt>2?0:cnt).addClass('currentPage');
      }

      pageBtn.each(function(idx){
        const $this = $(this);
          $this.on({ //버튼3개중에 어느것 this
            click: function(){
              cnt = idx;
              mainSlide();
              console.log(idx);
            }
          });
      });
     
      
      function nextCount(){
        cnt++;
        mainSlide();
      }
      function prevCount(){
        cnt--;
        mainSlide();
      }

      //setInterval(prevCount, 3000);

      // 스와이프(좌우터치 이벤트)
      // 오른족에서 왼쪽으로 터치 : 다음슬라이드   0 >
      // 왼쪽에서 오른족으로  터치 : 이전슬라이드  < 0
      let s = null;///터치 시작 좌표값
      let e = null; //터치 종료 좌표값
      let dS = null; //드래그시작
      let dE = null; //드래그끝
      let mD = null; //마우스다운
      slideView.on({  
          mousedown(event){
            s = event.clientX;
            dS = event.clientX - slideWrap.offset().left-1903;
            mD = true;
          },
          mouseup(event){
            e = event.clientX;
            mD = false;
            if( (s-e) > 0 ){  //시작좌표-종료좌표 > 0 보다 크면 다음슬라이드
              nextCount();
            }
            if( (s-e) < 0 ){  //시작좌표-종료좌표 < 0 보다 작으면 이전슬라이드
              prevCount();
            }
          },  
          mouseleave(event){
            if( mD !== true ){return}
            e = event.clientX;
            mD = false;
            if( (s-e) > 0 ){  //시작좌표-종료좌표 > 0 보다 크면 다음슬라이드
              nextCount();
            }
            if( (s-e) < 0 ){  //시작좌표-종료좌표 < 0 보다 작으면 이전슬라이드
              prevCount();
            }
          },
          mousemove(e){  //드래그 앤 드롭(물체를 잡고 끌고(드래그) 그리고 놓기(드롭) 실제로 구현)
            //반드시 마우스 다운(mouseDown)이 이루어져야 실행한다.
            if( mD !== true ){return}  //!mD
            dE = e.clientX;
            slideWrap.css({left: dE - dS });
          }
      });

      


    }
    section2(){

    }
    section3(){

    }
    section4(){

        //갤러리 이미지 배치 부드럽게 하는 애니메이션
        //position: top left 
        const galleryBtn  = $('.gallery-btn');
        const galleryItem = $('.gallery-item');
        const gallery = $('.gallery');
        let   galW = $(window).innerWidth()/4;
        let   galH = galW*0.8125;
        let   idx  = 0;  //8개 이미지 기본 선택 - 첫번째 버튼
        let   col = 4;
        let   winW = $(window).innerWidth();


        //버튼 클릭시 리사이즈(반응형) 함수 호출 실행
        function resizefn(){
            winW = $(window).innerWidth();

            //창너비에 따라 4개 3개 2개 1개 이미지 배치
            if( winW >= 1200 ){  //1200이상 ~
                col=4;
            }
            else if( winW >= 992 ){  //1200미만 ~ 992
                col=3;
            }            
            else if( winW >= 761 ){  //992미만 ~ 761
                col=2;
            }
            else {  //761미만 ~ 0
                col=1;
            }
            
            galW = $(window).innerWidth()/col;
            galH = galW*0.8125;
            galleryItem.animate({width:galW, height:galH},0); 

            galleryItem.removeClass('addParallax');  //패럴럭스 효과 삭제
            galleryItem.removeClass('addGallery');   //줌효과       

              if(idx==0){ //8개 보이기 ALL
                gallery.css({height:galH*Math.ceil(8/col)});  //줄수
                  //4칸 경우  
                  if(col==4){
                      galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                      galleryItem.eq(1).show().animate({left:galW*1, top:galH*0},0);
                      galleryItem.eq(2).show().animate({left:galW*2, top:galH*0},0);
                      galleryItem.eq(3).show().animate({left:galW*3, top:galH*0},0);
                      galleryItem.eq(4).show().animate({left:galW*0, top:galH*1},0);
                      galleryItem.eq(5).show().animate({left:galW*1, top:galH*1},0);
                      galleryItem.eq(6).show().animate({left:galW*2, top:galH*1},0);
                      galleryItem.eq(7).show().animate({left:galW*3, top:galH*1},0);
                  
                  }                 
                  else if(col==3){  //3칸 경우
                      galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                      galleryItem.eq(1).show().animate({left:galW*1, top:galH*0},0);
                      galleryItem.eq(2).show().animate({left:galW*2, top:galH*0},0);

                      galleryItem.eq(3).show().animate({left:galW*0, top:galH*1},0);
                      galleryItem.eq(4).show().animate({left:galW*1, top:galH*1},0);
                      galleryItem.eq(5).show().animate({left:galW*2, top:galH*1},0);

                      galleryItem.eq(6).show().animate({left:galW*0, top:galH*2},0);
                      galleryItem.eq(7).show().animate({left:galW*1, top:galH*2},0);

                  }
                  else if(col==2){ //2칸 경우
                      galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                      galleryItem.eq(1).show().animate({left:galW*1, top:galH*0},0);

                      galleryItem.eq(2).show().animate({left:galW*0, top:galH*1},0);
                      galleryItem.eq(3).show().animate({left:galW*1, top:galH*1},0);

                      galleryItem.eq(4).show().animate({left:galW*0, top:galH*2},0);
                      galleryItem.eq(5).show().animate({left:galW*1, top:galH*2},0);
 
                      galleryItem.eq(6).show().animate({left:galW*0, top:galH*3},0);
                      galleryItem.eq(7).show().animate({left:galW*1, top:galH*3},0);
                  
                  }
                  else{ //1칸 경우    
                      galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                      galleryItem.eq(1).show().animate({left:galW*0, top:galH*1},0);
                      galleryItem.eq(2).show().animate({left:galW*0, top:galH*2},0);
                      galleryItem.eq(3).show().animate({left:galW*0, top:galH*3},0);
                      galleryItem.eq(4).show().animate({left:galW*0, top:galH*4},0);
                      galleryItem.eq(5).show().animate({left:galW*0, top:galH*5},0);
                      galleryItem.eq(6).show().animate({left:galW*0, top:galH*6},0);
                      galleryItem.eq(7).show().animate({left:galW*0, top:galH*7},0);
                  
                  }

                  galleryItem.eq(4).removeClass('row1-col');
                  galleryItem.eq(5).removeClass('row1-col');
                  galleryItem.eq(6).removeClass('row1-col');
                  galleryItem.eq(7).removeClass('row1-col');

                  galleryItem.eq(4).removeClass('row2-col');
                  galleryItem.eq(5).removeClass('row2-col');
                  galleryItem.eq(6).removeClass('row2-col');
                  galleryItem.eq(7).removeClass('row2-col');

              } //0번 버튼 끝
              else if(idx==1){ //5
                //hide
                gallery.css({height:galH*Math.ceil(5/col)});  //줄수
                galleryItem.eq(0).hide();
                galleryItem.eq(3).hide();
                galleryItem.eq(5).hide();

                if(col==4){
                    //show                    
                    galleryItem.eq(1).show().animate({left:galW*0, top:galH*0},0);
                    galleryItem.eq(2).show().animate({left:galW*1, top:galH*0},0);
                    galleryItem.eq(4).show().animate({left:galW*2, top:galH*0},0);
                    galleryItem.eq(6).show().animate({left:galW*3, top:galH*0},0);
                    
                    galleryItem.eq(7).show().animate({left:galW*0, top:galH*1},0);
                }
                else if(col==3){
                    //show
                    galleryItem.eq(1).show().animate({left:galW*0, top:galH*0},0);
                    galleryItem.eq(2).show().animate({left:galW*1, top:galH*0},0);
                    galleryItem.eq(4).show().animate({left:galW*2, top:galH*0},0);

                    galleryItem.eq(6).show().animate({left:galW*0, top:galH*1},0);                    
                    galleryItem.eq(7).show().animate({left:galW*1, top:galH*1},0);
                }
                else if(col==2){
                    //show
                    galleryItem.eq(1).show().animate({left:galW*0, top:galH*0},0);
                    galleryItem.eq(2).show().animate({left:galW*1, top:galH*0},0);

                    galleryItem.eq(4).show().animate({left:galW*0, top:galH*1},0);
                    galleryItem.eq(6).show().animate({left:galW*1, top:galH*1},0);
                    
                    galleryItem.eq(7).show().animate({left:galW*0, top:galH*2},0);
                }
                else {
                    //show
                    galleryItem.eq(1).show().animate({left:galW*0, top:galH*0},0);
                    galleryItem.eq(2).show().animate({left:galW*0, top:galH*1},0);
                    galleryItem.eq(4).show().animate({left:galW*0, top:galH*2},0);
                    galleryItem.eq(6).show().animate({left:galW*0, top:galH*3},0);
                    galleryItem.eq(7).show().animate({left:galW*0, top:galH*4},0);
                }


                  galleryItem.eq(4).removeClass('row2-col');
                  galleryItem.eq(6).removeClass('row2-col');
                  galleryItem.eq(4).addClass('row1-col');
                  galleryItem.eq(6).addClass('row1-col');
                  
                  galleryItem.eq(7).removeClass('row1-col');
                  galleryItem.eq(7).addClass('row2-col');


              }
              else if(idx==2){
                //hide
                gallery.css({height:galH*Math.ceil(6/col)});
                galleryItem.eq(3).hide();
                galleryItem.eq(7).hide();
                //show
                if(col==4){
                    galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                    galleryItem.eq(1).show().animate({left:galW*1, top:galH*0},0);
                    galleryItem.eq(2).show().animate({left:galW*2, top:galH*0},0);
                    galleryItem.eq(4).show().animate({left:galW*3, top:galH*0},0);
                    
                    galleryItem.eq(5).show().animate({left:galW*0, top:galH*1},0);
                    galleryItem.eq(6).show().animate({left:galW*1, top:galH*1},0);
                }
                else if(col==3){
                    galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                    galleryItem.eq(1).show().animate({left:galW*1, top:galH*0},0);
                    galleryItem.eq(2).show().animate({left:galW*2, top:galH*0},0);

                    galleryItem.eq(4).show().animate({left:galW*0, top:galH*1},0);                  
                    galleryItem.eq(5).show().animate({left:galW*1, top:galH*1},0);
                    galleryItem.eq(6).show().animate({left:galW*2, top:galH*1},0);
                }
                else if(col==2){
                    galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                    galleryItem.eq(1).show().animate({left:galW*1, top:galH*0},0);

                    galleryItem.eq(2).show().animate({left:galW*0, top:galH*1},0);
                    galleryItem.eq(4).show().animate({left:galW*1, top:galH*1},0);  

                    galleryItem.eq(5).show().animate({left:galW*0, top:galH*2},0);
                    galleryItem.eq(6).show().animate({left:galW*1, top:galH*2},0);
                }
                else {
                  galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                    galleryItem.eq(1).show().animate({left:galW*0, top:galH*1},0);
                    galleryItem.eq(2).show().animate({left:galW*0, top:galH*2},0);
                    galleryItem.eq(4).show().animate({left:galW*0, top:galH*3},0);  
                    galleryItem.eq(5).show().animate({left:galW*0, top:galH*4},0);
                    galleryItem.eq(6).show().animate({left:galW*0, top:galH*5},0);
                }

                    galleryItem.eq(4).removeClass('row2-col');
                    galleryItem.eq(4).addClass('row1-col');

                    galleryItem.eq(5).removeClass('row1-col');
                    galleryItem.eq(6).removeClass('row1-col');

                    galleryItem.eq(5).removeClass('row2-col');
                    galleryItem.eq(6).removeClass('row2-col');


              }
              else if(idx==3){
                //hide
                gallery.css({height:galH*Math.ceil(4/col)});

                galleryItem.eq(1).hide();
                galleryItem.eq(6).hide();
                galleryItem.eq(3).hide();
                galleryItem.eq(7).hide();
                //show

            
                if(col==4){
                    galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                    galleryItem.eq(2).show().animate({left:galW*1, top:galH*0},0);
                    galleryItem.eq(4).show().animate({left:galW*2, top:galH*0},0);
                    galleryItem.eq(5).show().animate({left:galW*3, top:galH*0},0);
                }
                else if(col==3){
                    galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                    galleryItem.eq(2).show().animate({left:galW*1, top:galH*0},0);
                    galleryItem.eq(4).show().animate({left:galW*2, top:galH*0},0);

                    galleryItem.eq(5).show().animate({left:galW*0, top:galH*1},0);
                }
                else if(col==2){
                    galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                    galleryItem.eq(2).show().animate({left:galW*1, top:galH*0},0);

                    galleryItem.eq(4).show().animate({left:galW*0, top:galH*1},0);
                    galleryItem.eq(5).show().animate({left:galW*1, top:galH*1},0);
                }
                else {
                    galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                    galleryItem.eq(2).show().animate({left:galW*0, top:galH*1},0);
                    galleryItem.eq(4).show().animate({left:galW*0, top:galH*2},0);
                    galleryItem.eq(5).show().animate({left:galW*0, top:galH*3},0);
                }

                galleryItem.eq(4).removeClass('row2-col');
                galleryItem.eq(5).removeClass('row2-col');
                galleryItem.eq(4).addClass('row1-col');
                galleryItem.eq(5).addClass('row1-col');

              }
              else if(idx==4){
                //hide
                gallery.css({height:galH*Math.ceil(5/col)});

                galleryItem.eq(0).hide();
                galleryItem.eq(1).hide();
                galleryItem.eq(4).hide();


                //show
                if(col==4){
                    galleryItem.eq(2).show().animate({left:galW*0, top:galH*0},0);
                    galleryItem.eq(3).show().animate({left:galW*1, top:galH*0},0);
                    galleryItem.eq(5).show().animate({left:galW*2, top:galH*0},0);
                    galleryItem.eq(6).show().animate({left:galW*3, top:galH*0},0);
    
                    galleryItem.eq(7).show().animate({left:galW*0, top:galH*1},0);  
                }
                else if(col==3){
                    galleryItem.eq(2).show().animate({left:galW*0, top:galH*0},0);
                    galleryItem.eq(3).show().animate({left:galW*1, top:galH*0},0);
                    galleryItem.eq(5).show().animate({left:galW*2, top:galH*0},0);

                    galleryItem.eq(6).show().animate({left:galW*0, top:galH*1},0);
                    galleryItem.eq(7).show().animate({left:galW*1, top:galH*1},0);  

                }
                else if(col==2){
                    galleryItem.eq(2).show().animate({left:galW*0, top:galH*0},0);
                    galleryItem.eq(3).show().animate({left:galW*1, top:galH*0},0);

                    galleryItem.eq(5).show().animate({left:galW*0, top:galH*1},0);
                    galleryItem.eq(6).show().animate({left:galW*1, top:galH*1},0);
    
                    galleryItem.eq(7).show().animate({left:galW*0, top:galH*2},0);  

                }
                else {
                    galleryItem.eq(2).show().animate({left:galW*0, top:galH*0},0);
                    galleryItem.eq(3).show().animate({left:galW*0, top:galH*1},0);
                    galleryItem.eq(5).show().animate({left:galW*0, top:galH*2},0);
                    galleryItem.eq(6).show().animate({left:galW*0, top:galH*3},0);
                    galleryItem.eq(7).show().animate({left:galW*0, top:galH*4},0);  
                }

                    galleryItem.eq(5).removeClass('row2-col');
                    galleryItem.eq(6).removeClass('row2-col');
                    galleryItem.eq(5).addClass('row1-col');
                    galleryItem.eq(6).addClass('row1-col');
                    
                    galleryItem.eq(7).removeClass('row1-col');
                    galleryItem.eq(7).addClass('row2-col');

              }
              else if(idx==5){

                  gallery.css({height:galH*Math.ceil(3/col)});
                  //hide
                  galleryItem.eq(1).hide();
                  galleryItem.eq(2).hide();
                  galleryItem.eq(3).hide();
                  galleryItem.eq(5).hide();
                  galleryItem.eq(6).hide();
                  //show


                  if(col==4){
                    galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                    galleryItem.eq(4).show().animate({left:galW*1, top:galH*0},0);
                    galleryItem.eq(7).show().animate({left:galW*2, top:galH*0},0);
                  }
                  else if(col==3){

                    galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                    galleryItem.eq(4).show().animate({left:galW*1, top:galH*0},0);
                    galleryItem.eq(7).show().animate({left:galW*2, top:galH*0},0);
                  }
                  else if(col==2){

                    galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                    galleryItem.eq(4).show().animate({left:galW*1, top:galH*0},0);

                    galleryItem.eq(7).show().animate({left:galW*0, top:galH*1},0);
                  }
                  else {
                    galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                    galleryItem.eq(4).show().animate({left:galW*0, top:galH*1},0);
                    galleryItem.eq(7).show().animate({left:galW*0, top:galH*2},0);
                  }

                  galleryItem.eq(7).removeClass('row2-col');
                  galleryItem.eq(4).addClass('row1-col');
                  galleryItem.eq(7).addClass('row1-col');

              } //end if

            galleryItem.addClass('addGallery');                  

        }  //리사이드끝

        $(window).resize(function(){
          resizefn();
        });
        resizefn();

        // 갤러리버튼을 클릭하면 해당 이미지 배치를 
        // hide(), show() 메서드를 이용 배치한다.
        //버튼 6개 반복처리
        galleryBtn.each(function(index){      
            $(this).on({
                click: function(e){
                  e.preventDefault();   

                  idx = index;
                  resizefn();  //반응형 호출 

                }
            });
        });


    }
    section5(){
        // svg 객체 내부로 인식
        const circle  = $('.circle circle');  
        const number  = $('.number');
        const per     = [0.56, 0.96, 0.78, 0.83]; //90%        
        let   perSize = []; 
        const second  = 3;
        let   size    = [];
        let   piece   = [];
        let   counter = [0,0,0,0]; //누적하는 변수 초기값 없으면 누적안됨
        let   setId   = [];
        let   sec5Top = $('#section5').offset().top-$(window).height()+300;
        let   t       = false;


        $(window).scroll(function(){

            if( $(window).scrollTop() == 0 ){
              t=false;
            } 

            if( $(window).scrollTop() > sec5Top ){
                if(t==false){
                  t=true;
                  svgAni();
                }
            }
            
        });

        function  svgAni(){
            counter = [0,0,0,0];
            $.each(circle, function(idx, obj){

                //1. 전체길이를 구한다.
                size[idx] = obj.getTotalLength();

                //2. 각요소의 전체길이를 대입한다. 
                obj.style.strokeDasharray  = size[idx];
                obj.style.strokeDashoffset = size[idx];

                //3. 각요소의 퍼센트 길이를 구한다.
                //퍼센트 길이 = 전체길이 * 퍼센트
                perSize[idx] = size[idx] * per[idx];

                //4. 토막 예를 들면 1초에 1마디(피스 piece)의 길이 구한다.
                piece[idx] = (perSize[idx]/second)/100;

                //5. 카운트 타이머 구현 함수 1초간격으로 누적 진행 종료
                //5-1. 메인SVG 함수 : 원그래프가 진행
                function mainSvg(){
                  //오프셋길이를 처음 전체길이로 설정하고 - 빼기 카운트 누적 값(90프로를 한마디씩을 뺀다)
                  $(obj).css({ strokeDashoffset: size[idx]-counter[idx] });                  
                  number.eq(idx).text( Math.ceil(counter[idx]/size[idx]*100) + '%' );
                }
/*                 Math.round(); 반올림     엑셀 round()
                Math.floor(); 자리내림수  엑셀 roudDown()
                Math.ceil();  자리올림수  엑셀 roudUp() */

                //5-2. 카운트 타이머 함수
                function countTimer(){
                  counter[idx] += piece[idx];
                  if( counter[idx] >= perSize[idx] ){
                    clearInterval(setId[idx]);
                  }
                  else{
                    mainSvg();
                  }                  
                }

                setId[idx] = setInterval(countTimer, 10);

            });
        }


    }
    section6(){
        
    }
    section7(){

    }
    section8(){

    }
    section9(){

    }
    section10(){
        
      //웹 서버에 정보 전송하기
      //AJAX
      const submitBtn = $('.submit-btn');
      const name = $('#name');
      const mail = $('#mail');

      //전송버튼
      submitBtn.on({
        click: function(e){
            e.preventDefault();

              if( name.val() =='' ){
                  alert('이름을 입력하세요!')
                  name.focus();
                  return false;
              }            
              if( mail.val() =='' ){
                  alert('메일을 입력하세요!')
                  mail.focus();
                  return false;
              }

              //$.ajax({});
              $.ajax({
                  url:'./response.php',
                  method:'POST',
                  data: {
                      name: name.val(),
                      mail: mail.val()
                  },
                  success: function(result){  //php에서 echo 를 이용 리턴값

                      $('#name').val('');
                      $('#mail').val('');
                      $('#name').focus();
                  },
                  error: function(err){
                      console.log(err);
                      alert('AJAX 전송 오류!');
                  }
              });


        }
      });

      //목록버튼
      $('.list-btn').on({
        click: function(){
          
            $.ajax({
              url:'./data/member_mail.json',
              method:'GET',
              success: function(result){
                 
                 //테이블에 목록 반복 출력
                 let txt = '';
                 $.each(result, function(idx, item){
                     txt += "<tr>";
                     txt += "<td>" + (Number(idx)+1) + "</td>";
                     txt += "<td>" + item.이름 + "</td>";
                     txt += "<td>" + item.이메일 + "</td>";
                     txt += "</tr>";
                 });

                 $('.list-box  tbody').html( txt );  //목록

/* 
                 result.map(function(item, index){
                    console.log(a, b);
                 });

*/
                 

              },
              error: function(err){
                  console.log('AJAX 오류! ', err);
              }
            });

        }
      });




    }    
    footer(){

      const goTop = $('.go-top');
            goTop.on({
              click: function(){
                  $('html, body').stop().animate({scrollTop:0}, 600);
              }
            });

    }
  }

  const newAgency =  new Agency();
  newAgency.init();



})(jQuery, window, document);