<?php 
class Pelanggan extends Activerecord\Model{

  public static $table_name = 'pelanggan';

  static $has_many = array(
     array('kasirgrosir')
  );  

  // public function before_create(){
  //   $this->dibuat = Date('d-m-Y H:i:s', strtotime('now'));
  // } 

}
