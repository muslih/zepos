<?php 
class Kasirgrosirbayar extends Activerecord\Model{

  public static $table_name = 'kasir_grosir_bayar';

  static $belongs_to = array(
     array('kasirgrosir'),
     array('user')
  );   

  public function before_create(){
    $this->tanggal_bayar = Date('d-m-Y H:i:s', strtotime('now'));
  } 

}
