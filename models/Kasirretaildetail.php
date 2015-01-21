<?php 
class Kasirretaildetail extends Activerecord\Model{

  public static $table_name = 'kasir_retail_detail';

  static $belongs_to = array(
     array('barang'),
     array('kasir_retail'),
     array('stok')
  );   

  // public function before_create(){
  //   $this->dibuat = Date('d-m-Y H:i:s', strtotime('now'));
  // } 

}
