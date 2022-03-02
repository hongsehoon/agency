<?PHP
 
 include_once('/header.php');

  $name = $_POST['name'];
  $mail = $_POST['mail'];

  $sql = "insert into member_mail (name, mail)  values ('$name', '$mail')";
  mysqli_multi_query($conn, $sql);

  // insert(저장)
  // select(검색)
  // update(수정)
  // delete(삭제)


  $sql = "select  *  from  member_mail";
  $result = mysqli_query($conn, $sql);

  $arr = array(); 


  if( mysqli_num_rows($result) > 0 ){  //데이터가 들어있다면
      while( $row = mysqli_fetch_array($result) ){
          array_push( $arr,  array(
              "이름"   => $row['name'],
              "이메일" => $row['mail']
          ));
      }
  }

  $json = json_encode($arr, JSON_UNESCAPED_UNICODE);
          file_put_contents('./data/member_mail.json', $json);


  include_once('./footer.php');





  mysqli_close($conn);
?>