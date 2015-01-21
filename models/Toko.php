<?php 
class Toko extends Activerecord\Model{

  public static $table_name = 'toko';

  static $has_many = array(
     array('user'),
     array('kasirretail'),
     array('kasirgrosir')
  );  

  // public function before_create(){
  //   $this->dibuat = Date('d-m-Y H:i:s', strtotime('now'));
  // } 

}
