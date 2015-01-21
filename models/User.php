<?php 
class User extends Activerecord\Model{

  public static $table_name = 'user';
  
  static $belongs_to = array(
	array('toko')
  );

  static $has_many = array(
     array('kasirretail')
  );  

  // public function before_create(){
  //   $this->dibuat = Date('d-m-Y H:i:s', strtotime('now'));
  // } 

}
