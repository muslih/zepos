<?php 
class Stok extends Activerecord\Model{

  public static $table_name = 'stok';

  static $has_many = array(
     array('kasir_grosir_detail'),
     array('kasir_grosir_bayar')
  ); 

  static $belongs_to = array(
     array('barang'),
     
  );  
  // public function before_create(){
  //   $this->dibuat = Date('d-m-Y H:i:s', strtotime('now'));
  // } 

}
