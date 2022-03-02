<?php
  header('Content-Type: text/html; charset=utf-8');
  $servername = 'localhost'; 
  $username   = 'moonjong2';
  $password   = 'anstjswhd0105';
  $dbname     = 'moonjong2';
  
  $conn = mysqli_connect($servername, $username, $password, $dbname);
  mysqli_set_charset($conn, 'utf8');

  if( !$conn ){
      echo '데이터베이스 접속 실패! 아래의 데이터베이스 접속정보를 확인하세요!';
      echo '서버이름:'.$servername.' 사용자:'.$username.' 비밀번호:'. $password.' 데이터베이스이름:'.$dbname;
      die('데이터베이스 접속 실패! 데이터베이스 접속정보를 확인하세요!');
  }

?>