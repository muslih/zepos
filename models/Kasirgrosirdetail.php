<?php 
class Kasirgrosirdetail extends Activerecord\Model{

  public static $table_name = 'kasir_grosir_detail';

  static $belongs_to = array(
     array('barang'),
     array('kasirgrosir'),
     array('stok')
  );   

  // public function before_create(){
  //   $this->dibuat = Date('d-m-Y H:i:s', strtotime('now'));
  // } 



}
