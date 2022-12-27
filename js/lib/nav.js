$(function(){
  //header
  const select_language = $('.select_language');
  const search_container = $('.search_container');
  const h_open_Btn = $('.h_open_search');
  const h_close = $('.sch_close');

  //nav
  const gnb = $('.gnb');
  const gnb_menu_list = $('.nav_d1.d1_over');
  const sub_menu = $('.sub_menu');
  const sub_menu_list = $('.sub_menu>ul>li');

  //모바일 메뉴 mob_nav1
  const mob_nab_btn = $('.mob_nab_btn');
  const mob_nav = $('.mob_nav');
  const m_nav_bg = $('.m_nav_bg');
  const mob_btn = $('.m_nav_list_tit');
  const m_sub_menu = $('.m_nav_list li>dl');

  //모바일_검색창
  const main = $('#main')

  mob_nab_btn.click(function(){
    mob_nav.addClass('left_move');
    m_nav_bg.delay(500).fadeIn();
  })

  m_nav_bg.click(function(){
    $(this).fadeOut(0);
    mob_nav.removeClass('left_move')
  })

  mob_btn.click(function(){
    const str = $(this).attr('class');
    const idx = $('.m_nav_list_tit.On');
    console.log(str);

    idx.next(m_sub_menu).slideToggle()
    idx.toggleClass('On');

    if(str=="m_nav_list_tit On"){

    }
    else{
      $(this).toggleClass('On');
      $(this).next(m_sub_menu).slideToggle();
    }  
  })


  //메뉴_서브메뉴창
  gnb_menu_list.mouseenter(function(){
    const idx = $(this).index();
    console.log(idx);

    sub_menu_list.removeClass('Over');
    sub_menu.addClass('On');
    sub_menu_list.eq(idx).addClass('Over');
    gnb.addClass('Active')
  })

  sub_menu_list.mouseleave(function(){
    setTimeout(pc_menu_reset,400);
  })

  function pc_menu_reset(){
    sub_menu_list.removeClass('Over');
    sub_menu.removeClass('On');
    gnb.removeClass('Active');
  }

  // 언어선택
  select_language.click(function(){
    $(this).toggleClass('show')
  })
  
  // 검색창
  h_open_Btn.click(function(){
    search_container.addClass('show');
    main.addClass('On');
  })
  h_close.click(function(){
    search_container.removeClass('show');
  })
  main.click(function(){
    $(this).removeClass('On');
    search_container.removeClass('show');
  })

})